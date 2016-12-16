import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Field } from './field';
import { EditResult, Saved, Canceled } from '../edit-result';

@Component({
    moduleId: module.id,
    selector: 'field-editor',
    templateUrl: 'field-editor.component.html',
    styleUrls: ['field-editor.component.css']
})
export class FieldEditorComponent {
    @Input() field: Field;
    @Output() editComplete = new EventEmitter<EditResult<Field>>();

    onSave() {
        this.editComplete.emit({ kind: 'Save', item: this.field });
    }

    onCancel() {
        this.editComplete.emit({ kind: 'Cancel' });
    }
}