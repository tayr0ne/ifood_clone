

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

function OnSubmit(event) {
  event.preventDefault()

  let values = {}

  for (input of event.target) {
    values[input.name] = input.value
  }

  let valorFinal = Desconto(values.tipoPagamento, values.valor)

  console.log(valorFinal)
}