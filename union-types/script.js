"use strict";
function toNumber(value) {
    if (typeof value === "number")
        return value;
    if (typeof value === "string")
        return Number(value);
    throw "value deve ser um número ou uma string";
}
console.log(toNumber("123"));
