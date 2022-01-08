//require express and create router
const routes = (app, lms, accounts, defaultAccount) => {
    const getCounterPayload = (data) => {return {"counter":data}}
    app.get('/counter', async (req,res)=>{
        //send back json object
        // res.json({message: 'Hello World!'});
        //send accounts
        var dat = await lms.get()
        res.status(200).json(getCounterPayload(dat));
    })

    app.post('/increment', async (req,res)=>{
        //increment the counter and send back json object
        var dat = await lms.increment({ from: defaultAccount})
        if (dat.receipt.status)
            res.status(200).json(getCounterPayload(await lms.get()))
        else
            res.status(500).send('error');
    })
}


module.exports = routes;