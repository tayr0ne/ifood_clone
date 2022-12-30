
function OnSubmit(event) {
  event.preventDefault() // vai realizar o bloqueio da pagina

  let values = {}//criei uma variavel let , vazio pra receber os valores.....do objeto

  for (input of event.target) { // aqui ele está pegando todos os inputs do formulário.
    values[input.name] = input.value //pegando o nome como a chave e o value como valor
  }

  let formatacao = values.date.split("") 
  values.date = formatacao[2]+
              "/"+formatacao[1]+
              "/"+formatacao[0]

  console.log(values)
  
}
