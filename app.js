
/*
var auth = {

consumerKey: "h7e9cHmibtiOAeUH_GJ1QA",
consumerSecret:"3fH3EJysPQ0Am-C2miz4G_tzirE",
token:"L9HxC4WiIyP28galduczr4O7AC2ocl1j",
tokenSecret:"CVljrJvELrUq087lRW6ah0SiyLI",
url:"https://api.yelp.com/v2/search/"

};

var terms ='tacos';
var near ='Wheeling,Il';
const signatureMethod = "HMAC-SHA1";
const version = "1.0";



This worked on Chrome plugin Postman
                                consumerKey x                              token x
https://api.yelp.com/v2/search/?oauth_consumer_key=h7e9cHmibtiOAeUH_GJ1QA&oauth_token=L9HxC4WiIyP28galduczr4O7AC2ocl1j&
signatureMethod                  Timestamp x                 Random Number x     Version x
oauth_signature_method=HMAC-SHA1&oauth_timestamp=1479662629&oauth_nonce=pcsNgf&oauth_version=1.0&
                                              terms     location
oauth_signature=evTTnXZQkHLekS1LAUYpZLbNAVs=&term=tacos&location=wheeling, Il

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

var yelp_url = 'https://api.yelp.com/v2/' + 'search/' + '?term=tacos&'+'location=Wheeling,Il';

    var parameters = {
      oauth_consumer_key: 'h7e9cHmibtiOAeUH_GJ1QA', //consumer key
      oauth_token: 'L9HxC4WiIyP28galduczr4O7AC2ocl1j', // Token
      oauth_nonce: nonce_generate(),
      oauth_timestamp: Math.floor(Date.now()/1000),
      oauth_signature_method: 'HMAC-SHA1',
      oauth_version : '1.0',
      callback: 'cb'              // This is crucial to include for jsonp implementation in AJAX or else the oauth-signature will be wrong.
    };
                                                                                        //Consumer Secret         //Token Secret
    var encodedSignature = oauthSignature.generate('GET',yelp_url, parameters, '3fH3EJysPQ0Am-C2miz4G_tzirE', 'CVljrJvELrUq087lRW6ah0SiyLI');
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
