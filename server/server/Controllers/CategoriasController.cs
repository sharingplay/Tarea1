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
    public class CategoriasController : ControllerBase
    {
        // GET: api/<AfiliacionesController>
        /// <summary>
        /// Obtiene los datos del JSON
        /// </summary>
        /// <returns>
        /// Devuelve los datos de las categorias
        /// </returns>
        [EnableCors("AnotherPolicy")]
        [HttpGet]
        public List<Categorias> Get()
        {
            List<Categorias> CategoriasList = new List<Categorias>();
            string fileName = "DataBase/Categorias.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            CategoriasList = JsonSerializer.Deserialize<List<Categorias>>(jsonString);

            return CategoriasList;
        }

        // POST api/<AfiliacionesController>
        /// <summary>
        /// Inserta una nueva categoria al JSON
        /// </summary>
        /// <param name="Categoria"></param>
        [Route("insert")]
        [EnableCors("AnotherPolicy")]
        [HttpPost]
        public void Post([FromBody] Categorias Categoria)
        {
            List<Categorias> CategoriaList = new List<Categorias>();
            string fileName = "DataBase/Categorias.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            CategoriaList = JsonSerializer.Deserialize<List<Categorias>>(jsonString);

            bool validation = true;

            for (int i = 0; i < CategoriaList.Count; i++)
            {
                if (CategoriaList[i].Codigo == Categoria.Codigo)
                {
                    validation = false;
                    break;
                }
            }

            if (validation)
            {
                CategoriaList.Add(Categoria);

                jsonString = JsonSerializer.Serialize(CategoriaList);
                System.IO.File.WriteAllText(fileName, jsonString);

                Debug.WriteLine("Categoria aceptada");
            }
            else
            {
                Debug.WriteLine("Ya existe esa Categoria");
            }
        }

        /// <summary>
        /// 
        /// Modifica alguna de las categorias
        /// </summary>
        /// <param name="Categoria"></param>
        [Route("modify")]
        [EnableCors("AnotherPolicy")]
        [HttpPost]
        public void modifyPost([FromBody] Categorias Categoria)
        {
            List<Categorias> CategoriasList = new List<Categorias>();
            string fileName = "DataBase/Categorias.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            CategoriasList = JsonSerializer.Deserialize<List<Categorias>>(jsonString);

            bool validation = false;

            for (int i = 0; i < CategoriasList.Count; i++)
            {
                if (CategoriasList[i].Codigo == Categoria.Codigo)
                {
                    CategoriasList[i] = Categoria;
                    Debug.WriteLine("Categoria modificado");
                    validation = true;
                    break;
                }
            }

            if (validation)
            {
                jsonString = JsonSerializer.Serialize(CategoriasList);
                System.IO.File.WriteAllText(fileName, jsonString);
            }
            else
            {
                Debug.WriteLine("Categoria no encontrado");
            }
        }

        /// <summary>
        /// Elimina la categoria del JSON
        /// </summary>
        /// <param name="Categoria"></param>
        [Route("delete")]
        [EnableCors("AnotherPolicy")]
        [HttpPost]
        public void deletePost([FromBody] Categorias Categoria)
        {
            List<Categorias> CategoriaList = new List<Categorias>();
            string fileName = "DataBase/Categorias.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            CategoriaList = JsonSerializer.Deserialize<List<Categorias>>(jsonString);

            bool validation = false;

            for (int i = 0; i < CategoriaList.Count; i++)
            {
                if (CategoriaList[i].Codigo == Categoria.Codigo)
                {
                    CategoriaList.RemoveAt(i);
                    Debug.WriteLine("Categoria eliminada");
                    validation = true;
                    break;
                }
            }

            if (validation)
            {
                jsonString = JsonSerializer.Serialize(CategoriaList);
                System.IO.File.WriteAllText(fileName, jsonString);
            }
            else
            {
                Debug.WriteLine("Categoria no encontrado");
            }
        }
    }
}
