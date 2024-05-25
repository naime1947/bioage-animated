import { Component, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['heart.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      transition('*=>*', [
          style({opacity: 0}),
          animate(1000)
      ])
  ])
  ]
})
export class HeartComponent {
  @Input() yourBioAge = 0;
}
