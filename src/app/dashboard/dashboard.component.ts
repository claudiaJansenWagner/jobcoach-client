import { Component, OnInit } from '@angular/core';
import { Deelnemer } from '../deelnemer';
import { DeelnemerService } from 'src/app/deelnemer.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  deelnemers: Deelnemer[];

  constructor(private deelnemerService: DeelnemerService) { }

  ngOnInit() {
    this.getDeelnemers();
  }

  getDeelnemers(): void {
    this.deelnemerService.getDeelnemers()
      .subscribe(deelnemers => this.deelnemers = deelnemers.slice(1, 5));
  }
}
