import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HowItWorksServiceService } from './how-it-works-service.service';
import{ SwUpdate} from'@angular/service-worker';
import { ConnectionService } from 'ng-connection-service';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public url: string;
  public howItWorks: any = [];
  public noInternetConnection:boolean;

  constructor(
    public breakpointObserver: BreakpointObserver,
    private api: HowItWorksServiceService,
    public update:SwUpdate,
    private connectionService: ConnectionService
  ) {
    this.connectionService.monitor().subscribe(isConnected => {  
      if (isConnected) {  
        this.noInternetConnection=false;  
      }  
      else {  
        this.noInternetConnection=true;  
      }  
    })  

  }

  ngOnInit() {
    
  }

  public getHowToWork() {
    this.howItWorks = [];
    this.api.getHowItWorks().subscribe((data: any) => {
      data.sort((a, b) => a.stepNumber - b.stepNumber);
      for (const d of data as any) {
        let mostRecentValue: any = {};
        if(parseInt(d.stepNumber)<10){
          mostRecentValue.stepNumber = '0' + d.stepNumber;
        }else{
          mostRecentValue.stepNumber = d.stepNumber;
        }
        
        mostRecentValue.versionContent = d.versionContent.reduce((a, b) => {
          return new Date(a.effectiveDate) > new Date(b.effectiveDate) ? a : b;
        });
        this.howItWorks.push(mostRecentValue);
      }
      console.log(this.howItWorks);
    });
  }
  title = 'endless-coding';
}
