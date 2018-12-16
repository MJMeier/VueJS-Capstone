<template>
  <div id="app">
    <!--
      <div id="nav">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" <router-link to="/">Home</router-link>  |
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" <router-link to="/signup">Signup</router-link> | <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item"><a class="nav-link" <router-link to="/login">Login</router-link> | </a></li>
              <li class="nav-item"><a class="nav-link" <router-link to="/logout">Logout</router-link> | </a></li>
              <li class="nav-item"><a class="nav-link" <router-link to="/picks">View My Picks</router-link></a></li>
            </ul>
          </div>
        </nav>
      </div>
    -->
    <header class="kode_header_2">
      <!-- Header 2 Top Bar Start -->
      <div class="kf_top_bar">
        <div class="container">
          <div class="pull-left">
          </div>
          <div class="kf_right_dec">
            <ul class="kf_topdec">
              <li>
              </li>
            </ul>
            <ul class="kf_user">
              <li>
                <li class="nav-item active">

                <a class="nav-link" <router-link to="/signup">Signup</router-link>  <span class="sr-only">(current)</span></a>
              </li>

              <li class="nav-item"><a class="nav-link" <router-link to="/login">Login</router-link>  </a></li>

              <li class="nav-item"><a class="nav-link" <router-link to="/logout">Logout</router-link>  </a></li>

              <li class="nav-item"><a class="nav-link" <router-link to="/home">Home</router-link>  </a></li>

              <li class="nav-item"><a class="nav-link" <router-link to="/makepicks">Make Picks</router-link>  </a></li>

              <li class="nav-item"><a class="nav-link" <router-link to="/picks">View My Picks</router-link></a></li>

              <li class="nav-item"><a class="nav-link" <router-link to="/allpicks">View All Picks</router-link></a></li>


            </ul>
            <a href="#" data-toggle="modal" data-target="#search" class="kode_search"><i class="fa fa-search"></i></a>
          </div>
        </div>
      </div>
      <!-- Header 2 Top Bar End -->
      <div class="container">
        <!-- Logo Bar Start -->
        <div class="kode_logo_bar">
          <!-- Logo Start -->
          <div class="logo">
            <a href="#"> <img src="images/logo.png" alt="" /> </a>
          </div>
          <!-- Logo Start -->
          <!-- Navigation Wrap Start -->
          <div class="kode_navigation">
            <!-- Navigation Start -->
            <!-- DL Menu Start -->
            <!-- DL Menu END -->
            <!-- Navigation End -->
          </div>
          <!-- Navigation Wrap End -->
        </div>
        <!-- Logo Bar End -->
      </div>
    </header>
    <router-view />

    <beautiful-chat
      :participants="participants"
      :titleImageUrl="titleImageUrl"
      :onMessageWasSent="onMessageWasSent"
      :messageList="messageList"
      :newMessagesCount="newMessagesCount"
      :isOpen="isChatOpen"
      :close="closeChat"
      :open="openChat"
      :showEmoji="true"
      :showFile="true"
      :showTypingIndicator="showTypingIndicator"
      :colors="colors"
      :alwaysScrollToBottom="alwaysScrollToBottom"
      :messageStyling="messageStyling" />

    <!-- Copy Right Wrap Start -->
    <div class="copy_right3">
      <div class="container">
        <p>2018 @ NBA Confidence Pick 'Em League' <a href="#">KODEFOREST</a></p>
        <ul class="kf_social3">
          <li>
            <a href="#"><i class="fa fa-facebook"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-rss"></i></a>
          </li>
        </ul>
      </div>
    </div>
    <!-- Copy Right Wrap End -->
    <!-- Register Pop Up Wrap Start -->
    <div class="modal fade" id="search" tabindex="-1" role="dialog" aria-labelledby="search">
      <div class="modal-dialog" role="document">
        <div class="input_dec">
          <input type="text" placeholder="search......" />
          <button class="btn_icon"><i class="fa fa-search"></i></button>
        </div>
      </div>
    </div>
    <!-- Register Pop Up Wrap End -->
  </div>
</template>

<style>
background-image: url("http://localhost:8080/images/court.png");
</style>

<script>
var axios = require("axios");
export default {
  name: "app",
  data() {
    return {
      participants: [], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl: "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png",
      messageList: [], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: false, // to determine whether the chat window should be open or closed
      showTypingIndicator: "", // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: "#4e8cff",
          text: "#ffffff"
        },
        launcher: {
          bg: "#4e8cff"
        },
        messageList: {
          bg: "#ffffff"
        },
        sentMessage: {
          bg: "#4e8cff",
          text: "#ffffff"
        },
        receivedMessage: {
          bg: "#eaeaea",
          text: "#222222"
        },
        userInput: {
          bg: "#f4f7f9",
          text: "#565867"
        }
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: false, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      messageStyling: true // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/users").then(response => {
      this.participants = response.data;
    });
    axios.get("http://localhost:3000/api/messages").then(response => {
      this.messageList = response.data;
    });
    // this.participants = [
    //   {
    //     id: "user1",
    //     name: "Matteo",
    //     imageUrl: "https://avatars3.githubusercontent.com/u/1915989?s=230&v=4"
    //   },
    //   {
    //     id: "user2",
    //     name: "Support",
    //     imageUrl: "https://avatars3.githubusercontent.com/u/37018832?s=200&v=4"
    //   }
    // ];
    // this.messageList = [
    //   { type: "text", author: `me`, data: { text: `Say yes!` } },
    //   { type: "text", author: `user1`, data: { text: `No.` } }
    // ];
  },
  methods: {
    sendMessage(text) {
      if (text.length > 0) {
        this.newMessagesCount = this.isChatOpen ? this.newMessagesCount : this.newMessagesCount + 1;
        this.onMessageWasSent({ author: "support", type: "text", data: { text } });
      }
    },
    onMessageWasSent(message) {
      // called when the user sends a message
      this.messageList = [...this.messageList, message];
      var params = { message: message.data.text };
      axios.post("http://localhost:3000/api/messages", params).then(response => {
        console.log(response);
        this.messageList.push(response.data.data.text);
      });
      console.log("onMessageWasSent...", params);
    },
    openChat() {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true;
      this.newMessagesCount = 0;
    },
    closeChat() {
      // called when the user clicks on the botton to close the chat

      this.isChatOpen = false;
    }
  }
};
</script>
