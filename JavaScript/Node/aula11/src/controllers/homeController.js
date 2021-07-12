exports.paginaInicial = (req, res) => {
  res.render('index');
}

exports.trataPost = (req, res) => {
  res.send('Ei ei sou a sua resposta.');
}