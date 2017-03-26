window.onload = function stuff() {

let buttonname = ''
let index = 0
let pixels = 1
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
        buttonname = $(this).attr("class")
        index = buttonname[6]        
        $('#descriptions').text(results[index].description)


      })
    })

}

