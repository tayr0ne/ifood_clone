function validar() {
    var form = document.querySelector('#form-adiciona');
    var botao = document.querySelector('.botao');
    botao = addEventListener("click", event);

    if ( botao = "click") {
         event.preventDefault();
            console.log("name:",form.name.value,",");
            console.log("password:",form.password.value,",");
            console.log("email:",form.email.value,",");
            console.log("date:",form.date.value.split('-').reverse().join('/'));
            return
 
    }
}
   