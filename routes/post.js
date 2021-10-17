
const express = require('express')
const shortid = require('shortid')

// creating express route handler
const router = express.Router()

// import the Url database model
const Url = require('../models/url')

//API Endpoint
const baseUrl = 'http:localhost:5000'

//To check URL validity (CP from Stack overflow)
function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }


router.post('/shorten', async (req, res) => {
    console.log(req.body)
    const longUrl= req.body.longUrl 
    //Generating the code for LONGurl
    const urlCode = shortid.generate()

    // checking Validity
    if (validURL(longUrl)) {
        try {
           //checking if already have this in our db
            let url = await Url.findOne({
                longUrl
            })

            // if exist than return 
            if (url) {
                res.json(url)
            } else {
                // short url genreation
                const shortUrl = baseUrl + '/' + urlCode
                console.log(shortUrl)
                // saving new url to db
                url = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                })
                await url.save()
                res.status(200).json(url)
            }
        }
        
        catch (err) {
            console.log(err)
            res.status(500).json('Server Error')
        }
    } else {
        res.status(401).json('Invalid longUrl')
    }
})

module.exports = router