window.onload = function stuff() {

let buttonname = ''
let index = 0
const url = `http://007api.co/api/gadgets/`

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
        // get classname from clicked button
        buttonname = $(this).attr("class")
        // get button number 
        index = Number(buttonname[6])
        console.log("index: ", index)
        // get description from results for this button
        $('#descriptions').text(results[index].description)
        // increase padding to match 
        let padding = 80 * (index + 1)
        // add padding-top to appropriate button
        $('#descriptions').css('padding-top', (padding + 'px'))
      })
    })
}

