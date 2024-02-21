import axios from "axios"


const baseURL = 'http://localhost:3000/'

const apiService = axios.create({
    baseURL})


export const getAllTask = () => {
    return apiService.get(`tasks`);
};

export const addTask = (task) => {
    return apiService.post(`tasks`, task);
};

export const deleteTask = (idTask) => {
    return apiService.delete(`tasks/${idTask}` );
};

export const getOneTask = (idTask) => {
    return apiService.get(`tasks/${idTask}` );
};
