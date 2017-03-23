window.onload = function() {
  const dataSrc = './scripts/data.json';

  $.getJSON(dataSrc, function(data) {
    console.log( data );
  })
  console.log( 'async?' );
}
// if you use getJSON it assumes async = true
// it's easier but it makes lots of assumptions
// if any of the assumptions are not true, it breaks
//
// if you can't use the getJSON you can use ajax
