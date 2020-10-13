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
    public class ProductoresController : ControllerBase
    {
        // GET: api/<AfiliacionesController>
        [EnableCors("AnotherPolicy")]
        [HttpGet]
        public List<Productores> Get()
        {
            List<Productores> Productores = new List<Productores>();
            string fileName = "DataBase/Productores.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            Productores = JsonSerializer.Deserialize<List<Productores>>(jsonString);

            return Productores;
        }

        // POST api/<AfiliacionesController>
        [Route("insert")]
        [EnableCors("AnotherPolicy")]
        [HttpPost]
        public void Post([FromBody] Productores Productor)
        {
            List<Productores> ProductoresList = new List<Productores>();
            string fileName = "DataBase/Productores.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            ProductoresList = JsonSerializer.Deserialize<List<Productores>>(jsonString);

            bool validation = true;

            for (int i = 0; i < ProductoresList.Count; i++)
            {
                if (ProductoresList[i].Cedula == Productor.Cedula && ProductoresList[i].Usuario == Productor.Usuario)
                {
                    validation = false;
                    break;
                }
            }

            if (validation)
            {
                ProductoresList.Add(Productor);

                jsonString = JsonSerializer.Serialize(ProductoresList);
                System.IO.File.WriteAllText(fileName, jsonString);

                Debug.WriteLine("Productor aceptado");
            }
            else
            {
                Debug.WriteLine("Ya existe cuenta con ese id");
            }
        }

        [Route("modify")]
        [EnableCors("AnotherPolicy")]
        [HttpPost]
        public void modifyPost([FromBody] Productores Productor)
        {
            List<Productores> ProductoresList = new List<Productores>();
            string fileName = "DataBase/Productores.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            ProductoresList = JsonSerializer.Deserialize<List<Productores>>(jsonString);

            bool validation = false;

            for (int i = 0; i < ProductoresList.Count; i++)
            {
                if (ProductoresList[i].Cedula == Productor.Cedula)
                {
                    ProductoresList[i] = Productor;
                    Debug.WriteLine("Productor modificado");
                    validation = true;
                    break;
                }
            }

            if (validation)
            {
                jsonString = JsonSerializer.Serialize(ProductoresList);
                System.IO.File.WriteAllText(fileName, jsonString);
            }
            else
            {
                Debug.WriteLine("Productor no encontrado");
            }
        }

        [Route("GetRegion")]
        [EnableCors("AnotherPolicy")]
        [HttpPost]
        public List<Productores> GetProductFromName([FromBody] Productores Productor)
        {
            List<Productores> ProductoresList = new List<Productores>();
            List<Productores> ProductoresRegion = new List<Productores>();
            string fileName = "DataBase/Productores.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            ProductoresList = JsonSerializer.Deserialize<List<Productores>>(jsonString);

            bool validation = false;

            Productores found = null;

            for (int i = 0; i < ProductoresList.Count; i++)
            {
                if (ProductoresList[i].Canton == Productor.Canton)
                {
                    found = ProductoresList[i];
                    ProductoresRegion.Add(found);
                    validation = true;
                }
            }
            if (validation)
            {
                return ProductoresRegion;
            }
            else
            {
                Debug.WriteLine("Productor no encontrado");
                return ProductoresRegion;
            }
        }

        [Route("getlogin")]
        [EnableCors("AnotherPolicy")]
        [HttpPost]
        public Productores getProductFromName([FromBody] Productores Productor)
        {
            List<Productores> ProductoresList = new List<Productores>();
            string fileName = "DataBase/Productores.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            ProductoresList = JsonSerializer.Deserialize<List<Productores>>(jsonString);

            bool validation = false;

            Productores found = null;

            for (int i = 0; i < ProductoresList.Count; i++)
            {
                if (ProductoresList[i].Usuario == Productor.Usuario && ProductoresList[i].Password == Productor.Password)
                {
                    found = ProductoresList[i];
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
        public void deletePost([FromBody] Productores Productor)
        {
            List<Productores> ProductoresList = new List<Productores>();
            string fileName = "DataBase/Productores.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            ProductoresList = JsonSerializer.Deserialize<List<Productores>>(jsonString);

            bool validation = false;

            for (int i = 0; i < ProductoresList.Count; i++)
            {
                if (ProductoresList[i].Cedula == Productor.Cedula)
                {
                    ProductoresList.RemoveAt(i);
                    Debug.WriteLine("Productor eliminada");
                    validation = true;
                    break;
                }
            }

            if (validation)
            {
                jsonString = JsonSerializer.Serialize(ProductoresList);
                System.IO.File.WriteAllText(fileName, jsonString);
            }
            else
            {
                Debug.WriteLine("Productor no encontrado");
            }
        }
    }
}
