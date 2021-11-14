import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() name: string | undefined;
  @Input() path: string | undefined;
  @Input() image_path: string | undefined;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goTo() { 
    this.router.navigate([this.path]);
  }

}
