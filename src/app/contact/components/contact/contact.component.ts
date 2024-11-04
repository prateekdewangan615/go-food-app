import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styles: `
  .card {
            position: relative;
            width: 100%;
            border: none; /* Remove default border */
        }
        .card-img {
            width: 100%; /* Make the image full width */
            height: auto; /* Maintain aspect ratio */
        }
        .card-img-overlay {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%); /* Center the text */
            text-align: center; /* Center text */
            color: white; /* Text color */
        }
        .card-title {
            font-size: 3rem; /* Adjust font size */
        }
  `
})
export class ContactComponent {

}
