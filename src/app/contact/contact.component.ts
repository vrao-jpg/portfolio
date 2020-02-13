import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'contact-component',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class contactComponent implements OnInit{
  @ViewChild('canvasEl', { static : true}) canvasEl: ElementRef;
  private context: CanvasRenderingContext2D;
  title = 'practice-app';
  windowWidths :any;
  ngOnInit() {
    this.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');
    this.windowWidths = window.innerWidth - 18;
  }
  ngAfterViewInit() {
    this.context.beginPath();
    this.context.moveTo(0 , 200);
    this.context.lineTo(0 , 0);
    this.context.lineTo(this.windowWidths/2 , 200);
    this.context.fillStyle = '#1b242f';
    this.context.fill();

    this.context.beginPath();
    this.context.moveTo(this.windowWidths/2 , 200);
    this.context.lineTo(this.windowWidths , 0);
    this.context.lineTo(this.windowWidths , 200);
    this.context.fillStyle = '#1b242f';
    this.context.fill();
  }
}