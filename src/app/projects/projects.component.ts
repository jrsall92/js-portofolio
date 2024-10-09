import {Component} from '@angular/core';
import {ProjectTileComponent} from '../project-tile/project-tile.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectTileComponent
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {projectTitle: "Building my portfolio", shortDescription: "Embarking in my first project with Angular and TypeScript"},
    {projectTitle: "P2", shortDescription: "Description2"},
    {projectTitle: "P3", shortDescription: "Description3"},
  ]
}
