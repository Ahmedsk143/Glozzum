import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { EmbedVideo } from 'ngx-embed-video';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Section1Component } from './home/section1/section1.component';
import { Section2Component } from './home/section2/section2.component';
import { Section3Component } from './home/section3/section3.component';
import { Section4Component } from './home/section4/section4.component';
import { Section5Component } from './home/section5/section5.component';
import { Section6Component } from './home/section6/section6.component';
import { Section7Component } from './home/section7/section7.component';
import { About1Component } from './about/about1/about1.component';
import { About2Component } from './about/about2/about2.component';
import { About3Component } from './about/about3/about3.component';
import { About4Component } from './about/about4/about4.component';
import { Blog1Component } from './blog/blog1/blog1.component';
import { Blog2Component } from './blog/blog2/blog2.component';
import { Services1Component } from './services/services1/services1.component';
import { Services2Component } from './services/services2/services2.component';
import { Services3Component } from './services/services3/services3.component';
import { Contact1Component } from './contact/contact1/contact1.component';
import { Contact2Component } from './contact/contact2/contact2.component';
import { Contact3Component } from './contact/contact3/contact3.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    BlogComponent,
    ContactComponent,
    FooterComponent,
    NotFoundComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,
    Section7Component,
    About1Component,
    About2Component,
    About3Component,
    About4Component,
    Blog1Component,
    Blog2Component,
    Services1Component,
    Services2Component,
    Services3Component,
    Contact1Component,
    Contact2Component,
    Contact3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    EmbedVideo.forRoot(),
    HttpClientModule,
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
