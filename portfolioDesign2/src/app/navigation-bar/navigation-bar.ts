import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  imports: [],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.css'
})
export class NavigationBar {
  currentPage = 'about';

  getPage(pageName: string) {
    this.currentPage = pageName;
  }
}
