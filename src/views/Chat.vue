<template>
  <div class="home">
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
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');
export default {
  name: 'app',
  data() {
    return {
      participants: [], // the list of all the participant of the conversation. `name` is the user name, `id` is used to establish the author of a message, `imageUrl` is supposed to be the user avatar.
      titleImageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
      messageList: [], // the list of the messages to show, can be paginated and adjusted dynamically
      newMessagesCount: 0,
      isChatOpen: false, // to determine whether the chat window should be open or closed
      showTypingIndicator: '', // when set to a value matching the participant.id it shows the typing indicator for the specific user
      colors: {
        header: {
          bg: '#4e8cff',
          text: '#ffffff',
        },
        launcher: {
          bg: '#4e8cff',
        },
        messageList: {
          bg: '#ffffff',
        },
        sentMessage: {
          bg: '#4e8cff',
          text: '#ffffff',
        },
        receivedMessage: {
          bg: '#eaeaea',
          text: '#222222',
        },
        userInput: {
          bg: '#f4f7f9',
          text: '#565867',
        },
      }, // specifies the color scheme for the component
      alwaysScrollToBottom: false, // when set to true always scrolls the chat to the bottom when new events are in (new message, user starts typing...)
      messageStyling: true, // enables *bold* /emph/ _underline_ and such (more info at github.com/mattezza/msgdown)
    };
  },
  created: function() {
    axios.get('https://nba-confidence-pick-em-league.herokuapp.com/api/users').then(response => {
      this.participants = response.data;
    });
    axios.get('https://nba-confidence-pick-em-league.herokuapp.com/api/messages').then(response => {
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
        this.onMessageWasSent({ author: 'support', type: 'text', data: { text } });
      }
    },
    onMessageWasSent(message) {
      // called when the user sends a message
      this.messageList = [...this.messageList, message];
      var params = { message: message.data.text };
      axios.post('https://nba-confidence-pick-em-league.herokuapp.com/api/messages', params).then(response => {
        console.log(response);
        this.messageList.push(response.data.data.text);
      });
      console.log('onMessageWasSent...', params);
    },
    openChat() {
      // called when the user clicks on the fab button to open the chat
      this.isChatOpen = true;
      this.newMessagesCount = 0;
    },
    closeChat() {
      // called when the user clicks on the botton to close the chat

      this.isChatOpen = false;
    },
  },
};
</script>
