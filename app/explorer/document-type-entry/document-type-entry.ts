import { DocumentType } from '../../model';

export class NameFragment {
    constructor(
        public text: string,
        public isHighlighted: boolean,
        public isStartOfWord: boolean,
        public isEndOfWord: boolean
    )
    {}
}

export class DocumentTypeEntry {
    constructor(public documentType: DocumentType, public nameFragments: NameFragment[]) {}
}