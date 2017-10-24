import { Injectable, EventEmitter } from '@angular/core';
import { CountService } from './count.service';
@Injectable()
export class StackService {
    
    activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
clickCount:number = this.counter.count;
  
userSetToInactive = new EventEmitter<number>();
userSetToActive = new EventEmitter<number>();

  constructor(private counter:CountService ) { }

SetToInactive(id: number) {
    this.counter.countIncrement();
    this.clickCount= this.counter.count;
    this.userSetToInactive.emit(id);
  
 
   
  }

SetToActive(id: number) {


   this.counter.countIncrement();
    this.clickCount= this.counter.count;
this.userSetToActive.emit(id);
   

  }
    
    

}
