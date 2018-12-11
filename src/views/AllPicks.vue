<template>
  <div class="container">
    <h1>All Picks</h1>
    <div v-for="allpick in allPicks">
      <h2>{{ allpick.users_pick }}</h2>
      <p> {{ allpick.confidence_point }}</p>
      <p>{{ allpick.user_name }}</p>
      <p>{{ allpick.game_date }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      allPicks: []
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/allpicks").then(
      function(response) {
        console.log(response.data);
        this.allPicks = response.data["user_games"];
      }.bind(this)
    );
  },
  methods: {}
};
</script>