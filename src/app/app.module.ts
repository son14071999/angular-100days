import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CartExtService } from './services/CartExtService';
import { CartService } from './services/CartService';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide: CartService,
    useClass: CartExtService,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
