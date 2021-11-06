using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace BookStoreAPI.Models
{
    public class ApplicationUser : IdentityUser     //s1 - create empty class and inherit from identityuser
    {

    }

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext() : base("DefaultConnection", throwIfV1Schema: false) //s2 - add connection string in webconfig  //s3 enable migrations and update database
        {

        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)    //s4 - add this function to rename all default tables to desired names
        {
            base.OnModelCreating(modelBuilder);
            //AspNetUsers -> User
            modelBuilder.Entity<ApplicationUser>().ToTable("User");
            //AspNetRoles -> Role
            modelBuilder.Entity<IdentityRole>().ToTable("Role");
            //AspNetUserRoles -> UserRole
            modelBuilder.Entity<IdentityUserRole>().ToTable("UserRole");
            //AspNetUserClaims -> UserClaim
            modelBuilder.Entity<IdentityUserClaim>().ToTable("UserClaim");
            //AspNetUserLogins -> UserLogin
            modelBuilder.Entity<IdentityUserLogin>().ToTable("UserLogin");
        }
    }
}