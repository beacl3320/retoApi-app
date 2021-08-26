import { Component, OnInit, Input } from '@angular/core';
import { Populity } from '../movies-list/models/populity.model';

@Component({
  selector: 'app-populity-item',
  templateUrl: './populity-item.component.html',
  styleUrls: ['./populity-item.component.scss']
})
export class PopulityItemComponent implements OnInit {

  constructor() { }
  @Input()
  populity: Populity;
  ngOnInit(): void {
  }

}
