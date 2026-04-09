using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NotionApp.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddContentToPage : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Content",
                table: "Pages",
                type: "text",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Content",
                table: "Pages");
        }
    }
}
