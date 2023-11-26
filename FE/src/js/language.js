export const Resource = {
  messages: {
    vi: {
      //Tên phần mềm
      appName: "Chấm công",

      //Danh sách các mục trong menu và các lựa chọn trong từng mục
      headerMenu: [
        {
          name: "Tổng quan",
          isIcon: false,
          isActive: false,
        },
        {
          name: "Chấm công",
          isIcon: true,
          isActive: false,
          selection: {
            detailedTimesheet: "Bảng chấm công chi tiết",
            summaryTimesheet: "Bảng chấm công tổng hợp",
            timesheetData: "Dữ liệu chấm công",
          },
          width: "190px",
          height: "144px",
        },
        {
          name: "Ca làm việc",
          isIcon: true,
          isActive: false,
          selection: {
            generalShiftTable: "Bảng phân ca tổng hợp",
            detailedShiftTable: "Phân ca chi tiết",
            shift: "Ca làm việc",
          },
          width: "170px",
          height: "144px",
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
            onLeavePlan: "Kế hoạch nghỉ phép",
          },
          width: "182px",
          height: "446px",
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
            overTimeEmployeeReport:
              "Báo cáo tổng hợp tình hình làm thêm của nhân viên",
            workoutEmployeeReport: "Báo cáo tình hình nhân viên đi công tác",
          },
          width: "348px",
          height: "360px",
        },
        {
          name: "Thiết lập",
          isIcon: false,
          isActive: false,
        },
      ],
      contentTitle: {
        title: "Đăng ký làm thêm",
        title_add: "Thêm mới đăng ký làm thêm",
        title_detail: "Chi tiết đăng ký làm thêm",
        title_fix: "Sửa đăng ký làm thêm",
        employeeList: "DANH SÁCH NHÂN VIÊN LÀM THÊM",
        selectionTable: "Chọn nhân viên",
        changeRow: "Tuỳ chỉnh cột",
      },
      //text trong các nút
      textButton: {
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
        clear: "Loại bỏ",
        unsave: "Không lưu",
      },
      //Các text của các dialog
      dialogText: {
        warningTitlte: "Cảnh báo",
        notifyTitle: "Thông báo",
        changedMessage:
          "Thông tin đã được thay đổi. Bạn có muốn lưu lại không?",
        deleteMessage: "Bạn có chắc chắn muốn xóa đơn này không?",
        multipleDeleteMessage: "Bạn có chắc chắn muốn xóa những đơn này không?",
        denyStatusMessage: "Bạn có chắc muốn từ chối những đơn đã chọn không?",
        acceptStatusMessage: "Bạn có chắc muốn duyệt những đơn đã chọn không?",
        deleteSuccess: "Xoá thành công",
        deleteFail: "Xoá thất bại",
        acceptSuccess: "Duyệt thành công",
        acceptFail: "Duyệt thất bại",
        denySuccess: "Từ chối thành công",
        denyFail: "Từ chối thất bại",
        addSuccess: "Thêm mới thành công",
        addFail: "Thêm mới thất bại",
        updateSuccess: "Sửa thành công",
        updateFail: "Sửa thất bại",
      },
      //các placeholder trong các ô input
      placeholderInput: {
        searchInput: "Tìm kiếm",
        note: "Nhập ghi chú",
        allDepartment: "Tất cả đơn vị",
        noData: "Chưa có dữ liệu",
      },

      //Tên các chức năng trong content
      contentFunctionName: {
        status: "Trạng thái",
      },
      //Các lựa chọn mục trạng thái khi tìm kiếm
      statusSelection: [
        {
          value: 0,
          name: "Tất cả",
        },
        {
          value: 1,
          name: "Chờ duyệt",
        },
        {
          value: 2,
          name: "Đã duyệt",
        },
        {
          value: 3,
          name: "Từ chối",
        },
      ],
      //Các lựa chọn mục trạng thái khi chỉnh sửa form
      statusSelectionForm: [
        {
          value: 1,
          name: "Chờ duyệt",
        },
        {
          value: 2,
          name: "Đã duyệt",
        },
        {
          value: 3,
          name: "Từ chối",
        },
      ],
      //Các lựa chọn mục thời điểm làm thêm
      overTimeSelection: [
        {
          value: 0,
          name: "Trước ca",
        },
        {
          value: 1,
          name: "Sau ca",
        },
        {
          value: 2,
          name: "Nghỉ giữa ca",
        },
        {
          value: 3,
          name: "Ngày nghỉ",
        },
      ],
      //Các lựa chọn mục ca làm thêm
      caseSelection: [
        {
          value: 0,
          name: "Ca 1",
        },
        {
          value: 1,
          name: "Ca 2",
        },
        {
          value: 2,
          name: "Ca đêm",
        },
        {
          value: 3,
          name: "Ca hành chính",
        },
      ],
      // Title icon
      titleIcon: {
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
        close: "Đóng",
        back: "Quay lại",
      },
      //Text hiển thị ở paging
      pagingText: {
        amount: "Tổng số bản ghi: ",
        from: "Từ ",
        to: " đến ",
        record: " bản ghi",
        text: "Nhấn ESC để",
        cancel: "Huỷ",
        title: "Ghi chú",
        all: "Tất cả",
        history: "Nhật ký hoạt động",
      },
      //Tên các cột trong bảng của trang EmployeeList
      tableTitle: [
        {
          dataField: "EmployeeCode",
          caption: "Mã nhân viên",
          dataType: "string",
          alignment: "left",
          width: "150",
          isDisplay: true,
          // fixed: true,
          // fixedPosition:"left"
        },
        {
          dataField: "FullName",
          caption: "Người nộp đơn",
          dataType: "string",
          alignment: "left",
          width: "220",
          isDisplay: true,
          // fixed: true,
          // fixedPosition:"left",
          cellTemplate: "cell-avatar-name",
        },
        {
          dataField: "PositionName",
          caption: "Vị trí công việc",
          dataType: "string",
          alignment: "left",
          width: "150",
          isDisplay: true,
        },
        {
          dataField: "DepartmentName",
          caption: "Đơn vị công tác",
          dataType: "string",
          alignment: "left",
          width: "150",
          isDisplay: true,
        },
        {
          dataField: "ApplyDate",
          caption: "Ngày nộp đơn",
          dataType: "date",
          format: "dd/MM/yyyy HH:mm",
          alignment: "center",
          width: "150",
          isDisplay: true,
        },
        {
          dataField: "FromDate",
          caption: "Làm thêm từ",
          dataType: "date",
          format: "dd/MM/yyyy HH:mm",
          alignment: "center",
          width: "150",
          isDisplay: true,
        },
        {
          dataField: "ToDate",
          caption: "Làm thêm đến",
          dataType: "date",
          format: "dd/MM/yyyy HH:mm",
          alignment: "center",
          width: "150",
          isDisplay: true,
        },
        {
          dataField: "BreakTimeFrom",
          caption: "Nghỉ giữa ca từ",
          dataType: "date",
          format: "dd/MM/yyyy HH:mm",
          alignment: "center",
          width: "150",
          isDisplay: true,
        },
        {
          dataField: "BreakTimeTo",
          caption: "Nghỉ giữa ca đến",
          dataType: "date",
          format: "dd/MM/yyyy HH:mm",
          alignment: "center",
          width: "150",
          isDisplay: true,
        },
        {
          dataField: "OverTimeInWorkingShift",
          caption: "Thời điểm làm thêm",
          dataType: "number",
          alignment: "left",
          width: "200",
          isDisplay: true,
        },
        {
          dataField: "WorkingShift",
          caption: "Ca áp dụng",
          dataType: "number",
          alignment: "left",
          width: "126",
          isDisplay: true,
        },
        {
          dataField: "Reason",
          caption: "Lý do làm thêm",
          dataType: "string",
          alignment: "left",
          width: "150",
          isDisplay: true,
        },
        {
          dataField: "ApprovalName",
          caption: "Người duyệt",
          dataType: "string",
          alignment: "left",
          width: "220",
          isDisplay: true,
        },
        {
          dataField: "RelationShipNames",
          caption: "Người liên quan",
          dataType: "string",
          alignment: "left",
          width: "220",
          isDisplay: true,
        },
        {
          dataField: "Description",
          caption: "Ghi chú",
          dataType: "string",
          alignment: "left",
          width: "220",
          isDisplay: true,
        },
        {
          dataField: "StatusName",
          caption: "Trạng thái",
          dataType: "number",
          alignment: "left",
          width: "220",
          isDisplay: true,
          cellTemplate: "cell-status",
        },
        {
          caption: "",
          cellTemplate: "cell-template",
          alignment: "center",
          width: "10",
          allowSelection: false,
          fixed: true,
          fixedPosition:"left",
          isDisplay: true,
          class: "function-row",
        },
      ],
      //Các trạng thái
      status: {
        wait: "Chờ duyệt",
        accept: "Đã duyệt",
        deny: "Từ chối",
      },
      //Tên các cột trong bảng của EmployeeSelectionTable
      employeeSelectionTableTitle: [
        {
          dataField: "EmployeeCode",
          caption: "Mã nhân viên",
          dataType: "string",
          alignment: "left",
          // width : "120"
        },
        {
          dataField: "FullName",
          caption: "Tên nhân viên",
          dataType: "string",
          alignment: "left",
          cellTemplate: "cell-avatar-name",
          //   width : "174"
        },
        {
          dataField: "DepartmentName",
          caption: "Đơn vị công tác",
          dataType: "string",
          alignment: "left",
          //   width : "310"
        },
        {
          dataField: "PositionName",
          caption: "Vị trí công việc",
          dataType: "string",
          alignment: "left",
          //   width : "206"
        },
      ],
      //Các trường trong bảng chi tiết nhân viên
      detailField: {
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
        status: "Trạng thái",
      },

      //Các thông báo lỗi validate
      validateMessage: {
        required: "không được để trống.",
        min: "phải lớn hơn",
        requiredIf: "không được để trống khi đã nhập"
      },

      avatar:{
        changePass: "Đổi mật khẩu",
        accountSetting: "Cài đặt tài khoản",
        securitySetting:"Cài đặt bảo mật",
        getPoint:"Giới thiệu - Tích điểm",
        language:"Ngôn ngữ:",
        logout:"Đăng xuất"
      },

      languageSwitch: "Việt Nam",
    },
    eng: {
      //Software name
      appName: "Timekeeping",

      //List of menu items and options in each item
      headerMenu: [
        {
          name: "Overview",
          isIcon: false,
          isActive: false,
        },
        {
          name: "Timekeeping",
          isIcon: true,
          isActive: false,
          selection: {
            detailedTimesheet: "Detailed Timesheet",
            summaryTimesheet: "General Timesheet",
            timesheetData: "Timesheet Data",
          },
          width: "190px",
          height: "144px",
        },
        {
          name: "Working shift",
          isIcon: true,
          isActive: false,
          selection: {
            generalShiftTable: "General Shift Table",
            detailedShiftTable: "Detailed Shifts",
            shift: "Work shift",
          },
          width: "170px",
          height: "144px",
        },
        {
          name: "Manage menu",
          isIcon: true,
          isActive: true,
          selection: {
            restApplication: "Application for leave",
            outTimeRegistration: "Registration goes late, leaves early",
            overTimeRegistration: "Registration for overtime",
            missionRegistration: "Recommended business trip",
            updateRegistration: "Public update recommended",
            changeShiftRegistration: "Suggest to change shift",
            timeAttendanceApproval: "Approval of attendance",
            onLeaveTable: "Leave Summary Table",
            compensatoryLeaveTable: "Compensatory leave summary table",
            onLeavePlan: "Leave Plan",
          },
          width: "182px",
          height: "446px",
        },
        {
          name: "Report",
          isIcon: true,
          isActive: false,
          selection: {
            employeeReport:
              "Report employees coming late, leaving early, taking leave",
            timeSummary:
              "Summing up the situation of coming late, leaving early",
            onLeaveReport: "Planned leave status",
            workoutEmployee: "List of employees on business trips",
            overTimeEmployee: "Report list of overtime employees",
            overTimeReport: "Analysis of overtime",
            overTimeEmployeeReport: "Employee's overtime report",
            workoutEmployeeReport: "Report on employee's business trip",
          },
          width: "348px",
          height: "360px",
        },
        {
          name: "Setup",
          isIcon: false,
          isActive: false,
        },
      ],
      contentTitle: {
        title: "Register OT",
        title_add: "Add OT application",
        title_detail: "OT application details",
        title_fix: "Edit OT application",
        employeeList: "LIST OF OVERTIME EMPLOYEES",
        selectionTable: "Select Employee",
        changeRow: "Customize columns",
      },
      //text in buttons
      textButton: {
        iconButton: "Add",
        save: "Save",
        cancel: "Cancel",
        select: "Select",
        fix: "Fix",
        default: "Default",
        delete: "Delete",
        export: "Export",
        accept: "Approve",
        deny: "Deny",
        selected: "Selected",
        unchecked: "Uncheck",
        selectedAmount: "Total number of records",
        clear: "Remove",
        unsave: "Do not save",
      },
      //Texts of dialogs
      dialogText: {
        warningTitlte: "Warning",
        notifyTitle: "Notification",
        changedMessage:
          "The information has been changed. Do you want to save it?",
        deleteMessage: "Are you sure you want to delete this application?",
        multipleDeleteMessage:
          "Are you sure you want to delete these applications?",
        denyStatusMessage:
          "Are you sure you want to reject the selected applications?",
        acceptStatusMessage:
          "Are you sure you want to browse the selected applications?",
        deleteSuccess: "Delete successful",
        deleteFail: "Delete failed",
        acceptSuccess: "Browse Successful",
        acceptFail: "Browse failed",
        denySuccess: "Successfully denied",
        denyFail: "Reject failed",
        addSuccess: "Add new successfully",
        addFail: "Add new failed",
        updateSuccess: "Successfully fixed",
        updateFail: "Fix failed",
      },
      //placeholders in input cells
      placeholderInput: {
        searchInput: "Search",
        note: "Enter notes",
        allDepartment: "All departments",
        noData: "No data yet",
      },

      //Names of functions in content
      contentFunctionName: {
        status: "Status",
      },
      //Status item options when searching
      statusSelection: [
        {
          value: 0,
          name: "All",
        },
        {
          value: 1,
          name: "Waiting",
        },
        {
          value: 2,
          name: "Approved",
        },
        {
          value: 3,
          name: "Deny",
        },
      ],
      //State item options when editing form
      statusSelectionForm: [
        {
          value: 1,
          name: "Waiting for approval",
        },
        {
          value: 2,
          name: "Approved",
        },
        {
          value: 3,
          name: "Deny",
        },
      ],
      //Options for overtime items
      overTimeSelection: [
        {
          value: 0,
          name: "Before shift",
        },
        {
          value: 1,
          name: "After shift",
        },
        {
          value: 2,
          name: "Mid-shift break",
        },
        {
          value: 3,
          name: "Day off",
        },
      ],
      //Options for overtime shift items
      caseSelection: [
        {
          value: 0,
          name: "Ca 1",
        },
        {
          value: 1,
          name: "Ca 2",
        },
        {
          value: 2,
          name: "Night shift",
        },
        {
          value: 3,
          name: "Administrative shift",
        },
      ],
      // Title icon
      titleIcon: {
        notification: "Notification",
        help: "Help",
        other: "More Features",
        knowledge: "Useful knowledge",
        export: "Export",
        filter: "Filter",
        refresh: "Reload",
        setting: "Customize columns",
        next: "Next page",
        previos: "Previous page",
        close: "Close",
        back: "Back",
      },
      //Text to display in paging
      pagingText: {
        amount: "Total records: ",
        from: "From",
        to: "to",
        record: "record",
        text: "Press ESC to",
        cancel: "Cancel",
        title: "Notes",
        all: "All",
        history: "Activity Log",
      },
      //Names of columns in the table of EmployeeList page
      tableTitle: [
        {
          dataField: "EmployeeCode",
          caption: "Employee code",
          dataType: "string",
          alignment: "left",
          width: "150",
          isDisplay: true,
          // fixed: true,
          // fixedPosition:"left"
        },
        {
          dataField: "FullName",
          caption: "Applicant",
          dataType: "string",
          alignment: "left",
          width: "220",
          isDisplay: true,
          // fixed: true,
          // fixedPosition:"left",
          cellTemplate: "cell-avatar-name",
        },
        {
          dataField: "PositionName",
          caption: "Job position",
          dataType: "string",
          alignment: "left",
          width: "150",
          isDisplay: true,
        },
        {
          dataField: "DepartmentName",
          caption: "Working unit",
          dataType: "string",
          alignment: "left",
          width: "150",
          isDisplay: true,
        },
        {
          dataField: "ApplyDate",
          caption: "Application date",
          dataType: "date",
          format: "dd/MM/yyyy HH:mm",
          alignment: "center",
          width: "150",
          isDisplay: true,
        },
        {
          dataField: "FromDate",
          caption: "Make more words",
          dataType: "date",
          format: "dd/MM/yyyy HH:mm",
          alignment: "center",
          width: "150",
          isDisplay: true,
        },
        {
          dataField: "ToDate",
          caption: "Do more",
          dataType: "date",
          format: "dd/MM/yyyy HH:mm",
          alignment: "center",
          width: "150",
          isDisplay: true,
        },
        {
          dataField: "BreakTimeFrom",
          caption: "A break between lyrics",
          dataType: "date",
          format: "dd/MM/yyyy HH:mm",
          alignment: "center",
          width: "150",
          isDisplay: true,
        },
        {
          dataField: "BreakTimeTo",
          caption: "A break in the next shift",
          dataType: "date",
          format: "dd/MM/yyyy HH:mm",
          alignment: "center",
          width: "150",
          isDisplay: true,
        },
        {
          dataField: "OverTimeInWorkingShift",
          caption: "Time to work overtime",
          dataType: "number",
          alignment: "left",
          width: "200",
          isDisplay: true,
        },
        {
          dataField: "WorkingShift",
          caption: "Case applicable",
          dataType: "number",
          alignment: "left",
          width: "126",
          isDisplay: true,
        },
        {
          dataField: "Reason",
          caption: "Reason for overtime",
          dataType: "string",
          alignment: "left",
          width: "150",
          isDisplay: true,
        },
        {
          dataField: "ApprovalName",
          caption: "Browser",
          dataType: "string",
          alignment: "left",
          width: "220",
          isDisplay: true,
        },
        {
          dataField: "RelationShipNames",
          caption: "Relevant person",
          dataType: "string",
          alignment: "left",
          width: "220",
          isDisplay: true,
        },
        {
          dataField: "Description",
          caption: "Notes",
          dataType: "string",
          alignment: "left",
          width: "220",
          isDisplay: true,
        },
        {
          dataField: "StatusName",
          caption: "Status",
          dataType: "number",
          alignment: "left",
          width: "220",
          isDisplay: true,
          cellTemplate: "cell-status",
        },
        {
          caption: "",
          cellTemplate: "cell-template",
          alignment: "center",
          width: "10",
          allowSelection: false,
          fixed: true,
          fixedPosition:"left",
          isDisplay: true,
          class: "function-row",
        },
      ],
      //Status
      status: {
        wait: "Waiting for browsing",
        accept: "Approved",
        deny: "Deny",
      },
      //Names of the columns in the table of EmployeeSelectionTable
      employeeSelectionTableTitle: [
        {
          dataField: "EmployeeCode",
          caption: "Employee code",
          dataType: "string",
          alignment: "left",
          // width : "120"
        },
        {
          dataField: "FullName",
          caption: "Employee name",
          dataType: "string",
          alignment: "left",
          cellTemplate: "cell-avatar-name",
          // width : "174"
        },
        {
          dataField: "DepartmentName",
          caption: "Working unit",
          dataType: "string",
          alignment: "left",
          // width : "310"
        },
        {
          dataField: "PositionName",
          caption: "Job position",
          dataType: "string",
          alignment: "left",
          // width : "206"
        },
      ],
      //Fields in employee details table
      detailField: {
        submitBy: "Applicant",
        department: "Working unit",
        submitDate: "Application Date",
        overTimeFrom: "Make more words",
        restTimeFrom: "A break between lyrics",
        restTimeTo: "A break in the next shift",
        overTimeTo: "Do overtime to",
        overTimeCase: "Time to work overtime",
        applicableCase: "Applicable Case",
        overTimeReason: "Reason for overtime",
        confirmBy: "Browser",
        relatedPeople: "Related Person",
        status: "Status",
      },

      //validate error messages
      validateMessage: {
        required: "cannot be blank.",
        min: "must be bigger",
      },

      //avarta text
      avatar:{
        changePass: "Change Password",
        accountSetting: "Account Settings",
        securitySetting:"Security Settings",
        getPoint:"Referral - Earn Points",
        language:"Language:",
        logout:"Logout"
      },

      languageSwitch: "English",
    },
  },
};
