import type IAdvocate from "$lib/shared/interfaces/Advocate";
import type { PageLoad } from "./$types";

import { error } from "@sveltejs/kit";
import { get } from "svelte/store";
import axios from "axios";

import { advocatesUrl } from "$lib/store";
import { cachedAdvocateData } from "$lib/shared/cache.store";


const advocateListUrl = get(advocatesUrl);


interface IResponse {
    advocate: IAdvocate;
}

export const load: PageLoad = async ({ params }): Promise<IAdvocate> => {

    const cachedData = cachedAdvocateData.getData();
    if (cachedData) {
        const advocateData = cachedData.advocates.find(advocate => advocate.username == params.username)
        if (advocateData) return advocateData;
    }

    const fetchUrl = new URL(`advocates/${params.username}`, advocateListUrl);
    
    try {
        const { data } = await axios.get<IResponse>(fetchUrl.toString());
        return data.advocate;
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