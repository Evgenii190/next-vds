export const serializeString = (str) =>
    str.split(" ").length > 1 ? +str.split(" ").join("") : +str;
