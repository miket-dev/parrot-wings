namespace ParrotWings.DataModel.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.User",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    Email = c.String(maxLength:254),
                    Password = c.String(),
                    Name = c.String(),
                })
                .PrimaryKey(t => t.Id)
                .Index(x => x.Email, unique: true);

            CreateTable(
                "dbo.Template",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        OwnerId = c.Int(nullable: false),
                        UserToId = c.Int(nullable: false),
                        Amount = c.Decimal(nullable: false, precision: 18, scale: 2),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.User", t => t.OwnerId, cascadeDelete: true)
                .ForeignKey("dbo.User", t => t.UserToId)
                .Index(t => t.OwnerId)
                .Index(t => t.UserToId);
            
            CreateTable(
                "dbo.Transaction",
                c => new
                    {
                        Id = c.Long(nullable: false, identity: true),
                        Amount = c.Decimal(nullable: false, precision: 18, scale: 2),
                        UserFromId = c.Int(nullable: false),
                        UserToId = c.Int(nullable: false),
                        Date = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.User", t => t.UserFromId, cascadeDelete: true)
                .ForeignKey("dbo.User", t => t.UserToId)
                .Index(t => t.UserFromId)
                .Index(t => t.UserToId);
        }

        public override void Down()
        {
            DropForeignKey("dbo.Transaction", "UserToId", "dbo.User");
            DropForeignKey("dbo.Transaction", "UserFromId", "dbo.User");
            DropForeignKey("dbo.Template", "UserToId", "dbo.User");
            DropForeignKey("dbo.Template", "OwnerId", "dbo.User");
            DropIndex("dbo.User", new[] { "Email" });
            DropIndex("dbo.Transaction", new[] { "UserToId" });
            DropIndex("dbo.Transaction", new[] { "UserFromId" });
            DropIndex("dbo.Template", new[] { "UserToId" });
            DropIndex("dbo.Template", new[] { "OwnerId" });
            DropTable("dbo.Transaction");
            DropTable("dbo.Template");
            DropTable("dbo.User");
        }
    }
}
