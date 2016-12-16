export class Saved<T> {
    kind: 'Save';
    constructor(public item: T) {}
}

export class Canceled {
    kind: 'Cancel';
}

export type EditResult<T> = Saved<T> | Canceled;