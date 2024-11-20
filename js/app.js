
function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);
    
    

    if(tipo.value == 'pista') {
        comprarPista(qtd);
    } else if(tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else {
        compraInferior(qtd);
    }

      

}
function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    
    

    if (qtd > qtdPista){
        alert('Quantidade indisponível para o tipo Pista');
    } else {
        qtdPista = qtdPista - qtd; 
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
    
}
function comprarSuperior(qtd) {
    let qtdsuperior = parseInt(document.getElementById('qtd-superior').textContent);

  
   if (qtd > qtdsuperior){
    alert('Quantidade indisponível para o tipo Cadeira Superior');
} else {
    qtdsuperior = qtdsuperior - qtd; 
    document.getElementById('qtd-superior').textContent = qtdsuperior;
    alert('Compra realizada com sucesso!');
}
}
function compraInferior(qtd) {
    let qtdinferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (qtd > qtdinferior){
        alert('Quantidade indisponível para o tipo Cadeira Inferior');
    } else {
        qtdinferior = qtdinferior - qtd; 
        document.getElementById('qtd-inferior').textContent = qtdinferior;
        alert('Compra realizada com sucesso!');
    }
}



 