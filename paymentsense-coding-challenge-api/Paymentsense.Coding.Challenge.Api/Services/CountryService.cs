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
        private ICacheService<Country[]> _cache = new CacheService<Country[]>();
        private Country[] _getCountriesFromSource()
        {
            try
            {
                HttpClient client = new HttpClient();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                HttpResponseMessage response = client.GetAsync("https://restcountries.eu/rest/v2/all").Result;

                response.EnsureSuccessStatusCode();
                string res = response.Content.ReadAsStringAsync().Result;
                client.Dispose();
                return JsonSerializer.Deserialize<List<Country>>(res).ToArray();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                throw ex;
            }
        }

        public IEnumerable<Country> GetCountries()
        {
            return _cache.GetOrCreate("Countries", () => this._getCountriesFromSource());
        }
    }
}