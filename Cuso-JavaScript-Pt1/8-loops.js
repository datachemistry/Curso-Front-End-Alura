console.log(`\n Trabalhando com condicionais`);

const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`,
  `Curitiba`
);

const idadeComprador = 18;
const estaAcompanhada = true;
let temPassagemComparada = false; 
const destino = "São Paulo";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while(contador < 3){
    
    if(listaDeDestinos[contador] == destino){
        console.log("Destino Existe");
        destinoExiste = true;
        break;
    }else{
        console.log("Destino não existe");
    }
    
    contador += 1;    

}

let destinoExiste = false;

for(let cont = 0; cont < 3; cont++){
    if(listaDeDestinos[cont] == destino){
        destinoExiste = true;
    }

}

//if () {
//    console.log("Boa viagem!!!");
//    listaDeDestinos.splice(1, 1); 
//    console.log(listaDeDestinos);
//    temPassagemComparada = true;   
//  } else {
//    console.log("Não é mairo de idade, não vender");
//    temPassagemComparada = false;
//  }
//  
//  console.log("Embarque:\n\n")
//  if(idadeComprador >= 18 && temPassagemComparada){
//      console.log("Boa Viagem!")
//  }else{
//      console.log("Você não pode embarcar")
//  }