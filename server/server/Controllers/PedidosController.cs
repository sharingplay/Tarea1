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

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PedidosController : ControllerBase
    {
        // GET: api/<AfiliacionesController>
        /// <summary>
        /// Obtiene los datos del JSON
        /// </summary>
        /// <returns>
        /// Devuelve una lista con los peididos</returns>
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
        /// <summary>
        /// 
        /// Obtiene un nuevo pedido y lo agrega al JSON
        /// </summary>
        /// <param name="Pedido"></param>
        [Route("insert")]
        [EnableCors("AnotherPolicy")]
        [HttpPost]
        public void Post([FromBody] Pedidos Pedido)
        {
            Random rand = new Random();
            Pedido.Comprobante = rand.Next(100000, 999999999).ToString();
            List<Pedidos> PedidosList = new List<Pedidos>();
            string fileName = "DataBase/Pedidos.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            PedidosList = JsonSerializer.Deserialize<List<Pedidos>>(jsonString);

            PedidosList.Add(Pedido);

            jsonString = JsonSerializer.Serialize(PedidosList);
            System.IO.File.WriteAllText(fileName, jsonString);

            Debug.WriteLine("Pedido aceptado");
            
            Debug.WriteLine("No se pudo realizar el pedido");
        }

        /// <summary>
        /// 
        /// Verifica si el usuario existe
        /// </summary>
        /// <param name="Pedido"></param>
        /// <returns>
        /// el usuario o null si no existe
        /// </returns>
        [Route("getPedido")]
        [EnableCors("AnotherPolicy")]
        [HttpPost]
        public List<Pedidos> getClientFromID([FromBody] Pedidos Pedido)
        {
            List<Pedidos> PedidosList = new List<Pedidos>();
            List<Pedidos> PedidosProductor = new List<Pedidos>();
            string fileName = "DataBase/Pedidos.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            PedidosList = JsonSerializer.Deserialize<List<Pedidos>>(jsonString);

            bool validation = false;

            Pedidos found = null;

            for (int i = 0; i < PedidosList.Count; i++)
            {
                if (PedidosList[i].productor == Pedido.productor)
                {
                    found = PedidosList[i];
                    PedidosProductor.Add(found);
                    validation = true;
                }
                    
            }
            if (validation)
            {
                return PedidosProductor;
            }
            else
            {
                    Debug.WriteLine("No hay pedidos asociados a este productor");
                return PedidosProductor;
            }
        }

        /// <summary>
        /// Verifica si el usuario existe
        /// </summary>
        /// <param name="Pedido"></param>
        /// <returns>
        /// el usuario o null si no existe
        /// </returns>
        [Route("getPedidoCliente")]
        [EnableCors("AnotherPolicy")]
        [HttpPost]
        public Pedidos getpedidoClient([FromBody] Pedidos Pedido)
        {
            List<Pedidos> PedidosList = new List<Pedidos>();
            string fileName = "DataBase/Pedidos.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            PedidosList = JsonSerializer.Deserialize<List<Pedidos>>(jsonString);

            bool validation = false;

            Pedidos found = null;

            for (int i = 0; i < PedidosList.Count; i++)
            {
                if (PedidosList[i].Cedula == Pedido.Cedula)
                {
                    found = PedidosList[i];
                    validation = true;
                    break;
                }
            }
            if (validation)
            {
                return found;
            }
            else
            {
                return found;
            }
        }

        /// <summary>
        /// modifica alguna caracteristica espesifica del pedido
        /// </summary>
        /// <param name="Pedido"></param>
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

        /// <summary>
        /// elimina un pedido de acerdo a la cuenta del cliente
        /// </summary>
        /// <param name="pedido"></param>
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
                if (PedidosList[i].Comprobante == pedido.Comprobante)
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
