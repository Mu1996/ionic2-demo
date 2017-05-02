import { Injectable } from '@angular/core';

@Injectable()
export class SystemService {

    user: String;

    constructor() {

    }
    setUser(user:String) {
      this.user = user;
    }

    getUser(): Promise<String> {
      return Promise.resolve(this.user);
    }

}
