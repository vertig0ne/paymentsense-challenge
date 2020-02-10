using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.Json;
using Paymentsense.Coding.Challenge.Api.Models;

namespace Paymentsense.Coding.Challenge.Api.Services
{
    public class CountryService : ICountryService
    {
        public Country[] Countries;

        public CountryService()
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
                Console.WriteLine(ex);
                throw ex;
            }
        }

        public IEnumerable<Country> GetCountries()
        {
            return Countries;
        }
    }
}