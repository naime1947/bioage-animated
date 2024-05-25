import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { flipInX, heartBeat, slideInLeft } from '@shared/animations/animation';

@Component({
  selector: 'app-age-gap-banner',
  templateUrl: './age-gap-banner.component.html',
  styleUrls: ['./age-gap-banner.component.scss'],
  animations:[
    trigger(`flyInY`, [
      transition('void => *', [
        style({ opacity: 0, transform: `translateY(-100%)` }),
        animate(
          `600ms 200ms ease-in`,
          style({ opacity: 1, transform: `translateY(0%)` })
        ),
      ]),
    ]),
    trigger(`flyInX`, [
      transition('void => *', [
        style({ opacity: 0, transform: `translateX(-100%)` }),
        animate(
          `800ms 100ms ease-in`,
          style({ opacity: 1, transform: `translateX(0%)` })
        ),
      ]),
    ]),
    heartBeat(1300, 1200),
    flipInX(1000, 100),
    slideInLeft(1000, 100)
  ]
})
export class AgeGapBannerComponent implements OnInit, OnChanges {
  description =
    'Research has shown a 5 year difference between BioAge and chronological age is associated with an increased risk of conditions like cardiovascular disease';
  @Input() yourAge!: number;
  @Input() yourBioAge!: number;

  ageDifference!: number;
  ageDifferenceAbs!: number;

  ngOnInit(): void {
    this.setAgeDifference();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.setAgeDifference();
  }
  setAgeDifference(){
    this.ageDifference = this.yourAge - this.yourBioAge;
    this.ageDifferenceAbs = Math.abs(this.ageDifference);
    this.ageDifferenceAbs =
      this.ageDifferenceAbs > 3 ? 3 : this.ageDifferenceAbs;
  }
}
