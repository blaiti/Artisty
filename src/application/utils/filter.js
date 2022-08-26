export function FilterByCategory (data, category) {
    return data.filter((picture) => picture.category === category);
}

export function FilterBySize (data, size) {
    return data.filter((picture) => picture.size === size);
}

export function FilterByType (data, type) {
    return data.filter((picture) => picture.type === type);
}