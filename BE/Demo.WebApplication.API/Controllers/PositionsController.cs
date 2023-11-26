using Demo.WebApplication.BL.BaseBL;
using Demo.WebApplication.Common.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Demo.WebApplication.API.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class PositionsController : BasesController<Position>
    {
        public PositionsController(IBaseBL<Position> baseBL) : base(baseBL)
        {
        }
    }
}
