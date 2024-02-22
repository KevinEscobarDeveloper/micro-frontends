import { Component, Inject, OnInit } from '@angular/core';
import { CommonsLibService } from '@commons-lib';
import { CommonModule } from '@angular/common';

import { Router, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  providers: [HttpClientModule],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cartCount: number | undefined; // Declare a variable to hold the count

  constructor(public commonsLibService: CommonsLibService) { }

  ngOnInit() {
    this.commonsLibService.channelPayment$.subscribe(count => {
      console.log('New count:', count); // Do something with the new count
    });
  }


}