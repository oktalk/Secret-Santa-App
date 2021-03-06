  // Get a reference to the root of the chat data.
  var messagesRef = new Firebase('https://itracebase.firebaseio.com/chat');

  // When the user presses enter on the message input, write the message to firebase.
  $('#fSubmit').on("click",function (e) {
    var name = $('#nameInput').val();
    var gift1 = $('#giftInput1').val();
    var gift2 = $('#giftInput2').val();
    var gift3 = $('#giftInput3').val();
    messagesRef.push({name:name, gift1:gift1, gift2:gift2, gift3:gift3});
  });

  // Add a callback that is triggered for each chat message.
  messagesRef.limit(10).on('child_added', function (snapshot) {
    var message = snapshot.val();
    $('<div/>').text(message.gift1 +", "+message.gift2 +", "+message.gift3).prepend($('<em/>')
      .text(message.name+': ')).appendTo($('#messagesDiv'));
    $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
  });

/*
import json

from firebase import firebase
from firebase import jsonutil

firebase = firebase.FirebaseApplication('https://xxx.firebaseio.com', authentication=None)

# print firebase.get('/users', None, {'print': 'pretty'})
data = {'name': 'John Doe', 'text': 'Jane Doe'}
result = firebase.post('/chat', data)
*/