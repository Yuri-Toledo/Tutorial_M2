function calcula1() {
    const select = document.getElementById("select")
    const querCalcularText = select.options[select.selectedIndex].text;

    const jaSabe = Number(document.getElementById("VfVp").value)
    const taxa = Number(document.getElementById("taxa").value)
    const tempo = Number(document.getElementById("tempo").value)

    if(querCalcularText == "Valor Presente") {
        document.getElementById("vpVf").innerHTML = `<h3>Valor Futuro: </h3>`
        let querCalcular = jaSabe/(Math.pow((1+taxa), tempo))
        document.getElementById("saida").innerHTML = `<h3>Valor Presente:</h3><p>${querCalcular}</p>`
    }
    else {
        document.getElementById("vpVf").innerHTML = `<h3>Valor Presente: </h3>`
        let querCalcular = jaSabe*(Math.pow((1 + taxa), tempo))
        document.getElementById("saida").innerHTML = `<h3>Valor Futuro:</h3><p>${querCalcular}</p>`

    }

}

function calcula2() {

    const capital = Number(document.getElementById("capital").value)
    const taxa = Number(document.getElementById("taxa").value)
    const tempo = Number(document.getElementById("tempo").value)
    const juros = capital * taxa * tempo
    const montante = capital + juros

    document.getElementById("saida").innerHTML = `<h3>Juros: ${juros} <br> Montante: ${montante}</h3>`


}

function calcula3() {
    const text = document.getElementById("text").value
    let arrayCaracteres =[]
    let espacos = " "

    for(i = 0; i < text.length; i++) {
        arrayCaracteres[i] = text.substr(i, 1)
        for(j = 0; j < i; j++){
            espacos += "&nbsp"
        } 
        document.getElementById("saida").innerHTML += `<br> <p>${espacos} ${arrayCaracteres[i]}</p>`
    }

}

function calcula4() {
    let num = Number(document.getElementById("num").value)
    let binario = []

    for(i = 0; i< 8; i++){
        if((num / (128/(Math.pow(2,i)))) >= 1) {
            binario[i] = 1
            num -= (128/(Math.pow(2, i)))
        }
        else {
            binario[i] = 0

        }

        document.getElementById("saida").innerHTML += `<p>${binario[i]}</p>`
    }





}

