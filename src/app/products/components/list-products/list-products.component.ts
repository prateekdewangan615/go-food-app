import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './list-products.component.html',
  styles: `
    .top-banner{
      width: 100%;
      background: url('./images/bg/bg-1.jpg') center;
      background-size: cover;
      padding: 16.875rem 0 9.375rem;
    }
    .card-img-top {
      width: 100%;
      height: 15vw;
      object-fit: cover;
    }
  `,
})
export class ListProductsComponent {
  cardList =[
    {
      dishId: '1',
      imageSource : 'https://thumbs.dreamstime.com/b/veg-grilled-sandwich-served-ketchup-isolated-over-rustic-wooden-background-selective-focus-224440470.jpg',
      dishName : 'Veg Grilled Sandwich',
      dishTime : '10-15 Minutes',
      dishCost : 'Rs.80',
    },
    {
      dishId: '2',
      imageSource : 'https://media.gettyimages.com/id/182209800/photo/chicken-salad-sandwich.jpg?s=612x612&w=0&k=20&c=I8skcgvN2Otm_qHhy9zzjxr_jmmUGdTZkgmHF7gxtRI=',
      dishName : 'Chicken Salad Sandwich',
      dishTime : '10-15 Minutes',
      dishCost : 'Rs.100 ',
    },
    {
      dishId: '3',
      imageSource : 'https://media.gettyimages.com/id/1401260285/photo/closeup-french-fries-potato-chips-yellow-crispy-fries-in-wooden-basket-on-white-table-snack.jpg?s=612x612&w=0&k=20&c=4x27hz_rFwvjDwlkx-DZB7_RE-hy91RmMQc3FlWNK7I=',
      dishName : 'French Fries',
      dishTime : '10-15 Minutes',
      dishCost : 'Rs.50 ',
    },
    {
      dishId: '4',
      imageSource : 'https://th.bing.com/th/id/OIP.zkH-rNS9zFngcoW2OAUXiwHaDQ?rs=1&pid=ImgDetMain',
      dishName : 'Veg Briyani',
      dishTime : '15-20 Minutes',
      dishCost : 'Rs.120 ',
    },
    {
      dishId: '5',
      imageSource : 'https://revi.b-cdn.net/wp-content/uploads/2017/01/paneer-biryani-1.jpg',
      dishName : 'Paneer Briyani',
      dishTime : '15-20 Minutes',
      dishCost : 'Rs.130 ',
    },
    {
      dishId: '6',
      imageSource : 'https://www.pavaniskitchen.com/wp-content/uploads/2021/04/egg-biryani-recipe-1024x1024.jpg',
      dishName : 'Egg Briyani',
      dishTime : '15-20 Minutes',
      dishCost : 'Rs.140 ',
    },
    {
      dishId: '7',
      imageSource : 'https://www.pavaniskitchen.com/wp-content/uploads/2021/04/egg-biryani-recipe-1024x1024.jpg',
      dishName : 'Egg Briyani',
      dishTime : '15-20 Minutes',
      dishCost : 'Rs.140 ',
    },
    {
      dishId: '8',
      imageSource : 'https://th.bing.com/th/id/OIP.6XHvDlKff_0lt2_fPpIijgHaHy?w=531&h=558&rs=1&pid=ImgDetMain',
      dishName : 'Chicken Briyani',
      dishTime : '15-20 Minutes',
      dishCost : 'Rs.150 ',
    },
    {
      dishId: '9',
      imageSource : 'https://th.bing.com/th/id/R.460411373678d4980f0a6a1f0251a426?rik=ZfoHjkVG%2bHnD7A&riu=http%3a%2f%2fwww.nyfoodgasm.com%2fwp-content%2fuploads%2f2015%2f04%2fHops_cocktail_6-1024x769.jpg&ehk=FxCNnarlOiaYDaSN6dkhno3MeXmX147cgsrvLnzv2ro%3d&risl=&pid=ImgRaw&r=0',
      dishName : 'Sweet Lime Soda',
      dishTime : '5 Minutes',
      dishCost : 'Rs.30 ',
    },
    {
      dishId: '10',
      imageSource : 'https://healthyhelperkaila.com/wp-content/uploads/2024/06/homemade-creamy-soft-serve-chocolate-ice-cream-in-j_Ii0GJHQrulcvGEqqIRNw-XamVoJR_QfeO1qF0mBQ0YA.jpeg',
      dishName : 'Chocolate Ice cream',
      dishTime : '5 Minutes',
      dishCost : 'Rs.40 ',
    },
  ]
}
