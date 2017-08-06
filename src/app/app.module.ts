import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { CribsListingComponent } from './cribs-listing/cribs-listing.component';
import { CribCardComponent } from './crib-card/crib-card.component';
import {CribsService} from './service/cribs.service';
import {UtilService} from './service/util.service';
import { AddListingComponent } from './add-listing/add-listing.component';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CribsListingComponent,
    CribCardComponent,
    AddListingComponent,
    SortByPipe,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],

  providers: [CribsService,UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
