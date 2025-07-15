import axiosInstance from './axiosInstance';
import { AxiosResponse } from 'axios';

export async function getApi<T>(
  url: string,
  apiUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL,
): Promise<T | null> {
  if (apiUrl === undefined) {
    console.error('API URL is not exist.');
    throw new Error('API URL is not exist.');
  }

  try {
    const response: AxiosResponse<T> = await axiosInstance(apiUrl).get<T>(url);
    return response.data;
  } catch (error) {
    console.error('GET RestAPI Error: ', error);
    return null;
  }
}

// export const getApi = async (url: string) => {
//   const response = await axiosInstance
//     .get(url)
//     .then((res) => res)
//     .catch((error) => {
//       console.error('get api error : ', error);
//       return null;
//     });
//   return response ? response.data : null;
// };

// export const postApi = async (url: string, param: object, headers: object = {}) => {
//   const config = { headers };
//   const response = await axiosInstance
//     .post(url, param, config)
//     .then((res) => res)
//     .catch((error) => {
//       console.error('post api error : ', error);
//       return null;
//     });
//   return response ? response.data : null;
// };

// export const patchApi = async (url: string, param: object) => {
//   const response = await axiosInstance
//     .patch(url, param)
//     .then((res) => res)
//     .catch((error) => {
//       console.error('patch api error : ', error);
//       return null;
//     });
//   return response ? response.data : null;
// };

// export const deleteApi = async (url: string) => {
//   const response = await axiosInstance
//     .delete(url)
//     .then((res) => res)
//     .catch((error) => {
//       console.error('post api error : ', error);
//       return null;
//     });
//   return response ? response.data : null;
// };
