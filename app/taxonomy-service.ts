import { Injectable } from '@angular/core';

import { Taxonomy, DocumentType, Field, FieldType } from './model';

@Injectable()
export class TaxonomyService {
    getTaxonomy() {
        return Promise.resolve(
            new Taxonomy(
                [
                    new DocumentType('g.c.d', 'd', 'g', 'c', new Field('type', 'g.c.d.type', FieldType.Address, false), [new Field('f', 'Registered Address', FieldType.Address, false)])
                ]
            )
        );
    }
}