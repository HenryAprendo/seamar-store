import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css'
})
export class HeaderNavComponent {

  openMenu = signal(false);

  toggleOpenMenu() {
    this.openMenu.update(state => !state);
  }

}
