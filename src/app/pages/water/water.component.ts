import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-water',
  standalone: true,
  imports: [],
  templateUrl: './water.component.html',
  styleUrl: './water.component.css'
})
export class WaterComponent implements OnInit {
  categoryTitle: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.categoryTitle = params.get('category')?.toUpperCase() || '';
    });
  }
}
