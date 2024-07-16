import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/knowledge/html.svg',
      alt: 'HTML 5'
    },
    {
      src: 'assets/knowledge/css.svg',
      alt: 'CSS 3'
    },
    {
      src: 'assets/knowledge/angular.svg',
      alt: 'ANGULAR 17'
    },
    {
      src: 'assets/knowledge/figma.svg',
      alt: 'FIGMA'
    },
    {
      src: 'assets/knowledge/laravel.svg',
      alt: 'LARAVEL'
    }
  ])
}
