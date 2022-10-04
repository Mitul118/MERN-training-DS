import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiplierPipePipe } from './multiplier-pipe.pipe';
import { SqrtPipe } from './sqrt.pipe';
import { ReversePipe } from './reverse.pipe';
import { PiglatinPipe } from './piglatin.pipe';
import { MyencryptPipe } from './myencrypt.pipe';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MultiplierPipePipe,
    SqrtPipe,
    ReversePipe,
    PiglatinPipe,
    MyencryptPipe,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
