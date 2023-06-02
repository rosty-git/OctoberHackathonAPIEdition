import type IPagination from "./Pagination";


export default interface IAdvocate {
    name: string,
    username: string,
    profile_pic: URL,
    bio: string,
    twitter: URL,
    follower_count: number,
    companies: number[]
}

// Advocate API endpoint response data
export interface IAdvocateResponse {
    pagination: IPagination,
    advocates: IAdvocate[],
    total: number
}
