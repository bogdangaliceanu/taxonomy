export class Field {
    constructor(
        public id: string,
        public name: string,
        public type: FieldType,
        public isMultiValue: boolean
    )
    {}

    clone(): Field {
        return new Field(this.id, this.name, this.type, this.isMultiValue);
    }
}

export enum FieldType {
    Number,
    Date,
    Text,
    Address,
    Name,
    Keyword
}

export class DocumentType {
    constructor(
        public id: string,
        public name: string,
        public group: string,
        public category: string,
        public typeField: Field,
        public fields: Field[]
    )
    {}

    clone(): DocumentType {
        return new DocumentType(this.id, this.name, this.group, this.category, this.typeField, this.fields);
    }
}

export class Taxonomy {
    constructor(public documentTypes: DocumentType[]) {}
}