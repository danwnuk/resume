import {
  Component,
  OnInit,
  ContentChild,
  TemplateRef,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ContentChild('sideTemplate') sideTemplate: TemplateRef<ElementRef> | null = null;
  @ContentChild('contentTemplate') contentTemplate: TemplateRef<ElementRef> | null = null;

  constructor() {}

  ngOnInit() {}
}
