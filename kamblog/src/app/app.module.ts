import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PostsService } from './posts.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppRoutingModule } from './app-routing.module';
import { CarouselModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { BlogsComponent } from './blogs/blogs.component';
import { HttpClientModule }    from '@angular/common/http';

import * as hljs from 'highlight.js';
import { HighlightJsModule, HIGHLIGHT_JS } from 'angular-highlight-js';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    BlogsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    HighlightJsModule.forRoot({
      provide: HIGHLIGHT_JS,
      useFactory: () => hljs
    })

    
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
