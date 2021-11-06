using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BookStoreAPI.DTOs
{
    public class CategoryDto
    {
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public Nullable<bool> CategoryStatus { get; set; }
    }


    //public class AddCategory
    //{
    //    public int CategoryId { get; set; }
    //    public string CategoryName { get; set; }
    //    public int MyProperty { get; set; }
    //}
}