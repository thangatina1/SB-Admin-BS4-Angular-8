import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderModule } from '../../shared';
import { MomDashboardComponent } from './mom-dashboard.component';
import { RevenueRoutingModule } from './revenue-routing.module';

import { ChartsModule as Ng2Charts } from 'ng2-charts';

@NgModule({
    imports: [CommonModule, Ng2Charts, RevenueRoutingModule, PageHeaderModule],
    declarations: [MomDashboardComponent]
})
export class RevenueModule {}
