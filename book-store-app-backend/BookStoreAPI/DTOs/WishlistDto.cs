using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookStoreAPI.DTOs
{
    public class WishlistDto
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public Nullable<int> BookId { get; set; }
        public string BookTitle { get; set; }
        public Nullable<double> BookPrice { get; set; }
        public string BookImageUrl { get; set; }
        public string Author { get; set; }
    }
}