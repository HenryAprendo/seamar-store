import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../config/storage';

@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService {

  constructor(@Inject(BROWSER_STORAGE) public storage: Storage) { }


  get(key:string): string | null {
    return this.storage.getItem(key);
  }

  set(key:string, value:string) {
    this.storage.setItem(key,value);
  }

  remove(key:string) {
    this.storage.removeItem(key);
  }


}
