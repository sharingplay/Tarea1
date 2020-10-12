using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class Pedidos
    {
        public List<List<string>> Listado { get; set; }
        public string Comprobante { get; set; }
        public string Direccion { get; set; }
        public string Cedula { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Telefono { get; set; }

        public Pedidos()
        {

        }

        public Pedidos(List<List<string>> pedListado, string pedComprobante, string pedDireccion, string pedCedula, string pedNomnbre, string pedApellido, string pedTelefono)
        {
            Listado = pedListado;
            Comprobante = pedComprobante;
            Direccion = pedDireccion;
            Cedula = pedCedula;
            Nombre = pedNomnbre;
            Apellido = pedApellido;
            Telefono = pedTelefono;
        }
    }
}
