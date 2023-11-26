﻿using Demo.WebApplication.BL.DepartmentBL;
using Demo.WebApplication.BL.OverTimeBL;
using Demo.WebApplication.Common;
using Demo.WebApplication.Common.Entities;
using Demo.WebApplication.Common.Entities.DTO;
using Demo.WebApplication.Common.Enums;
using Microsoft.AspNetCore.Mvc;

namespace Demo.WebApplication.API.Controllers
{
    [Route("api/v1/[controller]")] //attribute: http://localhost:43154/api/[controller]
    [ApiController]
    public class OverTimesController : BasesController<OverTime>
    {
        #region Field

        private IOverTimeBL _overTimeBL;

        #endregion

        #region Constructor
        public OverTimesController(IOverTimeBL overTimeBL) : base(overTimeBL)
        {
            _overTimeBL = overTimeBL;
        }
        #endregion

        #region Method
        /// <summary>
        /// API Lấy thông tin chi tiết làm thêm
        /// </summary>
        /// <param name="id">ID làm thêm muốn lấy</param>
        /// <returns>Đối tượng làm thêm</returns>
        [HttpGet("{id}")]
        public IActionResult GetOverTimeById([FromRoute] Guid id)
        {
            try
            {
                var serviceResult = _overTimeBL.GetOverTimeById(id);

                if (serviceResult.IsSuccess == true)
                {
                    return StatusCode(200, serviceResult.Data);
                }
                else
                {
                    if (serviceResult.Data == Resource.ServiceResult_Fail)
                    {
                        return StatusCode(204, new ErrorResult
                        {
                            ErrorCode = ErrorCode.SqlReturnNull,
                            DevMsg = Resource.ServiceResult_Fail,
                            UserMsg = Resource.UserMsg_Exception,
                            TradeId = HttpContext.TraceIdentifier,
                        });
                    }
                    else
                    {
                        return StatusCode(500, new ErrorResult
                        {
                            ErrorCode = ErrorCode.SqlCatchException,
                            DevMsg = Resource.ServiceResult_Exception,
                            UserMsg = Resource.UserMsg_Exception,
                            TradeId = HttpContext.TraceIdentifier,
                        });
                    }
                }
            }
            catch (Exception ex)
            {

                Console.WriteLine(ex.Message);
                return StatusCode(500, new ErrorResult
                {
                    ErrorCode = ErrorCode.Exception,
                    DevMsg = Resource.DevMsg_Exception,
                    UserMsg = Resource.UserMsg_Exception,
                    TradeId = HttpContext.TraceIdentifier,
                });
            }

        }

        
        /// <summary>
        /// Phân trang bảng làm thêm
        /// </summary>
        /// <param name="keyword">Tên hoặc mã nhân viên</param>
        /// <param name="MISACode">mã phòng ban</param>
        /// <param name="status">trạng thái</param>
        /// <param name="pageSize">số bản ghi trên trang</param>
        /// <param name="offSet">bản ghi bắt đầu</param>
        /// <returns>mảng các bản ghi được lọc</returns>
        [HttpGet("Filter")]
        public IActionResult GetPaging(
            [FromQuery] String? keyword,
            [FromQuery] String? MISACode,
            [FromQuery] int? status,
            [FromQuery] int pageSize = 10,
            [FromQuery] int offSet = 0
            )
        {
            try
            {
                var pagingData = _overTimeBL.GetPaging(keyword, MISACode, status, pageSize, offSet);

                if (pagingData != null)
                {
                    return StatusCode(200, pagingData);
                }
                else
                {
                    return StatusCode(204, new ErrorResult
                    {
                        ErrorCode = ErrorCode.SqlReturnNull,
                        DevMsg = Resource.ServiceResult_Fail,
                        UserMsg = Resource.UserMsg_Exception,
                        TradeId = HttpContext.TraceIdentifier,
                    });
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return StatusCode(500, new ErrorResult
                {
                    ErrorCode = ErrorCode.Exception,
                    DevMsg = Resource.DevMsg_Exception,
                    UserMsg = Resource.UserMsg_Exception,
                    TradeId = HttpContext.TraceIdentifier,
                });
            }
        }

        /// <summary>
        /// Xoá nhiều bản ghi
        /// </summary>
        /// <param name="IDs"></param>
        /// <returns></returns>
        [HttpDelete("MultipleDelete")]
        public IActionResult MultipleDelete([FromQuery] MultipleDeleteParams IDs)
        {
            try
            {
                var serviceResult = _overTimeBL.MultipleDelete(IDs.listID);

                if (serviceResult.IsSuccess == true)
                {
                    return StatusCode(200, QueryResult.Success);
                }
                else
                {
                    if (serviceResult.Data == Resource.ServiceResult_Fail)
                    {
                        return StatusCode(204, new ErrorResult
                        {
                            ErrorCode = ErrorCode.SqlReturnNull,
                            DevMsg = Resource.ServiceResult_Fail,
                            UserMsg = Resource.UserMsg_Exception,
                            TradeId = HttpContext.TraceIdentifier,
                        });
                    }
                    else
                    {
                        return StatusCode(500, new ErrorResult
                        {
                            ErrorCode = ErrorCode.SqlCatchException,
                            DevMsg = Resource.ServiceResult_Exception,
                            UserMsg = Resource.UserMsg_Exception,
                            TradeId = HttpContext.TraceIdentifier,
                        });
                    }
                }

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, new ErrorResult
                {
                    ErrorCode = ErrorCode.Exception,
                    DevMsg = Resource.DevMsg_Exception,
                    UserMsg = Resource.UserMsg_Exception,
                    TradeId = HttpContext.TraceIdentifier,
                });
            }
        }

        /// <summary>
        /// Chuyển trạng thái các bản ghi đã chọn
        /// </summary>
        /// <param name="IDs"></param>
        /// <returns></returns>
        [HttpPut("ChangeStatus")]
        public IActionResult ChangeStatus([FromBody] ChangeStatusParams IDs)
        {
            try
            {
                var serviceResult = _overTimeBL.ChangeStatus(IDs.listID, IDs.status);

                if (serviceResult.IsSuccess == true)
                {
                    return StatusCode(200, QueryResult.Success);
                }
                else
                {
                    if (serviceResult.Data == Resource.ServiceResult_Fail)
                    {
                        return StatusCode(204, new ErrorResult
                        {
                            ErrorCode = ErrorCode.SqlReturnNull,
                            DevMsg = Resource.ServiceResult_Fail,
                            UserMsg = Resource.UserMsg_Exception,
                            TradeId = HttpContext.TraceIdentifier,
                        });
                    }
                    else
                    {
                        return StatusCode(500, new ErrorResult
                        {
                            ErrorCode = ErrorCode.SqlCatchException,
                            DevMsg = Resource.ServiceResult_Exception,
                            UserMsg = Resource.UserMsg_Exception,
                            TradeId = HttpContext.TraceIdentifier,
                        });
                    }
                }

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return StatusCode(500, new ErrorResult
                {
                    ErrorCode = ErrorCode.Exception,
                    DevMsg = Resource.DevMsg_Exception,
                    UserMsg = Resource.UserMsg_Exception,
                    TradeId = HttpContext.TraceIdentifier,
                });
            }
        }

        /// <summary>
        /// Xuất khẩu toàn bộ dữ liệu làm thêm
        /// </summary>
        /// <param name="param">truy vấn lọc</param>
        /// <returns>Danh sách bản ghi thoả mãn</returns>
        [HttpPost("Export")]
        public IActionResult ExcelExport([FromBody] ExportBody body)
        {
            var stream = _overTimeBL.ExcelExport(body);
            string excelName = $"UserList-{DateTime.Now.ToString("yyyyMMddHHmmssfff")}.xlsx";

            return File(stream, "application/vnd.ms-excel", excelName);
        }

        /// <summary>
        /// Xuất khẩu dữ liệu đơn làm thêm được chọn
        /// </summary>
        /// <param name="param">danh sách id các đơn được chọn</param>
        /// <returns>Danh sách bản ghi thoả mãn</returns>
        [HttpPost("ExportSelected")]
        public IActionResult ExcelExportSelected([FromBody] ExportDataSelectedParams IDs)
        {
            var stream = _overTimeBL.ExcelExportSelected(IDs.listID, IDs.header);
            string excelName = $"UserList-{DateTime.Now.ToString("yyyyMMddHHmmssfff")}.xlsx";

            return File(stream, "application/vnd.ms-excel", excelName);
        }
        #endregion
    }
}
