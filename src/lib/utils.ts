import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

// tw merge is used for cascading the Flow_Block, and clsx remove the repetitions in classnames
export function cn(...inputs:ClassValue[]){
    return twMerge(clsx(inputs));
}