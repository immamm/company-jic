import express from 'express';
const app = express();
import { urlencoded } from 'body-parser';

app.use(urlencoded({extended:false}))

app.get('/', (req, res) => {
    let name = req.body.Name;
    let email =req.body.Email;
    let subject = req.body.Subject;
    let comment = req.body.Comment;
    res.status (200);
    res.end ( `${name, email, subject, comment}` )

})

app.listen(3000);