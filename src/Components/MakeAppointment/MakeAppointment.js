import React from 'react';
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
        <div className="mx-4">
       <div style={{weight:"60px"}}>
  <h4 className="text-info">Give Here Your Information For Appointment</h4>
  <br />
<form>
  <input type="text" aria-label="First name" placeholder="First Name" className="form-control" required/>
  <br />
  <input type="text" aria-label="Last name" placeholder="Last Name" className="form-control" required/>
  <br />
  <input type="phone" aria-label="phone" placeholder="Phone Number" className="form-control" required/>
  <br />
  <input type="address" aria-label="address" placeholder="Address" className="form-control" required/>
  <br />
 <Link to="/success">
 <input className="text-info" type="submit" value="Submit" />
 </Link>
</form>
       </div>
          

<br /> <br /> <br />
            <table className="table">
             
  <thead>
    <tr>
      <th className="text-info" scope="col">Request an appointment through Telephone / Cell Phone</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Customer Relation Department</td>
      <td>0191 400 1210</td>
    </tr>
    <tr>
      <td>Information Center</td>
      <td>0191 400 1234</td>
    </tr>
    <tr>
      <td>Chittagong info</td>
      <td>(02) 8836000,8836444 ext – 8127 / 8120</td>
    </tr>
    <tr>
      <td>Emergency / Ambulance</td>
      <td>0191 400 1234</td>
    </tr>
    <tr>
      <td>Customer Relation Department</td>
      <td>(02) 8836000,8836444 ext – 8127 / 8120</td>
    </tr>
    <tr>
      <td>Information Center</td>
      <td>0191 400 1210</td>
    </tr>
    <tr>
      <td>Information Center</td>
      <td>0191 400 1210</td>
    </tr>
    <tr>
      <td>Hotline </td>
      <td>(any query) 10666</td>
    </tr>
    <tr>
      <td>PABX</td>
      <td>(02) 8836000 , 8836444</td>
    </tr>
    <tr>
      <td>PABX</td>
      <td>(02) 8836000 , 8836444</td>
    </tr>
  </tbody>
</table>
        </div>
    );
};

export default MakeAppointment;