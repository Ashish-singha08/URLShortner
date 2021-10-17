# URLShortner
This is a URL shortener API that can be used to short a URL. IT is build in NODE JS
# RUN
1. npm init (to initalize npm)
2. npm install express mongoose shortid (these are some packages used in project)
3. node index.js
# pre -requisite
1.Mogodb installed 
2.Mongod should be running

# TEST
Test with postman Api 
1. METHOD to post
2.  http:localhost:5000/api/url/shortner (this should be added int the url field )
3.  In body ADD { "longUrl": "your long url should be  here"}
4.  Add Header where key is CONTENT-TYPE and Value is application/json
5.  click on send , you will see the JSON object as response where KEY shortUrl contains the short url 

