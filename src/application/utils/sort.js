function SortByName (data) {
    return data.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
}

function SortByCategory (data) {
    return data.sort((a, b) => a.category.toLowerCase().localeCompare(b.category.toLowerCase()));
}

function SortBySize (data) {
    return data.sort((a, b) => a.size.toLowerCase().localeCompare(b.size.toLowerCase()));
}

export default function Sort (data, criteria) {
    switch (criteria) {
        case 1:
            return SortByName(data);
        case 2:
            return SortByCategory(data);
        case 3:
            return SortBySize(data);
    }
}