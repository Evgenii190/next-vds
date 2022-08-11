import { serializeString } from "./serializeString";

export const percentDiscount = (price, discount) =>
    Math.round((serializeString(discount) / serializeString(price)) * 100);
