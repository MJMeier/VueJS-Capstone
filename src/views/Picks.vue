<template>
  <div class="container">
    <h1>My Picks</h1>
    <div v-for="pick in picks">
      <h2>{{ pick.user_pick }}</h2>
    </div>
    {{ picks }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      picks: []
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/user_games").then(
      function(response) {
        console.log(response.data);
        this.picks = response.data["user_games"];
      }.bind(this)
    );
  },
  methods: {}
};
</script>
