import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/share/nav/nav.component';
import { HeaderComponent } from './components/share/header/header.component';
import { FooterComponent } from './components/share/footer/footer.component';
import { ShoppingCartComponent } from './shopping-Cart/shopping-cart/shopping-cart.component';
import { FiltersComponent } from './shopping-Cart/filters/filters.component';
import { CartComponent } from './shopping-Cart/cart/cart.component';
import { ItemsComponent } from './shopping-Cart/items/items.component';
import { ListItemsComponent } from './shopping-Cart/items/list-items/list-items.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingCartComponent,
    FiltersComponent,
    CartComponent,
    ItemsComponent,
    ListItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
