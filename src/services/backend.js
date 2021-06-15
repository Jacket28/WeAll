import request from "../utils/request";

export const ENDPOINTS = {
    LOGIN: `${process.env.REACT_APP_BACKEND_URL}/user/login`,
    COMPANIES: `${process.env.REACT_APP_BACKEND_URL}/entreprise`,
    OFFERS: `${process.env.REACT_APP_BACKEND_URL}/offre`,
    ENTERPRISE: `${process.env.REACT_APP_BACKEND_URL}/entreprise`,
    POSTULANT: `${process.env.REACT_APP_BACKEND_URL}/postulant`,
    SOFTSKILLS: `${process.env.REACT_APP_BACKEND_URL}/softskill/postulant`,
    COMPETENCE: `${process.env.REACT_APP_BACKEND_URL}/competence/postulant`,
    LANGUE: `${process.env.REACT_APP_BACKEND_URL}/langue/postulant`,
    SEJOUR: `${process.env.REACT_APP_BACKEND_URL}/langue/sejours`,
    EXPERIENCE: `${process.env.REACT_APP_BACKEND_URL}/experience/postulant`,
    FORMATION: `${process.env.REACT_APP_BACKEND_URL}/formation/postulant`,
    APPLICANTS: `${process.env.REACT_APP_BACKEND_URL}/postulant`,
    CONVERSATION: `${process.env.REACT_APP_BACKEND_URL}/chat/conversation/`,
    MESSAGES: `${process.env.REACT_APP_BACKEND_URL}/chat/message/`
};

export const Backend = {
    login: async function (email, password) {
        return request(ENDPOINTS.LOGIN, {
            method: "POST",
            data: {email, password},
        });
    },

    companies: async function () {
        return request(ENDPOINTS.COMPANIES);
    },
    getOffers: async () => {
        return request(ENDPOINTS.OFFERS);
    },
    getPostulants: async () => {
        return request(ENDPOINTS.POSTULANT);
    },
    getEnterprise: async (id) => {
        return request(ENDPOINTS.ENTERPRISE + "/" + id);
    },
    getSoftskills: async (id) => {
        return request(ENDPOINTS.SOFTSKILLS + "/" + id);
    },
    getCompetences: async (id) => {
        return request(ENDPOINTS.COMPETENCE + "/" + id);
    },
    getLangues: async (id) => {
        return request(ENDPOINTS.LANGUE + "/" + id);
    },
    getSejours: async (id) => {
        return request(ENDPOINTS.SEJOUR + "/" + id);
    },
    getExperiences: async (id) => {
        return request(ENDPOINTS.EXPERIENCE + "/" + id);
    },
    getFormations: async (id) => {
        return request(ENDPOINTS.FORMATION + "/" + id);
    },

    applicants: async function () {
        return request(ENDPOINTS.APPLICANTS);
    },

    deleteConversation: async function (id) {
        return request(ENDPOINTS.CONVERSATION + localStorage.getItem("loginId") + "/" + id, {
            method: "DELETE"
        });
    },

    message: async function (id) {
        return request(ENDPOINTS.MESSAGES + localStorage.getItem("loginId") + "/" + id);
    },

    setMessage: async function (id, message) {
        return request(ENDPOINTS.MESSAGES + localStorage.getItem("loginId") + "/" + id, {
            method: "POST",
            data: {message}
        });
    },


};
