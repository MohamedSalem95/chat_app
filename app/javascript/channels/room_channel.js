import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    const div = document.getElementById('message-container')
    const p = `<p> ${data.message} </p> <hr/>`
    div.innerHTML += p
    const input = document.getElementById('my-input')
    input.value = ''
    // Called when there's incoming data on the websocket for this channel
  }
});
