const  express = require('express');
const app = express();
const bodyParcer = require('body-parser');

app.use(bodyParcer.urlencoded({extended:false}))

app.post('/', (req, res) => {
    let { body } = req;
    let name = body.Name;
    let email = body.Email;
    let subject = body.Subject;
    let comment = body.Comment;
    res.status (200);
    res.send( `<p> <h4> Username: ${name} </h4> </p> 
               <p> <h4> Email: ${email } </p> 
               <p> He said ${ comment } </p>` );
});

app.listen(3000);