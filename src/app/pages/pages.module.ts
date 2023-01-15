import {SwiperModule} from 'swiper/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {SharedModule} from '../shared/shared.module';
import {PipesModule} from '../shared/pipes/pipes.module';
import { FooterModule } from 'src/app/shared/lazy/footer/footer.module';


@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SwiperModule,
    PipesModule,
    FooterModule
  ]
})
export class PagesModule {
}
