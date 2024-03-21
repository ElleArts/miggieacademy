let express=require('express')
let mongoose=require('mongoose')
let bodyParser=require('body-parser')
let Model=require('./Schema/model')


let app=express()

mongoose.connect("mongodb://127.0.0.1:27017/customersdb",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((result)=>{
    console.log('connection successful!')
}).catch((err)=>{
    console.log(err)
})


// app.get('/page.ejs',(req,res)=>{
//     res.send('database is connected!')
// })

app.set('view engine','ejs')
// app.use('/',userRouter)
app.use(bodyParser.urlencoded({extended:true}))


// Serve static files from the 'public' folder
app.use(express.static('public'));


app.get('/',(req,res)=>{
    res.render('index')
})



app.get('/index.ejs',(req,res)=>{
    res.render('index')
})

app.get('/register.ejs',(req,res)=>{
    res.render('register.ejs')
})

app.get('/registration.ejs',(req,res)=>{
    res.render('registration.ejs')
})

app.get('/page.ejs',(req,res)=>{
    res.render('page.ejs')
})

app.get('/lists.ejs',(req,res)=>{
    res.render('lists.ejs')
})

app.get('/lists1.ejs',(req,res)=>{
    res.render('lists1.ejs')
})

app.get('/lists2.ejs',(req,res)=>{
    res.render('lists2.ejs')
})

app.get('/reset.ejs',(req,res)=>{
    res.render('reset.ejs')
})

app.post('/registration.ejs', (req,res)=>{
    let mybodydata={
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
    }
    let data=Model(mybodydata)
    data.save()
    res.render('supplies.ejs')
    
})

app.post('/page.ejs', (req,res)=>{
    let mybodydata={
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
    }
    let data=Model(mybodydata)
    data.save()
    res.render('supplies.ejs')
    
})

app.post('/reset.ejs', (req,res)=>{
    let mybodydata={
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone
    }
    let data=Model(mybodydata)
    data.save()
    res.render('registration.ejs')
    
})





app.get('/supplies.ejs',(req,res)=>{
    res.render('supplies.ejs')
})



app.listen(2500,()=>{
    console.log('server is listening on port 2500')
})