import { Component } from '@angular/core';
import {AppComponent} from './app.component';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

  checked: boolean;
  lightTheme: "assets/ximply-light/theme.css";
  darkTheme: "assets/ximply-dark/theme.css";

  handleChange(e) {
    console.log("Checked:" + e.checked);
    if(this.checked){
      document.getElementById('theme-css').setAttribute('href', 'assets/ximply-dark/theme.css');
    }else{
      document.getElementById('theme-css').setAttribute('href', 'assets/ximply-light/theme.css');
    }

  }

  constructor(public app: AppComponent) {
    
  }

}
