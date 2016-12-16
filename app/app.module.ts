import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DocumentTypeEditorComponent } from './document-type-editor/document-type-editor.component';
import { FieldEditorComponent } from './document-type-editor/field-editor/field-editor.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, DocumentTypeEditorComponent, FieldEditorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
