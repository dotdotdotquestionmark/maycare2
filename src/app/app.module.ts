import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//firebase junk
import { AngularFireModule} from "@angular/fire";
import { AngularFirestoreModule} from "@angular/fire/firestore";
import { environment } from 'src/environments/environment';

//service junk 
import { ContactService } from './shared/contact.service';

//formbuilding junk
import { FormsModule } from '@angular/forms'

//components and routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { ClientsComponent } from './contact/clients/clients.component';
import { CarouselComponent } from './facilities/carousel/carousel.component';
import { LoadingComponent } from './loading/loading.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FacilitiesComponent,
    ContactComponent,
    NavComponent,
    ClientsComponent,
    CarouselComponent,
    LoadingComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
