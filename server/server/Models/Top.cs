using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class Top
    {
        public List<string> Total { get; set; }
        public List<string> Ganancias { get; set; }
        public List<object> Vendidos { get; set; }
        public List<string> Clientes { get; set; }

        public Top()
        {

        }

        public Top(List<string> topTotal, List<string> topGanancia, List<object> topVendidos, List<string> topClientes)
        {
            Total = topTotal;
            Ganancias = topGanancia;
            Vendidos = topVendidos;
            Clientes = topClientes;
        }
    }
}
