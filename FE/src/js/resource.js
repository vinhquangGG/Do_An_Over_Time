//Tên phần mềm
export const appName = "Chấm công"

//Danh sách các mục trong menu và các lựa chọn trong từng mục
export const headerMenu = [
    {
        name: "Tổng quan",
        isIcon: false,
        isActive: false
    },
    {
        name: "Chấm công",
        isIcon: true,
        isActive: false,
        selection: {
            detailedTimesheet: "Bảng chấm công chi tiết",
            summaryTimesheet: "Bảng chấm công tổng hợp",
            timesheetData: "Dữ liệu chấm công"
        },
        width: "190px",
        height: "144px"
    },
    {
        name: "Ca làm việc",
        isIcon: true,
        isActive: false,
        selection: {
            generalShiftTable: "Bảng phân ca tổng hợp",
            detailedShiftTable: "Phân ca chi tiết",
            shift: "Ca làm việc"
        },
        width: "170px",
        height: "144px"
    },
    {
        name: "Quản lý đơn",
        isIcon: true,
        isActive: true,
        selection: {
            restApplication: "Đơn xin nghỉ",
            outTimeRegistration: "Đăng ký đi muộn, về sớm",
            overTimeRegistration: "Đăng ký làm thêm",
            missionRegistration: "Đề nghị đi công tác",
            updateRegistration: "Đề nghị cập nhật công",
            changeShiftRegistration: "Đề nghị đổi ca",
            timeAttendanceApproval: "Phê duyệt chấm công",
            onLeaveTable: "Bảng tổng hợp nghỉ phép",
            compensatoryLeaveTable: "Bảng tổng hợp nghỉ bù",
            onLeavePlan: "Kế hoạch nghỉ phép"
        },
        width: "182px",
        height: "446px"
    },
    {
        name: "Báo cáo",
        isIcon: true,
        isActive: false,
        selection: {
            employeeReport: "Báo cáo nhân viên đi muộn, về sớm, nghỉ",
            timeSummary: "Tổng hợp tình hình đi muộn, về sớm",
            onLeaveReport: "Tình hình nghỉ phép theo kế hoạch",
            workoutEmployee: "Danh sách nhân viên đi công tác",
            overTimeEmployee: "Báo cáo danh sách nhân viên làm thêm giờ",
            overTimeReport: "Phân tích tình hình làm thêm",
            overTimeEmployeeReport: "Báo cáo tổng hợp tình hình làm thêm của nhân viên",
            workoutEmployeeReport: "Báo cáo tình hình nhân viên đi công tác"
        },
        width: "348px",
        height: "360px"
    },
    {
        name: "Thiết lập",
        isIcon: false,
        isActive: false
    }
]

//router path
export const viewItems = [
    {
        name: "EmployeeList",
        tag: "/employee-list"
    },
    {
        name:"EmployeeDetail",
        tag: "/employee-detail"
    }

]

export const contentTitle = {
    title: "Đăng ký làm thêm",
    title_add: "Thêm mới đăng ký làm thêm",
    title_detail: "Chi tiết đăng ký làm thêm",
    title_fix: "Sửa đăng ký làm thêm",
    employeeList: "DANH SÁCH NHÂN VIÊN LÀM THÊM",
    selectionTable: "Chọn nhân viên",
    changeRow: "Tuỳ chỉnh cột"
}

//text trong các nút
export const textButton = {
    iconButton: "Thêm",
    save: "Lưu",
    cancel: "Huỷ",
    select: "Chọn",
    fix: "Sửa",
    default: "Mặc định",
    delete: "Xoá",
    export: "Xuất khẩu",
    accept: "Duyệt",
    deny: "Từ chối",
    selected: "Đã chọn",
    unchecked: "Bỏ chọn",
    selectedAmount: "Tổng số bản ghi",
    clear:"Loại bỏ",
    unsave:"Không lưu"
}

//Các text của các dialog
export const dialogText = {
    warningTitlte: "Cảnh báo",
    notifyTitle:"Thông báo",
    changedMessage:"Thông tin đã được thay đổi. Bạn có muốn lưu lại không?",
    deleteMessage: "Bạn có chắc chắn muốn xóa đơn này không?",
    multipleDeleteMessage: "Bạn có chắc chắn muốn xóa những đơn này không?",
    denyStatusMessage:"Bạn có chắc muốn từ chối những đơn đã chọn không?",
    acceptStatusMessage:"Bạn có chắc muốn duyệt những đơn đã chọn không?",
    deleteSuccess: "Xoá thành công",
    deleteFail: "Xoá thất bại",
    acceptSuccess: "Duyệt thành công",
    acceptFail: "Duyệt thất bại",
    denySuccess: "Từ chối thành công",
    denyFail: "Từ chối thất bại",
    addSuccess: "Thêm mới thành công",
    addFail:"Thêm mới thất bại",
    updateSuccess:"Sửa thành công",
    updateFail:"Sửa thất bại"
}


//các placeholder trong các ô input
export const placeholderInput = {
    searchInput: "Tìm kiếm",
    note: "Nhập ghi chú",
    allDepartment: "Tất cả đơn vị",
    noData: "Chưa có dữ liệu"
}

//Tên các chức năng trong content
export const contentFunctionName = {
    status: "Trạng thái"
}

//Các lựa chọn mục trạng thái khi tìm kiếm
export const statusSelection = [
    {
        value:0,
        name:"Tất cả"
    },
    {
        value:1,
        name:"Chờ duyệt"
    },
    {
        value:2,
        name:"Đã duyệt"
    },
    {
        value:3,
        name:"Từ chối"
    }
]

//Các lựa chọn mục trạng thái khi chỉnh sửa form
export const statusSelectionForm = [
    {
        value:1,
        name:"Chờ duyệt"
    },
    {
        value:2,
        name:"Đã duyệt"
    },
    {
        value:3,
        name:"Từ chối"
    }
]

//Các lựa chọn mục thời điểm làm thêm
export const overTimeSelection = [
    {
        value:0,
        name:"Trước ca"
    },
    {
        value:1,
        name:"Sau ca"
    },
    {
        value:2,
        name:"Nghỉ giữa ca"
    },
    {
        value:3,
        name:"Ngày nghỉ"
    }
]

//Các lựa chọn mục ca làm thêm
export const caseSelection = [
    {
        value:0,
        name:"Ca 1"
    },
    {
        value:1,
        name:"Ca 2"
    },
    {
        value:2,
        name:"Ca đêm"
    },
    {
        value:3,
        name:"Ca hành chính"
    }
]

//Các lựa chọn số bản ghi trên trang
export const pageSizeSelection = [
    {
        value:0,
        name: 15
    },
    {
        value:1,
        name: 25
    },
    {
        value:2,
        name: 50
    },
    {
        value:3,
        name: 100
    }
]


// Title icon
export const titleIcon = {
    notification: "Thông báo",
    help: "Trợ giúp",
    other: "Tính năng khác",
    knowledge: "Kiến thức hữu ích",
    export: "Xuất khẩu",
    filter: "Bộ lọc",
    refresh: "Tải lại",
    setting: "Tuỳ chỉnh cột",
    next: "Trang sau",
    previos: "Trang trước",
    close:"Đóng",
    back: "Quay lại"
}

//Text hiển thị ở paging
export const pagingText = {
    amount: "Tổng số bản ghi: ",
    from: "Từ ",
    to: " đến ",
    record: " bản ghi",
    text: "Nhấn ESC để",
    cancel:"Huỷ",
    title: "Ghi chú",
    all: "Tất cả",
    history: "Nhật ký hoạt động"
}

//Tên các cột trong bảng của trang EmployeeList
export const tableTitle = [
    
    {
        dataField : "EmployeeCode",
        caption : "Mã nhân viên",
        dataType : "string",
        alignment : "left",
        width : "150",
        isDisplay: true,
        // fixed: true,
        // fixedPosition:"left"
    },
    {
        dataField : "FullName",
        caption : "Người nộp đơn",
        dataType : "string",
        alignment : "left",
        width : "220",
        isDisplay: true,
        // fixed: true,
        // fixedPosition:"left",
        cellTemplate: "cell-avatar-name"
    },
    {
        dataField : "PositionName",
        caption : "Vị trí công việc",
        dataType : "string",
        alignment : "left",
        width : "150",
        isDisplay: true,
    },
    {
        dataField : "DepartmentName",
        caption : "Đơn vị công tác",
        dataType : "string",
        alignment : "left",
        width : "150",
        isDisplay: true,
    },
    {
      dataField : "ApplyDate",
      caption : "Ngày nộp đơn",
      dataType : "date",
      format: "dd/MM/yyyy HH:mm",
      alignment : "center",
      width : "150",
      isDisplay: true,
    },
    {
        dataField : "FromDate",
        caption : "Làm thêm từ",
        dataType : "date",
        format: "dd/MM/yyyy HH:mm",
        alignment : "center",
        width : "150",
        isDisplay: true,
    },
    {
      dataField : "ToDate",
      caption : "Làm thêm đến",
      dataType : "date",
      format: "dd/MM/yyyy HH:mm",
      alignment : "center",
      width : "150",
      isDisplay: true,
    },
    {
        dataField : "BreakTimeFrom",
        caption : "Nghỉ giữa ca từ",
        dataType : "date",
        format: "dd/MM/yyyy HH:mm",
        alignment : "center",
        width : "150",
        isDisplay: true,
      },
      {
        dataField : "BreakTimeTo",
        caption : "Nghỉ giữa ca đến",
        dataType : "date",
        format: "dd/MM/yyyy HH:mm",
        alignment : "center",
        width : "150",
        isDisplay: true,
      },
    {
      dataField : "OverTimeInWorkingShift",
      caption : "Thời điểm làm thêm",
      dataType : "number",
      alignment : "left",
      width : "200",
      isDisplay: true,
    },
    {
      dataField : "WorkingShift",
      caption : "Ca áp dụng",
      dataType : "number",
      alignment : "left",
      width : "126",
      isDisplay: true,
    },
    {
        dataField : "Reason",
        caption : "Lý do làm thêm",
        dataType : "string",
        alignment : "left",
        width : "150",
        isDisplay: true,
    },
    {
      dataField : "ApprovalName",
      caption : "Người duyệt",
      dataType : "string",
      alignment : "left",
      width : "220",
      isDisplay: true,
    },
    {
      dataField : "RelationShipNames",
      caption : "Người liên quan",
      dataType : "string",
      alignment : "left",
      width : "220",
      isDisplay: true,
    },
    {
      dataField : "Description",
      caption : "Ghi chú",
      dataType : "string",
      alignment : "left",
      width : "220",
      isDisplay: true,
    }
    ,
    {
      dataField : "StatusName",
      caption : "Trạng thái",
      dataType : "number",
      alignment : "left",
      width : "220",
      isDisplay: true,
      cellTemplate: "cell-status"
    },
    {
        // caption : "Chức năng",
        cellTemplate: "cell-template",
        alignment : "center",
        width : "120",
        allowSelection: false,
        // fixed: true,
        // fixedPosition:"right",
        isDisplay: true,
        class:"function-row"
      }
]

//Các trạng thái
export const status = {
    wait: "Chờ duyệt",
    accept: "Đã duyệt",
    deny: "Từ chối"
}

//Tên các cột trong bảng của EmployeeSelectionTable
export const employeeSelectionTableTitle = [
    {
        dataField : "EmployeeCode",
        caption : "Mã nhân viên",
        dataType : "string",
        alignment : "left",
        // width : "120"
    },
    {
      dataField : "FullName",
      caption : "Tên nhân viên",
      dataType : "string",
      alignment : "left",
      cellTemplate: "cell-avatar-name"
    //   width : "174"
    },
    {
      dataField : "DepartmentName",
      caption : "Đơn vị công tác",
      dataType : "string",
      alignment : "left",
    //   width : "310"
    },
    {
      dataField : "PositionName",
      caption : "Vị trí công việc",
      dataType : "string",
      alignment : "left",
    //   width : "206"
    },
    // {
    //     caption : "Chức năng",
    //     cellTemplate: "cell-template",
    //     alignment : "center",
    //     allowSelection: false,
    //     class:"function-row"
    //   }
]

//Các trường trong bảng chi tiết nhân viên
export const detailField = {
    submitBy: "Người nộp đơn",
    department: "Đơn vị công tác",
    submitDate: "Ngày nộp đơn",
    overTimeFrom: "Làm thêm từ",
    restTimeFrom: "Nghỉ giữa ca từ",
    restTimeTo: "Nghỉ giữa ca đến",
    overTimeTo: "Làm thêm đến",
    overTimeCase: "Thời điểm làm thêm",
    applicableCase: "Ca áp dụng",
    overTimeReason: "Lý do làm thêm",
    confirmBy: "Người duyệt",
    relatedPeople: "Người liên quan",
    status:"Trạng thái"
}

//Các thông báo lỗi validate
export const validateMessage = {
    required: "không được để trống.",
    min:"phải lớn hơn",
}

export const languageSwitch = 'Tiếng Việt'