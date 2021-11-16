const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/
// console.log(productDetails('Alcool gel', 'batata'));
describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(typeof productDetails).toBe('function')
    // Teste se o retorno da função é um array.
    // expect(typeof productDetails('Alcool gel', 'Máscara')).toBe('array')
    const tamanho = productDetails('Alcool gel', 'Máscara').length
    expect(tamanho).toBe(2)
    expect(productDetails('Alcool gel', 'Máscara')).toEqual([expect.any(Object), expect.any(Object)])
    
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.

    // Teste se os dois productIds terminam com 123.
    const terminam123 = productDetails('Alcool gel', 'Máscara')[1].details.productId
    console.log(terminam123);
    expect(terminam123).toHaveBeenLastCalledWith('123')
  });
});
/* 
fail('Teste vazio!');
ESCREVA SEUS TESTES ABAIXO:
Teste se productDetails é uma função.
Teste se o array retornado pela função contém dois itens dentro.
Teste se os dois itens dentro do array retornado pela função são objetos.
 */
