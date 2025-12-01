using System.Collections.Generic;
using System.Threading.Tasks;
using ticket_management_system.Models;

namespace ticket_management_system.Services
{
    public interface ITicketService
    {
        Task<IEnumerable<Ticket>> GetAllTicketsAsync();
        Task<Ticket> GetTicketByIdAsync(int id);
        Task<Ticket> CreateTicketAsync(Ticket ticket);
        Task<Ticket> UpdateTicketAsync(int id, Ticket ticket);
        Task<bool> DeleteTicketAsync(int id);
    }
}