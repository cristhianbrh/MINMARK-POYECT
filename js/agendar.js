
const eyes = document.querySelectorAll(".secretEye");
const input_password = document.getElementById("inputForm_password");

let mostrar = true;

const newTemplate = ()=>{
    eyes[0].style.display = mostrar?"none":"block";
    eyes[1].style.display = !mostrar?"none":"block";
    input_password.type = !mostrar?"password":"text";
    mostrar = !mostrar;
    
}

eyes[0].addEventListener('click', newTemplate);
eyes[1].addEventListener('click', newTemplate);

function viewDataClick(nameId, classNames, classNew = ""){
    const sectionUser_form_detailsUser = document.getElementById(nameId);
    sectionUser_form_detailsUser.className = `${classNames} ${classNew}`;
}




// function onclickInTable_User(e){
//     const input_DNI = document.getElementById("input_DNI")
//     const input_Nombre = document.getElementById("input_Nombre")
//     const input_Correo = document.getElementById("input_Correo")
//     const input_Select_Rol = document.getElementById("input_Select_Rol")
//     const input_Select_Estado = document.getElementById("input_Select_Estado")

//     console.log(e)
//     console.log("Lol")



// }