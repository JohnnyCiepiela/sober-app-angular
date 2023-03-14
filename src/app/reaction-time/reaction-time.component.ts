import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reaction-time',
  templateUrl: './reaction-time.component.html',
  styleUrls: ['./reaction-time.component.css'],
})
export class ReactionTimeComponent implements OnInit {
  testRunning: boolean = false;
  testFinished: boolean = false;
  dotVisible: boolean = false;
  tapEnabled: boolean = false;
  startTime: number | null = null;
  endTime: number | null = null;
  reactionTime: number | null = null;

  constructor() {}

  ngOnInit(): void {}

  startTest(): void {
    this.testRunning = true;
    setTimeout(() => {
      this.dotVisible = true;
      this.startTime = Date.now();
      this.tapEnabled = true;
    }, Math.random() * 5000 + 1000);
  }

  tap(): void {
    if (this.dotVisible && this.tapEnabled) {
      this.endTime = Date.now();
      this.reactionTime = this.endTime - this.startTime!;
      this.testFinished = true;
      this.tapEnabled = false;
    }
  }

  reset(): void {
    this.testRunning = false;
    this.testFinished = false;
    this.dotVisible = false;
    this.tapEnabled = false;
    this.startTime = null;
    this.endTime = null;
    this.reactionTime = null;
  }
}
