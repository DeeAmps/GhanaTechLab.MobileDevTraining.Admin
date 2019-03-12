import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import {ApiCallsService} from '../services/api-calls.service';
import Swal from 'sweetalert2';
import {NgxUiLoaderService} from 'ngx-ui-loader';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  username: any;
  applications: any;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router,
              private api: ApiCallsService, private ngxService: NgxUiLoaderService) {
    this.getAllApplications()
    this.username = localStorage.getItem('GhanaTechUser');
  }

  ngOnInit() {
    if (localStorage.getItem('GhanaTechAuth') == undefined || localStorage.getItem('GhanaTechAuth') == null) {
      this.router.navigate(['']);
    }
    if (this.confirmToken()) {
      this.router.navigate(['']);
    }
  }

  getAllApplications() {
    this.ngxService.start();
    this.api.getAllApplicants().subscribe(res => {
      this.applications = res;
      console.log(this.applications)
      this.ngxService.stop();
    });
  }

  confirmToken(): boolean {
    const data = {
      username : localStorage.getItem('GhanaTechUser'),
      token: localStorage.getItem('GhanaTechAuth')
    };
    this.api.confirmToken(data).subscribe((res) => {
      const dt = res;
      console.log(res)
      if (!res) {
        return false;
      } else {
        return true;
      }
    });
    return false;
  }

  GetDetails(id) {
    this.router.navigate(['applicant', id]);
  }

  logout() {
    localStorage.removeItem('GhanaTechUser');
    localStorage.removeItem('GhanaTechAuth');
    this.router.navigate(['']);
  }

}
