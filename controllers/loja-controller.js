
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


function faturamento(tipo, valor) {

  //config
  const credito = 1.5
  const debito = 1
  const notafiscal = 6
  const descFixoCred = 4.99
  const descFixoDeb = 2.99
  const d = 100
  let lojafinal = valorFinal


  if (tipo == 'pix') {
    lojafinal = valor
  }

  if (tipo == 'dinheiro') {
    lojafinal = valor
  }

  if (tipo == 'credito') {
    lojafinal = (valor - (((valor / d) * credito)) - descFixoCred)
  }

  if (tipo == 'debito') {
    lojafinal = (valor - (((valor / d) * debito)) - descFixoDeb)
  }


  lojafinal = lojafinal - ((valor / d) * notafiscal) //desc nota



  return lojafinal

}


function OnSubmit(event) {
  event.preventDefault()

  let values = {}
  let produtos = localStorage.getItem('produtos')

  for (input of event.target) {
    values[input.name] = input.value
  }

  if (produtos) {
    let strToObj = JSON.parse(produtos)
    strToObj.push({ "produto": values.produto, "valor": values.valor })
    localStorage.setItem('produtos', JSON.stringify(strToObj))
  } else {
    localStorage.setItem('produtos', JSON.stringify([{ "produto": values.produto, "valor": values.valor }]))
  }
}

function fechamento() {
  let produtos = localStorage.getItem('produtos')
  let tipoPagamento = document.querySelector('#tipoPagamento').value

  if(tipoPagamento === 'Selecione'){
    alert("Escolha um metodo de pagamento!!")
  }

  
  // let valorFinal = Desconto(values.tipoPagamento, values.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) // usei esse metodo q converte e arredonda o numero para uma string no formato da moeda q queremos, no caso foi a moeada real.//
  // let lojafinal = faturamento(values.tipoPagamento, values.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })


}


