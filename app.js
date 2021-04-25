let express = require("express")
let app = express();
app.use(cors());
app.use(express.static(process.cwd()));

app.get("/hello",(req,res)=> {
	res.send("Welcome")
})

app.get('/', (req,res) => {
 res.sendFile(__dirname+"/index.html")
});
app.get("/userInfo",(req,res)=> {
res.json({"id":100,"name":"Ravi"})
})

app.listen(9090,()=>console.log("runnin on servrer on 9090"))