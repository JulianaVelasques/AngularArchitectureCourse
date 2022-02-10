import { Component } from '@angular/core';
//We can import like that because of what we build in the tsconfig.json (paths)
//Such import is really good to use in large applications.
//It allows us to short the path to import
import { environment } from '@src/environments/environment';
import { test } from '@app/test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'job-app';
}
