import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text = '';

  // racGinda === $event <- key aris igive event ubralod tipescreeptshi
  usmine(racGinda) {
    console.log('Gavige rac daiyvira: ', racGinda);

    if (racGinda === 'Delete') {
      this.text = '';
    } else {
      this.text = this.text + racGinda;
    }

  }
}
