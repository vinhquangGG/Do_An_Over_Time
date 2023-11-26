using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Demo.WebApplication.Common.Attibutes.Attributes;

namespace Demo.WebApplication.Common.Entities
{
    public class Position
    {
        [Id]
        public Guid PositionId { get; set; }
        public string PositionCode { get; set; }
        public string PositionName { get; set; }
        /// <summary>
        /// Ngày tạo
        /// </summary>
        public DateTime CreatedDate { get; set; }

        /// <summary>
        /// Người tạo
        /// </summary>
        public String CreatedBy { get; set; }

        /// <summary>
        /// Ngày chỉnh sửa
        /// </summary>
        public DateTime ModifiedDate { get; set; }

        /// <summary>
        /// Người chỉnh sửa
        /// </summary>
        public String ModifiedBy { get; set; }
    }
}
