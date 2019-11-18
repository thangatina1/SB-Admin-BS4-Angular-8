import { MomDashboardComponent } from './mom-dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    {
        path: '', component: MomDashboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RevenueRoutingModule {}




