import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Http, RequestOptions, Response, Headers} from '@angular/http';
import { hostip, handleError, extractData } from '../config';

@Injectable()
export class SystemService {

  user: any;
  uid: any;
  loginToken: any;
  school: any;
  profile: any;
  courseClassId: any;
  destUrl: any;
  redirectFlag: any;


  constructor(private http: Http) {
  }

  logout() {
    this.loginToken = "";
  }

  getUser(){
    let userCache = null;
    if (localStorage.user) {
      userCache = JSON.parse(localStorage.user);
    } else {
      userCache = JSON.parse(sessionStorage.user);
    }

    //判断是否存在用户缓存
    if(this.user){
      //判断本地缓存和session或者localstorage里面的用户信息是否相同
      if(this.user._id != this.user._id){
        this.user = userCache;
      }
    }else{
      this.user = userCache;
    }
    return this.user;
  }

  setUser(newUser) {
    this.user = newUser;
    localStorage.user = JSON.stringify(newUser);
    sessionStorage.user = JSON.stringify(newUser);

  }

  setLoginToken (newLoginToken) {
    this.loginToken = newLoginToken;
    sessionStorage.loginToken = this.loginToken;
    localStorage.loginToken = this.loginToken;
  }



  login(moblie,password): Observable<String> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let param = {
      mobile: moblie,
      password: password,
    };

    return this.http.post(hostip+"iv1/user/login",param)
      .map(extractData)
      .catch(handleError);
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
