//Usuário digita o nome da peça de xadrez e recebe os movimentos que aquela peça pode fazer.
let piece = "Rook";

switch (piece.toLowerCase()) {
  case "king":
    console.log("Qualquer direção: uma casa");
    break;
  case "rook":
    console.log("Linha reta: horizontal/vertical");
    break;
  case "bishop":
    console.log("Diagonal: quantas casas quiser");
    break;
  case "queen":
    console.log("Qualquer direção: quantas casas quiser");
    break;
  case "knight":
    console.log("Movimento em L");
    break;
  case "pawn":
    console.log("1 casa para frente");
    break;

  default:
    console.log("Peça inexistente neste jogo");
    break;
}
