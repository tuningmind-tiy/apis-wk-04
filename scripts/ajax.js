window.onload = function stuff() {

let buttonname
const url = `http://007api.co/api/gadgets/`
const alice1 = "Alice was beginning to get very tired of sitting by her sister on the bank and of having nothing to do; once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, 'and what is theuse of a book,' thought Alice, 'without pictures or conversation?' So she was considering in her own mind (as well as she could, for the hot day made her feel very sleepy and stupid), whether the pleasure of making a daisy-chain would be worth the trouble of getting up and picking the daisies, when suddenly a White Rabbit with pink eyes ran close by her."
const alice2 = "There was nothing so very remarkable in that; nor did Alice think it so very much out of the way to hear the Rabbit say to itself, 'Oh dear! Oh dear! I shall be late!' (when she thought it over afterwards, it occurred to her that she ought to have wondered at this, but at the time it all seemed quite natural); but when the Rabbit actually took a watch out of its waistcoat-pocket and looked at it and then hurried on, Alice started to her feet, for it flashed across her mind that she had never before seen a rabbit with either a waistcoat-pocket or a watch to take out of it, and burning with curiosity, she ran across the field after it, and fortunately was just in time to see it pop down a large rabbit-hole under the hedge."


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
      $('button').click( function (e) {
        buttonname = $(this).attr("class")
        if (buttonname === 'button0') { $('#descriptions').text(alice1) }
        else if (buttonname === 'button1') { $('#descriptions').text(alice2) } 

      })
    })

}

