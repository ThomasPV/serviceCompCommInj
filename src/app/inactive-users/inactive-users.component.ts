import { Component, Input} from '@angular/core';
import { StackService } from '../stack.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
    
    
constructor(private stack:StackService){}
users: string[] = this.stack.inactiveUsers;

  onSetToActive(id: number) {
    this.stack.SetToActive(id);
  }
}
