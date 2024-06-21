addEventListener(`keydown`,function(event){
    if(event.key === `Enter`){
        entrar();
    }
});

function entrar(){
    let usuario=document.getElementById("usuario");
    let senha =document.getElementById("senha");
    let aviso=document.getElementById("aviso");
    if(usuario.value =='admin' && senha.value == 'admin'){
        usuario.value="";
        senha.value="";
        aviso.innerHTML=""
        usuario.classList.remove("errado");
        senha.classList.remove("errado");
        window.location.href= "cad_contato.html";
    }else if(usuario.value !='admin' && senha.value==`admin`){
        aviso.innerHTML=`Usuario Incorreto`;
        usuario.value="";
        senha.value="";
        usuario.classList.add("errado");
        senha.classList.remove("errado");
    }else if(usuario.value =='admin' && senha.value !=`admin`){
        aviso.innerHTML=`Senha Incorreto`;
        senha.value="";
        usuario.value="";
        usuario.classList.remove("errado");
        senha.classList.add("errado");
    }else{
        aviso.innerHTML=`Usuario e Senha Incorreto`;
        usuario.value="";
        senha.value="";
        usuario.classList.add("errado")
        senha.classList.add("errado");
    }

}