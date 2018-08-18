import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class User {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

@Injectable()
export class LoginProvider {
  currentUser: User;

  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw('Por favor, insira seu login e senha');
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        // tslint:disable-next-line:quotemark
        let access = (credentials.password === "123456" && credentials.email === "teste@tiabete.com");
		this.currentUser = new User('Tia Bete', 'teste@tiabete.com');
        observer.next(access);
        observer.complete();
      });
    }
  }

  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw('Por favor, insira seu login e senha');
    } else {
		this.currentUser = new User(credentials.name, credentials.email);
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  public getUserInfo() : User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}
