import { Component, Input, ViewEncapsulation } from '@angular/core';
import { AssessmentResultModel } from './../../my-results/models/assessment-result.model';

@Component({
  selector: 'app-health-risk',
  templateUrl: './health-risk.component.html',
  styleUrls: ['./health-risk.component.scss']
})
export class HealthRiskComponent {
  @Input() latestAssessmentResult!: AssessmentResultModel;
}
