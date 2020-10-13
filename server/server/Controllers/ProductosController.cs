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
        /// <summary>
        /// Funcion para obtener los datos del Json y enviarla al cliente
        /// </summary>
        /// <returns>
        /// devuelve la lista de lo que se encuentra en el json
        /// </returns>
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
        /// <summary>
        /// Funcion para agregar un nuevo producto al Json
        /// </summary>
        /// <param name="Producto"></param>
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
                if (ProductList[i].Productor == Producto.Productor && ProductList[i].Nombre == Producto.Nombre)
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

        /// <summary>
        /// Funcion encargada de modificar un producto en el JSON
        /// </summary>
        /// <param name="Producto"></param>
        [Route("modify")]
        [EnableCors("AnotherPolicy")]
        [HttpPost]
        public void modifyPost([FromBody] Productos Producto)
        {
            List<Productos> ProductosList = new List<Productos>();
            string fileName = "DataBase/Productos.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            ProductosList = JsonSerializer.Deserialize<List<Productos>>(jsonString);

            bool validation = false;

            for (int i = 0; i < ProductosList.Count; i++)
            {
                if (ProductosList[i].Productor == Producto.Productor && ProductosList[i].Nombre == Producto.Nombre)
                {
                    ProductosList[i] = Producto;
                    Debug.WriteLine("Producto modificado");
                    validation = true;
                    break;
                }
            }

            if (validation)
            {
                jsonString = JsonSerializer.Serialize(ProductosList);
                System.IO.File.WriteAllText(fileName, jsonString);
            }
            else
            {
                Debug.WriteLine("Producto no encontrado");
            }
        }

        /// <summary>
        /// Obtiene los productos de acuerdo al productor
        /// </summary>
        /// <param name="product"></param>
        /// <returns>
        /// </returns>
        [Route("GetPorProductor")]
        [EnableCors("AnotherPolicy")]
        [HttpPost]
        public List<Productos> GetProductoPorProductor([FromBody] Productos product)
        {
            List<Productos> ProductosList = new List<Productos>();
            List<Productos> PrductosProductor = new List<Productos>();
            string fileName = "DataBase/Productos.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            ProductosList = JsonSerializer.Deserialize<List<Productos>>(jsonString);

            bool validation = false;

            Productos found = null;

            for (int i = 0; i < ProductosList.Count; i++)
            {
                if (ProductosList[i].Productor == product.Productor)
                {
                    found = ProductosList[i];
                    PrductosProductor.Add(found);
                    validation = true;
                }
            }
            if (validation)
            {
                return PrductosProductor;
            }
            else
            {
                Debug.WriteLine("Producto no encontrado");
                return PrductosProductor;
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
                if (ProductList[i].Productor == Producto.Productor && ProductList[i].Nombre == Producto.Nombre)
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
