import { Component } from '@angular/core';
import { MoreComponent } from '../about/more/more.component';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [MoreComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {

}
