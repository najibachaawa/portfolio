import { axiosPost, axiosGet } from './http';
export const getAllPortfolios = () => axiosGet('api/v1/portfolio');
export const CreateNewContact = (data) => axiosPost('api/v1/contacts', { data });
export const loginRequest = (data) => axiosPost('api/v1/users/login', { data });
