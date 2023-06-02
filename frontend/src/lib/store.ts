import { writable } from "svelte/store";

const baseUrl = new URL("https://cados.up.railway.app");

export const companiesUrl = writable(new URL("companies", baseUrl));
export const advocatesUrl = writable(new URL("advocates", baseUrl));