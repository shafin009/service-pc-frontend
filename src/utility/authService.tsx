import { tokenKey } from "@/types/tokenKey";
import { getFromLocalStorage } from "./LocalStorage";
import { decodedToken } from "./jwt";
import { getBaseUrl } from "./Axios/configUrl";
import { instance as axiosInstance } from "./Axios/axiosInstance";

export const storeUserInfo = (userInfo: any) => {
  localStorage.setItem("accessToken", userInfo.accessToken);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(tokenKey);
  console.log(authToken);
  if (authToken) {
    const decodedData = decodedToken(authToken);
    return decodedData;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(tokenKey);
  return !!authToken;
};

export const removeUserInfo = (tokenKey: string) => {
  return localStorage.removeItem(tokenKey);
};

export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: `${getBaseUrl()}/auth/refresh-token`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
};
