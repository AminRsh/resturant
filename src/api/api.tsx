// api.ts
import axios from "axios";

const BASE_URL = "http://localhost:5173/api/user";

interface User {
    email: string;
    password: string;
}

export const loginUser = async (user: User) => {
    const response = await axios.post(`${BASE_URL}/login`, user);
    return response.data;
};
