// AJAX; Asynchronous JavaScript and XML;
// XMLHttprequest; HXR 

window.onload = function () {
  // First, create the object that performs the work..
  const http = new XMLHttpRequest(); // state 0

  // Now give the request object a function 
  // to use when there is an update on the request...
  http.onreadystatechange = function () {
    console.log('onreadystatechange', http);
    // This function may be executed up to 5 times!
    // The "readyState" on the http object tells us
    //  what stage the request is in
    //  0 -  not initialized
    //  1 - set up
    //  2 - sent
    //  3 - in process
    //  4 - complete
     
    if (http.readyState === 4) {
      // Now we know the request is complete
      //
      // Can now also see the response status
      //
      // en.wikipedia.org/wiki/List_of_HTTP_status_codes
      if (http.status > 399) {
        // Request completed, but the server gave us an error.
          // Handle the error!
      }
      else if (http.status > 199 && http.status < 299) {
        // Request completed successfully
        console.log( 'responseText', http.responseText );
        // This is our server response data!
        // Do awesome things with the data!
        console.log( JSON.parse(http.response) );
      }
      else {
        console.log('Things have gone catastrophically wrong')
      }
    }
  };

  const isAsync = true;
  // note the path is relative to the index.html page
  const dataSrc = `./scripts/data.json`
  // const dataSrc = `https://xkcd.com/353/info.0.json`

  // type, url, async(true)/sync(false)
  http.open('GET', dataSrc, isAsync); // state 1
  // we are going to treat this data as json data
  http.overrideMimeType('application/json'); // because of doing it locally; safer to have it in for now
  http.send(null); // state 2
  console.log("my http: ", http);
  console.log('isAsync', isAsync);
}

// on chrome there's a cross-origin error because of running locally
// because of not using a server
// so npm install http-server -g
// then run http-server; control c to stop the server

