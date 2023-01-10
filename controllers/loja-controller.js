
function Desconto(tipo, valor) {

  const DescMaior500 = 1.5
  const DescPix = 2
  const DescDin = 5
  const DescCred = 0
  const DescDeb = 0
  let valorFinal = 0

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

  if (tipo == 'debito'){
    faturamentoLoja = valor - ((valor / 100) * DescDeb) - ((valor / 100) * imposto) - 2.99;
   }

   if (tipo == 'dinheiro'){
    faturamentoLoja = valor - ((valor / 100) * imposto) - ((valor / 100) * DescDin);
   }

  return faturamentoLoja;

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




































// function Desconto(tipo, valor) {

//   const DescMaior500 = 1.5
//   const DescPix = 2
//   const DescDin = 5
//   const DescCred = 0
//   const DescDeb = 0

//   if (tipo == 'pix') {
//     valorFinal = valor - ((valor / 100) * DescPix)
//   }
  
//   if (tipo == 'credito') {
//     valorFinal = valor - ((valor / 100) * DescCred)
//   }

//   if (tipo == 'debito') {
//     valorFinal = valor - ((valor / 100) * DescDeb)
//   }

//   if (tipo == 'dinheiro') {
//     valorFinal = valor - ((valor / 100) * DescDin)
//   }

//   if (tipo != 'pix' && tipo != 'credito' && tipo != 'debito' && tipo != 'dinheiro') {
//     valorFinal = valor
//   }

//   if (valor >= 500) {
//     valorFinal = valorFinal - ((valor / 100) * DescMaior500)
//   }

//   return valorFinal
// }



  
// function OnSubmit(event) {
//   event.preventDefault()

//   let values = {}

//   for (input of event.target) {
//     values[input.name] = input.value
//   }

//   const imposto = 0.06;

//   let valorFinal = Desconto(values.tipoPagamento, values.valor) ;
//   let valorFaturamento = faturamento(values.tipoPagamento, values.valor);

//   console.log('Valor total da compra é:  ', valorFinal);
//   console.log('Faturamento da Loja é: ' ,valorFaturamento);
// }
