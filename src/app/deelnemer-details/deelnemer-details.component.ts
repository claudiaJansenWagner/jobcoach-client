import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Deelnemer } from '../deelnemer';
import { DeelnemerService } from '../deelnemer.service';

@Component({
  selector: 'app-deelnemer-details',
  templateUrl: './deelnemer-details.component.html',
  styleUrls: ['./deelnemer-details.component.css']
})
export class DeelnemerDetailsComponent implements OnInit {
  @Input() deelnemer: Deelnemer;

  constructor( private route: ActivatedRoute,
    private deelnemerService: DeelnemerService,
    private location: Location) { }

  ngOnInit(): void {
    this.getDeelnemer();
  }
 getDeelnemer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.deelnemerService.getDeelnemer('id')
      .subscribe(deelnemer => this.deelnemer = deelnemer);
  }

  goBack(): void {
    this.location.back();
  }

}
