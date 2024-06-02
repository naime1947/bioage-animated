import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '@shared/shared.module';
import { AgeGapBannerComponent } from './age-gap-banner/age-gap-banner.component';
import { HeartComponent } from './age-gap-banner/heart/heart.component';
import { HealthRiskComponent } from './health-risk/health-risk.component';
import { WhatThisMeanComponent } from './what-this-mean/what-this-mean.component';
import { CompareToOthersComponent } from './compare-to-others/compare-to-others.component';
import { GirlSvgComponent } from './compare-to-others/girl-svg/girl-svg.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { JournalComponent } from './journal/journal.component';
import { WellnessExamComponent } from './wellness-exam/wellness-exam.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AgeGapBannerComponent,
    HeartComponent,
    HealthRiskComponent,
    WhatThisMeanComponent,
    CompareToOthersComponent,
    GirlSvgComponent,
    JournalComponent,
    WellnessExamComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgxSliderModule
  ]
})
export class DashboardModule { }
