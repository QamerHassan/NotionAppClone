namespace NotionApp.Api.Models;

public class Page
{
    public int Id { get; set; }
    public string Title { get; set; } = "Untitled";
    public string? Icon { get; set; }
    public string? Content { get; set; } // Temporary simple content storage
    public string? CoverImage { get; set; }
    public int WorkspaceId { get; set; }
    public Workspace Workspace { get; set; } = null!;
    public int? TeamspaceId { get; set; }
    public Teamspace? Teamspace { get; set; }
    public int? ParentPageId { get; set; }
    public Page? ParentPage { get; set; }
    public ICollection<Page> SubPages { get; set; } = new List<Page>();
    public ICollection<Block> Blocks { get; set; } = new List<Block>();
    public bool IsArchived { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
