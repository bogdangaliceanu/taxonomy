import { Component } from '@angular/core';

import { DocumentType } from './document-type';
import { Field, FieldType } from './field-editor/field';
import { EditResult } from './edit-result';

@Component({
    moduleId: module.id,
    selector: 'document-type-editor',
    templateUrl: 'document-type-editor.component.html',
    styleUrls: ['document-type-editor.component.css']
})
export class DocumentTypeEditorComponent {
    docType = new DocumentType('g.c.d', 'd', 'g', 'c', [new Field('f', 'Registered Address', FieldType.Address, false)])

    fieldBeingEdited: Field;

    onFieldSelected(field: Field) {
        this.fieldBeingEdited = field;
    }

    onEditComplete(result: EditResult<Field>) {
        if (result.kind === 'Save') {
            const index = this.docType.fields.indexOf(this.fieldBeingEdited);
            this.docType.fields.splice(index, 1, result.item);
        }
        this.fieldBeingEdited = null;
    }
}