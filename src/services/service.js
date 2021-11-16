import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-type": "application/json"
  }
});

export const getAllAgendas = () => {
  return http.get("/agendas");
};

export const getAgenda = (id) => {
  return http.get(`/agendas/${id}`);
};

export const createAgenda = async (data) => {
  const agendas = await getAllAgendas();
  const newId = agendas.data.length > 0 ? Math.max([...agendas.data.map(val => val.id)]) + 1 : 1;
  return http.post("/agendas", { id: newId, ...data, updated: new Date().toISOString().slice(0, 10) });
};

export const updateAgenda = (id, data) => {
  return http.put(`/agendas/${id}`, { ...data, updated: new Date().toISOString().slice(0, 10) });
};

export const removeAgenda = (id) => {
  return http.delete(`/agendas/${id}`);
};
