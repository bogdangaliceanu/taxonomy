import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DocumentTypeEditorComponent } from './document-type-editor/document-type-editor.component';
import { FieldEditorComponent } from './document-type-editor/field-editor/field-editor.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { TaxonomyService } from './taxonomy-service';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [
        AppComponent,
        DocumentTypeEditorComponent,
        FieldEditorComponent,
        ExplorerComponent
    ],
    bootstrap: [ AppComponent ],
    providers: [ TaxonomyService ]
})
export class AppModule { }
