import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    isDisplayed = false;
    buttonClickCount = 0;
    buttonClickArray = new Array<number>();

    public onDisplayBtnClicked() {
        this.isDisplayed = !this.isDisplayed;
        this.buttonClickCount++;
        this.buttonClickArray.push(this.buttonClickCount);
    }
}
