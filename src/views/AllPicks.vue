<template>
  <div class="home">
    <div class="thumb">
      <img src="extra-images/airbud.png" alt="" height="450px"/>
    </div>
    <h1 align="center">All User's Picks</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">User Name</th>
          <th scope="col">User Picks</th>
          <th scope="col">Confidence Points</th>
          <th scope="col">Game Date</th>
        </tr>
      </thead>
        <tbody v-for="allpick in allPicks">
          <tr>
            <th scope="row">{{ allpick.user_name }}</th>
            <td>{{ allpick.users_pick }}</td>
            <td> {{ allpick.confidence_point }}</td>
            <td>{{ allpick.game_date }}</td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data: function() {
    return {
      allPicks: [],
    };
  },
  created: function() {
    axios.get('https://git.heroku.com/nba-confidence-pick-em-league.git/api/allpicks').then(
      function(response) {
        console.log(response.data);
        this.allPicks = response.data['user_games'];
      }.bind(this)
    );
  },
  methods: {},
};
</script>
