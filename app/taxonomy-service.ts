import { Injectable } from '@angular/core';

import { Taxonomy, DocumentType, Field, FieldType } from './model';

@Injectable()
export class TaxonomyService {
    getTaxonomy() {
        return Promise.resolve(
            new Taxonomy(
                [
                    new DocumentType('g.c.d1', 'd1', 'g1', 'c1', new Field('type', 'g.c.d1.type', FieldType.Address, false), [
                        new Field('f1', 'Registered Address', FieldType.Address, false),
                        new Field('f2', 'Entity Name', FieldType.Text, false)
                    ]),
                    new DocumentType('g.c.d2', 'd2', 'g2', 'c1', new Field('type', 'g.c.d2.type', FieldType.Address, false), [new Field('f', 'Registered Address', FieldType.Address, false)]),
                    new DocumentType('g.c.d3', 'd3', 'g2', 'c1', new Field('type', 'g.c.d3.type', FieldType.Address, false), [new Field('f', 'Registered Address', FieldType.Address, false)]),
                    new DocumentType('g.c.d4', 'd4', 'g2', 'c1', new Field('type', 'g.c.d4.type', FieldType.Address, false), [new Field('f', 'Registered Address', FieldType.Address, false)]),
                    new DocumentType('g.c.d5', 'd5', 'g3', 'c1', new Field('type', 'g.c.d5.type', FieldType.Address, false), [new Field('f', 'Registered Address', FieldType.Address, false)]),
                ]
            )
        );
    }
}