//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace BookStoreAPI.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class wishlist
    {
        public int id { get; set; }
        public Nullable<int> booksid { get; set; }
        public string userid { get; set; }
    
        public virtual book book { get; set; }
        public virtual User User { get; set; }
    }
}
