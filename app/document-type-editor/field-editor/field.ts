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
    Name
}