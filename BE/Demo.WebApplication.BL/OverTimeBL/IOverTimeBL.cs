using Demo.WebApplication.BL.BaseBL;
using Demo.WebApplication.Common.Entities;
using Demo.WebApplication.Common.Entities.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.WebApplication.BL.OverTimeBL
{
    public interface IOverTimeBL : IBaseBL<OverTime>
    {
        /// <summary>
        /// Lấy thông tin làm thêm theo id
        /// </summary>
        /// <param name="recordId">id làm thêm muốn lấy thông tin</param>
        /// <returns>thông tin làm thêm</returns>
        public ServiceResult GetOverTimeById(Guid recordId);

        /// <summary>
        /// Phân trang bảng làm thêm
        /// </summary>
        /// <param name="keyword">Tên hoặc mã nhân viên</param>
        /// <param name="MISACode">mã phòng ban</param>
        /// <param name="status">trạng thái</param>
        /// <param name="pageSize">số bản ghi trên trang</param>
        /// <param name="offSet">bản ghi bắt đầu</param>
        /// <returns>mảng các bản ghi được lọc</returns>
        public OverTimeFilterResult GetPaging(
            String? keyword,
            String? MISACode,
            int? status,
            int pageSize = 10,
            int offSet = 0,
            string employeeID = ""
            );

        /// <summary>
        /// Xoá nhiều bản ghi
        /// </summary>
        /// <param name="IDs"></param>
        /// <returns></returns>
        public ServiceResult MultipleDelete(String IDs);

        /// <summary>
        /// Chuyển trạng thái các bản ghi đã chọn
        /// </summary>
        /// <param name="IDs"></param>
        /// <returns></returns>
        public ServiceResult ChangeStatus(String IDs, int status);

        /// <summary>
        /// Xuất khẩu toàn bộ dữ liệu làm thêm
        /// </summary>
        /// <param name="param">truy vấn lọc</param>
        /// <returns>Danh sách bản ghi thoả mãn</returns>
        public MemoryStream ExcelExport(ExportBody body);

        /// <summary>
        /// Xuất khẩu dữ liệu đơn làm thêm được chọn
        /// </summary>
        /// <param name="param">danh sách id các đơn được chọn</param>
        /// <returns>Danh sách bản ghi thoả mãn</returns>
        public MemoryStream ExcelExportSelected(String IDs, List<HeaderType> header);
    }
}
