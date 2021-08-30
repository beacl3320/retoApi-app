import { PopularService } from '../../services/popular.service';
import { PopularResponse } from '../../pages/models/popular-response.interface';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-list',
  templateUrl: './popular-list.component.html',
  styleUrls: ['./popular-list.component.scss']
})
export class PopularListComponent implements OnInit {
  populares$: Observable<PopularResponse>

  constructor(private popularService:PopularService) { }

  ngOnInit(): void {
    this.populares$ = this.popularService.getPopular();
  }

}
