const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="post">
            nome do cliente: <input type="text" name="nome" />
            <input type="submit" value="Enviar">
        </form>
    `);
});

app.get('/testes/:idUsuarios?', (req, res) => {
    // console.log(req.params);
    // res.send(req.params.idUsuarios)
    // console.log(req.query)
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Recebi o formulário');
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});