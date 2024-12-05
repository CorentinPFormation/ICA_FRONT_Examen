import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  public isDarkTheme= new BehaviorSubject<boolean>(false);
  isDarkTheme$: any = this.isDarkTheme.asObservable()

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.setTheme(savedTheme === 'dark' || (!savedTheme && prefersDark));
  }

  setTheme(isDark: boolean){
    this.isDarkTheme.next(isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  toggleTheme() {
    this.setTheme(!this.isDarkTheme.value)
  }
}
