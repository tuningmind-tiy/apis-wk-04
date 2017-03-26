window.onload = function stuff() {

const url = `http://007api.co/api/gadgets/`

const addButton = function (sometext, i) {
}
let handleClick = function (sometext) {
  const description = $("<div></div>").text(sometext)
  $("#description").append(description)
}

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
        console.log("inside handleClick")
      })
    })

}

