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
  .card-img-top {
    height: 200px; /* Set a uniform height for all images */
    object-fit: cover; /* Ensures the image covers the space without distortion */
  }
  .card-body {
    min-height: 150px; /* Ensure the body has a consistent minimum height */
    margin-bottom: 20px;
  }
  
  `,
})
export class AboutComponent {}
