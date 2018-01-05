import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  submitted: boolean = false;
  source: string;
  programmingLanguages: string[] = ['typescript', 'javascript', 'html', 'css', 'java', 'php', 'python'];
  usingLanguage: string = 'typescript';
  heading: string = "";
  description: string = "";

  constructor(public postsService: PostsService) { }

  update(event) {
    this.source = event.target.textContent;
  }

  newline(event) {
    switch(event.keyCode) {
      case 9: //tab
        event.preventDefault();
        document.execCommand('insertHTML', false, '  ');
        break;
      case 13: //enter
        event.preventDefault();
        document.execCommand('insertHTML', false, '\n');
        break;
    }
  }

  submit() {
    this.submitted = true;
    this.postsService.addPost(
      {
        heading: this.heading,
        description: this.description,
        source_code: this.source,
        source_code_lang: this.usingLanguage,
      });
      this.heading = "";
      this.description = "";
      this.source = "";
      this.usingLanguage = "";
  }

  submitNew() {
    this.submitted = false;
  }
  
  ngOnInit() {
  }

}