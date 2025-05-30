// 'signal', 'input', and 'computed' only imported for commented-out examples below
import { Component, Input, signal, computed, input  } from '@angular/core';
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
  // selectedUser = DUMMY_USERS[randomIndex]
  /* 
  to utilize Angular's signal to write the function above, would be:

          selectedUser = signal(DUMMY_USERS[randomIndex])
  */

  // getter function
  get imagePath() {
    /* since the below computation is being made inside the class (as opposed to the
    template html file), the 'this' keyword must be used */
    return 'assets/users/' + this.avatar
  }
    /* 
  to utilize Angular's signal to write the function above, would be:

          imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)
  */
// note: 'function' keyword or arrow syntax unnecessary
  onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    // this.selectedUser = DUMMY_USERS[randomIndex]
  /* 
  to utilize Angular's signal to write the expression above, would be:

           this.selectedUser.set(DUMMY_USERS[randomIndex])

  */
  }

  /* the bang operator tells TypeScript not to worry that 'avatar' has not yet been
  initialized (will be app component is rendered, though) */
  @Input({required: true}) avatar!: string;
  /* by setting the config option 'required' to 'true', if the (now) required property
  is not included in the component, Angular will throw an error */
  @Input({required: true}) name!: string;
  /* below is an example of implementing the 'avatar' property as a signal (note
  the absence of a decorator) */
  // avatar = input()

    /* adding angle brackets with a primitive data type tells TypeScript what type of
    value will be eventually be received by the input */
  // avatar = input<string>()

  /* the signal may also be implemented as required */
  // avatar = input.required<string>()
}
