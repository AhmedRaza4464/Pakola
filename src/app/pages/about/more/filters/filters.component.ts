import { Component } from '@angular/core';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  sliderOne!: HTMLInputElement;
  sliderTwo!: HTMLInputElement;
  displayValOne!: HTMLElement;
  displayValTwo!: HTMLElement;
  minGap: number = 0;
  sliderTrack!: HTMLElement;
  sliderMaxValue!: number;

  ngOnInit(): void {
    this.sliderOne = document.getElementById("slider-1") as HTMLInputElement;
    this.sliderTwo = document.getElementById("slider-2") as HTMLInputElement;
    this.displayValOne = document.getElementById("range1") as HTMLElement;
    this.displayValTwo = document.getElementById("range2") as HTMLElement;
    this.sliderTrack = document.querySelector(".slider-track") as HTMLElement;
    this.sliderMaxValue = parseInt(this.sliderOne.max);

    this.slideOne();
    this.slideTwo();
  }

  slideOne(): void {
    if (parseInt(this.sliderTwo.value) - parseInt(this.sliderOne.value) <= this.minGap) {
      this.sliderOne.value = (parseInt(this.sliderTwo.value) - this.minGap).toString();
    }
    this.displayValOne.textContent = this.sliderOne.value;
    this.fillColor();
  }

  slideTwo(): void {
    if (parseInt(this.sliderTwo.value) - parseInt(this.sliderOne.value) <= this.minGap) {
      this.sliderTwo.value = (parseInt(this.sliderOne.value) + this.minGap).toString();
    }
    this.displayValTwo.textContent = this.sliderTwo.value;
    this.fillColor();
  }

  fillColor(): void {
    let percent1 = (parseInt(this.sliderOne.value) / this.sliderMaxValue) * 100;
    let percent2 = (parseInt(this.sliderTwo.value) / this.sliderMaxValue) * 100;
    this.sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, #3264fe ${percent1}%, #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
  }



  
  
}
