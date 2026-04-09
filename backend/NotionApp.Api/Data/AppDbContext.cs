using Microsoft.EntityFrameworkCore;
using NotionApp.Api.Models;

namespace NotionApp.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
    public DbSet<Workspace> Workspaces { get; set; }
    public DbSet<Page> Pages { get; set; }
    public DbSet<Block> Blocks { get; set; }
    public DbSet<Teamspace> Teamspaces { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Configure Page hierarchy
        modelBuilder.Entity<Page>()
            .HasOne(p => p.ParentPage)
            .WithMany(p => p.SubPages)
            .HasForeignKey(p => p.ParentPageId)
            .OnDelete(DeleteBehavior.Restrict);

        // Configure Page-Block relationship
        modelBuilder.Entity<Block>()
            .HasOne(b => b.Page)
            .WithMany(p => p.Blocks)
            .HasForeignKey(b => b.PageId)
            .OnDelete(DeleteBehavior.Cascade);

        // Configure Workspace-Page relationship
        modelBuilder.Entity<Page>()
            .HasOne(p => p.Workspace)
            .WithMany(w => w.Pages)
            .HasForeignKey(p => p.WorkspaceId)
            .OnDelete(DeleteBehavior.Cascade);

        // Configure User-Workspace relationship
        modelBuilder.Entity<Workspace>()
            .HasOne(w => w.Owner)
            .WithMany(u => u.Workspaces)
            .HasForeignKey(w => w.OwnerId)
            .OnDelete(DeleteBehavior.Cascade);

        // Configure User-Teamspace relationship
        modelBuilder.Entity<Teamspace>()
            .HasOne(t => t.User)
            .WithMany()
            .HasForeignKey(t => t.UserId)
            .OnDelete(DeleteBehavior.Cascade);

        // Configure Teamspace-Page relationship
        modelBuilder.Entity<Page>()
            .HasOne(p => p.Teamspace)
            .WithMany()
            .HasForeignKey(p => p.TeamspaceId)
            .OnDelete(DeleteBehavior.SetNull);

    }
}
