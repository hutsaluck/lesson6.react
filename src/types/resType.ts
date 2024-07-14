import {AxiosResponse} from 'axios';
import {Dispatch, SetStateAction} from "react";

export type IRes<T> = Promise<AxiosResponse<T>>
export type ISetState<T> = Dispatch<SetStateAction<T>>