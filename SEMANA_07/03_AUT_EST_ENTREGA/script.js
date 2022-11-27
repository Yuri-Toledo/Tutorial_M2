function calcTabuada(n1, n2, n3) {
    let cont = n2;

    while(cont < n3){
        document.getElementById(`saida`).value = `<h3>${n1} * ${cont} = ${n1*cont}</h3>`
        cont = cont + 1
    }
}