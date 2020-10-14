using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json;

namespace server.Models
{
    public class Pedidos
    {
        public List<JsonElement> Listado { get; set; }
        public string Comprobante { get; set; }
        public string Direccion { get; set; }
        public string Provincia { get; set; }
        public string Canton { get; set; }
        public string Distrito { get; set; }
        public string Cedula { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Telefono { get; set; }
        public string productor { get; set; }

        public Pedidos()
        {

        }

        public Pedidos(string lisproductor, string pedProvincia, string pedCanton, string pedDistrito, List<JsonElement> pedListado, string pedComprobante, string pedDireccion, string pedCedula, string pedNomnbre, string pedApellido, string pedTelefono)
        {
            productor = lisproductor;
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
