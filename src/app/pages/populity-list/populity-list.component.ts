import { PopulityService } from './../../services/populity.service';
import { PopulityResponse } from './../movies-list/models/populity-response.interface';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-populity-list',
  templateUrl: './populity-list.component.html',
  styleUrls: ['./populity-list.component.scss']
})
export class PopulityListComponent implements OnInit {
  populares$: Observable<PopulityResponse>

  constructor(private populityService:PopulityService) { }

  ngOnInit(): void {
    this.populares$ = this.populityService.getPopulity();
  }

}
