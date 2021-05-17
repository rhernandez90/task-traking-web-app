import { Component, OnInit } from '@angular/core';
import { isDevMode } from '@angular/core';
@Component({
  selector: 'app-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.css']
})
export class BaseComponentComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

  getBaseUrl(): string {
        if (isDevMode()) {
            return  "https://localhost:44308/";  // "http://localhost:3000/api"; //appConfig.localBaseUrl;
        }
        else {
            
            return "http://104.248.112.187:3000/api"; 
        }
    }


}
