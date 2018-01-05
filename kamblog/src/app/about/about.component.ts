import { Component, OnInit } from '@angular/core';

@Component({
  
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  myinfo: string;
  summary:string;
  skill:string;
  skill1:string;
  skill2:string;
  skill3:string;
  skill4:string;
  exp:string;
  constructor() { }

  ngOnInit() {
  this.myinfo = "Well i am an IT enthusiast. Learning about new technologies has become one of my passions ever since i learned to Design Web applications during my Teenage.Currently i am based in Boston,MA and hoping to make a living here in this beautiful city. I have built this web site so that world can recognize me and i can contribute to the IT World through my blogs. Over the last few years i have learned various technologies specially related to modern web & mobile app development.";

  this.summary="I am a Software Engineer and currently working in USA. Hoping that getting a job in USA will fullfill my dreams of starting my own IT company and getting a Ferrari. I have approximately 3 years of programming experience. I am seeking a job opportunity as a Software Engineer where I can manage and develop innovative IT projects. Recently, i graduated with Masters in Computer Information Systems with dual specialization in IT Project management and Web application development from Boston University. My CGPA at graduation was 3.65.";

  

  this.skill="Expertise in Programming languages: ASP.NET MVC 4.5-PHP-Python-Node.js-Angular.js-Express.js";
  this.skill4="Client Side Technologies:HTML5-CSS3-Javascript-Jquery-Bootstrap";
  this.skill2="Key Developement Methodologies: DevOps-Agile-Iterative";
  this.skill1="Database Technologies: Mongodb-MSSQL SERVER-MYSQL";
  this.skill3="Some Recent Learning include deploying web on Azure-Building & Managing Docker Images";
  }

}
