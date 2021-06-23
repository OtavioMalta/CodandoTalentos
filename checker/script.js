
function clearText(){
    document.getElementById("texto1").value = "";
    document.getElementById("texto2").value = "";

}

function clearText2(){
    document.getElementById("texto3").value = "";
    document.getElementById("texto4").value = "";

}
function opc(){
    var opcao = document.getElementsByName("opc");
    var escolha;
    for (var i = 0; i < opcao.length; i++){
        if (opcao[i].checked){
            escolha = opcao[i].value;
            break;
        }
    }
    if (escolha == "checar"){
        document.getElementById("compara").style.display = "none";
        document.getElementById("checa").style.display = "inline";
    }else{
        document.getElementById("compara").style.display = "inline";
        document.getElementById("checa").style.display = "none";
    }
}

function tam(){
    if (document.getElementById("check").checked){
        var string1 = document.getElementById("texto1").value;
        var string2 = document.getElementById("texto2").value;
    }else{
        var string1 = document.getElementById("texto1").value.toLowerCase();
        var string2 = document.getElementById("texto2").value.toLowerCase();
    }
    if (string1==string2){
        document.getElementById("resposta").innerHTML = "Iguais!";
        document.getElementById("resposta").style.color = '#8afc9f';
        document.getElementById("resposta").style.fontWeight = 'bold';
        document.getElementById("resposta").style.fontSize = '180%'
    }else{
        document.getElementById("resposta").innerHTML = "Diferentes!";
        document.getElementById("resposta").style.color = '#ffa093';
        document.getElementById("resposta").style.fontWeight = 'bold';
        document.getElementById("resposta").style.fontSize = '180%'

    }
}
function saida(){
    var opc = document.getElementsByName("opc2");
    var escolha;
    for (var i = 0; i < opc.length; i++) {
        if (opc[i].checked) {
            escolha = opc[i].value;
            break;
        }
    }if (escolha == "sim"){
        document.getElementById("out").style.display = "inline";
        document.getElementById("out").style.display = "inline";
    }else{
        document.getElementById("out").style.display = "none";
    }
}
function conferirTam(){
    var tam, tamMax,esp;
    
    tam = document.getElementById("texto3").value.length;
    document.getElementById("res").innerHTML=tam;

    esp = document.getElementById("texto3").value.replace(/\s/g, '');
    document.getElementById("esp").innerHTML=esp.length;

    tamMax = document.getElementById("tamMax").value;

    if (tam <= tamMax || tamMax == ""){
        document.getElementById("status").innerHTML="DENTRO do permitido"
        document.getElementById("status").style.color = '#8afc9f';
        document.getElementById("status").style.fontWeight = 'bold';
    }else{
        document.getElementById("status").innerHTML="FORA do permitido"
        document.getElementById("status").style.color = '#ffa093';
        document.getElementById("status").style.fontWeight = 'bold';
    }
}
function capitalize(string){
    return string.replace(/\b(\w)/g, s => s.toUpperCase());
}
function tipo(){
    var opcao = document.getElementsByName("opc3");
    var escolha;
    for (var i = 0; i < opcao.length; i++){
        if (opcao[i].checked){
            escolha = opcao[i].value;
            break;
        }
    
    }if(escolha == "upc"){
        texto = document.getElementById("texto3").value;
        document.getElementById("texto4").innerHTML = texto.toUpperCase();
    }else if (escolha == "low"){
        texto = document.getElementById("texto3").value;
        document.getElementById("texto4").innerHTML = texto.toLowerCase();
    }else if(escolha =="cap"){
        texto = document.getElementById("texto3").value;
        document.getElementById("texto4").innerHTML  = capitalize(texto);
    }else if (escolha == "none"){
        document.getElementById("texto4").innerHTML  = "";
    }
}


