import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MaterialDesignModule} from './material-design/material-design.module';
import { LoginComponent } from './auth/login/login.component';
import { BlogPageComponent } from './blog/blog-page/blog-page.component';
import { SingleBlogComponent } from './blog/single-blog/single-blog.component';
import { PostComponent } from './blog/post/post.component';
import { AdminblogComponent } from './adminblog/adminblog.component';
import { DeletedialogComponent } from './deletedialog/deletedialog.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogPageComponent,
    SingleBlogComponent,
    PostComponent,
    AdminblogComponent,
    DeletedialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialDesignModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
