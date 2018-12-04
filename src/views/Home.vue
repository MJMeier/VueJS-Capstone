<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <p>Home Team</p>
          <div v-for="game in games">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1"> Make Pick </label>
            </div>

            <h2>{{ game.home_team }}</h2>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Example select</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <p>score {{ game.home_score }}</p>
          </div>
        </div>
        <div class="col-sm">
          <p>Away Team</p>
          <div v-for="game in games">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
              <label class="form-check-label" for="defaultCheck1"> Make Pick </label>
            </div>
            <h2>{{ game.away_team }}</h2>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Example select</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <p>score {{ game.away_score }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

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
      }.bind(this)
    );
  },
  methods: {},
  computed: {}
};
</script>
