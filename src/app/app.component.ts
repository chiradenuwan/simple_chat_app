import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChatBox';

  // tslint:disable-next-line:typedef
  open() {
    const mySidebar = document.getElementById('mySidebar');
    const overlayBg = document.getElementById('myOverlay');
    if (mySidebar.style.display === 'block') {
      mySidebar.style.display = 'none';
      overlayBg.style.display = 'none';
    } else {
      mySidebar.style.display = 'block';
      overlayBg.style.display = 'block';
    }
  }

  // Close the sidebar with the close button
  close() {
    const mySidebar = document.getElementById('mySidebar');
    const overlayBg = document.getElementById('myOverlay');
    mySidebar.style.display = 'none';
    overlayBg.style.display = 'none';
  }
}
