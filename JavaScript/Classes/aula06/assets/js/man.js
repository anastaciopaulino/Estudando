class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelectorAll('.formulario');
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e);
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('Formulário não enviado');
  }
}

const validar = new ValidaFormulario();