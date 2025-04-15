// 'signal' and 'computed' only imported for commented-out examples below
import { Component, signal, computed } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // note: 'let' or 'const' keywords unnecessary
  selectedUser = DUMMY_USERS[randomIndex]
  /* 
  to utilize Angular's signal to write the function above, would be:

          selectedUser = signal(DUMMY_USERS[randomIndex])
  */

  // getter function
  get imagePath() {
    /* since the below computation is being made inside the class (as opposed to the
    template html file), the 'this' keyword must be used */
    return 'assets/users/' + this.selectedUser.avatar
  }
    /* 
  to utilize Angular's signal to write the function above, would be:

          imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)
  */
// note: 'function' keyword or arrow syntax unnecessary
  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    this.selectedUser = DUMMY_USERS[randomIndex]
  /* 
  to utilize Angular's signal to write the expression above, would be:

           this.selectedUser.set(DUMMY_USERS[randomIndex])

  */
  }
}
