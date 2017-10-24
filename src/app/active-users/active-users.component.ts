import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StackService } from '../stack.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
    
    constructor(private stack:StackService){}
    
    
users: string[] = this.stack.activeUsers;

    
onSetToInactive(id:number){
        this.stack.SetToInactive(id);
  
        }

}
