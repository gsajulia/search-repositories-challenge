import { LoginParam } from "./FormSection/type";

export const validUser: LoginParam = {
    onChange: jest.fn(),
    login: { user: "admin", password: "admin" },
    error: false,
};

export const invalidUser: LoginParam = {
    onChange: jest.fn(),
    login: { user: "julia", password: "teste" },
    error: true,
};
