using api.Data;
using Microsoft.EntityFrameworkCore;

namespace api.Models;

public static class SeedData
{
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using (var context = new UserContext(
            serviceProvider.GetRequiredService<
                DbContextOptions<UserContext>>()))
        {
            // Look for any users
            if (context.User.Any())
            {
                return;
            }

            context.User.AddRange(
                new User
                {
                    FirstName = "Gordon Matthew Thomas",
                    LastName = "Sumner",
                    ArtistName = "Sting",
                    Email = "sting@outlook.com"
                },
                new User
                {
                    FirstName = "Saul",
                    LastName = "Hudson",
                    ArtistName = "Slash",
                    Email = "slash@outlook.com"
                },
                new User
                {
                    FirstName = "David Eric",
                    LastName = "Grohl",
                    ArtistName = "Dave Grohl",
                    Email = "davegrohl@outlook.com"
                },
                new User
                {
                    FirstName = "Joshua Michael",
                    LastName = "Homme",
                    ArtistName = "Josh Homme",
                    Email = "joshhomme@outlook.com"
                }
            );
            context.SaveChanges();
        }
    }
}
