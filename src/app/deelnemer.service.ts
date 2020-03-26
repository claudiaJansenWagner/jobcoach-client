import{Injectable}from'@angular/core';
import {Observable, of}from 'rxjs';

import {Deelnemer}from './deelnemer';
import {DEELNEMERS}from './mock-deelnemers';

@Injectable({
providedIn: 'root'
})
export class DeelnemerService {

constructor() { }

  getDeelnemers(): Observable<Deelnemer[]> {
    return of(DEELNEMERS);
}

  getDeelnemer(id: string): Observable<Deelnemer> {
    return of(DEELNEMERS.find(deelnemer => deelnemer.id === id));
  }

}
