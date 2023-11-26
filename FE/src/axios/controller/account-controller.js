import axios from "../base-axios";
import {endPoint} from '@/axios/end-point.js';


/**
 * Hàm call api lấy toàn bộ danh sách nhân viên
 * @returns danh sách nhân viên
 */
export async function addNewUser(params){
    const endpoint = endPoint.ACCOUNT;
    return await axios.postAxios(endpoint, params);
}

export async function checkDuplicate(fullName){
    const endpoint = endPoint.ACCOUNT;
    return await axios.getAxios(`${endpoint}/duplicate?fullName=${fullName}`);
}



