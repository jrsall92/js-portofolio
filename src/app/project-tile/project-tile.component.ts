import {Component, Input} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-project-tile',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './project-tile.component.html',
  styleUrl: './project-tile.component.css'
})
export class ProjectTileComponent {
  @Input() projectTitle: string = "";
  @Input() shortDescription: string = "";
}
