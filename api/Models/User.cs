using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Authorization.Infrastructure;
using Microsoft.AspNetCore.Mvc;

namespace api.Models;

public class User
{
    public long Id { get; set; }

    [Required]
    [StringLength(50, MinimumLength = 2)]
    [Display(Name = "First name")]
    [FromForm(Name = "firstName")]
    public string FirstName { get; set; } = "";

    [Required]
    [StringLength(50, MinimumLength = 2)]
    [Display(Name = "Last name")]
    [FromForm(Name = "lastName")]
    public string LastName { get; set; } = "";

    [StringLength(50)]
    [Display(Name = "Artist name")]
    [FromForm(Name = "artistName")]
    public string? ArtistName { get; set; } = "";

    [Required]
    [EmailAddress]
    [FromForm(Name = "email")]
    public string Email { get; set; } = "";
}
