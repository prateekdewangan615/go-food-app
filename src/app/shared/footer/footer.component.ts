import { Component } from '@angular/core';
import { MenuListComponent } from '../menu-list/menu-list.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MenuListComponent],
  template: `
    <footer class="text-center">
      <hr>
      <app-menu-list></app-menu-list>
      <p class="copyright">Copyright 2024</p>
    </footer>
  `,
  styles: ``
})
export class FooterComponent {

}
