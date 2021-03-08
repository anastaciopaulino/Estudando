/**
 *  DefineProperty && DefineProperties
*/

function Produto (nome, preco, estoque){
    Object.defineProperty(this, 'estoque', {
        enumerable: false, // Mostra a chave
        value: estoque, // Valor da chave
        writable: true, // Alteração
        configurable: true // Configurável
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: false,
            configurable: true
        }
    })
}

const p1 = new Produto('Camisa', 20, 3);
console.log(p1.nome)