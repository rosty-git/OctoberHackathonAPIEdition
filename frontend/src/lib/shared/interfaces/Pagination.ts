export default interface IPagination {
    current_page: number,
    total_pages: number,
    has_previous: boolean,
    has_next: boolean,
    prev_page: any,
    next_page: any,
    results_found: number,
    pages: number[]
}