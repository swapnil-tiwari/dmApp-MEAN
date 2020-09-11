import { Component, OnInit } from '@angular/core';

function getDate()
{
  let dateobj=new Date();
  let date={}

    date.dd=  dateobj.getDate()
    date.mm=  dateobj.getMonth()
    date.yy= dateobj.getFullYear()
 
  return date
}

@Component({
  selector: 'app-clock-panel',
  templateUrl: './clock-panel.component.html',
  styleUrls: ['./clock-panel.component.css']
})
export class ClockPanelComponent implements OnInit {

   date=''
   months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   setDate()
    {
      let temp= getDate()
      this.date = `${temp.dd}th ${this.months[temp.mm]} ${temp.yy}`
      console.log(this.date)

    }
  constructor() { }

  ngOnInit(): void {
     this.setDate()
  }

}
