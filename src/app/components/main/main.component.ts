import { Component, OnInit } from '@angular/core';

/* jQUERY */
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function () {
      if (window.innerWidth < 768) {
        $(".form-control option[value='blank']").remove();
      }
    });
  }

  images = [
    { img: "https://images.unsplash.com/photo-1471110338536-858caa3dbe45?auto=format&fit=crop&w=1950&q=80" },
    { img: "https://images.unsplash.com/photo-1497042293529-97936e977f99?auto=format&fit=crop&w=1950&q=80" },
    { img: "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1950&q=80" },
    { img: "https://images.unsplash.com/photo-1478281437946-5179e2443a10?auto=format&fit=crop&w=1950&q=80" },
  ];

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "nextArrow": "<div class='nav-btn next-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'></div>",
    "dots": true,
    "infinite": true,
    customPaging: function (slider, i) {
      var slideNumber = (i + 1),
        totalSlides = slider.slideCount;
      return '<a class="custom-dot" role="button" title="' + slideNumber + ' / ' + totalSlides + '"><span class="string">' + slideNumber + "/" + totalSlides + '</span></a>';
    }
  };

}
