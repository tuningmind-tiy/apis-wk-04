window.onload = function stuff() {

const url = `http://007api.co/api/gadgets/`

const addButtons= function (sometext) {
  const gadgetname = $("<button></button>").text(sometext)
  $("body").append(gadgetname)
}

  $.ajax({
    url: url
  }).done(function(data) {
    console.log('The returned object is:', data)

      const results = data.results
      const resultsLength = results.length;
      const gadgets = [];

      for (let i = 0; i < resultsLength; i++) {
        gadgets.push(results[i])
      }
      console.log('the gadgets are:', gadgets)
      
      for (let i = 0; i < gadgets.length; i++) {
        const p = document.createElement('p')
        addButtons(gadgets[i].name)
        //("gadget description: ", gadgets[i].description)
      }
    })

  }

