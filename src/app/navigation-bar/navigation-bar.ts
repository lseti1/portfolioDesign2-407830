import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation-bar',
  imports: [CommonModule],
  templateUrl: './navigation-bar.html',
  styleUrl: './navigation-bar.css'
})
export class NavigationBar {
  @Output() pageChange = new EventEmitter<string>();
  currentPage = 'About';

  sections = ['About', 'Apps', 'Designs', 'Documents', 'Experience']; // Update to use this approach later (for loop through each section)

  setPage(pageName: string) {
    this.currentPage = pageName;
    this.pageChange.emit(pageName);
    console.log(`Current page set to: ${pageName}`);
  }
}

