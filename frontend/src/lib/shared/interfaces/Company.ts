export default interface ICompany {
    id: number,
    name: string,
    username: string,
    logo: URL,
    bio: string,
    advocates: number[]
    twitter: URL | undefined,
    linkedin: URL | undefined,
}

// Companies endpoint response data
export interface ICompanyResponse {
    total: number,
    companies: ICompany[]
}
