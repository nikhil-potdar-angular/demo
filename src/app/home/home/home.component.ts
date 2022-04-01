import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from 'src/app/subject.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   myName:String="nikhil"
  constructor(private router:Router,private service:SubjectService) { }

  ngOnInit(): void {
  }
  sendData(name:any)
  {
      this.myName=name
      this.service.passData(name)
      this.router.navigate(['dashboard'])
  }
}
