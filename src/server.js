const proffys = [
    {   
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "123412341", 
        bio: "Enthusiast of the best Advanced Chemistry Technologies.<br><br>Affictioned about exploding stuff in lab and changing people's lives through experiments. Over 200,000 people have already witnessed at least one of my explosions.", 
        subject: "Chemistry", 
        cost: "20", 
        weekday: [
            0
        ], 
        time_from: [720], 
        time_to: [1220]
    },

    {   
        name: "Daniele Evangelista", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4", 
        whatsapp: "123412341", 
        bio: "Enthusiast of the best Advanced Chemistry Technologies.<br><br>Affictioned about exploding stuff in lab and changing people's lives through experiments. Over 200,000 people have already witnessed at least one of my explosions.", 
        subject: "Chemistry", 
        cost: "20", 
        weekday: [
            0
        ], 
        time_from: [720], 
        time_to: [1220]
    }
]


function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    return res.render("study.html")
}

function pageGiveClasses(req, res) {
    return res.render("give-classes.html")
}

const express = require ('express')
const server = express()
const nunjucks = require('nunjucks')

//config nunjucks
nunjucks.configure('src/views', {
    express: server, 
    noCache: true,
})

server
//Config static files (css, scripts, images)
.use(express.static("public"))
//App routes
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)

