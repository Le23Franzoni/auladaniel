function exe1(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let conta = (n1 - n2)
    document.getElementById("resultado").textContent = conta.toFixed(2)
    document.getElementById("comentario").textContent = "O resultado dessa conta é: "
}
function exe2(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 =Number(document.getElementById("n3").value)
    let conta = (n1 * n2 * n3)
    document.getElementById("resultado").textContent = conta.toFixed(2)
    document.getElementById("comentario").textContent = "O resultado dessa conta é: "
}
function exe3(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let conta = (n1/n2)
    document.getElementById("resultado").textContent = conta.toFixed(2)
    document.getElementById("comentario").textContent = "O resultado dessa conta é: "
}
function exe4(){
    let n1 =Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let conta = ((n1 * 2 + n2 * 3) / 5)
    document.getElementById("resultado").textContent = conta.toFixed(2)
    document.getElementById("comentario").textContent = "A média ponderada desse aluno é de: "
}
function exe5(){
    let preco = Number(document.getElementById("Preço").value)
    let desconto = (preco * 0.1)
    let precofinal = preco - desconto
    document.getElementById("resultado").textContent = precofinal.toFixed(2)
    document.getElementById("comentario").textContent = "O preço após o desconto é de: "
}
function exe6(){
    let fixo = Number(document.getElementById("fixo").value)
    let vendas = Number(document.getElementById("vendas").value)
    let comissao = (vendas * 4 / 100)
    let salariofinal = (fixo + comissao)
    document.getElementById("resultado").textContent = comissao.toFixed(2) + " e " + salariofinal.toFixed(2) + " respectivamente."
    document.getElementById("comentario").textContent = "O valor da comissão e o salário final são: "
}
function exe7(){
    let peso = Number(document.getElementById("peso").value)
    let engordar = peso * 0.15
    let engordarpeso = peso + engordar
    let emagrecer = peso *0.20
    let emagrecerpeso = peso - emagrecer
    document.getElementById("resultado").textContent = engordarpeso.toFixed(2) + " e " + emagrecerpeso.toFixed(2) + " respectivamente."
    document.getElementById("comentario").textContent = "Os pesos finais após o cálculo é: "
}
function exe8(){
    let pesoquilos = Number(document.getElementById("pesoquilos").value)
    let pesogramas = pesoquilos * 1000
    document.getElementById("resultado").textContent = pesogramas.toFixed(2)
    document.getElementById("comentario").textContent = "O peso em gramas é de: "
}

function exe9(){
    let basemaior = Number(document.getElementById("basemaior").value)
    let basemenor = Number(document.getElementById("basemenor").value)
    let altura = Number(document.getElementById("altura").value)
    let area = ((basemaior + basemenor) * altura) / 2
    document.getElementById("resultado").textContent = area.toFixed(2)
    document.getElementById("comentario").textContent = "A área desse trapézio é de: "
}

function exe10(){
    let lado = Number(document.getElementById("lado").value)
    let area = lado * lado
    document.getElementById("resultado").textContent = area.toFixed(2)
    document.getElementById("comentario").textContent = "A área desse quadrado é de: "
}