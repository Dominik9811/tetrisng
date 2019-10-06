import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

 

 
}

// import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     <canvas #canvas width="600" height="300"></canvas>
//     <button (click)="animate()">Play</button>   
//   `,
//   styles: ['canvas { border-style: solid }']
// })
// export class AppComponent implements OnInit {
//   @ViewChild('canvas', { static: true })
//   canvas: ElementRef<HTMLCanvasElement>;  
  
//   private ctx: CanvasRenderingContext2D;

//   ngOnInit(): void {
//     this.ctx = this.canvas.nativeElement.getContext('2d');
//   }
  
//   animate(): void {}
// }

