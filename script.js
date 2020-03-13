console.log("via script");
 var comandos = [];
 var canvas, canvas2;
 var ctx, ctx2;
 var dim;

 function reset(){
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   dim = [140,140,30,30];
   ctx.fillRect(dim[0],dim[1],dim[2],dim[3]);
   ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
 }
function init(){
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');

  canvas2 = document.getElementById('canvas2');
  ctx2 = canvas2.getContext('2d');

  ctx.fillStyle = 'green';
  dim = [140,140,30,30];
  //ctx.fillRect(10, 10, 20, 20);
  ctx.fillRect(dim[0],dim[1],dim[2],dim[3]);
}
function getID(){
  return comandos.length-1
}

function apagarLinha(index){
  comandos[index] = "";
  var lista = document.getElementById("comandos").innerHTML;
  console.log(comandos);
  let start = lista.indexOf("<div id=\""+index+"\">");
  let end = lista.indexOf("</div>", start);
  //console.log("start: "+start+" end: "+end);

  let listaModif = lista.substring(0,start) + lista.substring(end);
  document.getElementById("comandos").innerHTML = listaModif;

}

function left(){
  comandos.push("left");
  document.getElementById("comandos").innerHTML =
  document.getElementById("comandos").innerHTML +

  "<div id="+getID()+"><li> Ir para esquerda "+
"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"button\" value=\"Apagar\" onclick=apagarLinha("+getID()+")>"

  +"</li></div>";
}
function right(){
  comandos.push("right");
  document.getElementById("comandos").innerHTML =
  document.getElementById("comandos").innerHTML +

  "<div id="+getID()+"><li> Ir para direita "+
  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"button\" value=\"Apagar\" onclick=apagarLinha("+getID()+")>"

  +"</li></div>";
}
function up(){
  comandos.push("up");
  document.getElementById("comandos").innerHTML =
  document.getElementById("comandos").innerHTML +

  "<div id="+getID()+"><li> Ir para cima "+
  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"button\" value=\"Apagar\" onclick=apagarLinha("+getID()+")>"

  +"</li></div>";
}
function down(){
  comandos.push("down");
  document.getElementById("comandos").innerHTML =
  document.getElementById("comandos").innerHTML +

  "<div id="+getID()+"><li> Ir para baixo "+
  "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\"button\" value=\"Apagar\" onclick=apagarLinha("+getID()+")>"

  +"</li></div>";
}
function apagarComandos(){
  comandos = [];
  document.getElementById("comandos").innerHTML = "";
}

function play(){

  var check = document.getElementById('sempreDoComeco');
  if(check.checked){
    reset();
  };
  comandos.forEach(cmd=>{
    switch(cmd){

      case "left":
        let xinicial = dim[0];
        let xfinal = dim[0]-20;
        while(dim[0] > xfinal){
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          dim[0]-=0.005;
          ctx.fillRect(dim[0],dim[1],dim[2],dim[3]);
        }
        ctx2.fillStyle = 'red';
        ctx2.fillRect(xinicial+10,dim[1]+10,10,10);
      break;

      case "right":
        let xinicial2 = dim[0];
        let xfinal2 = dim[0]+20;
        while(dim[0] < xfinal2){
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          dim[0]+=0.005;
          ctx.fillRect(dim[0],dim[1],dim[2],dim[3]);
        }
        ctx2.fillStyle = 'red';
        ctx2.fillRect(xinicial2+10,dim[1]+10,10,10);
      break;


      case "up":
        let yinicial = dim[1];
        let yfinal = dim[1]-20;
        while(dim[1] > yfinal){
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          dim[1]-=0.005;
          ctx.fillRect(dim[0],dim[1],dim[2],dim[3]);
        }
        ctx2.fillStyle = 'red';
        ctx2.fillRect(dim[0]+10,yinicial+10,10,10);
      break;

      case "down":
        let yinicial2 = dim[1];
        let yfinal2 = dim[1]+20;
        while(dim[1] < yfinal2){
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          dim[1]+=0.005;
          ctx.fillRect(dim[0],dim[1],dim[2],dim[3]);
        }
        ctx2.fillStyle = 'red';
        ctx2.fillRect(dim[0]+10, yinicial2+10,10,10);

      break;
    }
  });

}
