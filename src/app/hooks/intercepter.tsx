import axios from "axios"

// Axios 인스턴스 생성
const api = axios.create({
  baseURL: "https://yunl97.store"
})

// 요청 인터셉터 추가
api.interceptors.request.use(
  config => {
    // 로컬 스토리지에서 토큰 가져오기
    const token = localStorage.getItem("accessToken")
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
      console.log("asdf")
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default api
