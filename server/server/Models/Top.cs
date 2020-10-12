using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class Top
    {
        public string Total { get; set; }
        public string Ganancias { get; set; }
        public string Vendidos { get; set; }
        public string Clientes { get; set; }

        public Top()
        {

        }

        public Top(string topTotal, string topGanancia, string topVendidos, string topClientes)
        {
            Total = topTotal;
            Ganancias = topGanancia;
            Vendidos = topVendidos;
            Clientes = topClientes;
        }
    }
}
