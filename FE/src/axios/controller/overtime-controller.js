import axios from "../base-axios";
import {endPoint} from '@/axios/end-point.js';

/**
 * Hàm call api lấy đơn vị theo id
 * @param {*} id 
 * @returns object đơn vị
 */
export async function getOverTimeById(id){
    const endpoint = endPoint.OVERTIMES+"/"+id;
    return await axios.getAxios(endpoint);
}

/**
 * Hàm call api lấy danh sách làm thêm theo điều kiện
 * @returns danh sách nhân viên thoả mãn điều kiện
 */
export async function getOverTimeFilter(params){
    const endpoint = endPoint.OVERTIMES_FILTER;
    return await axios.getAxios(endpoint,params)
}

/**
 * Hàm call API thêm mới thông tin làm thêm
 * @param {ovettime} body 
 * @returns 
 */
export async function addOverTime(body){
    // debugger
    const endpoint = endPoint.OVERTIMES;
    return await axios.postAxios(endpoint,body)
}

/**
 * Hàm call API cập nhật thông tin nhân viên
 * @param {*} entityId 
 * @returns 
 */
export async function putOverTime(entityId,body) {
    const endpoint = endPoint.OVERTIMES+"/"+entityId;
    return await axios.putAxios(endpoint,body)
}

/**
 * Hàm call API xoá thông tin làm thêm theo ID
 * @param {*} entityId 
 * @returns 
 */
export async function deleteEmoloyeeByID(entityId){
    const endpoint = endPoint.OVERTIMES+"/"+entityId;
    return await axios.deleteAxios(endpoint)
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
    const endpoint = endPoint.OVERTIMES_MULTIPLE_DELETE;

    return await axios.multipleDeleteAxios(endpoint,param)
}

/**
 * Chuyển trạng thái nhiều nhân viên
 * @param {*} params 
 * @returns 
 */
export async function changeMultiple(params,status){
    let IDs = "(";
    for(let i = 0; i< params.length;i++){
        if(i<params.length-1){
            IDs = IDs + "'" + params[i] + "',"
        }
        else{
            IDs = IDs + "'" + params[i] + "')"
        }
    }
    let param = {
        "listID":IDs,
        "status":status
    }
    const endpoint = endPoint.OVERTIMES_CHANGE_STATUS;

    return await axios.putAxios(endpoint,param)
}

/**
 * Hàm call API xuất khẩu đơn đăng ký làm thêm theo filter
 * @param {*} params 
 * @returns 
 */
export async function exportFilterData(params,listTableTitle){
    const endpoint = endPoint.OVERTIMES_EXPORT;
    let body = {
        param: params,
        header: listTableTitle
    }
    return await axios.postAxiosBlob(endpoint,body)
}

/**
 * Hàm call API xuất khẩu đơn đăng ký làm thêm theo id
 * @param {*} params 
 * @returns 
 */
export async function exportSelectedData(listID,listTableTitle){
    // debugger
    let IDs = "(";
    for(let i = 0; i< listID.length;i++){
        if(i<listID.length-1){
            IDs = IDs + "'" + listID[i] + "',"
        }
        else{
            IDs = IDs + "'" + listID[i] + "')"
        }
    }
    let params = {listID : IDs,
        header: listTableTitle}
    const endpoint = endPoint.OVERTIMES_SELECTED_EXPORT;

    return await axios.postAxiosBlob(endpoint,params)
}