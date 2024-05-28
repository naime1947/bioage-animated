import { LabelType, Options } from '@angular-slider/ngx-slider';
import { Component, Input } from '@angular/core';
import { AssessmentResultModel } from '@modules/my-results/models/assessment-result.model';

@Component({
  selector: 'app-compare-to-others',
  templateUrl: './compare-to-others.component.html',
  styleUrls: ['./compare-to-others.component.scss']
})
export class CompareToOthersComponent {
  @Input() latestAssessmentResult!: AssessmentResultModel;

  value: number = 9;
  options: Options = {
    floor: 1,
    ceil: 10,
    step: 1,
    readOnly: true,
    showTicks: true,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return "<b>You</b>";
        default:
          return "";
      }
    }
  };

}
