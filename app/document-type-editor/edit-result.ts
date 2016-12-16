export interface Saved<T> {
    kind: 'Save';
    item: T;
}

export interface Canceled {
    kind: 'Cancel';
}

export type EditResult<T> = Saved<T> | Canceled;