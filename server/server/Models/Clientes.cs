using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class Clientes
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
        public string Pedidos { get; set; }
        public string Usuario { get; set; }
        public string Password { get; set; }
        public string Carrito { get; set; }

        public Clientes()
        {
        }

        public Clientes(string clientProvincia, string clientCanton, string clientDistrito, string clientCedula, string clientNombre, string clientApellido, string clientDireccion, string clientNacimiento, string clientTelefono, string clientCarrito, string clientPedidos, string clientUsuario, string clientPassword)
        {
            Cedula = clientCedula;
            Nombre = clientNombre;
            Apellidos = clientApellido;
            Direccion = clientDireccion;
            Provincia = clientProvincia;
            Canton = clientCanton;
            Distrito = clientDistrito;
            Nacimiento = clientNacimiento;
            Telefono = clientTelefono;
            Carrito = clientCarrito;
            Pedidos = clientPedidos;
            Usuario = clientUsuario;
            Password = clientPassword;
        }
    }
}
