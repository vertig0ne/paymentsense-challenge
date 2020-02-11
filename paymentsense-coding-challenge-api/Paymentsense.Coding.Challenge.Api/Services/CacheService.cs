using System;
using Microsoft.Extensions.Caching.Memory;

namespace Paymentsense.Coding.Challenge.Api.Services
{
    public class CacheService<TItem> : ICacheService<TItem>
    {
        private IMemoryCache _cache = new MemoryCache(new MemoryCacheOptions());

        public TItem GetOrCreate(object key, Func<TItem> createItem)
        {
            TItem cacheEntry;
            if (!_cache.TryGetValue(key, out cacheEntry))
            {
                cacheEntry = createItem();

                var cacheEntryOptions = new MemoryCacheEntryOptions()
                .SetSize(1)
                .SetPriority(CacheItemPriority.NeverRemove);

                _cache.Set(key, cacheEntry, cacheEntryOptions);
            }
            return cacheEntry;
        }
    }
}