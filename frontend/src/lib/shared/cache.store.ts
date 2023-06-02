import type { IAdvocateResponse } from "$lib/shared/interfaces/Advocate";
import type { ICompanyResponse } from "$lib/shared/interfaces/Company";

import { writable, type Writable } from "svelte/store";

class Cached<T> {
    private timeout: number;
    private timeoutID: NodeJS.Timeout | undefined = undefined;
    private data: T | undefined;

    public writeable: Writable<T>;
    
    constructor(writeable: Writable<T>, timeout: number) {
        this.writeable = writeable;
        this.timeout = timeout;

        this.writeable.subscribe(this.dataUpdated);
    }


    public getData = () => this.data;

    public updateData = (value: T) => {
        clearTimeout(this.timeoutID);
        this.writeable.update(_ => value);
    };

    private dataUpdated = (value: T) => {
        this.data = value;

        this.timeoutID = setTimeout(() => {
            this.data = undefined;
        }, this.timeout);
    };

}



const advocateDataWriteable: Writable<IAdvocateResponse> = writable();
const companyDataWriteable: Writable<ICompanyResponse> = writable();

export const cachedAdvocateData = new Cached<IAdvocateResponse>(advocateDataWriteable, 60 * 1000);
export const cachedCompaniesData = new Cached<ICompanyResponse>(companyDataWriteable, 60 * 1000);