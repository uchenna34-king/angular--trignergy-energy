import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit ,Input} from '@angular/core';
import { ActivationStart, Router, RouterLink,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'header',
  standalone: true,
  imports: [NgClass,RouterLink,NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  hamburgerOpen = false;
  constructor(private router: Router) {}

  heroTitle: string[] = ['Delivering Impeccable Services ','Nationwide'];
  hero = true;

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof ActivationStart) {
        const data = event.snapshot.data as {
          hero: boolean;
          heroTitle: string[];
        };
        this.heroTitle = data.heroTitle;
        this.hero = data.hero;
      }
    });
  }
}
