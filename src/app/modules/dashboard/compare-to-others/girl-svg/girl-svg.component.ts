import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-girl-svg',
  templateUrl: './girl-svg.component.html',
  styleUrls: ['./girl-svg.component.scss']
})
export class GirlSvgComponent {
  @Input() color = '#ef3e2d';
  @Input() width="83";

  getHeight(){
    return parseInt(this.width) * 2.07;
  }
}
