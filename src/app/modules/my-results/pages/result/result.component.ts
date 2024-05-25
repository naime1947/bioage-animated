import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserModel } from '@modules/auth/models/user.model';
import { AuthService } from '@modules/auth/services/auth.service';
import { AssessmentResultModel } from '@modules/my-results/models/assessment-result.model';
import { MyResultService } from '@modules/my-results/services/my-result.service';
import { BreadcrumbService } from '@shared/components/breadcrumbs/services/breadcrumb.service';
import * as moment from 'moment';
import { tap } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  user: UserModel | null;
  assessmentId!: string;
  assessmentResult: AssessmentResultModel | undefined;

  constructor(
    private authService: AuthService,
    private breadcrumbService: BreadcrumbService,
    private myResultService: MyResultService,
    private route: ActivatedRoute
  ) {
    this.user = this.authService.getUser();
    this.assessmentId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.myResultService
      .getResultById(this.assessmentId)
      .pipe(
        tap((data) => {
          this.assessmentResult = data;
          setTimeout(() => {
            this.breadcrumbService.addBreadcrumbData([
              {
                label: `BioAge Assessments (${moment(
                  this.assessmentResult?.dateOfLatestImaging
                ).format('MMMM DD, YYYY')})`,
                route: '',
              },
            ]);
          }, 0);
        })
      )
      .subscribe();

    window.scrollTo(0, 0);
  }
}
