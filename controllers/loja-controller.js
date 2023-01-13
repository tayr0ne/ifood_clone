  function Desconto(tipo, valor) {
    const DescMaior500 = 1.5
    const DescPix = 2
    const DescDin = 5
    const DescCred = 0
    const DescDeb = 0
    let valorFinal = 0

<<<<<<< HEAD
    
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
=======
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
>>>>>>> 817f716c15956491f5c1ac135811de16b1aeb220
  }

  function faturamento(tipo, valor) {

    const DescPix = 0;
    const DescDin = 0;
    const DescCred = 1.5;
    const DescDeb = 1;
    const imposto = 6;
    let faturamentoLoja = 0;

    if (tipo == 'pix'){
      faturamentoLoja = valor - ((valor / 100) * imposto) - ((valor / 100) *  DescPix);
    }


    if (tipo == 'credito'){
    faturamentoLoja = valor- ((valor / 100) * DescCred) - ((valor / 100) * imposto) - 4.99;
    }

<<<<<<< HEAD
    if (tipo == 'debito'){
      faturamentoLoja = valor - ((valor / 100) * DescDeb) - ((valor / 100) * imposto) - 2.99;
    }

    if (tipo == 'dinheiro'){
      faturamentoLoja = valor - ((valor / 100) * imposto) - ((valor / 100) * DescDin);
    }
=======

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
>>>>>>> 817f716c15956491f5c1ac135811de16b1aeb220

    return faturamentoLoja;

<<<<<<< HEAD
    }


  function OnSubmit(event) {
    event.preventDefault()

    let values = {}
    for (input of event.target) {
      values[input.name] = input.value
    }

    let valorFinal = Desconto(values.tipoPagamento, values.valor);
    let faturamentoLoja = faturamento(values.tipoPagamento, values.valor);

    console.log('Valor da Compra Foi de: '+ valorFinal)
    console.log('Faturamento da loja é: ' + faturamentoLoja);
  }
=======
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


>>>>>>> 817f716c15956491f5c1ac135811de16b1aeb220
