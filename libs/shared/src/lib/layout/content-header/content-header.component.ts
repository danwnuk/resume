import { Component, OnInit, Input, ContentChild, TemplateRef, ElementRef } from '@angular/core';

@Component({
  selector: 'content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent implements OnInit {
  @Input() dates: string[] | undefined;
  @Input() subtitle: string | undefined;
  @Input() title: string | undefined;

  @ContentChild('subtitleTemplate') subtitleTemplate: TemplateRef<ElementRef> | null = null;

  constructor() { }

  ngOnInit() {
  }

}
