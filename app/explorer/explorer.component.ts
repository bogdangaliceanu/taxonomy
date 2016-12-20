import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Taxonomy, DocumentType } from '../model';

@Component({
    moduleId: module.id,
    selector: 'explorer',
    templateUrl: 'explorer.component.html',
    styleUrls: ['explorer.component.css']
})
export class ExplorerComponent {
    @Input() taxonomy: Taxonomy;
    @Output() documentTypeSelected = new EventEmitter<DocumentType>();

    onDocumentTypeSelected(documentType: DocumentType) {
        this.documentTypeSelected.emit(documentType);
    }
}