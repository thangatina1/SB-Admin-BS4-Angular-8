import { Component, OnInit } from '@angular/core';
import { IRevenueDashboard } from './dashboard';
import { RevenueDashboardService } from './revenue-dashboard.service';
import { routerTransition } from '../../router.animations';
import { tap, map, filter } from 'rxjs/operators';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-mom-dashboard',
  templateUrl: './mom-dashboard.component.html',
  styleUrls: ['./mom-dashboard.component.scss']
})
export class MomDashboardComponent implements OnInit {


  constructor(private _dashboardService: RevenueDashboardService) { }

  public headerRow = ['Jan', 'Feb', 'Mar', 'Apr', 'May',  'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'TOTAL'];

  public revenueDashboard: IRevenueDashboard [] = [];

  public obj: String ;


 // lineChart
 public data: Array <any>;
 public label: String;
 public lineChartData: Array <any> = [
  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Baseline' },
  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Most-likely' },
  { data: [18, 48, 77, 9, 100, 27, 40], label: 'Upside' }
];
public lineChartLabels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May',  'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

public lineChartOptions: any = {
  responsive: true
};
public lineChartColors: Array<any> = [
  {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  },
  {
      // dark grey
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
  },
  {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }
];
public lineChartLegend: boolean;
public lineChartType: string;

   // Doughnut
  public doughnutChartLabels: string[] = ['Baseline', 'Most-likely', 'Upside' ];

  public doughnutChartData: number[] = [];

  public doughnutChartColors: Array<any> = [];

  public doughnutChartType: string;


   // events
   public chartClicked(e: any): void {
    // console.log(e);
}

public chartHovered(e: any): void {
    // console.log(e);
}

  ngOnInit() {
    const sub =  this._dashboardService.getRevenueDashboard().subscribe((data) => {
      this.revenueDashboard = data;

  });

  this._dashboardService.getDashboardResponse().subscribe((res: any) => {
      this.doughnutChartData.push(res.baselineTotals.grandTotal);
      this.doughnutChartData.push(res.mostlikelyTotals.grandTotal);
      this.doughnutChartData.push(res.upsideTotals.grandTotal);
      this.doughnutChartType = 'doughnut';
      });



  this.lineChartLegend = true;
  this.lineChartType = 'line';




  }




}
