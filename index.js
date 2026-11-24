import { createServer } from 'node:http'
import { readFile } from 'node:fs'
import path from 'node:path'

const PORT = 8080
const hostname = '127.0.0.1'

const server = createServer((req,res) => {
    let filePath;
    let statusCode = 200

    switch(req.url){
        case '/':
            filePath = 'index.html'
            break
        case '/about':
            filePath = 'about.html'
            break
        case '/contact-me':
            filePath = 'contact-me.html'
            break
        default:
            filePath = '404.html'
            statusCode = 404
    }

    filePath = path.join(process.cwd(), filePath)

    readFile(filePath, (err,data) => {
        if(err){
            res.statusCode = 500
            res.end('Something went wrong')
            return
        } 
        
        res.statusCode = statusCode
        res.setHeader('Content-Type', 'text/html')
        res.end(data)
    })
})

server.listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`)
})