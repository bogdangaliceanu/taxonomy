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
    @Input() selectedDocumentType: DocumentType;

    onDocumentTypeSelected(documentType: DocumentType) {
        this.documentTypeSelected.emit(documentType);
    }

    remove(documentType: DocumentType) {
        const index = this.taxonomy.documentTypes.indexOf(documentType);
        this.taxonomy.documentTypes.splice(index, 1);
    }
}