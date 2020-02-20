export interface mainInterface {
    id?: number,
    main_title: string,
    main_description: string,
    main_due_date: string,
    main_cathegory: number,
    childitem_set: {}
}

export interface childInterface {
    id?: number;
    child_title: string;
    child_description: string;
    child_due_date: string;
    child_related_to: number;
}