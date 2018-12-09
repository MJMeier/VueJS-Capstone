<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div class="container">
      <form v-on:submit.prevent="savePicks();">
        <div v-for="game in games" class="row">
          <span v-on:click="game.game_id = game.id;"></span>
          <div class="col-md-2"><input type="number" v-model="game.confidence_point" /></div>
          <div class="col-md-5">
            <h4 v-on:click="game.users_pick = game.home_nickname;">{{ game.home_nickname }}</h4>
          </div>
          <div class="col-md-5">
            <h4 v-on:click="game.users_pick = game.visitor_nickname;">{{ game.visitor_nickname }}</h4>
          </div>
          <p>You chose {{ game.users_pick }}</p>
        </div>
        <input type="submit" value="Save picks" />
      </form>
    </div>
  </div>
</template>

<style>
.chosen {
  color: green;
}
</style>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      message: "NBA Confidence Pick'em League",
      games: []
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/games").then(
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
    savePicks: function() {
      console.log("savePicks");
      this.games.forEach(game => {
        console.log("Pick info:", game.id, game.confidence_point, game.users_pick);
        var params = {
          game_id: game.id,
          confidence_point: game.confidence_point,
          users_pick: game.users_pick
        };
        axios
          .post("http://localhost:3000/api/user_games", params)
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
    }
  },
  computed: {}
};
</script>
