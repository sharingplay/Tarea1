using System;

using System.Collections.Generic;

using System.Linq;

using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Diagnostics;
using Microsoft.AspNetCore.Http;
using server.Models;

using Microsoft.AspNetCore.Cors;

using System.Text.Json;

using System.Text.Json.Serialization;

using System.Diagnostics;

using Microsoft.AspNetCore.Http;

using server.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PedidosController : ControllerBase
    {
        // GET: api/<AfiliacionesController>
        [EnableCors("AnotherPolicy")]
        [HttpGet]
        public List<Pedidos> Get()
        {
            List<Pedidos> PedidosList = new List<Pedidos>();
            string fileName = "DataBase/Pedidos.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            PedidosList = JsonSerializer.Deserialize<List<Pedidos>>(jsonString);

            return PedidosList;
        }

        // POST api/<AfiliacionesController>
        [Route("insert")]
        [EnableCors("AnotherPolicy")]
        [HttpPost]
        public void Post([FromBody] Pedidos Pedido)
        {
            List<Pedidos> PedidosList = new List<Pedidos>();
            string fileName = "DataBase/Pedidos.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            PedidosList = JsonSerializer.Deserialize<List<Pedidos>>(jsonString);

            bool validation = true;

            for (int i = 0; i < PedidosList.Count; i++)
            {
                if (PedidosList[i].Cedula == Pedido.Cedula)
                {
                    validation = false;
                    break;
                }
            }

            if (validation)
            {
                PedidosList.Add(Pedido);

                jsonString = JsonSerializer.Serialize(PedidosList);
                System.IO.File.WriteAllText(fileName, jsonString);

                Debug.WriteLine("Pedido aceptado");
            }
            else
            {
                Debug.WriteLine("No se pudo realizar el pedido");
            }
        }

        [Route("modify")]
        [EnableCors("AnotherPolicy")]
        [HttpPost]
        public void modifyPost([FromBody] Pedidos Pedido)
        {
            List<Pedidos> PedidosList = new List<Pedidos>();
            string fileName = "DataBase/Pedidos.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            PedidosList = JsonSerializer.Deserialize<List<Pedidos>>(jsonString);

            bool validation = false;

            for (int i = 0; i < PedidosList.Count; i++)
            {
                if (PedidosList[i].Cedula == Pedido.Cedula)
                {
                    PedidosList[i] = Pedido;
                    Debug.WriteLine("Pedido modificado");
                    validation = true;
                    break;
                }
            }

            if (validation)
            {
                jsonString = JsonSerializer.Serialize(PedidosList);
                System.IO.File.WriteAllText(fileName, jsonString);
            }
            else
            {
                Debug.WriteLine("Pedido no encontrado");
            }
        }


        [Route("delete")]
        [EnableCors("AnotherPolicy")]
        [HttpPost]
        public void deletePost([FromBody] Pedidos pedido)
        {
            List<Pedidos> PedidosList = new List<Pedidos>();
            string fileName = "DataBase/Pedidos.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            PedidosList = JsonSerializer.Deserialize<List<Pedidos>>(jsonString);

            bool validation = false;

            for (int i = 0; i < PedidosList.Count; i++)
            {
                if (PedidosList[i].Cedula == pedido.Cedula)
                {
                    PedidosList.RemoveAt(i);
                    Debug.WriteLine("Pedido eliminado");
                    validation = true;
                    break;
                }
            }

            if (validation)
            {
                jsonString = JsonSerializer.Serialize(PedidosList);
                System.IO.File.WriteAllText(fileName, jsonString);
            }
            else
            {
                Debug.WriteLine("Pedido no encontrado");
            }
        }
    }
}
