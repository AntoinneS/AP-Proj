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
using WebApi.ViewModels;

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
        public IHttpActionResult PostHuntingSession(HuntingViewModel data)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
      HuntingSession huntingSession = new HuntingSession {
        Date = data.Date,
        GameBirdAmt = data.GameBirdAmt,
        GameReserve = data.GameReserve,
        OtherBirdAmt = data.OtherBirdAmt,
        Id = data.Id,
        Profile = db.Profiles.Find(data.Id)
      };
      try
      {
        db.HuntingSessions.Add(huntingSession);
        db.SaveChanges();
        huntingSession.Profile = null;
        return Ok(new ResultVM<HuntingSession> {
          success=true,
          data=huntingSession
        });
      }
      catch (Exception e) {
        //log
        return Ok(new ResultVM<HuntingSession>
        {
          success = false,
          data = null,
          message = e.Message
        });
      }

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
