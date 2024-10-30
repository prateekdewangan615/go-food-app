import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styles: `.card {
    min-height: 200px; /* Increased minimum height */
  }
  
  .card img {
    height: 100%; /* Make image fill available height */
    object-fit: cover; /* Cover the entire area */
  }
  
  /* Optional: If you want the card to take up the full width of its container */
  .card {
      width: 100%;
  }
  `
})
export class AboutComponent {

}
