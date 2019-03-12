<template>
  <div class="home">
        <div class="thumb">
  <img src="extra-images/net.png" alt="" height="450px" style="object-fit: cover;" />
  <div class="container">
    <div class="banner_caption text-center">
    </div>
  </div>
</div>
    <h1 align="center">My Picks</h1>
    <table class="table" align="center" style="width: 750px">
      <thead>
        <tr>
          <th scope="col">You Chose</th>
          <th scope="col">Confidence Point</th>
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
import axios from 'axios';

export default {
  data: function() {
    return {
      picks: [],
    };
  },
  created: function() {
    axios.get('https://git.heroku.com/nba-confidence-pick-em-league.git/api/user_games').then(
      function(response) {
        console.log(response.data);
        this.picks = response.data['user_games'];
      }.bind(this)
    );
  },
  methods: {},
};
</script>
