import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'panel-section-header',
  templateUrl: './panel-section-header.component.html',
  styleUrls: ['./panel-section-header.component.scss']
})
export class PanelSectionHeaderComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() icon: string | undefined;

  constructor() { }

  ngOnInit() {
  }

}
