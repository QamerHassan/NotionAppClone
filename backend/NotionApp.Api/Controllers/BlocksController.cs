using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NotionApp.Api.Data;
using NotionApp.Api.Models;

namespace NotionApp.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BlocksController : ControllerBase
{
    private readonly AppDbContext _context;

    public BlocksController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet("page/{pageId}")]
    public async Task<ActionResult<IEnumerable<Block>>> GetBlocksByPage(int pageId)
    {
        return await _context.Blocks
            .Where(b => b.PageId == pageId)
            .OrderBy(b => b.Order)
            .ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<Block>> CreateBlock(Block block)
    {
        _context.Blocks.Add(block);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetBlocksByPage), new { pageId = block.PageId }, block);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateBlock(int id, Block block)
    {
        if (id != block.Id)
        {
            return BadRequest();
        }

        _context.Entry(block).State = EntityState.Modified;
        block.UpdatedAt = DateTime.UtcNow;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!BlockExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteBlock(int id)
    {
        var block = await _context.Blocks.FindAsync(id);
        if (block == null)
        {
            return NotFound();
        }

        _context.Blocks.Remove(block);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpPost("batch")]
    public async Task<IActionResult> BatchUpdateBlocks(IEnumerable<BatchUpdateBlockDto> updates)
    {
        foreach (var update in updates)
        {
            var block = await _context.Blocks.FindAsync(update.Id);
            if (block != null)
            {
                if (update.Order.HasValue) block.Order = update.Order.Value;
                if (update.Type.HasValue) block.Type = update.Type.Value;
                if (update.Content != null) block.Content = update.Content;
                if (update.Metadata != null) block.Metadata = update.Metadata;
                block.UpdatedAt = DateTime.UtcNow;
            }
        }
        await _context.SaveChangesAsync();
        return NoContent();
    }

    private bool BlockExists(int id)
    {
        return _context.Blocks.Any(e => e.Id == id);
    }
}

public class BatchUpdateBlockDto
{
    public int Id { get; set; }
    public int? Order { get; set; }
    public BlockType? Type { get; set; }
    public string? Content { get; set; }
    public string? Metadata { get; set; }
}
