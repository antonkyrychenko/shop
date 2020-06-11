import { RootAction } from "../store/actions";
import { RootState } from "../store/reducers";

declare module 'typesafe-actions' {
    interface Types {
        RootAction: RootAction,
        RootState: RootState
    }
}