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
    public class HuntingSessionController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/HuntingSession
        public IQueryable<HuntingSession> GetHuntingSessions()
        {
            return db.HuntingSessions;
        }

        // GET: api/HuntingSession/5
        [ResponseType(typeof(HuntingSession))]
        public IHttpActionResult GetHuntingSession(int id)
        {
            HuntingSession huntingSession = db.HuntingSessions.Find(id);
            if (huntingSession == null)
            {
                return NotFound();
            }

            return Ok(huntingSession);
        }

        // PUT: api/HuntingSession/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutHuntingSession(int id, HuntingSession huntingSession)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != huntingSession.Id)
            {
                return BadRequest();
            }

            db.Entry(huntingSession).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HuntingSessionExists(id))
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

        // POST: api/HuntingSession
        [ResponseType(typeof(HuntingSession))]
        public IHttpActionResult PostHuntingSession(HuntingSession huntingSession)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.HuntingSessions.Add(huntingSession);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = huntingSession.Id }, huntingSession);
        }

        // DELETE: api/HuntingSession/5
        [ResponseType(typeof(HuntingSession))]
        public IHttpActionResult DeleteHuntingSession(int id)
        {
            HuntingSession huntingSession = db.HuntingSessions.Find(id);
            if (huntingSession == null)
            {
                return NotFound();
            }

            db.HuntingSessions.Remove(huntingSession);
            db.SaveChanges();

            return Ok(huntingSession);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool HuntingSessionExists(int id)
        {
            return db.HuntingSessions.Count(e => e.Id == id) > 0;
        }
    }
}