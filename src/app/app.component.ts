import { Component, ViewChild, ElementRef } from '@angular/core';
import { QODServcie } from './google.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('qodInput', {static: false}) qodInput: ElementRef;
  title = 'sampleRestCall';

  constructor(private qodService: QODServcie) {
  }

  fetchDataWithSubscribe() {
    this.qodService.fetchData().subscribe((data)=>{
      // each time this button is pressed, a seperate observable created
      this.qodInput.nativeElement.value = JSON.stringify(data);
      console.log(JSON.stringify(data));
    });
  }
}
