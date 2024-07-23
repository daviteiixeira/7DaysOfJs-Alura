let fruit = [];
let dairy = [];
let candy = [];
let frozen = [];
let savory = [];
let food = "";
let category = "";
let client = "";
let delet = "";

alert("Olá Seja bem-vindo(a) ao seu supermercado!");
client = prompt("Qual é o seu nome?");
alert(`É um prazer em te receber ${client}`);
alert("Vamos começar as suas compras!");

var addMore = "";
addMore = prompt("Você deseja adicionar uma comida na lista de compras?");
while (addMore === "sim" || addMore === "Sim" || addMore === "SIM" || addMore === "s" || addMore === "S" || addMore === "sIm" || addMore === "siM") {
if (addMore === "não" || addMore === "n" || addMore === "N" || addMore === "Nao" || addMore === "nao" || addMore === "NaO" || addMore === "NAO" || addMore === "NÃO" || addMore === "nAo" || addMore === "Não" || addMore === "nÃo" || addMore === "nãO") {
    alert(`Lista de compras: Vazia`);
} else if (addMore === "sim" || addMore === "Sim" || addMore === "SIM" || addMore === "s" || addMore === "S" || addMore === "sIm" || addMore === "siM") {
    do {
        food = prompt("Qual comida você deseja inserir?");
        category = prompt("Em qual categoria essa comida se encaixa: frutas, laticínios, doces, congelados ou salgados?");
        if (category === "frutas" || category === "Frutas" || category === "FRUTAS") {
            fruit.push(food);
        } else if (category === "laticínios" || category === "Laticínios" || category === "LATICíNIOS" || category === "laticinios" || category === "laticinios" || category === "LATICINIOS") {
            dairy.push(food);
        } else if (category === "doces" || category === "Doces" || category === "DOCES") {
            candy.push(food);
        } else if (category === "congelados" || category === "Congelados" || category === "CONGELADOS") {
            frozen.push(food);
        } else if (category === "salgados" || category === "Salgados" || category === "SALGADOS") {
            savory.push(food);
        } else {
            alert("Essa categoria não existe. Tente novamente.");
        }
        addMore = prompt("Você deseja adicionar mais uma comida na lista de compras?");
    } while (addMore === "sim" || addMore === "Sim" || addMore === "SIM" || addMore === "s" || addMore === "S" || addMore === "sIm" || addMore === "siM");
} else {
    alert(`Por favor, ${client}, responda novamente.`);
}
}

alert(`Lista de compras:\n Frutas: ${fruit}\n Laticínios: ${dairy}\n Doces: ${candy}\n Congelados: ${frozen}\n Salgados: ${savory}`);