const express = require ('express')
const app = express()

app.get('/',(req,res) =>{
    res.send('<p><h1>Olá,<br>Mello<br></p>')
})

app.listen(3000, err => {
    if(err){
        console.log('Não foi possivel conectar ao servidor')
    }else
    {
    console.log('servidor subiu')    
    }

})