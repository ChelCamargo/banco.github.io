const formHtml = document.getElementById('form');

const data=[
    {
        usuarioDB:'Mali',
        passwordDB: '1234',
        saldo: '200'
    },
    {
        usuarioDB: 'Gera',
        passwordDB: '7890',
        saldo: '290'
    },
    {
        usuarioDB: 'Mauli',
        passwordDB: '3456',
        saldo: '67'
    }
]
function mostrarErrores(tipo){
    let error =document.getElementById(`error${tipo}`);
    error.classList.remove('escondido');
    error.classList.add('error');
    setTimeout(()=>{
        error.classList.remove('error');
        error.classList.add('escondido');
    }, 2000);

}

function validarDatos(user,pass,saldo,nuevoSaldo,nuevoSaldo1,cantidad,cantidad1,resultado1,resultado,retiro,canti){
    for(let index=0; index < data.length; index ++)
    {
     if(user===''&&pass==='')
     {
    
        mostrarErrores("Datos");
     }
     else if(user !== data[index].usuarioDB){
        
        mostrarErrores("Usuario");
     }
     else if(pass !==data[index].passwordDB){
        
        mostrarErrores("Password");
     }
     else {
        console.log(prompt("Bienvenido a BBVA",user), prompt("tu saldo es de: ",(data[index].saldo)));
        let retiro= prompt("Si deseas retirar monto? si/no");
        if(retiro=='si'){
            let  cantidad=prompt("Que cantidad deseas retirar? 100, 200, 500");
                let resultado=parseInt(data[index].saldo)-cantidad;
                    if(cantidad>data[index].saldo){
                        console.log(alert("no tienes esa cantidad"));
                    }else {
                        console.log(prompt("tu nuevo saldo es: ", resultado));
                        console.log(alert("Gracias por usar ser parte de BBVA"));
                        break;
                    }
        }
        else if(retiro=='no'){
            let cantidad1=parseInt(prompt("Que cantidad deseas depositar? 100, 200, 500"));
            let canti=parseInt(data[index].saldo);
            let total=parseInt(canti+cantidad1);
            
                console.log(alert("tu nuevo saldo es: "+ total));
                console.log(alert("Gracias por ser parte de BBVA."));
            /*else if(cantidad1>=900);
               console.log(alert("No puedes hacer depositos mayores, por favor pasa a cajas."));
               console.log(alert("Gracias por ser parte de BBVA."));
            */
            }
           
            } 
        }
        
    }
    


   


formHtml.addEventListener('submit',(evento) =>{
    evento.preventDefault();

    let usuarioHtml =document.getElementById('inputUsuarioHtml').value;
    let passwordHtml =document.getElementById('inputPasswordHtml').value;


    validarDatos(usuarioHtml,passwordHtml);
})
