# YelpAPI2.0## Yelp API 2.0

Parameters required for request
- oauth_consumer_key
- oauth_token
- oauth_signature_method which is hmac-sha1
- oauth_signature
- oauth_timestamp	Timestamp for the request in seconds since the Unix epoch.
- oauth_nonce	 A unique string randomly generated per request.


You need the following for the code to work.

Yelp API 2.0 Access

http://yelp.com

JQuery Library

https://jquery.com/

-OAuth-Signature-js Library

https://github.com/bettiolo/oauth-signature-js/tree/master/dist



## Script order matters when embedding links in the HTML.

This script order worked for this code.
```
<script src="lib/jquery-3.1.1.min.js"></script>
<script src="lib/oauth-signature.js"></script>
<script src="app.js"></script>
```