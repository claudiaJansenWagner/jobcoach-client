import{Component, OnInit}from '@angular/core';
import{Deelnemer}from '../deelnemer';
import {DeelnemerService}from 'src/app/deelnemer.service';

@Component({
selector: 'app-deelnemers',
templateUrl: './deelnemers.component.html',
styleUrls: ['./deelnemers.component.css']
})

export class DeelnemersComponent implements OnInit {

selectedDeelnemer: Deelnemer;
deelnemers: Deelnemer[];

constructor(private deelnemerService: DeelnemerService) {}

ngOnInit(){
  this.getDeelnemers();
}

onSelect(deelnemer: Deelnemer): void {
  this.selectedDeelnemer = deelnemer;
}

 getDeelnemers(): void {
    this.deelnemerService.getDeelnemers()
        .subscribe(deelnemers => this.deelnemers = deelnemers);
  }

}



