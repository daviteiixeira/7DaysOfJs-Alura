alert("Sinta-se bem-vindo(a) ao mercado virtual");
let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let outros = [];
let comida = "";
let categoria = "";
let alterarLista = "+";

while(alterarLista != "parar"){
alterarLista = prompt(`Para adicionar um item a lista de compras digite "+". Para excluir um item digite "-". Para encerrar a lista digite "parar". A lista até o momento é:\n Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n Outros: ${outros}`);
while (alterarLista != "+" && alterarLista != "-" && alterarLista != "parar") {
alert("Operação não reconhecida! Vamos tentar novamente!");
alterarLista = prompt(`Para adicionar um item a lista de compras digite "+". \n Para excluir um item digite "-". \n Para encerrar a lista digite "parar". \n \n A lista até o momento é:\n Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n Outros: ${outros}`);
}
if (alterarLista == "+"){
comida = prompt("Qual comida você deseja inserir?");
categoria = prompt("Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces', 'congelados' ou 'outros'?");
while (categoria !== "frutas" && categoria !== "laticínios" && categoria !== "doces" && categoria !== "congelados" && categoria !== "outros"){
categoria = prompt(`Categoria não encontrada, vamos tentar novamente. \n Em qual categoria essa comida se encaixa: 'frutas', 'laticínios', 'doces', 'congelados' ou 'outros'?`);
}
if(categoria === 'frutas'){
frutas.push(comida);
} else if (categoria === 'laticínios'){
laticinios.push(comida);
} else if (categoria === 'doces'){
doces.push(comida);
} else if (categoria === 'congelados'){
congelados.push(comida);
} else if (categoria === 'outros'){
outros.push(comida);
}
}

            if (alterarLista === "-"){
                categoria = prompt("Deseja excluir um item de qual categoria: 'frutas', 'laticínios', 'doces', 'congelados' ou 'outros'?");
                while (categoria !== "frutas" && categoria !== "laticínios" && categoria !== "doces" && categoria !== "congelados" && categoria !== "outros"){
                  categoria = prompt(`Categoria não encontrada, vamos tentar novamente. \n Deseja excluir um item de qual categoria: 'frutas', 'laticínios', 'doces', 'congelados' ou 'outros'?`);
                }
                    if(categoria === 'frutas'){
                        var fruta = "";
                        fruta = prompt(`Em qual posição da lista está a fruta que deseja exlcuir? (1, 2, 3, ...)\n Frutas: \n ${frutas}`)
                              while (fruta > frutas.length) fruta = prompt(`Não encontrei a posição, vamos tentar novamente? Em qual posição da lista está a fruta que deseja exlcuir? (1, 2, 3, ...)\n Frutas: \n ${frutas}`)
                        frutas.remevedItem = frutas.splice(fruta-1 , 1);

                    } else if (categoria === 'laticínios'){
                        var laticinio = "";
                        laticinio = prompt(`Em qual posição da lista está o laticinio que deseja exlcuir? (1, 2, 3, ...)\n Laticínios: \n ${laticinios}`)
                              while (laticinio > laticinios.length) laticinio = prompt(`Não encontrei a posição, vamos tentar novamente? Em qual posição da lista está o laticínio que deseja exlcuir? (1, 2, 3, ...)\n Laticínios: \n ${laticinios}`)
                        laticinios.remevedItem = laticinios.splice(laticinio-1 , 1);

                    } else if (categoria === 'doces'){
                        var doce = "";
                        doce = prompt(`Em qual posição da lista está o doce que deseja exlcuir? (1, 2, 3, ...)\n Doces: \n ${doces}`)
                              while (doce > doces.length) doce = prompt(`Não encontrei a posição, vamos tentar novamente? Em qual posição da lista está o doce que deseja exlcuir? (1, 2, 3, ...)\n Doces: \n ${doces}`)
                        doces.remevedItem = doces.splice(doce-1 , 1);

                    } else if (categoria === 'congelados'){
                        var congelado = "";
                        congelado = prompt(`Em qual posição da lista está o congelado que deseja exlcuir? (1, 2, 3, ...)\n Congelados: \n ${congelados}`)
                              while (congelado > congelados.length) congelado = prompt(`Não encontrei a posição, vamos tentar novamente? Em qual posição da lista está o congelado que deseja exlcuir? (1, 2, 3, ...)\n Congelados: \n ${congelados}`)
                        congelados.remevedItem = congelados.splice(congelado-1 , 1);

                    } else if (categoria === 'outros'){
                        var outro = "";
                        outro = prompt(`Em qual posição da lista está a item que deseja exlcuir? (1, 2, 3, ...)\n Outros: \n ${outros}`)
                              while (outro > outros.length) outro = prompt(`Não encontrei a posição, vamos tentar novamente? Em qual posição da lista está o item que deseja exlcuir? (1, 2, 3, ...)\n Outros: \n ${outros}`)
                        outros.remevedItem = outros.splice(outro-1 , 1);
                    }
            }

      if (alterarLista === "parar"){
      break;
      }
  }
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Laticínios: ${laticinios}\n  Doces: ${doces}\n  Congelados: ${congelados}\n Outros: ${outros}`);