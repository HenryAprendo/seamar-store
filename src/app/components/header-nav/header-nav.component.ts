import { Component, OnInit, WritableSignal, computed, inject, signal } from '@angular/core';
import { Profile } from './../../auth/interfaces/profile.model';
import { AuthService } from '../../auth/services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive ],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.css'
})
export class HeaderNavComponent implements OnInit {

  private authService = inject(AuthService);

  openMenu = signal(false);

  userProfile:WritableSignal<Profile|null> = signal<Profile|null>(null);

  user = computed(() => this.userProfile());

  constructor(){}

  ngOnInit(): void {
    this.authService.profile$
    .subscribe(profile => this.userProfile.set(profile));
  }

  toggleOpenMenu() {
    this.openMenu.update(state => !state);
  }

  logout(){
    this.authService.logout();
  }

}
