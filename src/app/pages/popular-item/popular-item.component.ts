import { Component, OnInit, Input } from '@angular/core';
import { Popular } from '../movies-list/models/popular.model';

@Component({
  selector: 'app-popular-item',
  templateUrl: './popular-item.component.html',
  styleUrls: ['./popular-item.component.scss']
})
export class PopularItemComponent implements OnInit {

  constructor() { }
  @Input()
  popular: Popular;
  ngOnInit(): void {
  }

}
