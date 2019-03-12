import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import {ApiCallsService} from '../services/api-calls.service';
import Swal from 'sweetalert2';
import {NgxUiLoaderService} from 'ngx-ui-loader';


@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {
  username: any;
  applications: any;
  applicant: any
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router,
              private api: ApiCallsService, private ngxService: NgxUiLoaderService,
              private route: ActivatedRoute) {
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
      this.applicant = this.applications.filter((el) => {
        return el._id == this.route.snapshot.paramMap.get('id');
      })[0];
      this.ngxService.stop();
    });
  }

  GoBack() {
    this.router.navigate(['dashboard']);
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

  logout() {
    localStorage.removeItem('GhanaTechUser');
    localStorage.removeItem('GhanaTechAuth');
    this.router.navigate(['']);
  }
}
