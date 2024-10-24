import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient,
    private router: Router) { }


  CreateUser(body: any) {
    //debugger
    body.image = this.userImage;

    this.http.post('https://localhost:7117/api/User/CreateUser', body).subscribe(
      (resp) => {
        console.log('user created')
        this.router.navigate(['security/login']);
      }, err => {
        console.log('Error')
      })
  }
  CreateAirline(body: any) {
    body.image = this.userImage;

    this.http.post('https://localhost:7117/api/Airline/CreateAirline', body).subscribe(
      (resp) => {
        console.log('airline created')
        this.router.navigate(['security/login']);
      }, err => {
        console.log('Error')
      })
  }

  userImage: any;
  //FormData => interface to send obj
  uploadAttachment(file: FormData) {
    this.http.post('https://localhost:7117/api/User/uploadImage', file).subscribe(
      (resp: any) => {
        this.userImage = resp.image;
        console.log('image uploaded')
      }, err => {
        console.log('Error')
      })
  }
  airlineImage: any;
  //FormData => interface to send obj
  uploadAttachment2(file: FormData) {
    this.http.post('https://localhost:7117/api/Airline/uploadImage', file).subscribe(
      (resp: any) => {
        this.userImage = resp.image;
        console.log('image uploaded')
      }, err => {
        console.log('Error')
      })
  }

  Login(uName: any, pass: any) {
    var body = {
      username: uName.value.toString(),
      password: pass.value.toString()
    }

    //because body is not form group and not a json
    //نحوله ل json obj
    const headerDirection = {
      'Constent-Type': 'application/json',
      'Accept': 'application/json'
    }
    const requestOptions = {
      //headers takes he data type from headerDirection
      headers: new HttpHeaders(headerDirection)
    }
    //debugger

    this.http.post('https://localhost:7117/api/Login/Login', body, requestOptions).subscribe(
      (resp: any) => {
        console.log(resp);
        const response = {
          token: resp.toString()
        }
        //for authorization
        localStorage.setItem('token', response.token);
        //فك التشفير
        let data: any = jwtDecode(response.token);
        localStorage.setItem('user', JSON.stringify(data));

        if (data.roleid == '1')
          this.router.navigate(['admin/home']);
        else if (data.roleid == '2')
          this.router.navigate(['guest/home']);
        else if (data.roleid == '3')
          this.router.navigate(['airline/flights']);

      }, err => {
        console.log('Error')
      })
  }



  UpdateUser(body: any) {
    //debugger
    body.image = this.userImage;

    this.http.put('https://localhost:7117/api/User/UpdateUser', body).subscribe(
      (resp) => {
        console.log('user updated')
      }, err => {
        console.log('Error')
      })
  }




}