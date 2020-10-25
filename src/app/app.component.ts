import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ChatBox';
  message: any;
  messageArray: Array<any> = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  openUi(): void {
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

  closeUI(): void {
    const mySidebar = document.getElementById('mySidebar');
    const overlayBg = document.getElementById('myOverlay');
    mySidebar.style.display = 'none';
    overlayBg.style.display = 'none';
  }

  send(): void {
    console.log(this.message);
    const x = {
      sender: 'Username',
      message: this.message,
      date: new Date()
    };
    console.log(x);
    this.messageArray.push(x);
    console.log(this.messageArray);
    this.loadMessages();
  }

  private loadMessages(): void {
    this.messageArray = this.messageArray;
  }
}
