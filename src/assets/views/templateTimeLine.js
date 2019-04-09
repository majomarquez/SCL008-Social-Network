import {signOut, observer} from "./../js/auth.js";
import {templatePost} from"./../views/templatePost.js"
import {postRead} from "../js/datamodel.js";

export const templateTimeLine = () =>{
    observer();
    postRead();
    document.getElementById('containersocialnetwork').innerHTML=
                        `
                        <nav id="navinformation">                                                                                  
                            <a href="#/profile" class="brand-logo">
                                <img src="assets/Images/logoBlanco.png" id="btnprofile" alt="Perfil Usuario"/>                            
                            </a>  
                            <button id="btnup">
                                <img src="assets/Images/pageup.png" id="up" alt="Boton subir"/>  
                            </button> 
                            <button id="btnsignout">
                                <img src="assets/Images/logout.png" id="logout" alt="Boton salir aplicación"/>  
                            </button>  
                        </nav>

                        <section id="userinformation">                            
                            <img src="" id="userphoto" alt="Foto del usuario"/>
                            <textarea id="text" placeholder="¿Qué estás pensando?"></textarea>                                                      
                        </section>
                        
                        <section id="timeline">
                            
                        </section>                    
                        `;
    
    document.getElementById('text').addEventListener('click',()=>{
        templatePost();
        window.location.hash="#/post";        
    })
    //evento para cerrar la sesión del usuario
    document.getElementById('btnsignout').addEventListener('click', ()=>{
        signOut();
    })

    //evento que sirve para volver al inicio de la pantalla
    document.getElementById("btnup").addEventListener('click',()=>{
        window.scrollTo(0,0);
    });    

}

    /*Función que imprime el html de los mensajes publicados*/
export const renderPost =(doc) =>{

        console.log(`${doc.id} => ${doc.data().message}`);
        document.getElementById('timeline').innerHTML +=
        `   
            <article class="post">
                <h3 id="userpost">${doc.data().user}</h3>
                <h4 id="postread">${doc.data().message}</h4>                          
                <button id="update">Editar</button>
                <button id"delete">Eliminar</button>
            </article>
        `
        
        
    }

