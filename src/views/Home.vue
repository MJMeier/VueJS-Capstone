<template>
  <div class="home">
    <div class="kode_banner_1">
      <div class="main_banner">
        <div>
          <!-- Banner Thumb START -->
          <div class="thumb">
            <img src="extra-images/banner1.jpg" alt="" />
            <div class="container">
              <div class="banner_caption text-center">
                <span>Season Opening !!</span>
                <h1>Giant Sharks <b>vs</b> Flying Eagles</h1>
                <p>Sep 09, Aguana Stadium North London , UK</p>
                <a href="#" class="btn-1">Buy Tickets Now</a>
              </div>
            </div>
          </div>
          <!-- Banner Thumb End -->
        </div>
        <div>
          <!-- Banner Thumb START -->
          <div class="thumb">
            <img src="extra-images/banner2.jpg" alt="" />
            <div class="container">
              <div class="banner_caption text-left">
                <span>Season Opening !!</span>
                <h1>Giant Sharks <b>vs</b> Flying Eagles</h1>
                <p>Sep 09, Aguana Stadium North London , UK</p>
                <a href="#" class="btn-1">Buy Tickets Now</a>
              </div>
            </div>
          </div>
          <!-- Banner Thumb End -->
        </div>
        <div>
          <!-- Banner Thumb START -->
          <div class="thumb">
            <img src="extra-images/banner3.jpg" alt="" />
            <div class="container">
              <div class="banner_caption text-right">
                <span>Season Opening !!</span>
                <h1>Giant Sharks <b>vs</b> Flying Eagles</h1>
                <p>Sep 09, Aguana Stadium North London , UK</p>
                <a href="#" class="btn-1">Buy Tickets Now</a>
              </div>
            </div>
          </div>
          <!-- Banner Thumb End -->
        </div>
      </div>
    </div>

    <!-- <div class="kode_content_wrap">
        <div class="result_slide_wrap">
            <div class="result_slider">
                <div v-for="game in games">
                    <div class="kf_result_thumb">
                      <span>Sep 1, 2016 <em>2:15 pm</em></span>
                      <div class="kf_result">
                            <div class="figure pull-left">
                                <figure >
                                    <img src="extra-images/flag1.png" alt="">
                                </figure>
                                <a href="#">{{ game.home_nickname }}</a>
                            </div>
                            <span>vs</span>
                            <div class="figure pull-right">
                                <figure >
                                    <img src="extra-images/flag2.png" alt="">
                                </figure>
                                <a href="#">{{ game.visitor_nickname }}</a>
                            </div>
                      </div>
                      <a href="#">Arizona Ground</a>
                    </div>    
                </div>
            </div>
        </div>
    </div> -->

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
          users_pick: game.users_pick,
          game_date: game.date
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
