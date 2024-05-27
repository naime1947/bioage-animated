import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '@shared/shared.module';
import { AgeGapBannerComponent } from './age-gap-banner/age-gap-banner.component';
import { HeartComponent } from './age-gap-banner/heart/heart.component';
import { HealthRiskComponent } from './health-risk/health-risk.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AgeGapBannerComponent,
    HeartComponent,
    HealthRiskComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
