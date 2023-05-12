import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { Title,Meta } from '@angular/platform-browser';
import { delay } from 'rxjs/internal/operators/delay';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class SliderComponent implements OnInit {

  constructor(private service: MovieApiServiceService,private title:Title,private meta:Meta) {
    this.title.setTitle('3K - showtime');
    this.meta.updateTag({name:'description',content:'watch online movies'});
    
   }

  bannerResult: any ;
  current = 0;
 

  ngOnInit(): void {
    this.bannerData(1);
    this.sliderTimer();
    
  }

  bannerData(page: number) {
    this.service.bannerApiData().subscribe((result:any) => {
      // console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
      // console.log(this.bannerResult)
    });
  }

  sliderTimer() {
    setInterval(() => {
      this.current = ++this.current % this.bannerResult.length;
    }, 3000);
  }
}