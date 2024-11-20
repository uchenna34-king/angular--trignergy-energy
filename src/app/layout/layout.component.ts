import { Component, OnInit } from '@angular/core';
import { ActivationStart, RouterOutlet, Router,ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { EmailSubscribeComponent } from '../email-subscribe/email-subscribe.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, EmailSubscribeComponent, NgIf],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {

  constructor(
    private router: Router,
  ){}

  emailSub!: boolean;

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof ActivationStart) {
        const data = event.snapshot.data as {
          emailSub: boolean;
        };
        this.emailSub = data?.emailSub;
      }
    });
  }
}



