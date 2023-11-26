import axios from "../base-axios";
import {endPoint} from '@/axios/end-point.js';

/**
 * Hàm call api lấy toàn bộ danh sách Đơn vị
 * @returns danh sách đơn vị
 */
export async function getAllPositions(){
    const endpoint = endPoint.POSITIONS;
    return await axios.getAxios(endpoint);
}

