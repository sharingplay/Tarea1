using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class Productores
    {
        public string Cedula { get; set; }
        public string Nombre { get; set; }
        public string Apellidos { get; set; }
        public string Direccion { get; set; }
        public string Provincia { get; set; }
        public string Canton { get; set; }
        public string Distrito { get; set; }

        public string Nacimiento { get; set; }
        public string Telefono { get; set; }
        public string SINPE { get; set; }
        public string Pedidos { get; set; }
        public string Usuario { get; set; }
        public string Password { get; set; }
        public string Venta { get; set; }

        public Productores()
        {
        }

        public Productores(string productProvincia, string productCanton, string productDistrito, string productVenta, string productCedula, string productNombre, string productApellido, string productDireccion, string productNacimiento, string productTelefono, string productSINPE, string productPedidos, string productUsuario, string productPassword)
        {
            Venta = productVenta;
            Cedula = productCedula;
            Nombre = productNombre;
            Apellidos = productApellido;
            Direccion = productDireccion;
            Provincia = productProvincia;
            Canton = productCanton;
            Distrito = productDistrito;
            Nacimiento = productNacimiento;
            Telefono = productTelefono;
            SINPE = productSINPE;
            Pedidos = productPedidos;
            Usuario = productUsuario;
            Password = productPassword;
        }
    }
}
