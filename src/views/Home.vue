<template>
  <div class="home">
    <div class="thumb">
  <img src="extra-images/bballcourt.png" alt="" height="450px"/>
  <div class="container">
    <div class="banner_caption text-center">
      <span>Go Hard in the Paint</span>
      <h1>NBA Confidence Pick 'Em League</h1>
    </div>
  </div>
</div>
    <h1 align="center">{{ message }}</h1>
    <!-- <span id="datetime"></span> -->
    <div v-for="game in games" class="kf_result_thumb">
      <!-- <p>{{ game }}</p> -->
      <span>{{ game.period_status }} <em>{{ game.game_clock }}</em></span>
      <div class="kf_result">
        <div class="figure pull-left">
          <p>Home Team</p>
          <figure >
            <img :src="['extra-images/' + game.home_nickname + '.png']" alt="">
          </figure>
          <a href="#">{{ game.home_nickname }}  {{ game.home_score }}</a>
        </div>
        <span>vs</span>
        <div class="figure pull-right">
          <p>Away Team</p>
          <figure >
            <img :src="['extra-images/' + game.visitor_nickname + '.png']" alt="">
          </figure>
          <a href="#">{{ game.visitor_nickname }}  {{ game.visitor_score }}</a>
        </div>
      </div>
    </div>

    <!-- set progressbar -->
    <vue-progress-bar></vue-progress-bar>
    <aside class="col-md-4">
          <!--Widget Ranking Start-->
          <div class="widget widget_ranking">
              <!--Heading 1 Start-->
              <h6 class="kf_hd1">
                  <span>Leaderboard</span>
              </h6>
              <!--Heading 1 END-->
              <div class="kf_border">
                  <!--Table Wrap Start-->
                  <ul class="kf_table">
                      <li>
                          <div class="table_no">
                              <span>1</span>
                          </div>
                          <div class="team_logo">
                              <a href="#">Peter Jang</a>
                          </div>
                          <div class="team_point">
                              <span>135</span>
                          </div>
                      </li>
                      <li>
                          <div class="table_no">
                              <span>2</span>
                          </div>
                          <div class="team_logo">
                              <a href="#">Mike Meier</a>
                          </div>
                          <div class="team_point">
                              <span>119</span>
                          </div>
                      </li>
                      <li>
                          <div class="table_no">
                              <span>3</span>
                          </div>
                          <div class="team_logo">
                              <a href="#">Jim Smith</a>
                          </div>
                          <div class="team_point">
                              <span>97</span>
                          </div>
                      </li>
                      <li>
                          <div class="table_no">
                              <span>4</span>
                          </div>
                          <div class="team_logo">
                              <a href="#">Bryan Hampton</a>
                          </div>
                          <div class="team_point">
                              <span>88</span>
                          </div>
                      </li>
                      <li>
                          <div class="table_no">
                              <span>5</span>
                          </div>
                          <div class="team_logo">
                              <a href="#">Derek Johnson</a>
                          </div>
                          <div class="team_point">
                              <span>75</span>
                          </div>
                      </li>
                  </ul>
                  <!--Table Wrap End-->
              </div>
          </div>
      </aside>
    </div>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

// var dt = new Date();
// document.getElementById("datetime").innerHTML = dt.toLocaleString();

export default {
  data: function() {
    return {
      message: 'Live Scoreboard',
      games: [],
      users: [],
    };
  },
  created: function() {
    axios.get('https://git.heroku.com/nba-confidence-pick-em-league.git/api/games').then(
      function(response) {
        console.log(response.data);
        this.games = response.data;
      }.bind(this)
    );
    axios.get('https://git.heroku.com/nba-confidence-pick-em-league.git/api/users').then(
      function(response) {
        console.log(response.data);
        this.users = response.data;
      }.bind(this)
    );

    this.updateGames();

    var self = this;
    setInterval(function() {
      self.start();
    }, 10000);
  },
  mounted() {},
  methods: {
    updateGames: function() {
      var self = this;
      setInterval(function() {
        axios.get('https://git.heroku.com/nba-confidence-pick-em-league.git/api/games').then(function(response) {
          console.log(response.data);
          self.games = response.data;
        });
      }, 10000);
    },
    start() {
      this.$Progress.start();
    },
    set(num) {
      this.$Progress.set(num);
    },
    increase(num) {
      this.$Progress.increase(num);
    },
    decrease(num) {
      this.$Progress.decrease(num);
    },
    finish() {
      this.$Progress.finish();
    },
    fail() {
      this.$Progress.fail();
    },
    test() {
      this.$Progress.start();

      this.$http
        .jsonp(
          'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=7waqfqbprs7pajbz28mqf6vz'
        )
        .then(
          response => {
            this.$Progress.finish();
          },
          response => {
            this.$Progress.fail();
          }
        );
    },
  },
  computed: {},
};
</script>
