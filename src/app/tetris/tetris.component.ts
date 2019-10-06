import { Component, ViewChild, ElementRef, OnInit, NgZone } from '@angular/core';
import { Square } from './square';

@Component({
  selector: 'app-tetris',
  templateUrl: './tetris.component.html',
  styleUrls: ['./tetris.component.scss']
})
export class TetrisComponent implements OnInit {

  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;
  requestId;
  interval;
  squares: Square[] = [];


  score = 0;
  lines = 0;
  level = 0;


  playField = [
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];


  activePiece = {
    x: 0,
    y: 0, 
    blocks : [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0 ,0]
      ]
  };

  movePieceLeft(){
    this.activePiece.x -= 1;

    if (this.hasCollision()) {
      this.activePiece.x +=1 ;
    }
  }

  movePieceRight(){
    this.activePiece.x +=1;

    if (this.hasCollision()) {
      this.activePiece.x -=1 ;
    }
  }

  movePieceDown(){
    this.activePiece.y += 1;

    if (this.hasCollision()) {
      this.activePiece.y -= 1;
      this.lockPiece();
    }
  }

  hasCollision(){
    const playField = this.playField;
    const {y, x} = this.activePiece;

    const {y : pieceY, x : pieceX, blocks} =  this.activePiece;

    for (let y = 0; y < blocks.length; y++) {   
      for (let x = 0; x < blocks[y].length; x++) {
        if (blocks[y][x] &&
          ((this.playField[pieceY + y] === undefined || playField[pieceY + y][pieceX + x] === undefined) ||
          this.playField[pieceY + y][pieceX + x])){
          return true;
        }
       
      }
    }

    return false;
  }

  lockPiece(){
    const {y : pieceY, x : pieceX, blocks} =  this.activePiece;

    for (let y = 0; y < blocks.length; y++) {   
      for (let x = 0; x < blocks[y].length; x++) {
        if (blocks[y][x]){
          this.playField[pieceY + y][pieceX + x] = this.activePiece.blocks[y][x];
        }
        
      }
    }
  }

  renderPlayField(playField :any){

    for (let y = 0; y < playField.length; y++) {
      const line = playField[y];

      for (let x = 0; x < playField.length; x++) {
        const block = line[x];

        if (block) {
          this.ctx.fillStyle = 'red';
          this.ctx.strokeStyle = 'black';
          this.ctx.lineWidth = 2;

          this.ctx.fillRect(x *20, y*20, 20, 20);
        }
        
      }
      
    }
  }








  constructor(private ngZone: NgZone) {}


  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.ctx.fillStyle = 'red';
    this.ngZone.runOutsideAngular(() => this.tick());
    setInterval(() => {
      this.tick();
    }, 200);
  }

  tick() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.squares.forEach((square: Square) => {
      square.moveRight();
    });
    this.requestId = requestAnimationFrame(() => this.tick);
  }

  play() {
    const square = new Square(this.ctx);
    this.squares = this.squares.concat(square);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
    cancelAnimationFrame(this.requestId);
  }

}

