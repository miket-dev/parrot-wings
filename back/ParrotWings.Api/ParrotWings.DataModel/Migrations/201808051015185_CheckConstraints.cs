namespace ParrotWings.DataModel.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CheckConstraints : DbMigration
    {
        public override void Up()
        {
            Sql("ALTER TABLE [dbo].[Template] ADD CONSTRAINT [CHK_Owner_UserTo] CHECK (OwnerId != UserToId)");
            Sql("ALTER TABLE [dbo].[Transaction] ADD CONSTRAINT [CHK_UserFrom_UserTo] CHECK (UserFromId != UserToId)");
        }

        public override void Down()
        {
            Sql("ALTER TABLE [dbo].[Transaction] DROP CONSTRAINT CHK_UserFrom_UserTo");
            Sql("ALTER TABLE [dbo].[Template] DROP CONSTRAINT CHK_Owner_UserTo");
        }
    }
}
