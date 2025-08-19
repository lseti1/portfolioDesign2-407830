import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from './about/about';
import { Apps } from './apps/apps';
import { Designs } from './designs/designs';
import { Documents } from './documents/documents';
import { Experience } from './experience/experience';
import { NavigationBar } from './navigation-bar/navigation-bar';
import { Quicklinks } from './quicklinks/quicklinks';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

type Page = 'About' | 'Apps' | 'Designs' | 'Experience' | 'Documents';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, About, Apps, Designs, Documents, Experience, NavigationBar, Quicklinks, FontAwesomeModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-angular-app');
  currentPage = signal<Page>('About');

  getPage(pageName: Page) {
    console.log(`Navigating to: ${pageName}`);
    this.currentPage.set(pageName);
  }
}
