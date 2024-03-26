import React from 'react';
import './cta.css';

function CTA() {
  return (
    <div className="cta">
      <div className="cta-content">
        <span>Request Early Access to Get Started</span>
        <h3>Register today & start exploring the endless possibilities</h3>
      </div>
      <div className="cta-btn">
        <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#reg">
          Get Started
        </button>
      </div>

      <div class="modal fade" id="reg" tabindex="-1" aria-labelledby="reg" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="regTitle">Registration</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>[Registration Form Here]</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="submit"  class="btn btn-primary">Register</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA