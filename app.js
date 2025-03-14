
window.onload = function() {

    let pronombre = ['the', 'our'];
    let adjetivo = ['great', 'big', ];
    let nombre = ['jogger',"lees", 'racoes', "bacom"];
    let punto = ['.com', '.es', ".net"];
  
    let sinOrganizar = "";
  
    let arrayCom = [];
    let arrayNet = [];
    let arrayEs = [];
   
  
   //////////////////////////////////////////////////
  //funcion creacion de dominos desorganizados
  //////////////////////////////////////////////////
    let crearArraysJuntos = () => {
      pronombre.forEach(pronombre => {
        adjetivo.forEach( adjetivo => {
          nombre.forEach(nombre => {  
            if( nombre.includes("com")){       
              nombre = nombre.slice(0,nombre.length-3);
            }
            else if( nombre.includes("net")){
              nombre = nombre.slice(0,nombre.length-3);    
            }
            else if( nombre.includes("es")){
              nombre = nombre.slice(0,nombre.length-2);
            }
            punto.forEach(punto => {
              let textoJuntos = pronombre + adjetivo + nombre + punto;
              creactionTexto(textoJuntos);
  
            });
          })
        })
      })
    }
  
  //////////////////////////////////////////////////
  //funcion creacion de dominos organizados
  //////////////////////////////////////////////////
    function creactionTextoOrgaizado(){
      sinOrganizar.childNodes.forEach(parrafo => {
        if( parrafo.innerHTML.includes("com")){
          arrayCom.push(parrafo.innerHTML);
        }
        if( parrafo.innerHTML.includes("net")){
          arrayNet.push(parrafo.innerHTML);
        }
        if( parrafo.innerHTML.includes("es")){
          arrayEs.push(parrafo.innerHTML);
        }
      })
      recorreYpuestra(arrayCom, arrayNet,arrayEs)
    }
  
    crearArraysJuntos();
    creactionTextoOrgaizado();
  
  
  
  //////////////////////////////////////////////////
  //funcion inserta en el html el texto sin organizar
  //////////////////////////////////////////////////
    function creactionTexto(autores){
      let  parrafo = document.createElement("p");
      parrafo.innerHTML = autores;
      sinOrganizar = document.getElementById("sinOrganizar");
      sinOrganizar.appendChild(parrafo);
    }
   
  
  
  
  //////////////////////////////////////////////////
  //funcion inserta en el html el texto organizado
  //////////////////////////////////////////////////
      function recorreYpuestra(elem1, elem2, elem3){
  
        elem1 = [...elem1];
        elem2 = [...elem2];
        elem3 = [...elem3]
  
        elem1.forEach(elem => {
          organizados.innerHTML += `<p style="color:green">${elem}</p>`
        })
        elem2.forEach(elem => {
          organizados.innerHTML += `<p style="color:#df5a09">${elem}</p>`
        })
        elem3.forEach(elem => {
          organizados.innerHTML += `<p style="color:#0b6bd1">${elem}</p>`
        })
  
      }
  }; 