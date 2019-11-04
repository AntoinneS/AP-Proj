using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApi.Models;

namespace WebApi.Controllers
{
    public class ViolationTypeController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/ViolationType
        public IQueryable<ViolationType> GetViolationTypes()
        {
            return db.ViolationTypes;
        }
       
        // PUT: api/ViolationType/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutViolationType(int id, ViolationType violationType)
        {
           
            if (id != violationType.Id)
            {
                return BadRequest();
            }

            db.Entry(violationType).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ViolationTypeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/ViolationType
        [ResponseType(typeof(ViolationType))]
        public IHttpActionResult PostViolationType(ViolationType violationType)
        {

            db.ViolationTypes.Add(violationType);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = violationType.Id }, violationType);
        }

        // DELETE: api/ViolationType/5
        [ResponseType(typeof(ViolationType))]
        public IHttpActionResult DeleteViolationType(int id)
        {
            ViolationType violationType = db.ViolationTypes.Find(id);
            if (violationType == null)
            {
                return NotFound();
            }

            db.ViolationTypes.Remove(violationType);
            db.SaveChanges();

            return Ok(violationType);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ViolationTypeExists(int id)
        {
            return db.ViolationTypes.Count(e => e.Id == id) > 0;
        }
    }
}
