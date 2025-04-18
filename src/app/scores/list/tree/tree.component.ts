import { Component, Input } from '@angular/core';
import { ScoreGroup } from '../../scores.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tree',
  imports: [
    CommonModule,
  ],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss'
})
export class TreeComponent {
  @Input({ required: true })
  public groups: ScoreGroup[] = [];
}
