using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Authorization.Infrastructure;

namespace api.Models;

public class User
{
    public long Id { get; set; }

    [Required]
    [StringLength(50, MinimumLength = 2)]
    [Display(Name = "First name")]
    public string FirstName { get; set; } = "";

    [Required]
    [StringLength(50, MinimumLength = 2)]
    [Display(Name = "Last name")]
    public string LastName { get; set; } = "";

    [StringLength(50)]
    [Display(Name = "Artist name")]
    public string ArtistName { get; set; } = "";

    [Required]
    [EmailAddress]
    public string Email { get; set; } = "";
}
