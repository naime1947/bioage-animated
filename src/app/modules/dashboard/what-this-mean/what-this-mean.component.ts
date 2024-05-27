import { Component, Input } from '@angular/core';
import { AssessmentResultModel } from '@modules/my-results/models/assessment-result.model';

@Component({
  selector: 'app-what-this-mean',
  templateUrl: './what-this-mean.component.html',
  styleUrls: ['./what-this-mean.component.scss']
})
export class WhatThisMeanComponent {
  @Input() latestAssessmentResult!: AssessmentResultModel;
}
