import { Component, OnInit, inject } from '@angular/core';
import { BrowserStorageService } from '../../../services/browser-storage.service';
import { TOKEN } from '../../../config/storage';
import { AuthService } from '../../../auth/service/auth.service';

@Component({
  selector: 'app-website-layout',
  standalone: true,
  imports: [],
  templateUrl: './website-layout.component.html',
  styleUrl: './website-layout.component.css'
})
export class WebsiteLayoutComponent implements OnInit {

  private storageService = inject(BrowserStorageService);

  private authService = inject(AuthService);

  ngOnInit(): void {
    let token = this.storageService.get(TOKEN);
    if(token) {
      this.authService.getProfile().subscribe();
    }
  }


}
