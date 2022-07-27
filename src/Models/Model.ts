export interface IDataType{
    questions: {
        id: string;
        que: string;
        queName: string,
        options: string[];
        answer:any;
        type:String
    }[];
}

export interface ISubDataType{
    id: string;
    que: string;
    queName: string,
    options: string[];
    answer: string[];
    type: String
}

export type TResult={
    [key: string]: string;
}