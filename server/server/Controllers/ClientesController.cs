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
    public class ClientesController : ControllerBase
    {
        // GET: api/<AfiliacionesController>
        [EnableCors("AnotherPolicy")]
        [HttpGet]
        public List<Clientes> Get()
        {
            List<Clientes> ClientList = new List<Clientes>();
            string fileName = "DataBase/Clientes.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            ClientList = JsonSerializer.Deserialize<List<Clientes>>(jsonString);

            return ClientList;
        }

        // POST api/<AfiliacionesController>
        [Route("insert")]
        [EnableCors("AnotherPolicy")]
        [HttpPost]
        public void Post([FromBody] Clientes Cliente)
        {
            List<Clientes> ClientList = new List<Clientes>();
            string fileName = "DataBase/Clientes.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            ClientList = JsonSerializer.Deserialize<List<Clientes>>(jsonString);

            bool validation = true;

            for (int i = 0; i < ClientList.Count; i++)
            {
                if (ClientList[i].Cedula == Cliente.Cedula && ClientList[i].Usuario == Cliente.Usuario)
                {
                    validation = false;
                    break;
                }
            }

            if (validation)
            {
                ClientList.Add(Cliente);

                jsonString = JsonSerializer.Serialize(ClientList);
                System.IO.File.WriteAllText(fileName, jsonString);

                Debug.WriteLine("Cliente aceptado");
            }
            else
            {
                Debug.WriteLine("Ya existe cuenta con ese id");
            }
        }

        
        [Route("modify")]
        [EnableCors("AnotherPolicy")]
        [HttpPost]
        public void modifyPost([FromBody] Clientes Cliente)
        {
            List<Clientes> ClientesList = new List<Clientes>();
            string fileName = "DataBase/Clientes.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            ClientesList = JsonSerializer.Deserialize<List<Clientes>>(jsonString);

            bool validation = false;

            for (int i = 0; i < ClientesList.Count; i++)
            {
                if (ClientesList[i].Cedula == Cliente.Cedula)
                {
                    ClientesList[i] = Cliente;
                    Debug.WriteLine("Cliente modificado");
                    validation = true;
                    break;
                }
            }

            if (validation)
            {
                jsonString = JsonSerializer.Serialize(ClientesList);
                System.IO.File.WriteAllText(fileName, jsonString);
            }
            else
            {
                Debug.WriteLine("Cliente no encontrado");
            }
        }

        [Route("getlogin")]
        [EnableCors("AnotherPolicy")]
        [HttpPost]
        public Clientes getClientFromName([FromBody] Clientes Cliente)
        {
            List<Clientes> ClientesList = new List<Clientes>();
            string fileName = "DataBase/Clientes.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            ClientesList = JsonSerializer.Deserialize<List<Clientes>>(jsonString);

            bool validation = false;

            Clientes found = null;

            for (int i = 0; i < ClientesList.Count; i++)
            {
                if (ClientesList[i].Usuario == Cliente.Usuario && ClientesList[i].Password == Cliente.Password)
                {
                    found = ClientesList[i];
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




        [Route("delete")]
        [EnableCors("AnotherPolicy")]
        [HttpPost]
        public void deletePost([FromBody] Clientes Cliente)
        {
            List<Clientes> ClientList = new List<Clientes>();
            string fileName = "DataBase/Clientes.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            ClientList = JsonSerializer.Deserialize<List<Clientes>>(jsonString);

            bool validation = false;

            for (int i = 0; i < ClientList.Count; i++)
            {
                if (ClientList[i].Cedula == Cliente.Cedula)
                {
                    ClientList.RemoveAt(i);
                    Debug.WriteLine("Cliente eliminada");
                    validation = true;
                    break;
                }
            }

            if (validation)
            {
                jsonString = JsonSerializer.Serialize(ClientList);
                System.IO.File.WriteAllText(fileName, jsonString);
            }
            else
            {
                Debug.WriteLine("Cliente no encontrado");
            }
        }
    }
}
