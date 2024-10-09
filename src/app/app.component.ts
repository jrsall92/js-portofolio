import {Component, Inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ProjectsComponent} from './projects/projects.component';
import {ContactComponent} from './contact/contact.component';
import {ProjectPageComponent} from './project-page/project-page.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {DEFAULT_THEME, LOCAL_STORAGE_THEME_KEY} from './app.constant';
import {isTheme, Theme} from './app.models';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    RouterOutlet, HomeComponent, AboutComponent, ProjectsComponent, ContactComponent, ProjectPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  theme = DEFAULT_THEME;

  constructor(
    @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {

    const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
    this.setTheme(
      isTheme(storedTheme)
        ? storedTheme
        : DEFAULT_THEME,
    );
  }

  setTheme(theme: Theme): void {
    this.theme = theme;
    const bodyClassList = this.document.querySelector('body')!.classList;
    const removeClassList = /\w*-theme\b/.exec(bodyClassList.value);
    if (removeClassList) {
      bodyClassList.remove(...removeClassList);
    }
    bodyClassList.add(`${this.theme}-theme`);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, this.theme);
  }
}
