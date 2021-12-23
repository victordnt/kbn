import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kbn-btn, kbn-button',
  templateUrl: './button.component.html',
  styleUrls: ['./styles/normal.scss'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    return;
  }
}

@Component({
  selector: 'kbn-link, kbn-a',
  templateUrl: './button.component.html',
  styleUrls: ['./styles/link.scss'],
})
export class ButtonLinkComponent extends ButtonComponent {}
