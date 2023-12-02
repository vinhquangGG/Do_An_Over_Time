using Demo.WebApplication.BL.AccountBL;
using Demo.WebApplication.BL.BaseBL;
using Demo.WebApplication.Common.Entities;
using Demo.WebApplication.DL.BaseDL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Demo.WebApplication.BL.AccountBL
{
    public class AccountBL : BaseBL<Account>, IAccountBL
    {
        public AccountBL(IBaseDL<Account> baseDL) : base(baseDL)
        {
        }
    }
}
