
const request = require('request');
request.get('https://datazen.katren.ru/calendar/day/', 
function(data, err, body)  {
  console.log(JSON.parse(body));


    let parsBody= JSON.parse(body);

    console.log(parsBody.date);
  }
);

