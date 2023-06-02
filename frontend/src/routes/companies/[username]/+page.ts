import type { PageLoad } from "./$types";
import type ICompany from "$lib/shared/interfaces/Company";

import { get } from "svelte/store";
import { error } from "@sveltejs/kit";

import { companiesUrl } from "$lib/store";
import { cachedCompaniesData } from "$lib/shared/cache.store";

import axios from "axios";

interface IResponse {
    company: ICompany;
}

const companiesListUrl = get(companiesUrl);

export const load: PageLoad = async ({ params }): Promise<ICompany> => {
    
    const cachedData = cachedCompaniesData.getData();
    if (cachedData) {
        const companyData = cachedData.companies.find(company => company.username == params.username)
        console.log(companyData);
        if (companyData) return companyData;
    }

    const fetchUrl = new URL(`companies/${params.username}`, companiesListUrl);

    try {
        const { data } = await axios.get<IResponse>(fetchUrl.toString());
        return data.company;
    } catch (err) {
        if (axios.isAxiosError(err)) {
            if (err.response) {
                throw error(err.response.status, err.response.statusText);
            }

            throw error(500, "Something went wrong");
        }

        throw error(400, "Something went wrong");
    }
}