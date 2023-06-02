import type IAdvocate from "../interfaces/Advocate";

import { advocatesUrl } from "$lib/store";

import axios from "axios";


let advocateListUrl: URL;

advocatesUrl.subscribe((value) => {
    advocateListUrl = value;
});


export async function getAdvocateDetails(advocateUsername: string): Promise<IAdvocate | null> {
    
    // advocates list url with username appended turns to advocate details.
    const url = new URL(advocateUsername, advocateListUrl);

    const { data, status } = await axios.get<IAdvocate>(url.toString());
    
    if (status == 404) return null;

    return data;
}