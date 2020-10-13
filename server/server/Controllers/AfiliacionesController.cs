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
    public class AfiliacionesController : ControllerBase
    {
        // GET: api/<AfiliacionesController>
        /// <summary>
        /// Obtiene las afiliaciones que se encuentran en el JSON
        /// </summary>
        /// <returns>
        /// Devuelve una lista de todas las afiliaciones</returns>
        [EnableCors("AnotherPolicy")]
        [HttpGet]
        public List<Afiliaciones> Get()
        {
            List<Afiliaciones> branchesList = new List<Afiliaciones>();
            string fileName = "DataBase/afiliaciones.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            branchesList = JsonSerializer.Deserialize<List<Afiliaciones>>(jsonString);

            return branchesList;
        }

        // POST api/<AfiliacionesController>
        /// <summary>
        /// Inserta una nueva afiliacion
        /// </summary>
        /// <param name="afiliacion"></param>
        [Route("insert")]
        [EnableCors("AnotherPolicy")]
        [HttpPost]
        public void Post([FromBody] Afiliaciones afiliacion)
        {
            List<Afiliaciones> ListAfiliaciones = new List<Afiliaciones>();
            string fileName = "DataBase/afiliaciones.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            ListAfiliaciones = JsonSerializer.Deserialize<List<Afiliaciones>>(jsonString);

            bool validation = true;

            for (int i = 0; i < ListAfiliaciones.Count; i++)
            {
                if (ListAfiliaciones[i].Cedula == afiliacion.Cedula)
                {
                    validation = false;
                    break;
                }
            }

            if (validation)
            {
                ListAfiliaciones.Add(afiliacion);

                jsonString = JsonSerializer.Serialize(ListAfiliaciones);
                System.IO.File.WriteAllText(fileName, jsonString);

                Debug.WriteLine("Afiliacion aceptada");
            }
            else
            {
                Debug.WriteLine("Ya existe cuenta con ese id");
            }
        }

        
        /// <summary>
        /// elimina la afiliacion en el JSON
        /// </summary>
        /// <param name="afiliacion"></param>
        [Route("delete")]
        [EnableCors("AnotherPolicy")]
        [HttpPost]
        public void deletePost([FromBody] Afiliaciones afiliacion)
        {
            List<Afiliaciones> afiliacionesList = new List<Afiliaciones>();
            string fileName = "DataBase/afiliaciones.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            afiliacionesList = JsonSerializer.Deserialize<List<Afiliaciones>>(jsonString);

            bool validation = false;

            for (int i = 0; i < afiliacionesList.Count; i++)
            {
                if (afiliacionesList[i].Cedula == afiliacion.Cedula)
                {
                    afiliacionesList.RemoveAt(i);
                    Debug.WriteLine("Afiliacion eliminada");
                    validation = true;
                    break;
                }
            }

            if (validation)
            {
                jsonString = JsonSerializer.Serialize(afiliacionesList);
                System.IO.File.WriteAllText(fileName, jsonString);
            }
            else
            {
                Debug.WriteLine("Afiliacion no encontrado");
            }
        }
    }
}
