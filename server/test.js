const express=require('express')

const app=express()

const bodyParser=require('body-parser')

app.use(bodyParser.json())

const cluster=require('cluster')

const numCPUs=require('os').cpus().length

const PORT=process.env.PORT || 4000

const {Authorization,RedirectHandler}=require('./authHelper')

if(cluster.isMaster){
    console.log(`Master ${process.pid} is running`)

    for(let i=0;i<numCPUs;i++){
        cluster.fork()
    }

    cluster.on('exit',(worker,code,signal)=>{
        console.log(`Worker ${worker.process.pid} died`)
    })
}

else{
    app.get('/',(req,res)=>{
        res.send('Hello World')
    })

    app.get('/auth',(req,res)=>{
        res.redirect(Authorization())
    })

    app.get('/redirect',(req,res)=>{
        const code=req.query.code
        RedirectHandler(code)
    })

    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    })
}


app.get('/api/linkedin/authorize',(req,res)=>{
    res.redirect(Authorization())
})

app.get('/auth/linkedin/callback',(req,res)=>{
    res.redirect(RedirectHandler(req.query.code))
})