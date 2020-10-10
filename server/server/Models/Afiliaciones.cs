﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class Afiliaciones
    {
        public string Cedula { get; set; }
        public string Nombre { get; set; }
        public string Apellidos { get; set; }
        public string Direccion { get; set; }
        public string Nacimiento { get; set; }
        public string Telefono { get; set; }
        public string SINPE { get; set; }
        public string Pedidos { get; set; }
        public string Usuario { get; set; }
        public string Password { get; set; }

        public Afiliaciones()
        {
        }

        public Afiliaciones(string productCedula, string productNombre, string productApellido, string productDireccion, string productNacimiento, string productTelefono, string productSINPE, string productPedidos, string productUsuario, string productPassword)
        {
            Cedula = productCedula;
            Nombre = productNombre;
            Apellidos = productApellido;
            Direccion = productDireccion;
            Nacimiento = productNacimiento;
            Telefono = productTelefono;
            SINPE = productSINPE;
            Pedidos = productPedidos;
            Usuario = productUsuario;
            Password = productPassword;
        }
    }
}
