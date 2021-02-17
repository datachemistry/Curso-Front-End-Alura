console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`,
  `Curitiba`
);

const idadeComprador = 18;
const estaAcompanhada = true;
const temPassagemComparada = true; 
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

//if (idadeComprador >= 18) {
//  console.log("Comprador maior de idade");
//  listaDeDestinos.splice(1, 1);
//} else if (estaAcompanhada) {
//  console.log("comprador está acompanhado");
//  listaDeDestinos.splice(1, 1);
//} else {
//  console.log("Não é mairo de idade, não vender");
//}

console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!!!");
    listaDeDestinos.splice(1, 1); 
    console.log(listaDeDestinos);   
  } else {
    console.log("Não é mairo de idade, não vender");
  }
  
  console.log("Embarque:\n\n")
  if(idadeComprador >= 18 && temPassagemComparada){
      console.log("Boa Viagem!")
  }else{
      console.log("Você não pode embarcar")
  }