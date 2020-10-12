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
    public class ProductosController : ControllerBase
    {
        // GET: api/<AfiliacionesController>
        [EnableCors("AnotherPolicy")]
        [HttpGet]
        public List<Productos> Get()
        {
            List<Productos> ProductosList = new List<Productos>();
            string fileName = "DataBase/Productos.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            ProductosList = JsonSerializer.Deserialize<List<Productos>>(jsonString);

            return ProductosList;
        }

        // POST api/<AfiliacionesController>
        [Route("insert")]
        [EnableCors("AnotherPolicy")]
        [HttpPost]
        public void Post([FromBody] Productos Producto)
        {
            List<Productos> ProductList = new List<Productos>();
            string fileName = "DataBase/Productos.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            ProductList = JsonSerializer.Deserialize<List<Productos>>(jsonString);

            bool validation = true;

            for (int i = 0; i < ProductList.Count; i++)
            {
                if (ProductList[i].Cedula == Producto.Cedula)
                {
                    validation = false;
                    break;
                }
            }

            if (validation)
            {
                ProductList.Add(Producto);

                jsonString = JsonSerializer.Serialize(ProductList);
                System.IO.File.WriteAllText(fileName, jsonString);

                Debug.WriteLine("Producto aceptado");
            }
            else
            {
                Debug.WriteLine("Ya existe cuenta con ese id");
            }
        }



        [Route("delete")]
        [EnableCors("AnotherPolicy")]
        [HttpPost]
        public void deletePost([FromBody] Productos Producto)
        {
            List<Productos> ProductList = new List<Productos>();
            string fileName = "DataBase/Productos.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            ProductList = JsonSerializer.Deserialize<List<Productos>>(jsonString);

            bool validation = false;

            for (int i = 0; i < ProductList.Count; i++)
            {
                if (ProductList[i].Cedula == Producto.Cedula)
                {
                    ProductList.RemoveAt(i);
                    Debug.WriteLine("Afiliacion eliminada");
                    validation = true;
                    break;
                }
            }

            if (validation)
            {
                jsonString = JsonSerializer.Serialize(ProductList);
                System.IO.File.WriteAllText(fileName, jsonString);
            }
            else
            {
                Debug.WriteLine("Afiliacion no encontrado");
            }
        }
    }
}
