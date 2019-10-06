import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent implements OnInit {
  player1 = 'X';
  player2 = 'O';

  playerTurn1 : boolean = true;

  playerWin : boolean;


  playingField = [
    '', '', '',
    '', '', '',
    '', '', '',
 ];



 onClick(key:number){
   if (this.playerWin) {
     alert("Click New Game");
   }

   if (this.playerTurn1 == true){
    this.playingField[key] = this.player1;
    this.playerTurn1 = false;
   }
   else {
    this.playingField[key] = this.player2;
    this.playerTurn1 = true;
   }

   if (
    (this.playingField[0]===this.player1&&this.playingField[1]===this.player1&&this.playingField[2]===this.player1)
    ||(this.playingField[3]===this.player1&&this.playingField[3]===this.player1&&this.playingField[4]===this.player1)
    ||(this.playingField[6]===this.player1&&this.playingField[7]===this.player1&&this.playingField[8]===this.player1)

    ||(this.playingField[0]===this.player1&&this.playingField[3]===this.player1&&this.playingField[6]===this.player1)
    ||(this.playingField[1]===this.player1&&this.playingField[4]===this.player1&&this.playingField[7]===this.player1)
    ||(this.playingField[2]===this.player1&&this.playingField[5]===this.player1&&this.playingField[8]===this.player1)
    
    ||(this.playingField[0]===this.player1&&this.playingField[4]===this.player1&&this.playingField[8]===this.player1)
    ||(this.playingField[2]===this.player1&&this.playingField[4]===this.player1&&this.playingField[6]===this.player1)
  ){
    alert("Player 1 Win");
    this.playerWin = true;
    return;
  }

  if (
    (this.playingField[0]===this.player2&&this.playingField[1]===this.player2&&this.playingField[2]===this.player2)
    ||(this.playingField[2]===this.player2&&this.playingField[3]===this.player2&&this.playingField[4]===this.player2)
    ||(this.playingField[6]===this.player2&&this.playingField[7]===this.player2&&this.playingField[8]===this.player2)

    ||(this.playingField[0]===this.player2&&this.playingField[3]===this.player2&&this.playingField[6]===this.player2)
    ||(this.playingField[1]===this.player2&&this.playingField[4]===this.player2&&this.playingField[7]===this.player2)
    ||(this.playingField[2]===this.player2&&this.playingField[5]===this.player2&&this.playingField[8]===this.player2)
    
    ||(this.playingField[0]===this.player2&&this.playingField[4]===this.player2&&this.playingField[8]===this.player2)
    ||(this.playingField[2]===this.player2&&this.playingField[4]===this.player2&&this.playingField[6]===this.player2)
  ){
    alert("Player 2 Win");
    this.playerWin = true;
    return;
  }
  
 }

 onNewGame(){
  this.playerWin = false;
  for (let index = 0; index < this.playingField.length; index++) {
    this.playingField[index]='';
 }
}


  constructor() { }

  ngOnInit() {
  }

}
