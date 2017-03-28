window.onload = function stuff() {

let buttonname = ''
let index = 0
const url = 'https://007api.co/api/gadgets/'

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
        $('#descriptions').text('')
        // get classname from clicked button
        buttonname = $(this).attr("class")
        // get button number 
        index = Number(buttonname[6])
        // get description from results for this button
        $('#descriptions').text(results[index].description)
      })
    })
}

