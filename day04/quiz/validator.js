const specialList = [..."!@#$"];
const MIN_LENGTH = 6;
const MAX_LENGTH = 20;

export const validateLength = (value) => MIN_LENGTH <= value.length && value.length <= MAX_LENGTH;
export const validateSepcial = (value) => specialList.some((v) => value.includes(v));
