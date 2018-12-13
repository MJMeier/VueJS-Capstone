<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="game in games" class="kf_result_thumb">
      <span>Dec 11, 2018 <em>7:15 pm</em></span>
      <div class="kf_result">
        <div class="figure pull-left">
          <p>Home Team</p>
          <figure >
            <!-- <img src="extra-images/flag1.png" alt=""> -->
          </figure>
          <a href="#">{{ game.home_nickname }}  {{ game.home_score }}</a>
        </div>
        <span>vs</span>
        <div class="figure pull-right">
          <p>Away Team</p>
          <figure >
           <!--  <img src="extra-images/flag2.png" alt=""> -->
          </figure>
          <a href="#">{{ game.visitor_nickname }}  {{ game.visitor_score }}</a>
        </div>
      </div>
      <!-- <a href="#">Arizona Ground</a> -->
    </div>
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

</template>

<style>
</style>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      message: "NBA Confidence Pick 'Em",
      games: [],
      users: []
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/games").then(
      function(response) {
        console.log(response.data);
        this.games = response.data;
      }.bind(this)
    );
    axios.get("http://localhost:3000/api/users").then(
      function(response) {
        console.log(response.data);
        this.users = response.data;
      }.bind(this)
    );
  },
  methods: {},
  computed: {}
};
</script>
