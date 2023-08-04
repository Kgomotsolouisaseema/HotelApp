import React from "react";

function AdminHome() {
  return (
    <div className="container">
      <h1>Welcome to the Admin Dashboard</h1>
      <div className="row">
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Hotel Settings</h5>
              <p className="card-text">Manage hotel information here.</p>
              <a href="/admin/settings" className="btn btn-primary">Go to Settings</a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Add New Room</h5>
              <p className="card-text">Add a new room to the hotel.</p>
              <a href="/admin/new-room" className="btn btn-primary">Add Room</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default AdminHome;
