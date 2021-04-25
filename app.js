let express = require("express")
let app = express();

app.use(express.static(process.cwd()+"/angular-demo/dist/angular-demo"));

app.get("/hello",(req,res)=> {
	res.send("Welcome")
})

app.get('/', (req,res) => {
 res.sendFile(process.cwd()+"/angular-demo/dist/angular-demo/index.html")
});
app.get("/userInfo",(req,res)=> {
res.json({"id":100,"name":"Ravi"})
})

app.listen(9090,()=>console.log("runnin on servrer on 9090"))