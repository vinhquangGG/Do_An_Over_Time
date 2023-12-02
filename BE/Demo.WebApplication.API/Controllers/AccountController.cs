using Demo.WebApplication.BL.BaseBL;
using Demo.WebApplication.Common.Entities;
using Microsoft.AspNetCore.Mvc;

namespace Demo.WebApplication.API.Controllers
{
    public class AccountsController : BasesController<Account>
    {
        public AccountsController(IBaseBL<Account> baseBL) : base(baseBL)
        {
        }
    }
}
