
let valorFinal = 0  /* tirei essa variavel de dentro da função para o escopo global e consegui chamar ela na outra função do faturamento da loja */

function Desconto(tipo, valor) {

  const DescMaior500 = 1.5
  const DescPix = 2
  const DescDin = 5
  const DescCred = 0
  const DescDeb = 0
  

  if (tipo == 'pix') {
    valorFinal = valor - ((valor / 100) * DescPix)
  }
  
  if (tipo == 'credito') {
    valorFinal = valor - ((valor / 100) * DescCred)
  }

  if (tipo == 'debito') {
    valorFinal = valor - ((valor / 100) * DescDeb)
  }

  if (tipo == 'dinheiro') {
    valorFinal = valor - ((valor / 100) * DescDin)
  }

  if (tipo != 'pix' && tipo != 'credito' && tipo != 'debito' && tipo != 'dinheiro') {
    valorFinal = valor
  }

  if (valor >= 500) {
    valorFinal = valorFinal - ((valor / 100) * DescMaior500)
  }

  return valorFinal
}


function faturamento(tipo) {
 
  const credito = 1.5
  const debito = 1
  const notafiscal = 6
  const pix = 0
  const dinheiro = 0
  let lojafinal = valorFinal
  

  if (tipo == 'pix'){
    lojafinal = valorFinal - ((valorFinal / 100) * notafiscal) - ((valorFinal / 100) * pix)
   }

  
  if (tipo == 'credito'){
   lojafinal = valorFinal - 4.99 - ((valorFinal / 100) * credito) - ((valorFinal / 100) * notafiscal)
  }

  if (tipo == 'debito'){
    lojafinal = valorFinal - 2.99 - ((valorFinal / 100) * debito) - ((valorFinal / 100) * notafiscal)
   }
   
   if (tipo == 'dinheiro'){
    lojafinal = valorFinal - ((valorFinal / 100) * notafiscal) - ((valorFinal / 100) * dinheiro)
   }

  return lojafinal

  }


function OnSubmit(event) {
  event.preventDefault()

  let values = {}

 
  for (input of event.target) {
    values[input.name] = input.value
  }

  let valorFinal = Desconto(values.tipoPagamento, values.valor).toLocaleString('pt-BR',{style:'currency', currency:'BRL'}) // usei esse metodo q converte e arredonda o numero para uma string no formato da moeda q queremos, no caso foi a moeada real.//
  let lojafinal = faturamento(values.tipoPagamento, values.valor).toLocaleString('pt-BR',{style:'currency', currency:'BRL'})

  
  console.log('valor da compra:',valorFinal)
  console.log('Faturamento loja:',lojafinal)
}


