import { environment } from './../../environments/environment';
import { Http } from '@angular/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  webServiceURL = environment.apiUrl;

  constructor(public http: Http, public router: Router) { }

  ngOnInit() {

  }
}
