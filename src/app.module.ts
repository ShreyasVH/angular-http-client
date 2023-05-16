import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app/app.component';
import { PlayComponent } from './components/play/play.component';
import { SpringbootComponent } from './components/springboot/springboot.component';
import { PhalconComponent } from './components/phalcon/phalcon.component';
import { ExpressComponent } from './components/express/express.component';
import { DotnetcoreComponent } from './components/dotnetcore/dotnetcore.component';
import { ServerComponent } from './components/server/server.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayComponent,
    SpringbootComponent,
    PhalconComponent,
    ExpressComponent,
    DotnetcoreComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
