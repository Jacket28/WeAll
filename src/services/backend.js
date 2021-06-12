import request from "../utils/request";

export const ENDPOINTS = {
  LOGIN: `${process.env.REACT_APP_BACKEND_URL}/user/login`,
  COMPANIES: `${process.env.REACT_APP_BACKEND_URL}/entreprise`,
  USER: `${process.env.REACT_APP_BACKEND_URL}/postulant/user/`,
  POSTULANTS: `${process.env.REACT_APP_BACKEND_URL}/postulant`,
  CONVERSATION: `${process.env.REACT_APP_BACKEND_URL}/chat/conversation/`,
  MESSAGES :  `${process.env.REACT_APP_BACKEND_URL}/chat/message/`
};

export const Backend = {
  login: async function (email, password) {
    return request(ENDPOINTS.LOGIN, {
      method: "POST",
      data: { email, password },
    });
  },

  companies: async function () {
    return request(ENDPOINTS.COMPANIES);
  },

  applicant: async function () {
    return request(ENDPOINTS.USER + localStorage.getItem("applicantId"),{
      method:"GET"
    });
  },

  applicants: async function () {
    return request(ENDPOINTS.POSTULANTS,{
      method:"GET"
    });
  },

  deleteConversation: async function(id){
    return request(ENDPOINTS.CONVERSATION + localStorage.getItem("applicantId") + "/" + id,{
      method:"DELETE"
    });
  },

  conversation: async function(id){
    return request(ENDPOINTS.CONVERSATION + localStorage.getItem("applicantId") + "/" + id,{
      method:"GET"
    });
  },

  message: async function(id){
    return request(ENDPOINTS.MESSAGES + localStorage.getItem("applicantId") + "/" + id,{
        method:"GET"
      });
  },

  setMessage: async function(id, message){
    return request(ENDPOINTS.MESSAGES + localStorage.getItem("applicantId") + "/" + id,{
      method:"POST",
      data: {message}
    });
  },


};
