import express from 'express'
import path from 'path'
import compression from 'compression'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {match, RouterContext} from 'react-router'
import routes from './modules/routes'

const app = express()

app.use(compression())

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')))

// send all requests to index.html so browserHistory works
app.get('*', (req, res) => {
    match({
        routes: routes,
        location: req.url
    }, (err, redirect, props) => {
        if(err) {
            res.status(500).send(err.message)
        }else if(redirect){
            res.redirect(`${redirect.pathname}${redirect.search}`)
        }else if(props) {
            res.send(renderPage(renderToString(<RouterContext {...props} />)))
        }else {
            res.status(404).send('Not Found')
        }
    })
})

function renderPage(appHtml, script) {
    return (
    `<!doctype html public="storage">
    <html>
    <head>
    <meta charset=utf-8/>
    <title>My First React Router App</title>
    <link rel=stylesheet href=/index.css>
    <body>
    <div id=app>${appHtml}</div>
    <script src='/bundle.js'></script>`)
}

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Production Express server running at localhost:${PORT}`)
})
