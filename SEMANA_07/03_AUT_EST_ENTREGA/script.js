function calcTabuada() {

    const n1 = Number(document.getElementById("n1").value)
    const n2 = Number(document.getElementById("n2").value)
    const n3 = Number(document.getElementById("n3").value)


    let cont = n2;

    while(cont < n3){
        document.getElementById(`saida`).innerHTML += `<h3>${n1} * ${cont} = ${n1*cont}</h3>`
        cont = cont + 1
    }
}

function calcPalindromo() {

    const num = Number(document.getElementById("num").value)

    let status = true

    let arrayNum = []
    let x = num
    let cont = 1

    
    arrayNum[0] = x % 10

    for(i = 1; (x / 10) >= 1; i++){
        x = parseInt(x / 10);
        arrayNum[i] = x % 10
        cont += 1
    }
    
    
    for(j = 0; j < cont/2; j++){
        if(arrayNum[j] != arrayNum[cont-1-j]){
            status = false
            break
        }
    }

    if(status){
        document.getElementById("Saida").innerHTML = `<h3>É Palíndromo</h3>`
    }

    else{
        document.getElementById("Saida").innerHTML = `<h3>Não é Palíndromo</h3>`

    }

}

function calcUmDoisTresPi(){
    const limite = Number(document.getElementById("limite").value)

    for(i = 1; i < limite; i++){
        if(i % 3 == 0){
            document.getElementById("saida").innerHTML += `${i} PI `
        }
        else {
            document.getElementById("saida").innerHTML += `${i} -  `

        }
    }
}

function calcReforma() {

    const xA = Number(document.getElementById("xA").value)
    const yA = Number(document.getElementById("yA").value)
    const xP = 100*Number(document.getElementById("xP").value)
    const yP = 100*Number(document.getElementById("yP").value)

    const numTotal = Math.ceil((xP/xA)*(yP/yA)*(1.05))

    document.getElementById("saida").innerHTML = `<h3>O total de azulejos é: ${numTotal}</h3>`

}