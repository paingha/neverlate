const express = require('express');
const bodyParser = require('body-parser');
const cron = require('node-cron');
//const Nexmo = require('nexmo');
const app = express();

const recipient = "19367140432";
const sender = "Web never late api";

/*const nexmo = new Nexmo({
    apiKey: PROCESS.ENV.APIKEY,
    apiSecret: PROCESS.ENV.API_SECRET,
    applicationId: PROCESS.ENV.APP_ID,
    privateKey: PROCESS.ENV.PRIVATE_KEY_PATH,
  });
  */

const schedule = [
    {
        "course": "Precalculus",
        "Day_of_week": "Monday",
        "Time": "11:00"
    },
    {
        "course": "Calculus 1",
        "Day_of_week": "Tuesday",
        "Time": "13:00"
    },
    {
        "course": "Calculus 2",
        "Day_of_week": "Wednesday",
        "Time": "15:00"
    }
]

cron.schedule('* * * * *', function(){
    console.log('running a task every minute');
  });
  cron.schedule('0 13 * * 1', function(){
    console.log('running a task every monday by 1pm');
    let message = "Precalculus class today";
    /*nexmo.message.sendSms(sender, recipient, message, options, () =>{
        console.log("sms sent")
    });*/
  });
  cron.schedule('0 13 * * 2', function(){
    console.log('running a task every tuesday by 1pm');
  });
  cron.schedule('0 13 * * 3', function(){
    console.log('running a task every wednesday by 1pm');
  });
  cron.schedule('0 13 * * 4', function(){
    console.log('running a task every thursday by 1pm');
  });
  cron.schedule('0 13 * * 5', function(){
    console.log('running a task every friday by 1pm');
  });
//Routes
app.get('/', (req,res) =>{
    res.send('working')
})

app.listen(3000, () =>{
    console.log('Server Running')
});