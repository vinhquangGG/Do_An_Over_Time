//các mode khi mở form chi tiết
export const formMode = {
    //Form thêm mới
    addNew : 1,
    //Form thông tin chi tiết 
    detail : 2,
    //Form sửa thông tin
    fix : 3
}

//giá trị mặc định của offSet trong params
export const valueDefault = {
    offset : 0,
    MISACode : '1'
}

//Các trạng thái của toastMessage
export const toastStatus = {
    success : "success",
    error : "error",
    danger : "danger",  
    default: "default"  
}

//Các status bảng làm thêm
export const status = {
        wait : 1,
        accept : 2,
        deny : 3
}

//Số cột trong bảng
export const numberPinCulumn = 16;