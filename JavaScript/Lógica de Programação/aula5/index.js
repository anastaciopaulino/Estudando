/*
Operadores ternários
(condição) ? <valor verdadeiro> : <valor falso>;
*/

const pontuacaoUsuario = 999;

const niveUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário Normal';

const corUsuario = 'Azul';
const corPadrao = corUsuario || 'Preto';

console.log(niveUsuario, corPadrao);

/*
if (pontuacaoUsuario >= 1000) {
  console.log('Usuário VIP');
} else {
  console.log('Usuário Normal');
}
 */

