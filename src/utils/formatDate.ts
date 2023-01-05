// takes Date object as an input, and formats it to look like 'dd/mm yyyy'.
export default function formatDate(dateObj: Date): string {
    return `${dateObj.getDate()}/${
        dateObj.getMonth() + 1
    } ${dateObj.getFullYear()}`;
}
