import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import { Taxonomy, DocumentType } from '../model';
import { DocumentTypeEntry, NameFragment } from './document-type-entry/document-type-entry';

@Component({
    moduleId: module.id,
    selector: 'explorer',
    templateUrl: 'explorer.component.html',
    styleUrls: ['explorer.component.css']
})
export class ExplorerComponent implements OnChanges {
    @Input() taxonomy: Taxonomy;
    @Output() documentTypeSelected = new EventEmitter<DocumentType>();
    @Input() selectedDocumentType: DocumentType;

    entries: DocumentTypeEntry[];

    ngOnChanges(changes: SimpleChanges) {
        if (changes['taxonomy'] && this.taxonomy) {
            this.entries = SearchService.search('', this.taxonomy.documentTypes);
        }
    }

    onSearchTermChanged(term: string) {
        this.entries = SearchService.search(term, this.taxonomy.documentTypes);
    }

    onDocumentTypeSelected(documentType: DocumentType) {
        this.documentTypeSelected.emit(documentType);
    }

    remove(documentType: DocumentType) {
        const index = this.taxonomy.documentTypes.indexOf(documentType);
        this.taxonomy.documentTypes.splice(index, 1);
    }
}

class Interval {
    constructor(public start: number, public end: number) {}
}

class SearchService {
    public static search(term: string, documentTypes: DocumentType[]): DocumentTypeEntry[] {
        if (!term) {
            return documentTypes.map(d => new DocumentTypeEntry(d, [new NameFragment(d.name, false, true, true)]));
        }
        
        const termLower = term.toLowerCase();

        return documentTypes
            .map(d => ({
                intervals: SearchService.findIntervals(termLower, d.name.toLowerCase()),
                docType: d
            }))
            .filter(result => result.intervals.length > 0)
            .map(result => new DocumentTypeEntry(
                result.docType,
                [...SearchService.getNameFragments(result.docType.name, result.intervals)]
            ));
    }

    private static findIntervals(termLower: string, docTypeNameLower: string): Interval[] {
        const intervals = [];
        let index = docTypeNameLower.indexOf(termLower);
        while (index >= 0) {
            intervals.push(new Interval(index, index + termLower.length));
            index = docTypeNameLower.indexOf(termLower, index + termLower.length);
        }
        return intervals;
    }

    private static *getNameFragments(docTypeName: string, intervals: Interval[]) {
        const firstInterval = intervals[0];
        if (firstInterval.start > 0) {
            yield new NameFragment(
                docTypeName.substring(0, firstInterval.start),
                false,
                SearchService.isStartOfWord(firstInterval.start, docTypeName),
                SearchService.isEndOfWord(firstInterval.end, docTypeName)
            );
        }
        
        for (let i = 0; i < intervals.length; i++) {
            if (i > 0 && intervals[i].start > intervals[i - 1].end) {
                yield new NameFragment(
                    docTypeName.substring(intervals[i - 1].end, intervals[i].start),
                    false,
                    SearchService.isStartOfWord(intervals[i - 1].end, docTypeName),
                    SearchService.isEndOfWord(intervals[i].start, docTypeName)
                );
            }
            yield new NameFragment(
                docTypeName.substring(intervals[i].start, intervals[i].end),
                true,
                SearchService.isStartOfWord(intervals[i].start, docTypeName),
                SearchService.isEndOfWord(intervals[i].end, docTypeName)
            );
        }

        const lastInterval = intervals[intervals.length - 1];
        if (lastInterval.end < docTypeName.length) {
            yield new NameFragment(
                docTypeName.substring(lastInterval.end, docTypeName.length),
                false,
                SearchService.isStartOfWord(lastInterval.start, docTypeName),
                SearchService.isEndOfWord(lastInterval.end, docTypeName)
            );
        }
    }

    private static isStartOfWord(index: number, text: string): boolean {
        return index === 0 || text[index - 1] === ' ';
    }

    private static isEndOfWord(index: number, text: string): boolean {
        return index === text.length || text[index] === ' ';
    }
}
