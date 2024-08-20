import { Component } from '@angular/core';
import { AboutusComponent } from "../../aboutus/aboutus.component";

@Component({
  selector: 'app-more',
  standalone: true,
  templateUrl: './more.component.html',
  styleUrl: './more.component.css',
  imports: [AboutusComponent]
})
export class MoreComponent {

}
