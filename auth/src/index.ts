// $ node init -y
// $ npm install typescript ts-node-dev express @types/express
// $ tsc --init


//Running on github package
//$ sudo docker login docker.pkg.github.com -u sanjeet123456789 -p <token_id using setting/dev setting/generate new token>
//$ sudo docker build -t docker.pkg.github.com/sanjeet123456789/ticketing/auth .
//$ sudo docker tag 381972a37d97 docker.pkg.github.com/sanjeet123456789/ticketing/auth:latest
//$ sudo docker push docker.pkg.github.com/sanjeet123456789/ticketing/auth:latest
//$ sudo docker run docker.pkg.github.com/sanjeet123456789/ticketing/auth:latest
// url https://github.com/sanjeet123456789/ticketing/auth






import express from 'express';
import {json} from 'body-parser';



const app=express();
app.get('/pal/users/profile',(req,res)=>{
	res.send("hello there");

});
app.use(json());
app.listen(3000,()=>{
	//res.json("hello world")
	console.log("app is running on port 3000");
})


