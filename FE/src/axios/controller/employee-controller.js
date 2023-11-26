import axios from "../base-axios";
import {endPoint} from '@/axios/end-point.js';


/**
 * Hàm call api lấy toàn bộ danh sách nhân viên
 * @returns danh sách nhân viên
 */
export async function getAllEmployees(){
    const endpoint = endPoint.EMPLOYEES;
    return await axios.getAxios(endpoint);
}

/**
 * Hàm call api lấy danh sách nhân viên theo điều kiện
 * @returns danh sách nhân viên thoả mãn điều kiện
 */
export async function getEmployeeFilter(params){
    console.log(params);
    const endpoint = endPoint.EMPLOYEES_FILTER;
    return await axios.getAxios(endpoint,params)
}

/**
 * Hàm call api xoá nhiều 
 * @param {params: IDs có dạng ('id1','id2',...)} params 
 * @returns 
 */
export async function multipleDelete(params){
    let IDs = "(";
    for(let i = 0; i< params.length;i++){
        if(i<params.length-1){
            IDs = IDs + "'" + params[i] + "',"
        }
        else{
            IDs = IDs + "'" + params[i] + "')"
        }
    }
    let param = {"listID":IDs}
    const endpoint = endPoint.MULTIPLE_DELETE;

    return await axios.multipleDeleteAxios(endpoint,param)
}

/**
 * Hàm call api lấy thông tin nhân viên theo id
 * @param {*} id 
 * @returns 
 */
export async function getEmployeeByID(id){
    const endpoint = endPoint.EMPLOYEES+"/"+id;
    return await axios.getAxios(endpoint)
}

/**
 * Hàm call API thêm mới thông tin nhân viên
 * @param {employee} body 
 * @returns 
 */
export async function addNewEmployee(body){
    debugger
    const endpoint = endPoint.EMPLOYEES;
    return await axios.postAxios(endpoint,body)
}

// Check trùng Mã
export async function checkDuplicate(employeeCode, password){
    const endpoint = endPoint.EMPLOYEES;
    return await axios.getAxios(`${endpoint}/duplicate?employeeCode=${employeeCode}&password=${password}`);
}
/**
 * Hàm call API lấy mã nhân viên kế tiếp
 * @returns 
 */
export async function getNewEmployeeCode(){
    const endpoint = endPoint.NEW_EMPLOYEE_CODE;
    return await axios.getAxios(endpoint)
}

/**
 * Hàm call API xoá nhân viên theo ID
 * @param {*} entityId 
 * @returns 
 */
export async function deleteEmoloyeeByID(entityId){
    const endpoint = endPoint.EMPLOYEES+"/"+entityId;
    return await axios.deleteAxios(endpoint)
}

/**
 * Hàm call API cập nhật thông tin nhân viên
 * @param {*} entityId 
 * @returns 
 */
export async function putEmployee(entityId,body) {
    const endpoint = endPoint.EMPLOYEES+"/"+entityId;
    return await axios.putAxios(endpoint,body)
}

/**
 * Hàm call API xuất khẩu tất cả nhân viên
 * @param {*} params 
 * @returns 
 */
export async function exportData(params){
    const endpoint = endPoint.EXPORT;
    return await axios.getAxiosBlob(endpoint,params)
}


