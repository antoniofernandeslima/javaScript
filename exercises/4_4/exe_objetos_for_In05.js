//Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".


let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };
  info.recorrente = "sim";

  let info2 = {
      personagem2: "Tio Patinhas",
      ex1: "Christmas on Bear Mountain",
      ex2: "Dell's Four Color Comics #178",
      ex3: "O último MacPatinhas",
      ex4: "Ambos recorrentes",
      }

    console.log(info.personagem + " e " + info2.personagem2 + '\n' + info.origem + " e " + info2.ex1 + '\n' + info.nota + " e " + info2.ex3 + '\n' + info2.ex4);


/*
Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!
*/