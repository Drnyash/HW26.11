let footballPlayers = ["Роналду", "Зидан", "Неймар", "Бензема"];

footballPlayers[1] = "Месси";

footballPlayers[4]= ["Пеле"];
footballPlayers[5]= ["Мбаппе"];

console.log(footballPlayers);

if (footballPlayers.length > 5) {
    console.log("көп");
} else {
    console.log("аз");
}
