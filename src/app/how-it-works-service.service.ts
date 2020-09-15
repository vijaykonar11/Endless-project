import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HowItWorksServiceService {
  public url: string =
    'https://uqnzta2geb.execute-api.us-east-1.amazonaws.com/default/FrontEndCodeChallenge';
  constructor(private http: HttpClient) {}
  getHowItWorks() {
    return this.http.get(this.url);
  }
}
