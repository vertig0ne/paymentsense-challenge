using System;

namespace Paymentsense.Coding.Challenge.Api.Services
{
    public interface ICacheService<TItem>
    {
        TItem GetOrCreate(object key, Func<TItem> createItem);
    }
}