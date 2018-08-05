namespace ParrotWings.DataModel.Migrations
{
    using ParrotWings.DataModel.User.Entity;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<ParrotWingsDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(ParrotWingsDbContext context)
        {
            if (!context.Users.Any())
            {
                context.Users.Add(new UserEntity(0, "admin@parrot.wings", "qq", "Admin"));
            }
        }
    }
}
