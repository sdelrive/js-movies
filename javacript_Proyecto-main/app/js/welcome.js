const nameInput = document.getElementById("inputName");
const passInput = document.getElementById("inputPass");
const btnLogin = document.getElementById("btnLogin");
const layout = document.querySelector(".layout-store");



  //Evento para el boton de Ingresar
btnLogin.addEventListener("click",()=>{
    inputData();
});

function saveUser(){
  var name = document.getElementById("inputName").value;
  localStorage.setItem("userName", name);
  return localStorage.getItem("userName");
}

function inputData() {

    chequeoDatos(saveUser());
   
  };

function chequeoDatos(el){

  if(el ===''){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Ingrese datos de usuario válidos.',
      footer: '<a href="">Why do I have this issue?</a>'
    });
 }else{
  indexRedirect();
} 

}


  function indexRedirect(){

    // alert("sii");
    window.location.href = './pelis.html';

  };