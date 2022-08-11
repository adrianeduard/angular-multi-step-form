import { Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Multi Step Form';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['personal']);
  }
}
