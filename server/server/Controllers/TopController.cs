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
    public class TopController : ControllerBase
    {
        // GET: api/<AfiliacionesController>
        [EnableCors("AnotherPolicy")]
        [HttpGet]
        public List<Top> Get()
        {
            List<Top> TopList = new List<Top>();
            string fileName = "DataBase/Top.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            TopList = JsonSerializer.Deserialize<List<Top>>(jsonString);

            return TopList;
        }

        // POST api/<AfiliacionesController>
        [Route("insert")]
        [EnableCors("AnotherPolicy")]
        [HttpPost]
        public void Post([FromBody] Top Top)
        {
            List<Top> TopList = new List<Top>();
            string fileName = "DataBase/Top.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            TopList = JsonSerializer.Deserialize<List<Top>>(jsonString);

            bool validation = true;

            for (int i = 0; i < TopList.Count; i++)
            {
                if (TopList[i].Cedula == Top.Cedula)
                {
                    validation = false;
                    break;
                }
            }

            if (validation)
            {
                TopList.Add(Top);

                jsonString = JsonSerializer.Serialize(TopList);
                System.IO.File.WriteAllText(fileName, jsonString);

                Debug.WriteLine("Top aceptada");
            }
            else
            {
                Debug.WriteLine("Ya existe ese Top");
            }
        }



        [Route("delete")]
        [EnableCors("AnotherPolicy")]
        [HttpPost]
        public void deletePost([FromBody] Top Top)
        {
            List<Top> TopList = new List<Top>();
            string fileName = "DataBase/afiliaciones.json";

            string jsonString = System.IO.File.ReadAllText(fileName);
            TopList = JsonSerializer.Deserialize<List<Top>>(jsonString);

            bool validation = false;

            for (int i = 0; i < TopList.Count; i++)
            {
                if (TopList[i].Cedula == Top.Cedula)
                {
                    TopList.RemoveAt(i);
                    Debug.WriteLine("Top eliminada");
                    validation = true;
                    break;
                }
            }

            if (validation)
            {
                jsonString = JsonSerializer.Serialize(TopList);
                System.IO.File.WriteAllText(fileName, jsonString);
            }
            else
            {
                Debug.WriteLine("Top no encontrado");
            }
        }
    }
}
