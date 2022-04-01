import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/subject.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  myName:any=" "
  name:any=""
  constructor(private service:SubjectService) { 
    
  }


  ngOnInit(): void {
    this.service.sub.subscribe((data:any)=>{
      console.log(data)
      this.myName=data
      this.name=this.myName
      console.log(this.myName)
    })
  }
 

  
}
