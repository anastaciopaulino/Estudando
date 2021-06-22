exports.paginaInicial = (req, res) => {
  res.send(`
    <form action="/" method="post">
        nome do cliente: <input type="text" name="nome" />
        <input type="submit" value="Enviar">
    </form>
  `);
}

exports.trataPost = (req, res) => {
  res.send('Ei ei sou a sua resposta.');
}