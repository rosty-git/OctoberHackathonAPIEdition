
// https://stackoverflow.com/a/65727855
export function parseForLinks(text: string): string {
    return text.replace(/(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))/g, (x)=>'<a href="'+x+'">'+x+'</a>');
}