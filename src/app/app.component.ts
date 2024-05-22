import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './auth/service/auth.service';
import { Profile } from './auth/interface/profile.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'seamar-store';

  private authService = inject(AuthService);

  userProfile:Profile|null = null;

  ngOnInit(): void {
    this.authService.profile$
      .subscribe(profile => this.userProfile = profile);
  }

  logout(){
    this.authService.logout();
  }


}
