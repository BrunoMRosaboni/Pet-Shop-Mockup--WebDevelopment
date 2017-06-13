function mascara(o, f) {
    v_obj = o;
    v_fun = f;
    setTimeout("execmascara()", 1);
}
function execmascara() {
    v_obj.value = v_fun(v_obj.value);
}

function soLetras(v){  
    return v.replace(/\d/g,"") //Remove tudo o que não é Letra  
}  
  
function soLetrasMA(v){  
    v=v.toUpperCase() //Maiúsculas  
    return v.replace(/\d/g,"") //Remove tudo o que não é Letra ->maiusculas  
} 

function checaCPF(v) {
    v = v.replace(/\D/g, "")
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1-$2");
    return v;
}
function checaCEP(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{5})(\d)/, "$1-$2");
    return v;
}
function checaCNPJ(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{2})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1/$2");
    v = v.replace(/(\d{4})(\d)/, "$1-$2");
    return v;
}
function checaData(v) {
    v = v.replace(/\D/g, ""); 
    v = v.replace(/(\d{2})(\d)/, "$1/$2");
    v = v.replace(/(\d{2})(\d)/, "$1/$2");
    return v;
}
function checaHorario(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{2})(\d)/, "$1:$2");
    return v;
}
function checaMesAno(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{2})(\d)/, "$1/$2");
    return v;
}
function cepverif(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{5})(\d)/, "$1-$2");
    return v;
}
function checaTelefone(v) {
    if( v.length < 15 ) {
        v = v.replace(/\D/g, "");
        v = v.replace(/^(\d\d)(\d)/g, "($1) $2");
        v = v.replace(/(\d{4})(\d)/, "$1-$2");
    }
    else {
        v = v.replace(/\D/g, "");
        v = v.replace(/^(\d\d)(\d)/g, "($1) $2");
        v = v.replace(/(\d{5})(\d)/, "$1-$2");
    }
    return v;
}
function checaNumero(v) {
    v = v.replace(/\D/g, "");
    return v;
}
function checaValor(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{1})(\d{14})$/, "$1.$2");
    v = v.replace(/(\d{1})(\d{11})$/, "$1.$2");
    v = v.replace(/(\d{1})(\d{8})$/, "$1.$2");
    v = v.replace(/(\d{1})(\d{5})$/, "$1.$2");
    v = v.replace(/(\d{1})(\d{1,2})$/, "$1,$2");
    v = v.replace(/^(\d)/g, "R$ $1");
    return v;
}