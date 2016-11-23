
/*

Parameters required for request
- oauth_consumer_key
- oauth_token
- oauth_signature_method which is hmac-sha1
- oauth_signature
- oauth_timestamp	Timestamp for the request in seconds since the Unix epoch.
- oauth_nonce	 A unique string randomly generated per request.
*/




function nonce_generate() {
  return (Math.floor(Math.random() * 1e12).toString());
}

var yelp_url = 'https://api.yelp.com/v2/' + 'search/';

    var parameters = {
      oauth_consumer_key: 'XXXXX', //consumer key
      oauth_token: 'XXXXX', // Token
      oauth_nonce: nonce_generate(),
      oauth_timestamp: Math.floor(Date.now()/1000),
      oauth_signature_method: 'HMAC-SHA1',
      oauth_version : '1.0',
      callback: 'cb',
      term:  'tacos',
      location: 'Wheeling,Il'          // This is crucial to include for jsonp implementation in AJAX or else the oauth-signature will be wrong.
    };
                                                                                        //Consumer Secret         //Token Secret
    var encodedSignature = oauthSignature.generate('GET',yelp_url, parameters, 'XXXXX', 'XXXXX');
    parameters.oauth_signature = encodedSignature;

    var settings = {
      url: yelp_url,
      data: parameters,
      cache: true,                // This is crucial to include as well to prevent jQuery from adding on a cache-buster parameter "_=23489489749837", invalidating our oauth-signature
      dataType: 'jsonp',
      success: function(results) {
        console.log(results);
      },
      error: function() {
        // Do stuff on fail
      }
    };

    // Send AJAX query via jQuery library.
    $.ajax(settings);
