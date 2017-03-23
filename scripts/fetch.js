window.onload = function () {
  const dataSrc = './scripts/data.json';

  fetch(dataSrc, {method: 'get', })
  // this returns the promise
  .then(function(response) { // this is a promise ; is a promise a fancy callback?
  console.log('response', response);
  return response.json();
  }).then(function(data) {
  console.log('data', data);
  }).catch(function(err){
  console.log('err', err);
  })

  console.log( 'async?' )
}
// third way to access api: fetch, which is a 
// promise based way
// fetch isn't always supported
// api way is more consistently supported
// ajax is one way

  
