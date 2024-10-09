import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MarkdownComponent} from 'ngx-markdown';

@Component({
  selector: 'app-project-page',
  standalone: true,
  preserveWhitespaces: true,
  imports: [
    RouterOutlet,
    MarkdownComponent,
  ],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css'
})
export class ProjectPageComponent {
}

