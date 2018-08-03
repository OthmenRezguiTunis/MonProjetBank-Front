import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DetailsCompteComponent } from './details-compte/details-compte.component';
const tableroutage = [
{path : 'comptes' , component : ContentComponent},
{path : '' , component : WelcomeComponent},
{path : 'comptes/:id' , component : DetailsCompteComponent}


];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    WelcomeComponent,
    DetailsCompteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(tableroutage)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
