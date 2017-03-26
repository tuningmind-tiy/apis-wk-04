window.onload = function stuff() {

const url = `http://007api.co/api/gadgets/`
const alice = "Alice was beginning to get very tired of sitting by her sister on the bank and of having nothing to do; once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, 'and what is theuse of a book,' thought Alice, 'without pictures or conversation?' So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her."


  $.ajax({
    url: url
  }).done(function(data) {
      const results = data.results

      for (let i = 0; i < results.length; i++) {
        let gadgetname = $("<button></button>").text(results[i].name)
        let className = "button" + i
        gadgetname.addClass(className)
        $("#buttons").append(gadgetname)
      }
      $('button').click( function () {
        $('#descriptions').text(alice)

      })
    })

}

