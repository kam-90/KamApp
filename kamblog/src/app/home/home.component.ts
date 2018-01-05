import { Component, OnInit,TemplateRef } from '@angular/core';
import { PostsService } from '../posts.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  currentModal;
  modalRef: BsModalRef;
  public posts;

  constructor(public postsService: PostsService,private modalService: BsModalService) { }

  ngOnInit() {
    this.postsService.getPosts().subscribe((posts) => this.posts = posts)

  }

  openModal(template: TemplateRef<any>, currentProject) {
    this.currentModal = currentProject;
    this.modalRef = this.modalService.show(template);
  }


}
