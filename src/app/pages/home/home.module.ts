import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from "swiper/angular";
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {CategoryCardOneModule} from '../../shared/lazy/category-card-one/category-card-one.module';
import { FooterModule } from 'src/app/shared/lazy/footer/footer.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CategoryCardOneModule,
    SwiperModule,
    FooterModule
  ]
})
export class HomeModule { }
