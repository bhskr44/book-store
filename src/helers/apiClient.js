const apiClient = () => {
  const { API_URL } = process.env;

  const axiosInstance = axios.create({
    baseURL: API_URL,
    responsType: 'json',
  });

  return axiosInstance;
};

export default apiClient;
