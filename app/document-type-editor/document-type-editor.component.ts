import { Component, Input, Output, EventEmitter } from '@angular/core';

import { DocumentType, Field, FieldType } from '../model';
import { EditResult } from './edit-result';

@Component({
    moduleId: module.id,
    selector: 'document-type-editor',
    templateUrl: 'document-type-editor.component.html',
    styleUrls: ['document-type-editor.component.css']
})
export class DocumentTypeEditorComponent {
    @Input() documentType: DocumentType;
    @Output() editComplete = new EventEmitter<EditResult<DocumentType>>();
    fieldBeingEdited: Field;

    onFieldSelected(field: Field) {
        this.fieldBeingEdited = field.clone();
    }

    onFieldEditComplete(result: EditResult<Field>) {
        if (result.kind === 'Save') {
            const index = this.documentType.fields.findIndex(f => f.id === this.fieldBeingEdited.id);
            this.documentType.fields.splice(index, 1, result.item);
        }
        this.fieldBeingEdited = null;
    }

    onSave() {
        this.editComplete.emit({ kind: 'Save', item: this.documentType });
    }

    onCancel() {
        this.editComplete.emit({ kind: 'Cancel' });
    }
}