import { Component, Input } from '@angular/core';
import { ScoreGroup } from '@models/score-group';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tree',
  imports: [
    CommonModule,
    RouterLink,
  ],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss'
})
export class TreeComponent {
  @Input({ required: true })
  public groups: ScoreGroup[] = [];
}
