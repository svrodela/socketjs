const net = require('net');
const servidor={
    port:3000,
    host: 'localhost'
}

const client = net.createConnection(servidor);

client.on('connect',()=>{
    console.log('conexión satisfactoria')
    client.write('hola servidor')
})

client.on('error',(err)=>{
    console.log(err.message)
})