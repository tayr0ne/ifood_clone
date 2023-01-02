// function preenchimento() {
//     var form = document.querySelector('#formulario');
//     var butao =document.querySelector('.row');
//     butao = addEventListener("click",event);

//     if(butao = "click"){
//         event.preventDefault();
//         console.log("name:",form.name.value,",");
//         console.log("password",form.password.value,",");
//         console.log("email",form.email.value,",");
//         console.log("date",form.date.value.split('-').reverse().join('/'),",");
//         return
//     }
   

// }
function OnSubmit(event) {
    event.preventDefault()
    let values = {}
    
    for (input of event.target) {
        values[input.name] = input.value 
    }
    let formatacao = values.date.split("-")
    values.date = formatacao[2]+"/"+formatacao[1]+"/"+formatacao[0]

    
    
    console.log (values)


}