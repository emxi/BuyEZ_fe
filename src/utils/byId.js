export default function byId(array) {
    const result = {};
    array.forEach((element) => {
        result[element.id] = element;
    });
    return result;
}
