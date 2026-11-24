import { createServer } from 'node:http'

const PORT = 8080
const hostname = '127.0.0.1'

const server = createServer((req,res) => {

})

server.listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`)
})