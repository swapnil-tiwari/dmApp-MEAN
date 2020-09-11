import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dm-app';
  viewProj=false;
  initiateProjects()
  {

    console.log("Projects Initiated!")
    this.viewProj=true;
    return this.viewProj
    
  }
}
