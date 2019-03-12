import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import {ApiCallsService} from '../services/api-calls.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private api: ApiCallsService, private ngxService: NgxUiLoaderService,
              private router: Router) { }

  ngOnInit() {
  }

  checkInput(val) {
    if (val === undefined || val === '') {
      return true;
    }
    return false;
  }

  login() {
    if (this.checkInput(this.username) || this.checkInput(this.password)){
      return Swal.fire({
        title: '',
        text: 'Please input your username and password',
        type: 'error',
        confirmButtonText: 'OK'
      });
    }
    this.ngxService.start();
    const data = {
      username : this.username,
      password: this.password
    }
    this.api.loginAdmin(data).subscribe(res => {
      const dt = res;
      this.ngxService.stop();
      if (!dt.success) {
        return Swal.fire({
          title: '',
          text: dt.message,
          type: 'error',
          confirmButtonText: 'OK'
        });
      } else {
        const jwt = dt.data.jwt;
        const username = dt.data.username;
        localStorage.setItem('GhanaTechAuth', jwt);
        localStorage.setItem('GhanaTechUser', this.username);
        this.router.navigate(['dashboard']);
      }
    });
  }

}
