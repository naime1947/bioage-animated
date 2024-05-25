import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { heartBeat } from '@shared/animations/animation';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['heart.component.scss'],
  animations: [
    trigger(`flyInY`, [
      transition('void => *', [
        style({ opacity: 0, transform: `translateY(-100%)` }),
        animate(
          `600ms 400ms ease-in`,
          style({ opacity: 1, transform: `translateY(0%)` })
        ),
      ]),
    ]),
    heartBeat(1300, 2200)
  ],
})
export class HeartComponent {
  @Input() yourBioAge = 0;
}
