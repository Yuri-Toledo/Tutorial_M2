function calcula1(){
    const v0 = document.getElementById("V0").value
    const g = 10;
    let ts = v0/g;
    let hmax = ((v0)^2)/(2*g);

    document.getElementById("saida").innerHTML = `<p>Hmax = ${hmax}</p><br><p>Tempo = ${ts}</p>`;
};

function calcula2(){
    const a = document.getElementById("a").value
    const b = document.getElementById("b").value
    const c = document.getElementById("c").value

    const Xv = -b/(2*a)
    const Yv = -(b*b - 4*a*c)/4*a

    document.getElementById("saida").innerHTML = `<p>(${Xv}, ${Yv})<?p>`
};

function calcula3(){
    const temp = document.getElementById("temp").value
    let resultado
    const select = document.getElementById('select')
    const text = select.options[select.selectedIndex].text;

    if(text === 'Celsius -> Farenheit'){
        resultado = (5/9)*(temp-32)
        document.getElementById("saida").innerHTML = `<p>${temp}° = ${resultado} Farenheits</p>`
    }

    // if(text === "Farenheit -> Celsius"){
    else {
        resultado = (9*temp)/5 + 32
        document.getElementById("saida").innerHTML = `<p>${temp} Farenheits = ${resultado}° </p>`
    }

};

function calcula4(){
    
    const quantidade = document.getElementById("quantidade").value
    const valor_unitario = document.getElementById("valor_unitario").value


    let valor_total = quantidade*valor_unitario

    if(quantidade > 100 && quantidade <= 200){
        valor_total = valor_total*1.25
    }
    else if(quantidade > 200){
        valor_total = valor_total*1.5
    }

    document.getElementById("saida").innerHTML = `<p>${valor_total}</p>`
    
};
