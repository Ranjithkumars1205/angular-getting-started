import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html', // we can use a relative path by specifying ./.
  styleUrls: ['./app.component.css']
})

// class should be in pascal case
// variable and method should be in camel case
export class AppComponent {
  title = 'Angular: Getting Started';
}
