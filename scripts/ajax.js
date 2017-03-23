window.onload = function stuff() {

  //const url = `http://007api.co/api/gadgets/`

  const url = `http://api.icndb.com/`

  $.ajax({
    url: url
  }).done(function(data) {
    console.log('The returned object is:', data)

      const results = data.results
      const resultsLength = results.length;
      const gadgets = [];

      for (let i = 0; i < resultsLength; i++) {
        gadgets.push(results[i].name)
      }
      console.log('the gadgets are:', gadgets)

    })
  }

