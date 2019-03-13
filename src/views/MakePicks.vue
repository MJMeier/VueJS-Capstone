<template>
  <div class="home">
    <div class="thumb">
      <img src="extra-images/basketball.jpg" alt="" height="450px"  style="object-fit: cover;"/>

      <div class="container">
        <div class="banner_caption text-center">
          <h1>It's Game Time !</h1>
          <p>Choose Wisely :)</p>
        </div>
      </div>
    </div>

    <h1 align="center">{{ message }}</h1>
    <div class="kf_result_thumb">
      <form v-on:submit.prevent="savePicks();">
        <!-- <draggable v-model="games" @start="drag=true" @end="drag=false">          -->
        <draggable v-model="games" @end="finishDrag()">         
          <div v-for="game in games" class="row">
              <span v-on:click="game.game_id = game.id;"></span>
              <div class="col-md-2"><input type="number" v-model="game.confidence_point" /></div>
              <div class="col-md-5">
                <div class="figure pull-left">
                  <h4 v-bind:class="{highlight: game.users_pick === game.home_nickname}" v-on:click="game.users_pick = game.home_nickname;">{{ game.home_nickname }}</h4>
                </div>
              </div>
              <div class="col-md-5">
                <div class="figure pull-right">
                  <h4 v-bind:class="{highlight: game.users_pick === game.visitor_nickname}" v-on:click="game.users_pick = game.visitor_nickname;">{{ game.visitor_nickname }}</h4>
                </div>
              </div>
              <p>You chose {{ game.users_pick }}</p>
          </div>
        </draggable>
        <input type="submit" value="Save picks" />
      </form>
    </div>
  </div>
</template>

<style>
.highlight {
  background-color: lime;
}
</style>

<script>
var axios = require('axios');
var draggable = require('vuedraggable');

export default {
  components: {
    draggable,
  },
  data: function() {
    return {
      message: 'Make Picks',
      games: [],
    };
  },
  created: function() {
    axios.get('https://nba-confidence-pick-em-league.herokuapp.com/api/games?tomorrow=false').then(
      function(response) {
        console.log(response.data);
        this.games = response.data;
        var point = this.games.length;
        this.games.forEach(function(game) {
          game.confidence_point = point;
          point -= 1;
        });
      }.bind(this)
    );
  },
  methods: {
    finishDrag: function() {
      var cp = this.games.length;
      this.games.forEach(game => {
        game.confidence_point = cp;
        cp--;
      });
    },
    savePicks: function() {
      console.log('savePicks');
      this.games.forEach(game => {
        console.log('Pick info:', game.id, game.confidence_point, game.users_pick);
        var params = {
          game_id: game.id,
          confidence_point: game.confidence_point,
          users_pick: game.users_pick,
          game_date: game.date,
        };
        axios
          .post('https://nba-confidence-pick-em-league.herokuapp.com/api/user_games', params)
          .then(
            function(response) {
              console.log(response);
              this.user_games.push(response.data);
            }.bind(this)
          )
          .catch(
            function(error) {
              console.log(error.response);
            }.bind(this)
          );
      });
    },
    toggleHighlight: function() {
      event.target.classList.toggle('highlight');
    },
  },
  computed: {},
};
</script>
