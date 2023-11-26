using Demo.WebApplication.BL.BaseBL;
using Demo.WebApplication.Common.Entities;
using Demo.WebApplication.DL.BaseDL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.WebApplication.BL
{
    public class PositionBL : BaseBL<Position>, IPositionBL
    {
        public PositionBL(IBaseDL<Position> baseDL) : base(baseDL)
        {
        }
    }
}
