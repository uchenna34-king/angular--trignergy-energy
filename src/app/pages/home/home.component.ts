import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { NgFor } from '@angular/common';
import { EmailSubscribeComponent } from '../../email-subscribe/email-subscribe.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports:[HeaderComponent,FooterComponent,NgFor,EmailSubscribeComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
  }

}
 