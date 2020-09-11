import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-window',
  templateUrl: './project-window.component.html',
  styleUrls: ['./project-window.component.css']
})
export class ProjectWindowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  projects=["DM-AI","stayAnonymous","CTG","Bikelele"];
  

}
