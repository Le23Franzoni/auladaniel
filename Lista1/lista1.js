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
    let n3 = Number(document.getElementById("n3").value)
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
    let n1 = Number(document.getElementById("n1").value)
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
    document.getElementById("comentario").textContent = "Os pesos finais após o cálculo são: "
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

function exe11(){
    let diagonalmaior = Number(document.getElementById("diagonalmaior").value)
    let diagonalmenor = Number(document.getElementById("diagonalmenor").value)
    let area = ((diagonalmaior * diagonalmenor) / 2)
    document.getElementById("resultado").textContent = area.toFixed(2)
    document.getElementById("comentario").textContent = "A área desse losango é de: "
}

function exe12(){
    let salariominimo = Number(document.getElementById("salariominimo").value)
    let salariofuncionario = Number(document.getElementById("salariofuncionario").value)
    let calculo = salariofuncionario / salariominimo
    document.getElementById("resultado").textContent = calculo.toFixed(2)
    document.getElementById("comentario").textContent = "Esse funcionário ganha em salários mínimos: "
}

function exe13(){   // tive que pesquisar como fazer esse
    let n1 = Number(document.getElementById("n1").value);
    let tabuada = "<table><tr>";
    
    for(let i = 1; i <= 10; i++){
      tabuada += "<td>" + n1 + " x " + i + " = " + n1 * i + "</td>";
      if(i % 5 === 0 && i !== 10){
        tabuada += "</tr><tr>";
      }
    }
    
    tabuada += "</tr></table>";
    document.getElementById("resultado").innerHTML = tabuada;
    document.getElementById("comentario").textContent = "A tabuada desse número é:";
}
  

function exe14(){
    let anodenascimento = Number(document.getElementById("anodenascimento").value)
    let anoatual = Number(document.getElementById("anoatual").value)
    let idadeanos = anoatual - anodenascimento
    let idademeses = idadeanos * 12
    let idadesemanas = idademeses * 4
    let idadedias = idadesemanas * 7

    document.getElementById("resultado").textContent = "em anos: " + idadeanos + ", em meses: " + idademeses + ", em semanas: " + idadesemanas + ", em dias: " + idadedias;
    document.getElementById("comentario").textContent = "A idade em anos, meses, semanas e dias são: ";
}

function exe15(){
    let salariojoao = Number(document.getElementById("salariojoao").value)
    let contaatrasada = Number(document.getElementById("contaatrasada").value)
    let multa1 = contaatrasada * 0.02
    let multa2 = contaatrasada + multa1 + multa1
    let salariofinal = salariojoao - multa2

    document.getElementById("resultado").textContent = salariofinal.toFixed(2)
    document.getElementById("comentario").textContent = "Após pagar as multas, joão terá: "
}

function exe16(){
    let cateto1 = Number(document.getElementById("cateto1").value)
    let cateto2 = Number(document.getElementById("cateto2").value)
    let hipotenusa = cateto1 ** 2 + cateto2 ** 2
    let hipotenusa2 = Math.sqrt(hipotenusa)

    document.getElementById("resultado").textContent = hipotenusa2.toFixed(2)
    document.getElementById("comentario").textContent = "A hipotenusa desse triângulo é: "
}

function exe17(){
    let raio = Number(document.getElementById("raio").value)
    let comprimento = 2 * Math.PI * raio
    let area = Math.PI * (raio ** 2)
    let volume = (4/3) * Math.PI * (raio ** 3)

    document.getElementById("resultado").textContent = "Comprimento: " + comprimento.toFixed(2) + " Área: " + area.toFixed(2) + " Volume: " + volume.toFixed(2)
    document.getElementById("comentario").textContent = "O comprimento, área e volume dessa esfera é: "
}

function exe18(){
    let celsius = Number(document.getElementById("celsius").value)
    let farenheit = (celsius * 9/5) + 32

    document.getElementById("resultado").textContent = farenheit.toFixed(2)
    document.getElementById("comentario").textContent = "A temperature em farenheit é: "
}

function exe19(){
    let comprimento = Number(document.getElementById("comprimento").value)
    let largura = Number(document.getElementById("largura").value)
    let area = comprimento * largura
    let watts = area * 18

    document.getElementById("resultado").textContent = area.toFixed(2) + " e " + watts.toFixed(2) + " respectivamente."
    document.getElementById("comentario").textContent = "A área em m² e a potência de iluminação são: "
}

function exe20(){
    let angulo = Number(document.getElementById("angulo").value)
    let distancia = Number(document.getElementById("distancia").value)

    let radianos = angulo * Math.PI / 180
    let medidaescada = distancia / Math.sin(radianos)

    document.getElementById("resultado").textContent = medidaescada.toFixed(2)
    document.getElementById("comentario").textContent = "A medida dessa escada é: "
}