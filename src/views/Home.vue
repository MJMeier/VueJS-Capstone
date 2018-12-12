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
      games: []
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/games").then(
      function(response) {
        console.log(response.data);
        this.games = response.data;
      }.bind(this)
    );
  },
  methods: {},
  computed: {}
};
</script>