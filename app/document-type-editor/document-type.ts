import { Field } from './field-editor/field';

export class DocumentType {
    constructor(
        public id: string,
        public name: string,
        public group: string,
        public category: string,
        public fields: Field[]
    )
    {}
}