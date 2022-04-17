export interface Reim {
    id: number,
    amount: number,
    submitted: Date,
    resolved: Date,
    desc: string,
    author: number,
    res: number,
    pending: boolean,
    approved: boolean,
    type: string
}