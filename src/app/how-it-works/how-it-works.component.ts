import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.css'],
})
export class HowItWorksComponent implements OnInit {
  @Input() howItWork: any;
  constructor() {}

  ngOnInit(): void {}
}
