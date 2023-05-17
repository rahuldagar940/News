import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private _http: HttpClient) { }
  //newsApi URL
  newApiUrl = "GET https://newsapi.org/v2/top-headlines?country=us&apiKey=f845fcb0d606416da761b3841c40aeee";
  //Function to get top headings
  topHeading():Observable<any>{
    return this._http.get(this.newApiUrl);
  } 
}
