import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-edit-grid-view',
  templateUrl: './edit-grid-view.component.html',
  styleUrls: ['./edit-grid-view.component.scss'],
})
export class EditGridViewComponent implements OnInit {
  @ViewChild(TemplateRef) test: TemplateRef<unknown>;

  editTemplate: [{ field: string; template: TemplateRef<unknown> }];

  constructor() {}

  ngOnInit(): void {}
}
