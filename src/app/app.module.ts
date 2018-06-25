import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { TshirtComponent } from './deals/tshirt/tshirt.component';


@NgModule({
  declarations: [
    AppComponent,
    TshirtComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component: AppComponent},
      { path: 'tshirt', component: TshirtComponent},


      { path: '', redirectTo: '/home', pathMatch: 'full'},
      { path: '**', component: AppComponent}
    ], {useHash : true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
