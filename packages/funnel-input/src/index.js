const { Kafka } = require('kafkajs')
const express = require('express');
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors())


const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092']
})



// respond with "hello world" when a GET request is made to the homepage
app.post('/events/:eventtype', async function(req, res) {

    const payload = req.body
    const {eventtype} = req.params
    console.log('payload',payload )
    const producer = kafka.producer()

    await producer.connect()
    await producer.send({
        topic: eventtype,
        messages: [
            { value: JSON.stringify({...payload})},
            
        ],
    })
    
    res.send('hello world');

    await producer.disconnect()
  
});
const port = 9292

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  