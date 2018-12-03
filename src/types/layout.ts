export interface ICommentary {
    index: number;
    time: string;
    text: string;
}

export interface IKeyEvent {
    index: number;
    event: string;
    time: string;
    linkedId: number;
}