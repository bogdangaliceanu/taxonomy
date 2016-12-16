export class Field {
    constructor(
        public id: string,
        public name: string,
        public type: FieldType,
        public isMultiValue: boolean
    )
    {}
}

export enum FieldType {
    Number,
    Date,
    Text,
    Address,
    Name
}