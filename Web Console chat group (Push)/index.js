const http = require("http");
const WebSocketServer = require("websocket".server)
let connections = []; //array of connections (users on the server), pushes the notification to all connections in the array

//creates the http server
const httpserver = http.createServer()


// passes the object to the WebSocketServer
const websocket = new WebSocketServer({"httpServer": httpserver })

//listen on the TCP  (Transmission Control Protocol- delivers data through networks)
httpserver.listen(8080, () => console.log("My server is listening on port 8080"))

websocket.on("request", request=>{

    const connection = request.accept(null, request.origin)
    connection.on("message", message =>{
        connections.forEach (c => c.send(`User${connection.socket.remotePort} says ${message.utf8Data}`))

    })

    connections.push(connection)
    //It tells everyone connected that someone else just connected
    connections.forEach (c => c.send(`User${connection.socket.remotePort} has just connected`))
})