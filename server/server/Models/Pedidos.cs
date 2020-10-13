using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class Pedidos
    {
        public string Listado { get; set; }
        public string Comprobante { get; set; }
        public string Direccion { get; set; }
        public string Provincia { get; set; }
        public string Canton { get; set; }
        public string Distrito { get; set; }
        public string Cedula { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Telefono { get; set; }

        public Pedidos()
        {

        }

        public Pedidos(string pedProvincia, string pedCanton, string pedDistrito, string pedListado, string pedComprobante, string pedDireccion, string pedCedula, string pedNomnbre, string pedApellido, string pedTelefono)
        {
            Listado = pedListado;
            Comprobante = pedComprobante;
            Direccion = pedDireccion;
            Provincia = pedProvincia;
            Canton = pedCanton;
            Distrito = pedDistrito;
            Cedula = pedCedula;
            Nombre = pedNomnbre;
            Apellido = pedApellido;
            Telefono = pedTelefono;
        }
    }
}
