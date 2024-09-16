using eCommerce.Application.System.Roles;
using eCommerce.Data.EF;
using eCommerce.Data.Entities;
using eCommerce.ViewModels.System.Roles;
using eCommerce.ViewModels.Utilities.Slides;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eCommerce.Application.Utilities.Slides
{
    public class SlideService : ISlideService
    {
        private readonly ECommerceDbContext _context;

        public SlideService(ECommerceDbContext context)
        {
            _context = context;
        }

        public async Task<List<SlideVm>> GetAll()
        {
            var slides = await _context.Slides.OrderBy(x => x.SortOrder)
                .Select(x => new SlideVm()
                {
                    Id = x.Id,
                    Name = x.Name,
                    Description = x.Description,
                    Url = x.Url,
                    Image = x.Image
                }).ToListAsync();

            return slides;
        }
    }
}