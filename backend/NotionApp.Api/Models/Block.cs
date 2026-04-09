namespace NotionApp.Api.Models;

public enum BlockType
{
    Text,
    Heading1,
    Heading2,
    Heading3,
    BulletList,
    NumberedList,
    Todo,
    Image,
    Code,
    Divider,
    Page
}

public class Block
{
    public int Id { get; set; }
    public BlockType Type { get; set; } = BlockType.Text;
    public string Content { get; set; } = string.Empty;
    public string? Metadata { get; set; } 
    public int PageId { get; set; }
    public Page Page { get; set; } = null!;
    public int Order { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
