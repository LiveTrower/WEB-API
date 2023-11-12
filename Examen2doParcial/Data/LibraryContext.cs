using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Examen2doParcial.Models;

namespace Examen2doParcial.Data
{
    public class LibraryContext : DbContext
    {
        public LibraryContext (DbContextOptions<LibraryContext> options)
            : base(options)
        {
        }

        public DbSet<Examen2doParcial.Models.Books> Books { get; set; } = default!;

        public DbSet<Examen2doParcial.Models.Author> Author { get; set; } = default!;
    }
}
