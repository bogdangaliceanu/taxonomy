import { Component, Input } from '@angular/core';

import { DocumentTypeEntry } from './document-type-entry';

@Component({
    moduleId: module.id,
    selector: 'document-type-entry',
    templateUrl: 'document-type-entry.component.html',
    styleUrls: ['document-type-entry.component.css']
})
export class DocumentTypeEntryComponent {
    @Input() entry: DocumentTypeEntry;
}