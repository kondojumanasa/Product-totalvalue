const express= require('express');
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.json());

app.post('/product',(req,res)=>{
    const products=req.body.products;

    if (Array.isArray(products)){

        const totalValue=products.reduce((total,product)=>{
        if (product.price && product.quantity){
            return total+(product.price * product.quantity);
        }
        return total;
    },0);
    res.json({totalValue});
    }

    else{
        return res.status(400).json({ error: 'Invalid format.' });
    }

});

app.listen(4000,()=>{
    console.log("server is running");
});