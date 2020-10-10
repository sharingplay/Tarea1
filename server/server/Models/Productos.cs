using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class Productos
    {
        public string Nombre { get; set; }
        public string Categoria { get; set; }
        public string Foto { get; set; }
        public string Precio { get; set; }
        public string Modo { get; set; }
        public string Disponibilidad { get; set; }
        public string Productor { get; set; }
        public string Total { get; set; }


        public Productos()
        {

        }

        public Productos(string proNombre, string proCategoria, string proFoto, string proPrecio, string proModo, string proDisponibilidad, string proProductor, string proTotal)
        {
            Nombre = proNombre;
            Categoria = proCategoria;
            Foto = proFoto;
            Precio = proPrecio;
            Modo = proModo;
            Disponibilidad = proDisponibilidad;
            Productor = proProductor;
            Total = proTotal;
        }
    }
}
