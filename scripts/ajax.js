window.onload = function stuff() {

const url = `http://007api.co/api/gadgets/`

const addButton = function (sometext) {
  const gadgetname = $("<button></button>").text(sometext)
  $("#buttons").append(gadgetname)
}
let addDescription = function (sometext) {
  const description = $("<div></div>").text(sometext)
  $("#description").append(description)
}
// let handleClick = function () {
//   button.textContent = gadgets[button.name].description
// }
// $('#buttons').on('click', 'button', handleClick);

  $.ajax({
    url: url
  }).done(function(data) {
      const results = data.results
      console.log("results: ", results)
      const resultsLength = results.length;
      const gadgets = [];
      const descriptions = [];

      for (let i = 0; i < resultsLength; i++) {
        gadgets.push(results[i].name)
        const p = document.createElement('p')
        addButton(results[i].name)
        descriptions.push(results[i].description)
      }
      
    })

}

