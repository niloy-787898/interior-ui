import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {CATEGORIES} from '../../core/db/category.db';
import {CarouselCntrlService} from "../../services/core/carousel-cntrl.service";
// import Swiper core and required modules
import SwiperCore, {Pagination,EffectFade, Navigation} from "swiper";
SwiperCore.use([EffectFade, Navigation, Pagination]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
@Input() data:any;
  categories: any[] = CATEGORIES;
  toggleMenu: boolean = false;
  constructor(private caroselCntrl: CarouselCntrlService) { }

  ngOnInit(): void {
  }


  onToggle() {
    this.toggleMenu = !this.toggleMenu;
  }

}
