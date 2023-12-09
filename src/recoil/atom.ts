import { atom } from "recoil";
import { CatDetails } from "../types/allTypes";

export const currentCatState = atom<CatDetails | null>({
    key: 'currentCatState', 
    default: null, 
});