import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  imports: [],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.css'
})
export class NavigationBar {
  @Output() pageChange = new EventEmitter<string>();
  currentPage = 'about';

  setPage(pageName: string) {
    this.currentPage = pageName;
    this.pageChange.emit(pageName);
    console.log(`Current page set to: ${pageName}`);
  }
}

