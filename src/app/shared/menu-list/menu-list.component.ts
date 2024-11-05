import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './menu-list.component.html',
  styles: `
    .nav-link.active{
      font-weight: 600;
    }`
})
export class MenuListComponent {
  menus = [
    { label: 'Home', route: '/' },
    { label: 'Products', route: '/products' },
    { label: 'Cart', route: '/cart' },
    { label: 'Contact', route: '/contact'},
    { label: 'About Us', route: '/about' },
    { label: 'Login', route: '/auth/login'},
    { label: 'Sign Up', route: '/auth/signup'},
    { label: 'Logout', route: '/auth/logout'}
  ];
}
