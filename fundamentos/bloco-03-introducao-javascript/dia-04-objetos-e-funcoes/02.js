let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

info["recorrente"] = "Sim";

for (item in info) {
  console.log(item);
}

for (item in info) {
  console.log(info[item]);
}
