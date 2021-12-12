import {FormEvent} from "react";

export interface IShowResults {
    prediction: number;
    algorithm: Algorithm;
}

export type Algorithm = 'keras' | 'gradient' | 'forest';

export interface ISubmitButton {
    label: string;
    loading: boolean;
    handleSubmit: (e: FormEvent) => void;
}