<template>
  <div class="container">
        <div class="thumb">
  <img src="extra-images/spalding.png" alt="" height="200px"/>
  <div class="container">
    <div class="banner_caption text-center">
      <span>Go Hard in the Paint</span>
      <h1>NBA Confidence Pick 'Em League</h1>
    </div>
  </div>
</div>
    <h1>My Picks</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">You Chose</th>
          <th scope="col">Confidence Pick</th>
        </tr>
      </thead>
      <tbody v-for="pick in picks">
        <tr>
          <th scope="row">{{ pick.users_pick }}</th>
          <td>{{ pick.confidence_point }}</td>
        </tr>
      </tbody>
    </table>
 <!--    <div v-for="pick in picks">
      <h2>{{ pick.users_pick }}</h2>
      <p>confidence point - {{ pick.confidence_point }}</p>
    </div> -->
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
