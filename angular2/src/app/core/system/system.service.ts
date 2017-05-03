import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import { hostip, handleError, extractData } from '../config';

@Injectable()
export class SystemService {
  private testUrl = 'http://localhost:3000/';


  constructor(private http: Http) {
  }

  getHeroes(): Promise<String> {
    return Promise.resolve("200");
  }

  getTest(): Observable<String> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.get(hostip)
      .map(extractData)
      .catch(handleError);
  }

  postTest(): Observable<String> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = {
      code : "2014210950"
    };
    return this.http.post(hostip + "postTest",body)
      .map(extractData)
      .catch(handleError);
  }


}
