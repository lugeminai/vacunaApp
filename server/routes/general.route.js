module.exports= app =>{
    app.get('/api/local/GetLocal', (req,res)=>{
        var data= require('../json/local.json');
        res.json(data);
    })
}