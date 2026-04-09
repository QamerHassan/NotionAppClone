using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NotionApp.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddTeamspaceIdToPages : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TeamspaceId",
                table: "Pages",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Pages_TeamspaceId",
                table: "Pages",
                column: "TeamspaceId");

            migrationBuilder.AddForeignKey(
                name: "FK_Pages_Teamspaces_TeamspaceId",
                table: "Pages",
                column: "TeamspaceId",
                principalTable: "Teamspaces",
                principalColumn: "Id",
                onDelete: ReferentialAction.SetNull);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pages_Teamspaces_TeamspaceId",
                table: "Pages");

            migrationBuilder.DropIndex(
                name: "IX_Pages_TeamspaceId",
                table: "Pages");

            migrationBuilder.DropColumn(
                name: "TeamspaceId",
                table: "Pages");
        }
    }
}
