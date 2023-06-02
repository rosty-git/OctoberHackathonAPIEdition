import type { PageLoad } from "./$types";
import type { ICompanyResponse } from "$lib/shared/interfaces/Company";

import axios from "axios";
import { get } from "svelte/store";
import { error } from "@sveltejs/kit";


import { companiesUrl } from "$lib/store";

import { cachedCompaniesData } from "$lib/shared/cache.store";



const companiesListUrl = get(companiesUrl);


export const load: PageLoad = async (): Promise<ICompanyResponse> => {
    const cachedData = cachedCompaniesData.getData();
    if (cachedData) return cachedData;

    try {
        const { data } = await axios.get<ICompanyResponse>(companiesListUrl.toString());
        cachedCompaniesData.updateData(data);
        return data;
        
    } catch (err) {
        if (axios.isAxiosError(err)) {
            if (err.response) {
                throw error(err.response.status, err.response.statusText);
            }

            throw error(500, "Something went wrong");
        }

        throw error(400, "Something went wrong");
    }

};
