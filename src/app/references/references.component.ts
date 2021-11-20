import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goHome() {
    this.router.navigate(['/home']);
  }

}
