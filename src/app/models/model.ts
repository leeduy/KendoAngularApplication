import { TemplateRef } from '@angular/core';

export interface ScreenInfo {
  name: string;
  alias: string;
  group: boolean;
  hidden: boolean;
  editor: 'text' | 'numeric' | 'date' | 'boolean';
  template: TemplateRef<any> | null;
  editTemplate: TemplateRef<any> | null;
}
