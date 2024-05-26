import {
  animate,
  animateChild,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserModel } from '@modules/auth/models/user.model';
import { AuthService } from '@modules/auth/services/auth.service';
import { AssessmentResultModel } from '@modules/my-results/models/assessment-result.model';
import { MyResultService } from '@modules/my-results/services/my-result.service';
import { slideInLeft, slideInRight } from '@shared/animations/animation';
import { sortAssessment } from '@shared/utilities/utils';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger(`fadeIn`, [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(`800ms 0ms ease-in`, style({ opacity: 1 })),
      ]),
    ]),
    slideInLeft(1000, 0),
    slideInRight(1000, 100)
  ],
})
export class DashboardComponent implements OnInit {
  user: UserModel | null;
  latestAssessmentResult!: AssessmentResultModel;

  constructor(
    private authService: AuthService,
    private titleService: Title,
    private myResultService: MyResultService
  ) {
    this.user = this.authService.getUser();

    this.myResultService.assessmentResults$.pipe().subscribe((data) => {
      if (data && data.length) {
        sortAssessment(data, 'new');
        this.latestAssessmentResult = data[0];
      }
    });
  }

  yourBioAge = 61;
  yourAge = 53;
  ngOnInit(): void {
    this.titleService.setTitle('Dashbaord - BioAge');
    this.myResultService.getResults();

    // setInterval(()=> {
    //   this.yourBioAge = this.getRandomInt(49, 57)
    // }, 5000)
  }

  getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
