
function OnSubmit(event) {
  event.preventDefault() 

  let values = {} 

  for (input of event.target) {  
    values[input.name] = input.value 
  }

  let formatacao = values.date.split("-") 
  values.date = formatacao[2]+
              "/"+formatacao[1]+
              "/"+formatacao[0]

  console.log(values)
  
}
