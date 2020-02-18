export const required = value =>
  value || typeof value === "number"
    ? undefined
    : "Поле обязательно для заполнения";

const maxLength = max => value =>
  value && value.length > max
    ? `Максимальная длина символов ${max}`
    : undefined;

export const maxLength50 = maxLength(50);
export const maxLength300 = maxLength(300);

const minLength = min => value =>
  value && value.length < min
    ? `Минимальная длина ${min} символов или больше`
    : undefined;

export const minLength10 = minLength(10);
