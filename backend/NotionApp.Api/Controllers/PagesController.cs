using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NotionApp.Api.Data;
using NotionApp.Api.Models;

namespace NotionApp.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PagesController : ControllerBase
{
    private readonly AppDbContext _context;

    public PagesController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Page>>> GetPages([FromQuery] int? teamspaceId = null)
    {
        var query = _context.Pages.Where(p => !p.IsArchived);
        
        if (teamspaceId.HasValue)
        {
            query = query.Where(p => p.TeamspaceId == teamspaceId.Value);
        }
        
        return await query
            .OrderByDescending(p => p.UpdatedAt)
            .ToListAsync();
    }


    [HttpGet("{id}")]
    public async Task<ActionResult<Page>> GetPage(int id)
    {
        var page = await _context.Pages
            .Include(p => p.Blocks)
            .Include(p => p.SubPages)
            .FirstOrDefaultAsync(p => p.Id == id);

        if (page == null)
        {
            return NotFound();
        }

        return page;
    }

    [HttpPost]
    public async Task<ActionResult<Page>> CreatePage(Page page)
    {
        _context.Pages.Add(page);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetPage), new { id = page.Id }, page);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdatePage(int id, Page page)
    {
        if (id != page.Id)
        {
            return BadRequest();
        }

        _context.Entry(page).State = EntityState.Modified;
        page.UpdatedAt = DateTime.UtcNow;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!PageExists(id))
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
    public async Task<IActionResult> DeletePage(int id)
    {
        var page = await _context.Pages.FindAsync(id);
        if (page == null)
        {
            return NotFound();
        }

        page.IsArchived = true;
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool PageExists(int id)
    {
        return _context.Pages.Any(e => e.Id == id);
    }

    [HttpGet("{id}/breadcrumbs")]
    public async Task<ActionResult<IEnumerable<Page>>> GetBreadcrumbs(int id)
    {
        var breadcrumbs = new List<Page>();
        var currentPage = await _context.Pages.FindAsync(id);

        if (currentPage == null)
        {
            return NotFound();
        }

        while (currentPage != null)
        {
            // We only need basic info, but full entity is fine.
            // Avoid circular references in JSON serialization if not handled, but usually fine with standard settings or DTOs.
            // Better to return simple object to be safe from cycles if they exist in serialization.
            // But let's stick to returning reference.
            // Actually, `ParentPage` navigation property might cause issues in loop if lazily loaded or serialized. 
            // Ideally we should select new anonymous object or DTO. 
            // But let's return the Page entity for now, assuming JSON options handle cycles (which they often don't by default in .NET Core).
            // To be safe and efficient, I'll project to a new simplified list.
            
            breadcrumbs.Add(currentPage);
            
            if (currentPage.ParentPageId.HasValue)
            {
                currentPage = await _context.Pages.FindAsync(currentPage.ParentPageId.Value);
            }
            else
            {
                currentPage = null;
            }
        }

        breadcrumbs.Reverse();
        return Ok(breadcrumbs);
    }
}
