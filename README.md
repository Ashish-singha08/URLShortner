# URLShortner
This is a URL shortener API that can be used to short a URL. IT is build in NODE JS
# RUN
node index.js
# pre -requisite
Mogodb installed 
Mongod should be running

# TEST
Test with postman Api 
1. METHOD to post
2.  http:localhost:5000/api/url/shortner (this should be added the url to send )
3.  In body ADD { "longUrl": "your long url shouldbe  here"}
4.  Add Header where key is CONTENT-TYPE and Value is application/json
5.  click on send , you will see the JSON object as response where KEY shortUrl contains the short url 

