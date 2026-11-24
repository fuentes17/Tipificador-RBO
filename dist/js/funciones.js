document.addEventListener("click", handleClick);
document.addEventListener("change", handleCambio);
contador = document.getElementById("agendas");
contador1 = document.getElementById("canceladas");
document.getElementById("Formato").style.display = "none";
let numero = parseInt(localStorage.getItem("agendar")) || 0
let numero1 = parseInt(localStorage.getItem("Cancelar")) || 0
var k;
var nombreAsesor;
var agentAsesor;
var t=""
var c=""


function handleClick(evento) {
  if (evento.target.matches("#button-addon1")) {
    handleCuota();
  } else if (evento.target.matches("#limpiar")) {
    resetearFormularios();
  } else if (evento.target.matches("#limpiar1")) {
    resetearFormulariosChat();
  } else if (evento.target.matches("#Tipificar")) {
    k = 0;
    GuardarDatos(k)
  } else if (evento.target.matches("#CopiarT")) {
    CopiarLLamada();
  } else if (evento.target.matches("#formatear")) {
       d = document.getElementById("direccion").value;
       d=direccion(d);
       copiarYAlertar(d);
       document.getElementById("direccion").value = ""

  } else if (evento.target.matches("#imagen")) {
    subirImagen();
  } else if (evento.target.matches("#chat")) {
    // handleMotivoChat();
    k = 1;
    GuardarDatos(k)
  } else if (evento.target.matches("#plantillas")) {
    TextoPlantilla();
  } else if (evento.target.matches("#CopiarT1")) {
    CopiarChat();
  }  else if (evento.target.matches("#dispo")) {
    Dispon();
  } else if (evento.target.matches("#cambio")) {
    cambio()
  }
}



  



function toggleDisplay(selectors, displayValue) {
  selectors.forEach((selector) => {
    document.querySelector(selector).style.display = displayValue;
  });
}

function setBackgroundColor(color) {
  document.getElementById("color").style.background = color;
}

function setInnerHTML(selector, html) {
  document.querySelector(selector).innerHTML = html;
}

function handleCambio(e) {
  const Mo = document.querySelector("#Motivo").value;
  const Mo1 = document.querySelector("#Motivo1").value;
  const Mot = document.querySelector("#exampleDataList1").value;
  const tecn = document.getElementById("TEC").checked;
  const int = document.getElementById("inten").checked;
const planus = document.getElementById("planUsuario").value;





if (["#planUsuario"].some((selector) => e.target.matches(selector))) {
	if(planus=="APPS_STREAM"){
seleccion = "APPS_STREAM"
}else{
seleccion = "otros"
}

   llenarinput2(seleccion)

  }






if (["#btncheck3"].some((selector) => e.target.matches(selector))) {

    document.getElementById("btncheck2").checked = false;
}

if (["#btncheck2"].some((selector) => e.target.matches(selector))) {

    document.getElementById("btncheck3").checked = false;
}


  if (["#DIRAGQU"].some((selector) => e.target.matches(selector))) {
    const er = document.getElementById("DIRAGQU").value
    if (er != "CANCELAR") {
      document.getElementById("direrr").value = "Complemento"
    }
  }

  if (["#dir"].some((selector) => e.target.matches(selector))) {
    let p = document.getElementById("dir").checked;

    if (Mo1 === "3") {
      if (p) {
        setInnerHTML("#Musuario", "Cliente necesita XXXX DECOS será aprobada el incremento del valor de la factura en terreno con el titular, Sr Tecnico debe gestionar con Línea de Rescate. NO SE MODIFICA TAG EN TOA");

        toggleDisplay(["#Musuariod"], "block");
      } else {
        setInnerHTML("#Musuario", "Contesta indica que");

        toggleDisplay(["#Musuariod"], "none");
      }
    } else {
      if (p) {
        toggleDisplay(["#direco"], "block");
      } else {
        toggleDisplay(["#direco"], "none");
      }
    }

  }


  
 


  if (["#inten", "#TEC", "#exampleDataList1"].some((selector) => e.target.matches(selector))) {
        
  
     
    
    document.getElementById("Mtecnico").value = ""
          setBackgroundColor("#FF0000");
             toggleDisplay(["#tec", "#MoQuiebre1", "#plan12","#footer","#MotivoTec"], "block");
                   setInnerHTML("#TC", "AGENDA");
    if (k == "1") {
   
if (tecn) {
          setBackgroundColor("#28A745");
          
        } else {
          document.getElementById("Mtecnico").value = ""
          setBackgroundColor("#FF0000");
          
        }


      if (int) {
        toggleDisplay(
          ["#Titular", "#footer1", "#Musuariod", "#Motiv1", "#cambio"],
          "none"
        );

      } else {
        toggleDisplay(
          ["#Titular", "#footer1", "#Musuariod", "#Motiv1"],
          "block"
        );
        toggleDisplay(["#tec", "#MoQuiebre1", "#MotivoTec", "#footer"], "none");
        handleMotivoChat(Mo1);
      }
    } else if (k == "0") {
      if (int && Mo == "0") {
        toggleDisplay(["#tec", "#MoQuiebre", "#MoQuiebre1",], "block");
        toggleDisplay(
          ["#Titular", "#fecha", "#Musuariod", "#MoQuiebre", "#Motiv", "#cambio"],
          "none"
        );

        if (tecn && Mot != "NO EXISTE RED FTTH") {
          setBackgroundColor("#28A745");
          toggleDisplay(["#MotivoTec"], "none");
        } else if (tecn && Mot === "NO EXISTE RED FTTH") {
          toggleDisplay(["#MotivoTec"], "block");
          setBackgroundColor("#28A745");
          document.getElementById("Mtecnico").value = "y la CTO viable para instalación es XXXX si es un conjunto/edificio favor dejar comentarios y soporte fotográfico del predio  "
        } else {
          document.getElementById("Mtecnico").value = ""
          setBackgroundColor("#FF0000");
          toggleDisplay(["#MotivoTec"], "block");
        }


      } else {
        toggleDisplay(["#Motiv", "#Formatod", "#footer"], "block");
        toggleDisplay(["#MoQuiebre1", "#Motiv1", "#footer1"], "none");
        handleMotivo(Mo);
      }
    } else {
      if (tecn) {
        setInnerHTML("#Musuario", "Contesta y cuelga");
        setBackgroundColor("rgb(255, 126, 5)");
        toggleDisplay(["#Musuariod", "#Titular" , "#tec"], "block");
        toggleDisplay(["#MotivoTec", "#fecha", "#MoQuiebre"], "none");
      } else {
        setBackgroundColor("rgb(255, 126, 5)");
        toggleDisplay(["#Titular", "#tec"], "block");
        toggleDisplay(["#MotivoTec", "#Musuariod", "#fecha", "#MoQuiebre"], "none");
      }

    }

       
    
  }

  if (["#Motivo"].some((selector) => e.target.matches(selector))) {
    toggleDisplay(["#Motiv", "#Formatod", "#footer"], "block");
    toggleDisplay(["#MoQuiebre1", "#Motiv1", "#footer2", "#footer1"], "none");
    handleMotivo(Mo);
  } else if (
    ["#Motivo1", "#pl"].some((selector) => e.target.matches(selector))
  ) {
    
  

    toggleDisplay(["#Motiv1", "#Formatod", "#footer1"], "block");
    toggleDisplay(
      ["#MoQuiebre1", "#Motiv", "#footer", "#footer2", "#intentos", "#tec"],
      "none"
    );
    handleMotivoChat(Mo1);
  } 
    let p = document.getElementById("FD").checked;
    if (p) {
      toggleDisplay(["#Formato"], "block");
    } else {
      toggleDisplay(["#Formato"], "none");
    }
  
}



function handleMotivo() {
   setBackgroundColor("#1392F1");
      toggleDisplay(
        [
          "#MotivoTec",
          "#Musuariod",
          "#fecha",
          "#MoQuiebre",
          "#tec",
          "#MoQuiebre1",
          "#Fecgaws",
          "#Cdire",
          "#TipoPredio",
          "#direco",
          "#footer1", 
          "#footer2", 
          "#Motiv1",
          "#plan12",
          "#Formato",
          "#AgIncu"
        ],
        "none"
      );
      toggleDisplay(
        ["#Titular", "#intentos", "#Formatod", "#Motiv", "#cambio","#footer"],
        "block"
      );
      setInnerHTML("#inte", "Quiebres Técnicos");

  setInnerHTML("#exampleModalLabel", "Tipificar LLamadas")

  let Mo = document.getElementById("Motivo").value

  const tecn = document.getElementById("TEC").checked;
  setInnerHTML("#Musuario", "Contesta indica que");
  const int = document.getElementById("inten").checked;
  switch (Mo) {
    case "1":
      setBackgroundColor("#28A745");
      toggleDisplay(
        [
          "#intentos",
          "#tec",
          "#MotivoTec",
          "#MoQuiebre",
          "#Fecgaws",
          "#Cdire",
        ],
        "none"
      );
      toggleDisplay(["#Titular", "#fecha", "#Musuariod", "#TipoPredio","#AgIncu"], "block");
      break;
    case "2":
      setBackgroundColor("#FF0000");
      toggleDisplay(
        ["#intentos", "#tec", "#fecha", "#Fecgaws", "#Cdire"],
        "none"
      );
      toggleDisplay(["#Titular", "#Musuariod", "#MoQuiebre", "#TipoPredio"], "block");
      break;
    case "3":
      handleNoContacto(int, tecn);
      toggleDisplay(
        ["#Formatod", "#footer1", "#Fecgaws", "#Cdire", "#TipoPredio"],
        "none"
      );
      document.querySelector("#FD").checked = false;
      break;

    case "4":
        handleNoContacto(int, tecn);
        toggleDisplay(
          ["#Formatod", "#footer1", "#Fecgaws","#Cdire","#intentos", "#tec", "#TipoPredio"],
          "none"
        );
        toggleDisplay(["#Titular", "#Musuariod", "#fecha"], "block");
        setInnerHTML("#Musuario", "Se registra agenda tentativa para proceder a suspender nuevamente la orden");
        document.querySelector("#FD").checked = false;
        break;
  }
}

function handleMotivoChat() {
 
  setBackgroundColor("#1392F1");
      toggleDisplay(
        [
          "#MotivoTec",
          "#fecha",
          "#MoQuiebre",
          "#tec",
          "#MoQuiebre1",
          "#Motiv",
          "#footer",
          "#Fecgaws",
          "#Cdire",
          "#footer2",
          "#TipoPredio",
          "#direco", 
          "#Formato",
          "#AgIncu"
        ],
        "none"
      );

      setInnerHTML("#inte", "Quiebres Técnicos");
      toggleDisplay(
        ["#Titular", "#Musuariod", "#intentos", "#Formatod", "#footer1", "#Motiv1", "#cambio"],
        "block"
      );
  setInnerHTML("#exampleModalLabel", "Tipificar Chat")
  let Mo1 = document.getElementById("Motivo1").value
  setInnerHTML("#Musuario", "indica que");
  switch (Mo1) {

    case "1":
      setBackgroundColor("#28A745");
      toggleDisplay(
        ["#MoQuiebre", "#Fecgaws", "#Cdire"],
        "none"
      );
      toggleDisplay(["#Titular", "#fecha", "#Musuariod", "#Motiv1", "#TipoPredio"], "block");
      break;
    case "2":
      setBackgroundColor("#FF0000");
      toggleDisplay(["#fecha", "#Fecgaws", "#Cdire", "#TipoPredio"], "none");
      toggleDisplay(
        ["#Titular", "#Musuariod", "#MoQuiebre"],
        "block"
      );
      break;
    case "3":
      setBackgroundColor("rgb(255, 126, 5)");
      toggleDisplay(
        [
          "#MoQuiebre",
          "#Titular",
          "#Musuariod",
          "#Fecgaws",
          "#Motiv",
          "#TipoPredio",
        ],
        "none"
      );
      setInnerHTML("#confdr", "Mas Decos");
      toggleDisplay(["#fecha", "#Cdire", "#Motiv1"], "block");
      break;

    case "4":


      setBackgroundColor("rgb(255, 126, 5)");

      toggleDisplay(
        ["#MoQuiebre", "#fecha", "#Cdire", "#TipoPredio", "#Musuariod"],
        "none"
      );
      toggleDisplay(["#Titular", "#Fecgaws"], "block");
      break;

  }
}

function handleNoContacto(inten, tecn) {
  setInnerHTML("#inte", "6 INTENTOS");
  if (inten && !tecn) {
    setInnerHTML("#TC", "COMENTARIOS TECNICO");
    toggleDisplay(["#MoQuiebre", "#tec"], "block");
    toggleDisplay(["#MotivoTec", "#Musuariod"], "none");
  } else if (inten && tecn) {
    setInnerHTML("#TC", "COMENTARIOS TECNICO");
    toggleDisplay(["#MoQuiebre", "#MotivoTec", "#tec"], "block");
    toggleDisplay(["#Musuariod"], "none");
  } else if (!inten && tecn) {
    setInnerHTML("#TC", "CONTESTA");
    setInnerHTML("#Musuario", "Contesta y cuelga");
    toggleDisplay(["#intentos", "#MotivoTec", "#fecha", "#MoQuiebre"], "none");
    toggleDisplay(["#tec", "#Titular", "#Musuariod"], "block");
  } else {
    setBackgroundColor("rgb(255, 126, 5)");
    setInnerHTML("#TC", "CONTESTA");
    toggleDisplay(["#MotivoTec", "#fecha", "#Musuariod", "#MoQuiebre"], "none");
    toggleDisplay(["#intentos", "#tec", "#Titular"], "block");
  }
}

function handleCuota() {
  const valor1 = document.getElementById("Motivo1").value;
  cuota = document.getElementById("Fecha").value;
  franja = document.getElementById("Franja").value;

  let texto = ""
  let aler = ""


  try {

    if (cuota) {
      if (valor1 !== "0") {
        texto = `PROYECTO EVA: ¡Hola! Solicito un cupo para el día ${cuota} en la franja ${franja} para la orden `;

      } else {
        texto = `¡Hola! Solicito un cupo para el día ${cuota} en la franja ${franja} para la orden `;
      }
    } else {
      aler = "Escoja Fecha"
    }
    if (texto) {
      copiarYAlertar(texto);
    }
  if (aler) {
      alertaSencilla("sencilla",aler,"","info")
  }

  } catch (error) {
    console.error("Error al copiar al portapapeles:", error);
  }
}

function resetearFormulariosChat() {
  if (document.getElementById('divAdicional1')) {
    divAdicional1.remove()
  }


  Formulario.reset();
  handleMotivoChat();
}

function resetearFormularios() {
  if (document.getElementById('divAdicional1')) {
    divAdicional1.remove()
  }
  valor = document.querySelector("#Motivo").value;
  int = document.getElementById("inten").checked;
  if (int && valor == "0") {
    document.getElementById("Mtecnico").value = "";
    document.getElementById("exampleDataList1").value = "";
  } else {

    Formulario.reset();
    handleMotivo();
  }
}

function CopiarLLamada() {
  const valor = document.querySelector("#Motivo").value;
  const tecn = document.getElementById("TEC").checked;
  const inten = document.getElementById("inten").checked;
  const MotTecnico = document.getElementById("Mtecnico").value;
  const NumT = document.getElementById("NumTitular").value;
  const NomT = document.getElementById("NomTitular").value;
  const mq = document.getElementById("exampleDataList").value;
  const mq1 = document.getElementById("exampleDataList1").value;
  const MotUsuario = document.getElementById("Musuario").value;
  const Fecha = document.getElementById("Fecha").value;
  const Franja = document.getElementById("Franja").value;
  const fecha = new Date().toLocaleDateString();
  const firma = document.getElementById("FirmaAgent").value;
  const predio = document.getElementById("predio").value;
  const pisos = document.getElementById("Cantpi").value;
  const contadores = document.getElementById("Cantco").value;
  incumplimiento = document.getElementById("incu").value;


  let texto = ""
  let aler = ""




  const manejarSuspension = () => {
    if (MotTecnico) {
      
    
    if (mq1 === "RECURSOS MAL APROVISIONADOS") {
       
        texto = `QT - ${mq1} se deja comentario de técnico o cto sugeridas " ${MotTecnico} " ${firma}.`;
        to(texto,"cancelar")
    } else {
    
        texto = `QT - ${mq1} se deja comentario de técnico " ${MotTecnico} "  ${firma}.`;
        to(texto,"cancelar")
        
      }

      }else{
texto = `QT - ${mq1} ${MotTecnico} ${firma}.`;
        to(texto,"cancelar")
      }
    
  };

  // Manejo de suspensiones
  if (inten && valor === "0") {

      manejarSuspension();
    
  } else {
 

     

      
    
    const contador = 1;
    const NumAdicionalID = `NumAdicional${contador}`; // Formamos el ID dinámico
    const NumTa = document.getElementById(NumAdicionalID)
      ? document.getElementById(NumAdicionalID).value
      : ""; // Obtenemos el valor del número adicional si existe


    switch (valor) {
      case "1":
        if (Fecha) {
  if (incumplimiento != "1") {
  texto += `${incumplimiento}`
  }
          texto += `Se marca al número ${NumT} titular ${NomT} ${MotUsuario} `;

          if (NumTa) {
            texto += `, se agrega número adicional ${NumTa} `;
          }
          if (predio !== "NO CONFIRMA" && predio !== "Tipo de Predio") {
            if (predio == "CASA") {
              texto += `indica que es una casa de barrio sin administración, `;

            } else if (predio == "CONJUNTO(casas)") {
              texto += `indica que es un conjunto de casas, `;
            } else if (predio == "CONJUNTO(torres)") {
              texto += `indica que es un conjunto de torres, `;
            } else {
              texto += `indica que es un ${predio}, `;
            }
          }

          if (pisos !== "NO CONFIRMA" && pisos !== "Cant Pisos") {
            if (pisos == "1") {
              texto += `con ${pisos} piso, `;
            } else {
              texto += `con ${pisos} pisos, `;
            }



          }

       if (contadores !== "NO CONFIRMA" && contadores !== "Cant Contadores") {
          if (contadores == "Compartidos") {
            texto += `con Contadores ${contadores},`;
          } else {
            texto += `con Contadores ${contadores},`;
          }

        }
          texto += ` se valida datos correctos se agenda para el día ${Fecha} en la franja ${Franja} Gestiona ${firma} ${fecha}`;
          to(NomT+NumT,"1");
        } else {
          aler = "Escoja Fecha de Agenda"

        }
        break;
      case "2":
        if (mq) {
  if (mq=="RECURSOS MAL APROVISIONADOS") {
  texto = "QT - "
  } else {
  texto = "QC - "
  }

          texto += `${mq} Se marca al número ${NumT} `;
          if (NumTa) {
            texto += `No contesta, se marca al número ${NumTa} `;
          }


          texto += `titular ${NomT} ${MotUsuario} `


          if (predio !== "NO CONFIRMA" && predio !== "Tipo de Predio") {
            if (predio == "CASA") {
              texto += `indica que es una casa de barrio sin administración, `;

            } else if (predio == "CONJUNTO(casas)") {
              texto += `indica que es un conjunto de casas, `;
            } else if (predio == "CONJUNTO(torres)") {
              texto += `indica que es un conjunto de torres, `;
            } else {
              texto += `indica que es un ${predio}, `;
            }
          }

          if (pisos !== "NO CONFIRMA" && pisos !== "Cant Pisos") {
            if (pisos == "1") {
              texto += `con ${pisos} piso, `;
            } else {
              texto += `con ${pisos} pisos, `;
            }



          }

         if (contadores !== "NO CONFIRMA" && contadores !== "Cant Contadores") {
          if (contadores == "Compartidos") {
            texto += `con Contadores ${contadores},`;
          } else {
            texto += `con Contadores ${contadores},`;
          }

        }

          texto += ` valida datos correctos, se procede a quebrar orden Gestiona ${firma} ${fecha}`;
          to(NomT+NumT,"cancelar");
        } else {

          aler = "Escoja Motivo de Quiebre"
        }
        break;
    case "3":
        if (inten) {
          if (mq) {


            texto = `QC - ${mq} Se marca al número ${NumT}`;
            if (NumTa) {
              texto += ` No contesta, se marca al número ${NumTa}`;
            }
            texto += ` titular ${NomT} se realizan 6 intentos de llamada no contesta se cancela orden bajo autorización de supervisor`;

            to(texto,"cancelar");
            if (tecn) {
              texto += ` se deja comentarios del técnico "${MotTecnico}"`;
            }
            texto += ` Gestiona ${firma} ${fecha}`;
          } else {

            aler = "Escoja Motivo de Quiebre"


          }
        } else if (tecn) {
          texto = `Se marca al número ${NumT} `;

          if (NumTa) {
            texto += `No contesta, se marca al número ${NumTa} `;
          }
          texto += ` titular ${NomT} ${MotUsuario} Gestiona ${firma} ${fecha}.`;
        } else {
          texto = `Se marca al número ${NumT} `;
          if (NumTa) {
            texto += `No contesta, se marca al número ${NumTa} `;
          }
          texto += ` titular ${NomT} no contesta Gestiona ${firma} ${fecha}.`;
        }
        break;



        case "4":
          if (Fecha) {
            texto = `Se marca al número ${NumT} titular ${NomT} ${MotUsuario} `; 
            if (NumTa) {
              texto += `, se agrega número adicional ${NumTa} `;
            }
            texto += `se agenda para el día ${Fecha} en la franja ${Franja} Gestiona ${firma} ${fecha}`;
          } else {
            aler = "Escoja Fecha de Agenda"
          }
          
        break;
      default:
        aler = "Escoja Motivo"
        break;
    }
  }
  if (NumT && NomT || inten) {
  texto = texto.replaceAll(/[()?¿#:–]/g, "")
  copiarYAlertar(texto);
    if (aler) {
      alertaSencilla("sencilla",aler,"","info")
  }
} else {
    alertaSencilla("","Favor LLenar Campos Solicitados","Nombre y numero telefonico","info")
}
 

}

function copiarYAlertar(t) {
  try {
  

      t = t.replaceAll("|", " ");
      navigator.clipboard.writeText(t);
      alertaSencilla("alerta_duplex",t)


  } catch (e) {
    Swal.fire({
      icon: "error",
      title: "Error al copiar al portapapeles",
    });
  }
}




function direccion(d) {

  d = d.replaceAll("|", " ").replace(/\s+/g, " ");
  let regex = /^[A-Z]{2} [0-9]+ [A-Za-z ]*[A-Z]{2} [0-9]+ [A-Za-z ]*/;
  let regex2 = /^\d+(?: [A-Za-z]{3} [A-Za-z0-9]+)?(?: [A-Za-z]{3} [A-Za-z0-9]+)?/;
  // let regex2 = /^\d+/
  //  let regex3 =/[A-Z]{3} \d+[A-Z]?/


  let match1 = d.match(regex);

  if (match1) {
    let final = match1.index + match1[0].length;
    final = d.substring(final);
     let placa = final.match(regex2)
   let parte1 = match1[0];
    if (placa && placa[0]) {
    let parte2 = placa[0]
    d = parte1.trim() + "-" + parte2.trim()
    } else {
       d = parte1.trim() + final
    }
    
  }


  
return d
}



//subir imagen

async function subirImagen() {
  const { value: file } = await Swal.fire({
    title: "Cambiar Fondo",
    input: "file",
    inputAttributes: {
      accept: "image/*",
      "aria-label": "Subir Fondo",
    },
  });

  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      Swal.fire({
        title: "Su fondo Ha Sido Cambiado",
      });
      const base64Image = e.target.result;
      document.body.style.backgroundImage = `url(${base64Image})`;
      localStorage.setItem("imagenFondo", base64Image);
    };
    reader.onerror = (e) => {
      console.error("Error al leer el archivo:", e);
      Swal.fire({
        title: "Error",
        text: "No se pudo cambiar el fondo. Inténtelo de nuevo.",
        icon: "error",
      });
    };
    reader.readAsDataURL(file);
  }
}


function TextoPlantilla() {
  const nomagent = document.getElementById("NomAgent").value;
  document.getElementById(
    "saludo"
  ).textContent = `Hola 👋 ${getPartOfDay("saludo")} soy ${nomagent} de Telefónica Movistar, estoy encargado de validar tu caso Permítame un momento por favor`;
  document.getElementById(
    "despedida"
  ).textContent = `Fue un gusto atenderte, gracias por usar nuestro chat de Movistar 💬. Si tienes alguna duda o necesitas más información, puedes comunicarte a: 
⦁	📞 Línea nacional: 018000911008 
⦁	💬 WhatsApp: 3152333333 (opción 4 – Ventas)
Recuerda que te atendió ${nomagent} que tengas ${getPartOfDay("despedida")}`;
  document.getElementById(
    "despedidasinr"
  ).textContent = `Pedimos disculpas por no haber podido atender tu solicitud mediante este chat, pero programaremos una llamada para poder resolver todas tus dudas! Gracias por utilizar nuestro chat de Movistar. Ten en cuenta que para cualquier duda te puedes comunicar a la línea nacional 018000911008 o al chat de WhatsApp 3152333333. Recuerda que te atendió ${nomagent} Que tengas ${getPartOfDay("despedida")}`;
}

function CopiarPlantilla(textoid) {
  const nomagent = document.getElementById("NomAgent").value;
  const Fecha = formatearFecha(document.getElementById("Fecha").value);
  const Franja = document.getElementById("Franja").value;
  const fe1 = formatearFecha(document.getElementById("fe1").value);
  const fra = document.getElementById("fra").value;


  
txt=""
  let aler;
  document.querySelector("#Motivo1").addEventListener("change", handleCambio)


 
    
    if (textoid == "AGPLAN") {
    const planUsuario = document.getElementById("planUsuario").value;
    const planSistema = document.getElementById("planSistema").value;
    const tipo = document.getElementById("Motivoqa").value;
    

    if (planUsuario && tipo) {



if (planUsuario === "CANCELA OTRO OPERADOR") {
        document.getElementById("Musuario").value = `Indica que el asesor le informo que cancelaba el servicio con el otro operador se le informa que estos procesos no están permitido realizarlo los asesores de movistar ya que algunos servicios manejan clausulas de permanencia por lo cual este proceso lo debe realizar el titular del servicio se le indica que si desea puede confirmar el proceso de cancelación o iniciar el proceso de cancelación con su operador actual mientras se puede agendar el servicio para que el titular realice el proceso `;
      } else if (planUsuario === "APPS_STREAM") {

       if (planSistema === "APP MTV 9" || planSistema === "APP MTV 74") {
        document.getElementById("Musuario").value = `indica que no solicito el servicio de ${planSistema}, se objeta `;
      } else if (planSistema === "LINEA MOVIL") {
        document.getElementById("Musuario").value = `Indica que solicito el servicio de la línea móvil incluida dentro del plan solicitando el servicio de movistar total se le informa que la línea móvil no se encuentra dentro del plan pero lo puede solicitar después de la instalación del servicio al área comercial o un centro de experiencia `;
        } else if (planSistema === "VS") {
        document.getElementById("Musuario").value = `Indica que solicito el servicio de XXXX pero en la orden viene el servicio de XXXX se le indica que después de la instalación del plan puede solicitar el servicio deseado por medio de la aplicación Mi Movistar o solicitarla al área comercial`;
        } else {
        document.getElementById("Musuario").value = `Indica que solicito el servicio de ${planSistema} incluido en la oferta se le informa que el servicio no se encuentra activo dentro del plan actual pero lo puede activar después de la instalación del servicio por medio de la aplicación Mi Movistar o solicitarla al área comercial `;
        }
      } else if (planUsuario === "MAS DECOS") {
        document.getElementById("Musuario").value = `Se le indica el incremento en la factura por valor de 15.500 por deco adicional `;
      } else if (planUsuario === "NO SOLICITO EL SERVICIO") {
        if (planSistema === "NO VALIDA DATOS") {
                  document.getElementById("Musuario").value = `Indica que no solicito el servicio no vuelve a contestar no valida datos `;
        } else {
                  document.getElementById("Musuario").value = `Indica que no solicito el servicio se objeta `;
        }

      } else if (planUsuario === "100 MB ADICIONALES") {
        document.getElementById("Musuario").value = `Indica que solicito el servicio con 100 megas adicionales ya que es cliente Pospago se le confirma que las 100 megas adicionales se le instalan 15 días después de la instalación inicial `;
      } else if (planUsuario === "DUO (BA + TV)") {
        document.getElementById("Musuario").value = `Indica que no desea la telefonía dentro del servicio de trio solo desea el servicio de BA y TV se le indica que solo existen 3 tipos de planes y que el servicio al ser con decos viene incluida la telefonía y esta no se puede retirar `;
      } else if (planUsuario != "SI SOLICITO EL SERVICIO") {
        document.getElementById("Musuario").value = `Indica que solicito el servicio de ${planUsuario} y la orden en el sistema viene como ${planSistema} se le indica que puede modificar el servicio después de la instalación `;
      }


      if (tipo === "CANCELAR") {


        if (planUsuario === "SI SOLICITO EL SERVICIO") {
          aler = "OPCION INVALIDA"
        } else {




          if (planUsuario === "CANCELA OTRO OPERADOR") {
            document.getElementById("exampleDataList").value = "CLIENTE DESISTE / INCONSISTENCIA EN LA OFERTA"
             document.getElementById("c").click();
          } else if (planUsuario === "APPS_STREAM") {
            document.getElementById("exampleDataList").value = "PLAN ERRADO OFERTA SUPLEMENTARIA"
             CopiarPlantilla('Planin')
          } else if (planUsuario === "100 MB ADICIONALES") {
            document.getElementById("exampleDataList").value = "CLIENTE DESISTE DEL SERVICIO POR DECISION PROPIA"
           CopiarPlantilla('c')
          } else if (planUsuario === "NO SOLICITO EL SERVICIO") {
            document.getElementById("exampleDataList").value = "NO SOLICITO EL SERVICIO"
            if (planSistema === "NO VALIDA DATOS") {
            CopiarPlantilla('Noval12')
            } else {
            CopiarPlantilla('c')
            }
            
          } else {
            document.getElementById("exampleDataList").value = "PLAN ERRADO OFERTA PRIMARIA"
             CopiarPlantilla('Planin')
          }



          if (planUsuario === "MAS DECOS") {
            document.getElementById("Musuario").value += `no acepta, NO SE ACTUALIZA TAG DE EQUIPOS`;
            document.getElementById("exampleDataList").value = "PLAN ERRADO CLIENTE SOLICITO MAS DECOS"
          } else {
            document.getElementById("Musuario").value += `pero desiste del servicio`;
          }
          document.getElementById("Motivo1").value = "2"

        }
 
      } else {
        if (planUsuario === "SI SOLICITO EL SERVICIO") {
          document.getElementById("Musuario").value = `Indica que se equivoco al seleccionar la opcion pero que si solicito el servicio y que se encuentra a la espera de este se valida datos del tt y del servicio todo esta correcto `;
        } else if (planUsuario === "MAS DECOS") {
          document.getElementById("Musuario").value += `acepta, SE ACTUALIZA TAG DE EQUIPOS`;
        } else {
          document.getElementById("Musuario").value += `e indica que acepta el servicio`;

        }
        document.getElementById("Motivo1").value = "1"
      }

      if (!aler) {


        document.getElementById("close").click();


        document.getElementById("Motivo1").dispatchEvent(new Event('change'))
        document.getElementById("planUsuario").value = "";
        document.getElementById("planSistema").value = "";
        document.getElementById("Motivoqa").value = "";
      }


 


    } else {
      aler = "Favor Rellene los Campos"
    }
  
// plantillas para agendador
  }else if (textoid == "sisola") {

    document.getElementById("Musuario").value = "indica que se equivoco al seleccionar la opcion pero que si solicito el servicio y que se encuentra a la espera de este se valida datos del tt y del servicio todo esta correcto";
    document.getElementById("close").click();


    document.getElementById("Motivo1").value = "1"
    document.getElementById("Motivo1").dispatchEvent(new Event('change'))
  } else if (textoid == "DECOSADF") {

    document.getElementById("Musuario").value = "Titular acepta el incremento en la factura por 15.500 para instalar el deco adicional. TAG ACTUALIZADO EN TOA";
    document.getElementById("close").click();


    document.getElementById("Motivo1").value = "1"
    document.getElementById("Motivo1").dispatchEvent(new Event('change'))
  } else if (textoid == "dircoser") {

    document.getElementById("Musuario").value = "Se valida dirección y servicio todo esta correcto indica que se encuentra a la espera del servicio";
    document.getElementById("close").click();
    document.getElementById("Motivo1").value = "1"
    document.getElementById("Motivo1").dispatchEvent(new Event('change'))
  } else if (textoid == "ssf") {

    document.getElementById("Musuario").value = "Se valida servicio a instalar indica que es correcto y que se encuentra a la espera del servicio";
    document.getElementById("close").click();
    document.getElementById("Motivo1").value = "1"
    document.getElementById("Motivo1").dispatchEvent(new Event('change'))
  } else if (textoid == "despedidaagenda") {
    if (fe1 && nomagent) {
      txt = `Lamentamos no haber podido continuar la validación mediante este chat, la orden sigue programada para el día ${fe1} en la franja ${fra}. ✅Gracias por utilizar nuestro chat de Movistar. Ten en cuenta que para cualquier duda te puedes comunicar a la línea nacional 018000911008 o al chat de WhatsApp 3152333333. Recuerda que te atendió ${nomagent}. Que tengas ${getPartOfDay("despedida")}`;
      document.getElementById("fe1").value = "yyyy-MM-dd";
      document.getElementById("fra").value = "";
    } else if (!fe1) {
      aler = "Escoja Fecha Agenda "
    } else {
      aler = " Favor Indicar Nombre de Agente "

    }

  } else if (textoid == "Predis") {
    let time = DiasSemana(new Date().toISOString().split('T')[0])
    txt = `No te preocupes Sr(a) entendemos que puedes estar ocupado en estos momentos, Pero si gustas podemos programarte una llamada para el dia de hoy o para el dia de mañana ${time[1]} o para el dia ${time[2]} Tú escoges, y ya me indicarías a qué hora (Recuerda que debe ser entre las 7:00 a.m y las 7:30 p.m)
     ¿Me confirmas por favor?`;


  } else if (textoid == "Comprsf") {


    const time1 = document.getElementById("Fechas").value.replace("T", " a las ")


    txt = `Muy amable por la información, procederemos a programarte la llamada para el ${time1} 📲 Gracias por utilizar nuestro chat de Movistar. Ten en cuenta que para cualquier duda te puedes comunicar a la línea nacional 018000911008 o al chat de WhatsApp 3152333333. Recuerda que te atendió ${nomagent}. Que tengas ${getPartOfDay("despedida")}`;
    document.getElementById("Fechas").value = "yyyy-MM-dd";

  } else if (textoid == "ConfAg") {
     mo = document.getElementById("Motivo1").value
    if (Fecha && mo == 1) {


      txt = `¡Gracias por tu paciencia! 😊 
Te confirmo que tu cita ha sido agendada para el ${Fecha} en la franja ${Franja} recuerda que si no puedes recibir el servicio personalmente puedes dejar una persona mayor de edad que verfiique y garantize la funcionalidad correcta del servicio para ello debes contar con los equipos necesarios (celular, computador o tv).
      
Fue un gusto atenderte, gracias por usar nuestro chat de Movistar 💬. Si tienes alguna duda o necesitas más información, puedes comunicarte a: 
⦁	📞 Línea nacional: 018000911008 
⦁	💬 WhatsApp: 3152333333 (opción 4 – Ventas)
Recuerda que te atendió ${nomagent} ¡Que tengas ${getPartOfDay("despedida")}!`;
    } else {
      aler = "Favor Escoger la Fecha Agendada"
    }

  } else if (textoid == "dipoag") {
    const fecha = formatearFecha(document.getElementById("fe").value);
    const AM = document.getElementById("btncheck1").checked;
    const PM = document.getElementById("btncheck2").checked;
    const PMC = document.getElementById("btncheck3").checked;
 txt = `Le ofrecemos disponibilidad para: 📅 el Dia ${fecha} en la franja: `

    if (fecha) {

      if (AM && PM && !PMC) {
        txt += `
☀️ AM: 7:00 a.m. – 12:00 p.m. 
🌙 PM: 12:00 p.m. – 7:00 p.m.`;
      } else if (AM && PMC && !PM) {
        txt += `
☀️ AM: 7:00 a.m. – 12:00 p.m. 
🌙 PM: 12:00 p.m. – 4:00 p.m.`;
      } else if (AM) {
        txt += `
☀️ AM: 7:00 a.m. – 12:00 p.m.`;
      } else if (PM) {
        txt += `
🌙 PM: 12:00 p.m. – 7:00 p.m.`;
      }else if (PMC) {
        txt += `
🌙 PM: 12:00 p.m. – 4:00 p.m.`;
      }
      txt += `
recuerda que no podemos garantizar una hora exacta pero dejaremos la información de la hora de tu preferencia.

Por favor, confírmame cuál prefieres para agendar tu cita 🛠️. 
      
Además, si deseas, puedes agregar un número de contacto adicional para la instalación. Solo necesito:
	⦁	📞 Número de contacto 
	⦁	👤 Nombre y parentesco con el titular
`
    } else {
      aler = "escoja Fecha Para Disponibilidad"
    }

  } else if (textoid == "direinc") {
    const diragen = document.getElementById("diragen").value.replaceAll("|", " ").replace(/\s+/g, " ");
    const dirtt = document.getElementById("dirtt").value.replaceAll("|", " ").replace(/\s+/g, " ");
    const errordir = document.getElementById("direrr").value;
    const accion = document.getElementById("DIRAGQU").value;


 
// validar direccion
    if (diragen && dirtt && dirtt && accion ) {
      if (accion === "CANCELAR") {
        txt = `Sr(a). evidenciamos una inconsistencia en la dirección registrada,En el sistema figura como ${diragen} `;
        if (errordir === "Total Dirección errada") {
          txt += `pero tú nos brindaste ${dirtt}`;
          document.getElementById("Musuario").value = `indica que la dirección correcta es ${dirtt} y en sistema contamos con la dirección ${diragen}, se evidencia un error en la dirección `;
          document.getElementById("exampleDataList").value = "DIRECCIÓN ERRADA"
        } else if (errordir === "Via Principal") {
          txt += `pero hay un error en la primera parte respecto a la Dirección que tú nos brindas ( ${dirtt} )`;
          document.getElementById("Musuario").value = `indica que la dirección correcta es ${dirtt} y en sistema contamos con la dirección ${diragen}, se evidencia un error en la vía Principal de la dirección `;
          document.getElementById("exampleDataList").value = "VIA PRINCIPAL ERRADA"
        } else if (errordir === "Cruce") {
          document.getElementById("exampleDataList").value = "CRUCE ERRADO"
          document.getElementById("Musuario").value = `indica que la dirección correcta es ${dirtt} y en sistema contamos con la dirección ${diragen}, se evidencia un error en el cruce de la dirección `;
          txt += `y hay un error en la segunda parte respecto a la Dirección que tú nos brindas ( ${dirtt} )`;
        } else if (errordir === "Placa") {
          document.getElementById("exampleDataList").value = "DIRECCIÓN ERRADA"
          document.getElementById("Musuario").value = `indica que la dirección correcta es ${dirtt} y en sistema contamos con la dirección ${diragen}, se evidencia un error en la placa de la dirección `;
          txt += `y hay un error en el número/placa respecto a la Dirección que tú nos brindas ( ${dirtt} )`;
        } else if (errordir === "Complemento") {
          document.getElementById("exampleDataList").value = "ERROR EN COMPLEMENTO"
          document.getElementById("Musuario").value = `indica que la dirección correcta es ${dirtt} y en sistema contamos con la dirección ${diragen}, se evidencia un error en el complemento de la dirección `;
          txt += `y hay un error en el complemento respecto a la Dirección que tú nos brindas ( ${dirtt} )`;
        }
        document.getElementById("Motivo1").value = "2"
        txt += ` Pedimos disculpas por lo sucedido 🙏. Sin embargo, es necesario cancelar la orden para corregir la información por favor Contactar a:
⦁ 👨‍💻 con tu asesor comercial de confianza
⦁ ☎️ Línea nacional: 018000911008 
⦁ 💬 WhatsApp 3152333333, opción 4 – Ventas 
⦁ 🏢 O visitando un Centro de Experiencia Movistar

para el reintegro de tu pedido.

Recuerda que te atendió ${nomagent} ¡Que tengas ${getPartOfDay("despedida")}!`;

      } else if (errordir === "Complemento") {


        document.getElementById("Motivo1").value = "1"
        if (accion === "AGENDAR (piloto)") {
          document.getElementById("Musuario").value = `Indica que la dirección correcta es ${dirtt} se le indica que debe contar con el recibo de agua, luz o gas con el complemento correcto se solicita realizar instalación. Si no es posible la instalación por favor suspender la orden por el motivo correspondiente y evidenciar porque no es posible la instalación`;

        }

      } else {
        aler = "recuerde que solo se puede agendar errores en complementos"
      }
  

      if (!aler) {
        document.getElementById("diragen").value = "";
        document.getElementById("dirtt").value = "";
        document.getElementById("direrr").value = "";
        document.getElementById("DIRAGQU").value = "";
        document.getElementById("close").click();
        document.getElementById("Motivo1").dispatchEvent(new Event('change'))
      }
    } else {
      aler = "Favor Seleccionar e indicar todos los Campos"
    }
   
    
  } else if (textoid === "saludo" && !nomagent || textoid === "despedida" && !nomagent || textoid === "despedidasinr" && !nomagent) {
    aler = "Favor Indicar Nombre de Agente"
    //mensajes finales Despedidas y saludos
  } else if (textoid === "Noval12"||textoid === "Noval" || textoid === "c" || textoid === "cancpoc" || textoid === "Planin" || textoid === "despDife" || textoid === "CanAg"||textoid === "nocont"||textoid === "cancpoc"||textoid === "Cande") {
    txt = document.getElementById(textoid).innerHTML + `
    
Fue un gusto atenderte, gracias por usar nuestro chat de Movistar 💬. Si tienes alguna duda o necesitas más información, puedes comunicarte a: 
⦁	📞 Línea nacional: 018000911008 
⦁	💬 WhatsApp: 3152333333 (opción 4 – Ventas)
Recuerda que te atendió ${nomagent} ¡Que tengas ${getPartOfDay("despedida")}!`
  } else {
    txt = document.getElementById(textoid).innerHTML.replace(/<br\s*\/?>/gi, '\n');
  }
  

  document.getElementById("fe").value = " ";
  document.getElementById("btncheck1").checked = true;
  document.getElementById("btncheck2").checked = true;
  document.getElementById("btncheck3").checked = false;



  
  if (txt) {
    copiarYAlertar(txt);
  }

  if (aler) {
      alertaSencilla("sencilla",aler,"","info")
  }

 



}

function getPartOfDay(d) {
  const now = new Date();
  const hours = now.getHours();


  if (d === "saludo") {
    if (hours >= 6 && hours < 12) {
      return "¡Buenos días!";
    } else if (hours >= 12 && hours < 18) {
      return "¡Buenas tardes!";
    } else {
      return "¡Buenas noches!";
    }
  } else if (d === "despedida") {
    if (hours >= 6 && hours < 12) {
      return "un excelente día 🌞 👋";
    } else if (hours >= 12 && hours < 18) {
      return "una excelente tarde 🌞 👋";
    } else {
      return "una excelente Noche 🌙 👋";
    }
  }

}

function CopiarChat() {
  const valor1 = document.querySelector("#Motivo1").value;
  const NumT = document.getElementById("NumTitular").value.replace("57", "");
  const NomT = document.getElementById("NomTitular").value;
  const mq = document.getElementById("exampleDataList").value;
  let MotUsuario = document.getElementById("Musuario").value;
  const Fecha = formatearFecha(document.getElementById("Fecha").value);
  const Franja = document.getElementById("Franja").value;
  const firma = document.getElementById("FirmaAgent").value;
  const time = document.getElementById("Fecha2").value.replace("T", " a las ");
  const f = new Date().toLocaleDateString();
  const direr = document.getElementById("dir").checked;
  const predio = document.getElementById("predio").value;
  const pisos = document.getElementById("Cantpi").value;
  const contadores = document.getElementById("Cantco").value;
  const inten = document.getElementById("inten").checked;

  let texto = ""
  let aler = ""


const camposllenos=contiene(MotUsuario,"XXXX") ? "0" : "1";

if (NumT && NomT || valor1 == "3" || inten ) {
  


  // Corregimos la obtención del número adicional
  const contador = 1; // Asegúrate de que el contador está inicializado en tu código
  const NumAdicionalID = `NumAdicional${contador}`; // Formamos el ID dinámico
  const NumTa = document.getElementById(NumAdicionalID)
    ? document.getElementById(NumAdicionalID).value
    : ""; // Obtenemos el valor del número adicional si existe


  // Manejo de suspensiones



  switch (valor1) {

    case "1":


      if (Fecha) {
        texto = `EVA-RESCATE BO Se realiza interacción con la titular ${NomT} al número ${NumT} ${MotUsuario}, `;
        if (NumTa) {
          texto += `se agrega número adicional ${NumTa} `;
        }


        if (predio !== "NO CONFIRMA" && predio !== "Tipo de Predio") {
          if (predio == "CASA") {
            texto += `indica que es una casa de barrio sin administración, `;

          } else if (predio == "CONJUNTO(casas)") {
            texto += `indica que es un conjunto de casas, `;
          } else if (predio == "CONJUNTO(torres)") {
            texto += `indica que es un conjunto de torres, `;
          } else {
            texto += `indica que es un ${predio}, `;
          }
        }

        if (pisos !== "NO CONFIRMA" && pisos !== "Cant Pisos") {
          if (pisos == "1") {
            texto += `con ${pisos} piso, `;
          } else {
            texto += `con ${pisos} pisos, `;
          }



        }

         if (contadores !== "NO CONFIRMA" && contadores !== "Cant Contadores") {
          if (contadores == "Compartidos") {
            texto += `con Contadores ${contadores},`;
          } else {
            texto += `con Contadores ${contadores},`;
          }

        }
        texto += ` Se procede a agendar para el día ${Fecha} en la franja ${Franja} GESTIÓN REALIZADA POR CHAT EVA GESTIONA ${firma}`;



  to(NomT+NumT,"1");

        
      } else {
        aler = "Escoja Fecha de Agenda"
      }
      break;
    case "2":
      if (mq) {


      
   texto = `QC - ${mq} Se realiza interacción con la titular ${NomT} al número ${NumT} ${MotUsuario}, se procede a cancelar orden GESTIÓN REALIZADA POR CHAT EVA GESTIONA ${firma}`;
        to(NomT+NumT,"cancelar")
      } else {
        aler = "Escoja Motivo De Quiebre"
      }

 
 

      break;

    case "3":
      if (Fecha) {
        texto = `PROYECTO EVA - Se realiza gestión interna. Se deja agenda inicial para el día ${Fecha} en la franja ${Franja}`;

        if (direr) {
          texto += ` ${MotUsuario},`;
        }
        texto += ` Gestionado por ${firma}`;
        document.getElementById("fe1").value = document.getElementById("Fecha").value
        document.getElementById("fra").value = Franja
                to(texto,"1");

      } else {
        aler = "Escoja Fecha de Agenda"

      }

      break;

    case "4":

      texto = `PROYECTO EVA - Compromiso de llamada - Titular ${NomT} Indica que nos comuniquemos el día ${time}. OBSERVACION: Solicita devolver la llamada para validar información de agenda. Gestiona ${firma} ${f}`;
      document.getElementById("Fechas").value = document.getElementById("Fecha2").value
      break;
    default:
      aler = "Escoja Motivo"

      break;
  }

  if (camposllenos=="1") {
     texto = texto.replaceAll(/[()?¿#:+*]/g, "")
  copiarYAlertar(texto);
  if (aler) {
      alertaSencilla("sencilla",aler,"","info")
  }

  } else {
    alertaSencilla("","Favor LLenar Campos Solicitados","COLOCAR INFORMACION EN LAS XXXX","info")
  }

 } else {
    alertaSencilla("","Favor LLenar Campos Solicitados","Nombre y numero telefonico","info")
}

}


// Cambio de ID para boton Tipificar
document.addEventListener("DOMContentLoaded", function () {
  const btnTipificar = document.getElementById("Btip");
  const dropdownItems = document.querySelectorAll(".dropdown-item");

  dropdownItems.forEach((item) => {
    item.addEventListener("click", function () {
      const target = this.getAttribute("data-bs-target");
      btnTipificar.setAttribute("data-bs-target", target);
    });
  });

  btnTipificar.addEventListener("click", function () {
    const target = this.getAttribute("data-bs-target");
    if (target) {
      const modal = document.querySelector(target);
      $(modal).modal("show");
    }
  });
});

// búsqueda

document.addEventListener("keyup", (e) => {
  if (e.target.matches("#buscador")) {
    const searchValue = e.target.value.toLowerCase().trim();
    let anyItemVisible = false;

    document.querySelectorAll(".accordion-item").forEach((item) => {
      const paragraphs = item.querySelectorAll("h4");
      let isVisible = false;

      paragraphs.forEach((p) => {
        if (p.textContent.toLowerCase().includes(searchValue)) {
          isVisible = true;
        }
      });

      if (isVisible) {
        item.classList.remove("filtro");
        const button = item.querySelector(".accordion-button");
        if (button && button.classList.contains("collapsed")) {
          button.click(); // Expande el acordeón
        }
        anyItemVisible = true;
      } else {
        item.classList.add("filtro");
        const button = item.querySelector(".accordion-button");
        if (button && !button.classList.contains("collapsed")) {
          button.click(); // Colapsa el acordeón si no hay coincidencia
        }
      }
    });

    // Oculta el acordeón si no hay ninguna coincidencia
    if (!anyItemVisible) {
      document.querySelectorAll(".accordion-item").forEach((item) => {
        item.classList.add("filtro");
      });
    }
  }
});



function cloncel() {
  var contador = 1;
  if (!document.getElementById('divAdicional1')) {
    // Crear un nuevo div para el clon
    var clone = document.createElement("div");
    clone.className = "col-sm mt-2"; // Clase de estilo para el nuevo div
    clone.id = `divAdicional${contador}`; // Asignar un id único para este contenedor

    // Crear un contenedor para el label
    var labelContainer = document.createElement("div");
    labelContainer.className = "mb-2"; // Clase para margen en la parte inferior

    // Crear un nuevo label
    var newLabel = document.createElement("label");
    newLabel.setAttribute("for", "NumAdicional" + contador);
    newLabel.textContent = "Número adicional";

    // Agregar el nuevo label al contenedor del label
    labelContainer.appendChild(newLabel);

    // Crear un contenedor para el input y el botón
    var inputButtonContainer = document.createElement("div");
    inputButtonContainer.className = "d-flex align-items-center"; // Alineación horizontal

    // Crear un nuevo input
    var newInput = document.createElement("input");
    newInput.type = "text";
    newInput.className = "form-control trans me-2"; // Clase de margen a la derecha para separar el input del botón
    newInput.id = "NumAdicional" + contador;
    newInput.setAttribute("autocomplete", "off");
    newInput.setAttribute("required", true);

    // Crear botón de eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.setAttribute("class", "btn btn-danger");
    botonEliminar.setAttribute("type", "button");

    // Agregar el ícono SVG al botón de eliminar
    botonEliminar.innerHTML = `
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-trash-fill" viewBox="0 0 16 16">
                  <path
            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                </svg>`;

    // Función para eliminar el div contenedor completo (label, input y botón)
    botonEliminar.addEventListener("click", function () {
      clone.remove(); // Eliminar el div completo
    });

    // Agregar el nuevo input y botón al contenedor del input y botón
    inputButtonContainer.appendChild(newInput);
    inputButtonContainer.appendChild(botonEliminar);

    // Agregar el contenedor del label y el contenedor del input y botón al nuevo div
    clone.appendChild(labelContainer);
    clone.appendChild(inputButtonContainer);

    // Incrementar el contador para los siguientes clones
    contador++;

    // Obtener el div "nomt" para insertar el nuevo campo antes de él
    var nomt = document.getElementById("nomt");

    // Insertar el nuevo div antes del div con id="nomt"
    nomt.parentNode.insertBefore(clone, nomt);
  }

}


function formatearFecha(fecha) {
  let fechaFormateada = ""
  if (fecha) {
    let fecha1 = new Date(fecha)
     let diaActual = new Date()
   let [anoac, meac, diaac] = [diaActual.getFullYear(),diaActual.getMonth() + 1,diaActual.getDate()]

    var Meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    var Dia = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];



    let [ano, mes, dia] = fecha.split("-")

    let nombreMes = Meses[mes - 1]

    let nombreDia = Dia[fecha1.getDay()]
 
  


    if (ano == anoac && mes == meac && dia == diaac) {
       fechaFormateada = `El dia de HOY `
    }

      fechaFormateada += `${nombreDia}, ${dia} de ${nombreMes} del ${ano}`
    

     
  } else {
    fechaFormateada = ""
  }

  return fechaFormateada;
}


function procesarServicio(celda) {


  if (celda) {
   
  

  const {tipoServicio, velocidad, decos,baseport, servicios_incluidos} = validar_servicios(celda) 

if (tipoServicio) {

  let resumen = "En sistema nos registra una ";
  switch (tipoServicio) {
    case "TRIO":
      resumen += `Instalación de servicio nuevo TRIO con

* ☎️ telefonía fija básica
* 🌐 internet en fibra óptica de ${velocidad}
* 📺 televisión de 91 canales con `;
      if (decos === 1) {
        resumen += `${decos} DECO.`;

      } else {
        resumen += `${decos} DECOS. `;
      }

      break;


      case "DUOTV":
  
      resumen += `Instalación de servicio nuevo DUO TV con

* 🌐 internet en fibra óptica de ${velocidad}
* 📺 televisión de 91 canales con `;
      if (decos === 1) {
        resumen += `${decos} DECO.`;

      } else {
        resumen += `${decos} DECOS. `;
      }

      break;

    case "DUO":
      resumen += `Instalación de servicio nuevo DUO con

* ☎️ telefonía fija básica
* 🌐 internet en fibra óptica de ${velocidad}.`;
      break;
    case "BA":
      resumen += `Instalación de servicio SOLO INTERNET

* 🌐 internet en fibra óptica de ${velocidad}.`;
      break;
    case "DECO ADICIONAL":
      resumen += `Instalación de `;
      if (decos == 1) {
        resumen += `${decos} DECO adicional.`;

      } else {
        resumen += `${decos} DECOS adicionales. `;

      }

      break;
    case "TEST DE VISITA":
      resumen += `Una visita técnica para realizar la tarea solicitada.`;
      break;
    case "TRASLADOTRIO":
      resumen += `Instalación de servicio de TRASLADO TRIO de telefonía fija básica, internet en fibra óptica de ${velocidad} y televisión `;
      break;
    case "TRASLADODUO":
      resumen += `Instalación de servicio TRASLADO DUO de telefonía fija básica e internet en fibra óptica de ${velocidad}.`;
      break;
    case "TRASLADOBA":
      resumen += `Instalación de servicio TRASLADO SOLO INTERNET en fibra de ${velocidad}`;
      break;
    case "Alta TV":
      resumen += `Instalación de servicio Alta TV con `;
      if (decos == 1) {
        resumen += `${decos} DECO.`;

      } else {
        resumen += `${decos} DECOS. `;

      }
      break;
    default:
      resumen = "";
  }


  

  if (baseport) {
    resumen += "+ Repetidor Wifi."
  }

 



     resumen += `${servicios_incluidos}

¿Este plan es correcto?`
  copiarYAlertar(resumen)



  if (velocidad == "XXXX Mbps") {
      alertaSencilla("sencilla","COPIADO VERIFICAR VELOCIDAD XXXX",resumen,"warning")

}
  } else {
      alertaSencilla("sencilla","VERIFICAR PLAN","Plan No Identificado","info")
  }
 }else {
            alertaSencilla("sencilla","informacion vacia","","info")
    }
}




function validar_descuentos(se){
  if (!se) {
    return alertaSencilla("sencilla","información vacía","","info");
  }

  // Expresiones regulares para diferentes tipos de descuentos
  const regexX = /[0-9]+%[ ]?[_]?[xX][_]?[ ]?[0-9]+[_]?[ ]?[(]?[A-Za-z0-9 ]*[)]?/g;
  const regexABC = /[0-9]+%[ ]?[_]?[A-Za-z]{3}[_]?[ ]?[0-9]+[_]?[ ]?[(]?[A-Za-z0-9 ]*[)]?[ _]?[^_]+_*?/g;
  const regexCargo = /[0-9]+% cargo de instalacion Banda Ancha/g;
  




  // Capturar todas las coincidencias
  const matchesX = [...se.matchAll(regexX)];
  const matchesABC = [...se.matchAll(regexABC)];
  const matchesCargo = [...se.matchAll(regexCargo)];
  

  // Si no hay descuentos
  if (matchesX.length === 0 && matchesABC.length === 0 && matchesCargo.length === 0) {
    return alertaSencilla("sencilla","El Servicio No Cuenta Con Descuentos","validar si no es un traslado","info");
  }

  let resumen = "Recuerde que su servicio cuenta con los siguientes descuentos:";

  // Agregar todos los descuentos encontrados
  matchesABC.forEach(m => resumen += `\n* Descuento exclusivo del ${m[0]}`);
  matchesX.forEach(m => resumen += `\n* Descuento de cortesía del ${m[0]}`);
  matchesCargo.forEach(m => resumen += `\n* Descuento del ${m[0]}`);

  // Validar servicios
  const {tipoServicio, velocidad, servicios_incluidos, decos, baseport} = validar_servicios(se);

  switch (tipoServicio) {
    case "TRIO":
      resumen += `\n* ☎️ Telefonía fija básica\n* 📺 Televisión de 91 canales con ${decos} DECO${decos > 1 ? "S" : ""}`;
      break;
    case "DUO":
      resumen += `\n* ☎️ Telefonía fija básica`;
      break;
    case "DUOTV":
      resumen += `\n* 📺 Televisión de 91 canales con ${decos} DECO${decos > 1 ? "S" : ""}`;
      break;
  }

  if (baseport) resumen += `\n* Repetidor Wifi.`;
  if (velocidad) resumen += `\n* 🌐 Internet en fibra óptica de ${velocidad} megas simétricas estables`;

  resumen += `\n${servicios_incluidos}\n\n¿Aun así desea cancelar el servicio?`;

  copiarYAlertar(resumen);

  if (velocidad === "XXXX Mbps") {
    alertaSencilla("sencilla","COPIADO VERIFICAR VELOCIDAD XXXX",resumen,"warning");
  }
}






function DiasSemana(f) {

  let fecha1 = new Date(f + "T00:00:00")
  function getDiaNombre(dia) {
    switch (dia) {
      case 0:
        return "Domingo";
      case 1:
        return "Lunes";
      case 2:
        return "Martes";
      case 3:
        return "Miércoles";
      case 4:
        return "Jueves";
      case 5:
        return "Viernes";
      case 6:
        return "Sábado";
    }

  }

  var diaActual = fecha1.getDay();


  var diasSemana = [];


  diasSemana.push(getDiaNombre(diaActual));


  for (var i = 1; i <= 2; i++) {
    var diaSiguiente = (diaActual + i) % 7;
    diasSemana.push(getDiaNombre(diaSiguiente));
  }

  return diasSemana;
}

function cambio() {
  nombreAsesor = document.getElementById("NomAgent").value;

  if (nombreAsesor) {
    if (k == 1) {
      handleMotivo();
      k = 0
    } else if (k == 0) {
      handleMotivoChat();
      k = 1
    }
  } else {
    alertaSencilla("sencilla","LLENAR TODOS LOS DATOS","Favor Indicar Nombre de Agente","info")
  }

}







function GuardarDatos(p) {
  const modalElement = document.getElementById("exampleModal")
  const modalInstance = new bootstrap.Modal(modalElement)

  nombreAsesor = document.getElementById("NomAgent").value;
  agentAsesor = document.getElementById("FirmaAgent").value;
  if (agentAsesor) {
    if ((p == 1 && nombreAsesor) || p == 0 || p == 3) {
      const modalq = {
        1: handleMotivoChat,
        0: handleMotivo
      }
      localStorage.setItem("nombreAsesor", nombreAsesor);
      modalInstance.show()
      modalq[p]()
    } else {
      alertaSencilla("sencilla","LLENAR TODOS LOS CAMPOS","Favor Indicar Nombre de Asesor","info")

    }
    localStorage.setItem("agentAsesor", agentAsesor);
  } else {
      alertaSencilla("sencilla","LLENAR TODOS LOS CAMPOS","Favor Indicar Firma de Asesor","info")
  }
}

function to(j,p) {

  if (t!==j && p=="1" ) {  
      numero++;
      localStorage.setItem("agendar", numero);
      contador.innerHTML = "AGENDADAS:   " + numero ;
      t=j
    } else if (c!==j&& p=="cancelar") { {
      numero1++;
      localStorage.setItem("Cancelar", numero1);
      contador1.innerHTML = "CANCELADAS:   " + numero1;
      c=j
    }
 
  } 


let suma = Number(numero) + Number(numero1)

 if (suma>=700) {
  total.style.color= "rgb(59, 252, 0)";

 } else if (suma<700 && suma>=500 ) {
  
    total.style.color="rgb(245, 148, 58)";
  
  
  }else {
    total.style.color="rgb(252, 0, 55)";

 }
 total.innerHTML = "TOTAL: " + suma
}



document.addEventListener("DOMContentLoaded", () => {

  let agendar = localStorage.getItem("agendar") || 0
  let cancelar = localStorage.getItem("Cancelar") || 0
  let suma = Number(agendar) + Number(cancelar)
  contador.innerHTML = "AGENDADAS: " + agendar
  contador1.innerHTML = "CANCELADAS: " + cancelar
  total.innerHTML = "TOTAL: " + suma
  document.getElementById("NomAgent").value = localStorage.getItem("nombreAsesor");
  document.getElementById("FirmaAgent").value = localStorage.getItem("agentAsesor");


  const imagenFondoGuardada = localStorage.getItem("imagenFondo");
  if (imagenFondoGuardada) {
    document.body.style.backgroundImage = `url(${imagenFondoGuardada})`;
  }


})


function formatoagend() {
  numero = 0
  numero1 = 0
  localStorage.setItem("agendar", numero);
  localStorage.setItem("Cancelar", numero1);
  contador.innerHTML = "AGENDADAS: " + numero
  contador1.innerHTML = "CANCELADAS: " + numero1
}




function plantillasqt(j) {
   var comend = document.getElementById("diras").value
  comend = direccion(comend)
  if (document.getElementById("TEC").checked) {
    document.getElementById("TEC").click();
  }
    if (j == "COMENTAE") {
    
document.getElementById("Mtecnico").value= `se deja comentario de técnico " ${comend} "`;

}else if (j == "Orderd") {

document.getElementById("Mtecnico").value= `se valida orden anterior ${comend} cancelada con los mismos recursos`;

}else if (j == "DirEd") {
 
document.getElementById("Mtecnico").value= `Se valida archivos HHPP, se evidencia que la dirección ${comend} no cuenta con cobertura para la instalación ya que es necesario una PC interna se valida comentarios y soporte fotográfico del técnico`;

}else if (j == "nohay") {
    
document.getElementById("Mtecnico").value= `Se valida archivos HHPP, se evidencia que la dirección ${comend} no cuenta con cobertura para la instalación`;

}
  document.getElementById("exampleDataList1").value = "NO EXISTE RED FTTH"
document.getElementById("close1").click();
   document.getElementById("diras").value = "";  
}





function llenarinput2(seleccion) {


const opciones = {
  APPS_STREAM: ["APP MTV 9","APP MTV 74","VS","Netflix", "HBO", "WIN +","Disney +","Linea Movil"],
  otros: ["BA", "DUO", "TRIO", "NO VALIDA DATOS"]
};

 planSistema.innerHTML = '<option value="" disabled selected></option>';
if (opciones[seleccion]) {
  opciones[seleccion].forEach(item => {
      const option = document.createElement("option");
      option.value = item.toUpperCase();
      option.textContent = item;
      planSistema.appendChild(option);
    });
  }
 }



 function confirmarw() {
    const p = document.getElementById("valpa").value;
  Swal.fire({
    title:"Que deseas hacer",
    showDenyButton:true,
    showCancelButton: true,
    confirmButtonText: "Plan",
    denyButtonText:`Descuentos`
  }).then((result)=>{
    if (result.isConfirmed) {
   procesarServicio(p)

    } else if (result.isDenied) {
      validar_descuentos(p)
    }
  })
  document.getElementById("valpa").value = "";
}



function validar_servicios(celda){


//tipo de servicio
let tipoServicio
  if ((contiene(celda, "trio") || contiene(celda, "iptv")) && contiene(celda, "voz") && contiene(celda, "Descuento")) {
    tipoServicio = "TRIO";
  } else if ((contiene(celda, "trio") || contiene(celda, "iptv")) && (!contiene(celda, "voz") || !contiene(celda, "duo")) && contiene(celda, "Descuento") ) {
    tipoServicio = "DUOTV";
  } else if (((contiene(celda, "voz") || contiene(celda, "duo")) && contiene(celda, "Descuento")) && !contiene(celda, "Naked") && !contiene(celda, "Single_Voz")) {
    tipoServicio = "DUO";
  } else if ((contiene(celda, "BA") || contiene(celda, "solo internet") || contiene(celda, "plan banda") || contiene(celda, "Naked") || contiene(celda, "Ba Ancha")|| contiene(celda, "Internet")) && contiene(celda, "Descuento")   && !contiene(celda, "DUO")  && !contiene(celda, "Trio") ) {
    tipoServicio = "BA";
  } else if (contiene(celda, "trio")|| contiene(celda, "iptv") ) {
    tipoServicio = "TRASLADOTRIO";
  } else if ((contiene(celda, "duo") || contiene(celda, "VOZ") )&& !contiene(celda, "Naked")&& !contiene(celda, "Single_Voz")) {
    tipoServicio = "TRASLADODUO";
  } else if (contiene(celda, "solo internet")|| contiene(celda, "Naked")||contiene(celda, "plan banda")) {
    tipoServicio = "TRASLADOBA";
  } else if (contiene(celda, "visita tecnica")) {
    tipoServicio = "TEST DE VISITA";
  } else if (contiene(celda, "deco adicional")) {
    tipoServicio = "DECO ADICIONAL";
  } else if (contiene(celda, "Deco Incluido")) {
    tipoServicio = "Alta TV";
  }



//megas del plan
let velocidad = "XXXX Mbps";
  const regexvelocidad = /(\d+)\s?Mbps/
  const mbpsPos = celda.match(regexvelocidad)
  if (mbpsPos) {
    velocidad = mbpsPos[1] + " Mbps";
  }
  //cantidad de decos
let decos;
  if (tipoServicio === "TRIO" || tipoServicio === "DECO ADICIONAL" || tipoServicio === "Alta TV"|| tipoServicio === "DUOTV") {
    decos = (celda.match(/\b(?!\w*(win|trio|Mov))\w*deco\w*\b/gi) || []).length
  }
  
//baseport
let baseport
    if (contiene(celda, "Baseport")) {
    baseport = 1;
  }

 



//servicios adicionales
  let movistarTvF = contiene(celda, "MTV App_FIJA")|| contiene(celda, "TV App 73") ? "Movistar TV APP de 71 Canales en vivo" : "";
  let movistarTvb = contiene(celda, "MTV App_Parrilla") || contiene(celda, "MTV App Basico") ? "Movistar TV APP de 9 Canales en vivo" : "";

  let win = contiene(celda, "Win") && contiene(celda, "play") ? "Win Play" : "" || contiene(celda, "Win") && contiene(celda, "lite") ? "Win Lite" : "";
 
  const netflix = contiene(celda, "netflix") ? "Netflix" : "";
  const disney =(contiene(celda, "DisneyPremium") || contiene(celda, "Disney Premium") ||contiene(celda, "Disney_Premium") || contiene(celda, "Ilim_Disney Premium_MTV"))  ? "Disney Premium" : "";
  const disneyLite = contiene(celda, "DisneyLite") ? "Disney +" : "";

  const HBO = contiene(celda, "HBO") ? "HBO +" : "";
  const Paramount = contiene(celda, "Paramount") ? "Paramount +" : "";
 const movil = (contiene(celda, "Convergente") || contiene(celda, "Mov ilim")) ? "Linea plan Pospago Móvil" : ""

let servicios_incluidos

if (tipoServicio== "TRIO") {
      movistarTvF = "Movistar TV APP de 71 Canales en vivo";
      win = contiene(celda, "Win") ? "Win +" : ""
}else if (tipoServicio== "TRASLADOTRIO"){
      win = contiene(celda, "Win") ? "Win +" : ""
}


if (movistarTvb || movistarTvF || win || netflix || HBO|| disney|| movil|| Paramount) {
    servicios_incluidos = `
* Servicios incluidos: ${[movil,movistarTvF, movistarTvb, win, netflix, ,disney, HBO, disneyLite,Paramount].filter(s => s).join(", ")}.`;
  }else{
    servicios_incluidos =""
  }

  return {servicios_incluidos,tipoServicio,velocidad,decos, baseport}

}



function alertaSencilla(tipoAlert,e,textoq,icono){

  if (tipoAlert == "alerta_duplex") {
    const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  Toast.fire({
    icon: "success",
    text: e,
  });
  } else {
    
      Swal.fire({
        icon: icono,
        title: e,
        text:textoq
      });
  }

}

const contiene = (texto, busqueda) => texto?.toLowerCase().includes(busqueda?.toLowerCase());