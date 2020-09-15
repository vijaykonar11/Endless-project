import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HowItWorksServiceService } from './how-it-works-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public url: string;
  public howItWorks: any = [];

  constructor(
    public breakpointObserver: BreakpointObserver,
    private api: HowItWorksServiceService
  ) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((state: any) => {
        if (state.breakpoints[Breakpoints.XSmall]) {
          this.url = '../assets/Images/photo-couch_480.jpg';
        }
        if (state.breakpoints[Breakpoints.Small]) {
          this.url = '../assets/Images/photo-couch_786.jpg';
        }
        if (state.breakpoints[Breakpoints.Medium]) {
          this.url = '../assets/Images/photo-couch_1024.jpg';
        }
        if (state.breakpoints[Breakpoints.Large]) {
          this.url = '../assets/Images/photo-couch.jpg';
        }
        if (state.breakpoints[Breakpoints.XLarge]) {
          this.url = '../assets/Images/photo-couch_2x.jpg';
        }
      });
  }

  public getHowToWork() {
    this.howItWorks = [];
    this.api.getHowItWorks().subscribe((data: any) => {
      data.sort((a, b) => a.stepNumber - b.stepNumber);
      for (const d of data as any) {
        let mostRecentValue: any = {};
        mostRecentValue.stepNumber = '0' + d.stepNumber;
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
