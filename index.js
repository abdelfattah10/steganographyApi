const stego = require("stegosaurus");
const express = require('express');
const request = require('request');
const path = require('path');
const fs = require('fs');
const app =  express();


// request('https://picsum.photos/id/28/1093/800').pipe(fs.createWriteStream('doodle.png').on('finish', ()=>{
//   var message_text = 'Hiiiii';
//   var out_image = 'out.png';
//   console.log('hhh');
//   stego.encodeString('test.png', out_image, message_text, function(err){
//       if (err) { console.log('err'); }
//       console.log("Wrote png to: ", out_image);
//
//       //Now let's decode that.
//       stego.decode(out_image, message_text.length,function(payload){
//           console.log("Decoded message: ", payload);
//       });
//
//   });
// }))


var message_text = 'Hiiiii';
var out_image = 'out.png';
stego.encodeString('test.png', out_image, message_text, function(err){
    if (err) { console.log('err'); }
    console.log("Wrote png to: ", out_image);

    //Now let's decode that.
    stego.decode(out_image, message_text.length,function(payload){
        console.log("Decoded message: ", payload);
    });

});



app.get('/', (req, res) => {
  console.log(img);
})

const port = process.env.PORT || 3000

app.listen(port);
