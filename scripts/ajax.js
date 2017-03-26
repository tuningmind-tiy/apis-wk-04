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
      const resultsLength = results.length;
      const gadgets = [];
      const descriptions = [];

      for (let i = 0; i < resultsLength; i++) {
        let gadgetname = $("<button></button>").text(results[i].name)
        $("#buttons").append(gadgetname)
      }
      $('button').click( function () {
        console.log("inside handleClick")
      })
    })

}

