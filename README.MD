### 1° Bugs
Ao tentar usar o DropDow do menu do bootstrap apresenta o seguinte erro
`
    TypeError: i.createPopper is not a function
`
Solucionado por Jesse o grande!!

### 2° Bugs
1° Ao tentar tentar enviar os dados do formulario a tela aprenseta um reload(recarregamento da pagina). resolver esse problema. Ao clicar em enviar a tela não pode ter essa ação!

2° ao clicar em enviar é necessario criar uma função para capturar os dados do formulario

3° ao conseguir capturar os dados do formulario os mesmos dados deveram ser apresentado no console do navegador utilizando o comando console.log

4° a data devera ser apresentada no padrão brasileiro separada por /

5° ao apresentar os dados no console do navegador os dados deverao ser apresentados no modelo de objeto segue o exemplo abaixo:

`
{
    name: Tayrone,
    password: 123456,
    email: tayrone@thrower.com.br,
    date: 25/07/1995
}
`
### 3° Bugs
 CAIXA

 >= $500 , -1,5% | pix, credito, debito, dinheiro
 -2% | PIX
 -5% | DINHEIRO
 -0% | CREDITO
 -0% | DEBITO


FATURAMENTO LOJA
1 - criar uma funcao do faturamento da loja
2 - se o pagamento for:
    -0% | DINHEIRO
    -0% | PIX 
    4,99 e -1,5% | CREDITO
    2,99 e -1% | DEBITO

3 - impostos a serem pagos
    -6% | nota fiscal    

!!lembrando o desconto da nota fiscal e obrigatorio independente do tipo de pagamento

3 - o resultado final devera ser jogado no console log



### 4° feature

1 - calcular todos os valores do localStorange 
2 - reorganizar os metodos da exercicio 2 que é Desconto() e faturamento()
3 - exibir para  o usuario a  nota fiscal

 exemplo : 
| Cod | Produto | valor
| 1   | blusa   | 150
|
|
| tipo pagamento: pix ou dinheiro  etc...
|
| valor final sem desc : 150
| valor final om desc: 100

fiquem aberto a criatividade de voces para desenhar a nota

##### dica!!
para fazero calculo dos valores, pode utilizar o metodo for para varrer o objeto!

##### por ultimo
apos ser feito todo os calculos e o fechamento ser finalizado o localStorange precisa ser limpo para uma nova passagem de compras


