export default function SearchByName (data, text) {
    return data.filter((picture) => picture.name.toLowerCase().includes(text.toLowerCase()));
}