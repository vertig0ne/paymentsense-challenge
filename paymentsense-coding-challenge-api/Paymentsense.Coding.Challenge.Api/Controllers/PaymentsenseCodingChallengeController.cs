using System;
using Microsoft.AspNetCore.Mvc;
using Paymentsense.Coding.Challenge.Api.Services;

namespace Paymentsense.Coding.Challenge.Api.Controllers
{    
    [ApiController]
    [Route("countries")]
    public class PaymentsenseCodingChallengeController : ControllerBase
    {
        public PaymentsenseCodingChallengeController()
        {
            _countryService = new CountryService();
        }

        private ICountryService _countryService;

        [HttpGet]
        public ActionResult<string> Get()
        {
            return Ok(_countryService.GetCountries());
        }
    }
}
