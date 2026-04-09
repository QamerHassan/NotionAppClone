using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NotionApp.Api.Data;
using NotionApp.Api.Models;
using System.Security.Claims;

namespace NotionApp.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TeamspacesController : ControllerBase
{
    private readonly AppDbContext _context;

    public TeamspacesController(AppDbContext context)
    {
        _context = context;
    }

    // GET: api/teamspaces
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Teamspace>>> GetTeamspaces()
    {
        // For now, return all teamspaces
        // TODO: Filter by current user when authentication is implemented
        return await _context.Teamspaces
            .OrderBy(t => t.CreatedAt)
            .ToListAsync();
    }

    // GET: api/teamspaces/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Teamspace>> GetTeamspace(int id)
    {
        var teamspace = await _context.Teamspaces.FindAsync(id);

        if (teamspace == null)
        {
            return NotFound();
        }

        return teamspace;
    }

    // POST: api/teamspaces
    [HttpPost]
    public async Task<ActionResult<Teamspace>> CreateTeamspace(Teamspace teamspace)
    {
        // Set default UserId to 1 for now
        // TODO: Get from authenticated user when auth is implemented
        if (teamspace.UserId == 0)
        {
            teamspace.UserId = 1;
        }

        teamspace.CreatedAt = DateTime.UtcNow;
        teamspace.UpdatedAt = DateTime.UtcNow;

        _context.Teamspaces.Add(teamspace);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetTeamspace), new { id = teamspace.Id }, teamspace);
    }

    // PUT: api/teamspaces/5
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateTeamspace(int id, Teamspace teamspace)
    {
        if (id != teamspace.Id)
        {
            return BadRequest();
        }

        teamspace.UpdatedAt = DateTime.UtcNow;
        _context.Entry(teamspace).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!TeamspaceExists(id))
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

    // DELETE: api/teamspaces/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTeamspace(int id)
    {
        var teamspace = await _context.Teamspaces.FindAsync(id);
        if (teamspace == null)
        {
            return NotFound();
        }

        _context.Teamspaces.Remove(teamspace);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool TeamspaceExists(int id)
    {
        return _context.Teamspaces.Any(e => e.Id == id);
    }
}
