import {Component, OnInit} from '@angular/core';
declare var App: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';

  ngOnInit(): void {
  }

  ngAfterViewInit()
  {
    App.initBeforeLoad();
    App.initCore();
  }
}
