import { Component } from '@angular/core';
import { StackService } from './stack.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    activeStack:string[] = this.stack.activeUsers;
    inactiveStack:string[] = this.stack.inactiveUsers;
  
    countClicks:number=0;
    constructor(private stack:StackService){
        
   
    //subscribing to StackService emit.  
    this.stack.userSetToInactive.subscribe((id:number) =>{
                this.countClicks = this.stack.clickCount;
                this.inactiveStack.push(this.activeStack[id]);
                this.activeStack.splice(id, 1);
                });
    //subscribing to StackService emit.   
    this.stack.userSetToActive.subscribe((id:number) => {
                this.countClicks = this.stack.clickCount;
                this.activeStack.push(this.inactiveStack[id]);
                this.inactiveStack.splice(id, 1);
                });

    }



}
