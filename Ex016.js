function contar() {
    
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var contando =  document.getElementById('contando')
     
    if ( inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        contando.innerHTML = "Impossível contar!"
        window.alert('Erro! Verifique os campos e tente novamente .')

    }
    
    else {
        contando.innerHTML = 'Contando :<br> '
        //let = var
        var i = Number(inicio.value) 
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0 ){
            alert('Passo Inválido! Considerando p = 1 .')
            p=1;
        }
        //crescente 
        if ( i < f){
        for ( var cont = i ; cont<= f ; cont += p ){
        contando.innerHTML +=  ` Passo ${cont} \u{1F449}`
        }
    }
    //decrescente
    else { 
        for (var cont = i ; cont >= f ; cont -=p){
            contando.innerHTML +=  ` Passo ${cont} \u{1F449}`
        }
        
    }
}
    contando.innerHTML += `\u{1F3C1}`
}

   