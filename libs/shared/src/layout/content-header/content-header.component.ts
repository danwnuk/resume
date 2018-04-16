import { Component, OnInit, Input, ContentChild, TemplateRef, ElementRef } from '@angular/core';

@Component({
  selector: 'content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {
  @Input() dates: string[];
  @Input() subtitle: string;
  @Input() title: string;

  @ContentChild('subtitleTemplate') subtitleTemplate: TemplateRef<ElementRef>;

  constructor() { }

  ngOnInit() {
  }

}
