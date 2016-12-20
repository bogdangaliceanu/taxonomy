import { Component, OnInit } from '@angular/core';

import { TaxonomyService } from './taxonomy-service';
import { Taxonomy, DocumentType } from './model';
import { EditResult } from './document-type-editor/edit-result';

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
    taxonomy: Taxonomy;
    documentTypeBeingEdited: DocumentType;

    constructor(private taxonomyService: TaxonomyService) {}

    async ngOnInit() {
        this.taxonomy = await this.taxonomyService.getTaxonomy();
    }

    onDocumentTypeSelected(documentType: DocumentType) {
        this.documentTypeBeingEdited = documentType.clone();
    }

    onDocumentTypeEditComplete(result: EditResult<DocumentType>) {
        if (result.kind === 'Save') {
            const index = this.taxonomy.documentTypes.findIndex(f => f.id === this.documentTypeBeingEdited.id);
            this.taxonomy.documentTypes.splice(index, 1, result.item);
        }
        this.documentTypeBeingEdited = null;
    }
}
