using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using Paymentsense.Coding.Challenge.Api.Models;

namespace Paymentsense.Coding.Challenge.Api.Controllers
{
    [ApiController]
    [Route("controller")]
    public class PaymentsenseCodingChallengeController : ControllerBase
    {

        public PaymentsenseCodingChallengeController()
        {
            try
            {
                HttpClient client = new HttpClient();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response = client.GetAsync("https://restcountries.eu/rest/v2/all").Result;

                response.EnsureSuccessStatusCode();
                string res = response.Content.ReadAsStringAsync().Result;
                Countries = JsonSerializer.Deserialize<List<Country>>(res).ToArray();
                client.Dispose();
            }
            catch (Exception ex)
            {
                Countries = new Country[0];
                Console.WriteLine(ex);
            }
        }

        public Country[] Countries;

        [HttpGet]
        public ActionResult<string> Get()
        {
            if (Countries.Length == 0) return Ok("No Countries");
            else return Ok(Countries);
        }
    }
}
