let UC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let LC = "abcdefghijklmnopqrstuvwxyz";
let NUM = "1234567890";
let SYM = "~!@#$%^&*()_+/";

let upp = document.getElementById("upper-case");
let low = document.getElementById("lower-case");
let char = document.getElementById("total-char");
let num = document.getElementById("numbers");
let sym = document.getElementById("symbols");
let ps = document.getElementById("pass-box");

function getrandom(ds) {
    return ds[Math.floor(Math.random() * ds.length)];
}

function getpass(password=""){
    if(upp.checked){
        password=password+getrandom(UC);
    }
    if(low.checked){
        password=password+getrandom(LC);
    }
    if(num.checked){
        password=password+getrandom(NUM);
    }
    if(sym.checked){
        password=password+getrandom(SYM);
    }
    if(password.length < char.value){
        return getpass(password);
    }
    ps.innerText = trim(password,char.value);
}
getpass();
document.getElementById("btn").addEventListener("click",function(){
    getpass();
});

function trim(str,num){
    if(str.length>num){
        let substr = str.substring(0,num);
        return substr;
    }
    else{
        return str;
    }
}