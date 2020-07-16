//Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.

let info = {
    Personagem: "Margarida",
    Origem: "Pato Donald",
    Nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };
  info.Recorrente = "sim";

for (let chave in info){
    console.log(chave,info[chave]);
}
