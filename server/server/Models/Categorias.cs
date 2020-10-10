using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace server.Models
{
    public class Categorias
    {
        public string Codigo { get; set; }
        public string Nombre { get; set; }

        public Categorias()
        {

        }

        public Categorias(string catCodigo, string catNombre)
        {
            Codigo = catCodigo;
            Nombre = catNombre;
        }
    }
}
