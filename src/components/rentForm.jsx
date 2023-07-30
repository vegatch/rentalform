import { useState } from "react";
import React from 'react'
import '../CSS/form.css';

const RentForm = () => {
    const initialState = {
        fname:'',
        mname:'',
        lname:'',
        dob:'',
        mssn:'',
        dln:'',
        phone:'',
        applicantemail:'',
        otherOcc:false,
        occDesc:'',
        pet:false,
        petDesc:'',
        crime:false,
        crimeDesc:'',
        bankrupt:false,
        bankruptDesc: '',
        evict:false,
        evictDesc:'',
        company:'',
        occupation:'',
        howlong:'',
        grossincome:0,
        street:'',
        city:'',
        state:'',
        supervisor:'',
        prevcompany:'',
        prevoccupation:'',
        previouslong:'',
        prevgrossincome:'',
        prevstreet:'',
        prevcity:'',
        prevstate:'',
        prevsupervisor:'',
        residence:false,
        squarefootage:'',
        numbed:'',
        rentamount:0,
        curstreetres:'',
        curcityres:'',
        curstateres:'',
        curzipres:'',
        curdurationres:'',
        curexpirationres:'',
        movingreason:'',
        landlordname:'',
        landlordaddress:'',
        landlordphone:'',
        landlordemail:'',
        prevresidence:'',
        prevsquarefootage:'',
        prevnumbed:'',
        prevrentamount:0,
        prevstreetres:'',
        prevcityres:'',
        prevstateres:'',
        prevzipres:'',
        prevstartdate:'',
        prevenddate:'',
        prevlandlordname:'',
        prevlandlordaddress:'',
        prevlandlordphone:'',
        prevlandlordemail:'',
        prevresidence2:'',
        prevsquarefootage2:0,
        prevnumbed2:'',
        prevrentamount2:'',
        prevstreetres2:'',
        prevcityres2:'',
        prevstateres2:'',
        prevzipres2:'',
        prevstartdate2:'',
        prevenddate2:'',
        prevlandlordname2:'',
        prevlandlordaddress2:'',
        prevlandlordphone2:'',
        prevlandlordemail2:'',
        reffullname1:'',
        refrelation1:'',
        refemail1:'',
        refphone1:'',
        reffullname2:'',
        refrelation2:'',
        refemail2:'',
        refphone2:'',
        reffullname3:'',
        refrelation3:'',
        refemail3:'',
        refphone3:'',
        reffullname4:'',
        refrelation4:'',
        refemail4:'',
        refphone4:'',
        adddetail:'',
        applicantsignature:'',
        applicantdatesignature:''
};

 const [formData, setFormData] = useState(initialState);

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      value: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    });
  };

   const handleSubmit = async (e) => {
   e.preventDefault();
    // setSubmitting(true);
   console.log({ formData });
   const response = await fetch("https://migarental-api.onrender.com/rentscreen", {
     method: "POST",
     headers: {
       "Content-type": "application/json",
     },
     body: JSON.stringify({ formData }),
     
   })
     .then((res) => res.json())
     .then(async (res) => {
       const resData = await res;
       console.log(resData);
    //    console.log(response);
       if (resData.status === "success") {
         alert("Message Sent");
       } else if (resData.status === "fail") {
         alert("Message failed to send");
       }
     })
     .then(() => {
      
      setFormData(initialState)
        // setSubmitting(false);
     });
 };

  return (
    <div className='main'>
        <div className='rentalhead'>
            <div className='header'>
                <h1 className="text-bold"> RESIDENTIAL RENTAL PROPERTY</h1>
                <p>(1 per applicant)</p>
                <p className="align-right text-bold">Application Fee: $0</p>
            </div>
            <div className="property-desc">
                <p className='text-bold'> THE PROPERTY - Migaelle Pithon Anglade</p>
                <p>Type: House </p>
                <p>Square Feet:  1541</p>
                <p>Bedroom:  3</p>
                <p>Rent amount:  $1500.00 / Month</p>
                <p>Address:  8525 Vesta Court, Indianapolis, IN 46226</p>
                <p>Pets?  No</p>
                <p>Smoking Allowed?  No</p>
                <p>Parking? Yes, in the following areas. 1 car garage and driveway</p>
                <p className='bold'> TENANCY</p>
                <p> Type/Length: 12 months</p>
                <p> Start Date: August 1, 2023</p>
                <p className='bold'> LANDLORD'S DETAILS</p>
                <p> Name: Migaelle Pithon Anglade</p>
                <p> Address: 6536 Hi-Vu Dr, Indianapolis, IN 46227</p>
                <p> Phone: 561-768-3760</p>
                <p> Email: migaellepithon@gmail.com</p>
            </div>
        </div>
        <div className='rentalform'>
            <h3>APPLICANT DETAILS</h3>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend> General information</legend>
                    <div>            
                        <label>
                        First Name:
                        <input type="text" name="fname" onChange={handleChange}/>
                        </label>
                        <label>
                            Middle Name:
                            <input type="text" name="mname" onChange={handleChange}/>
                        </label>
                        <label>
                            Last Name:
                            <input type="text" name="lname" onChange={handleChange}/>
                        </label>
                        <label>
                            DOB:
                            <input type="date" name="dob" onChange={handleChange}/>
                        </label>
                        <label>
                            SSN:
                            <input type="text" name="mssn" onChange={handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Driver's license no:
                            <input type="text" name="dln" onChange={handleChange}/>
                        </label>
                        <label>
                            Phone:
                            <input type="text" name="phone" onChange={handleChange}/>
                        </label>
                        <label>
                            Email:
                            <input type="email" name="applicantemail" onChange={handleChange}/>
                        </label>
                    
                    </div>
                </fieldset>
                <fieldset>
                    <legend>History</legend>
                    <div>
                        <label>
                            Other occupants? :
                            <input type="radio" value="Yes" name="otherOcc" onChange={handleChange}/> Yes
                            <input type="radio" value="No" name="otherOcc" onChange={handleChange}/> No
            
                        </label>
                        <div>
                            <label>
                                if yes, describe:
                                <input type="text" name="occDesc" onChange={handleChange}/>
                            </label>
                        </div>
                        
                    </div>
                    <div>
                        <label>
                            Pets? :
                            <input type="radio" value="Yes" name="pet" onChange={handleChange}/> Yes
                            <input type="radio" value="No" name="pet" onChange={handleChange}/> No        
                        </label>
                        <div>
                            <label>
                            if yes, describe:
                            <input type="text" name="petDesc" onChange={handleChange}/>
                            </label>
                        </div>
                    </div>
                    <div>
                        <label>
                            Ever convicted of a crime? :
                            <input type="radio" value="Yes" name="crime" onChange={handleChange}/> Yes
                            <input type="radio" value="No" name="crime" onChange={handleChange}/> No        
                        </label>
                        <div>
                            <label>
                            if yes, describe:
                            <input type="text" name="crimeDesc" onChange={handleChange}/>
                        </label>
                        </div>
                    </div>
                    <div>
                        <label>
                            Ever filed for bankruptcy? :
                            <input type="radio" value="Yes" name="bankrupt" onChange={handleChange}/> Yes
                            <input type="radio" value="No" name="bankrupt" onChange={handleChange}/> No        
                        </label>
                        <div>
                            <label>
                            if yes, describe:
                            <input type="text" name="bankruptDesc" onChange={handleChange}/>
                        </label>
                        </div>
                    </div>
                    <div>
                        <label>
                            Ever been evicted? :
                            <input type="radio" value="Yes" name="evict" onChange={handleChange}/> Yes
                            <input type="radio" value="No" name="evict" onChange={handleChange}/> No        
                        </label>
                        <div>
                            <label>
                            if yes, describe:
                            <input type="text" name="evictDesc" onChange={handleChange}/>
                        </label>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Current Employment</legend>
                    <div>
                        
                        <label>
                            Company:
                            <input type="text" name="company" onChange={handleChange}/>
                        </label>
                        <label>
                            Occupation/Title:
                            <input type="text" name="occupation" onChange={handleChange}/>
                        </label>
                        <label>
                            How long:
                            <input type="text" name="howlong" onChange={handleChange}/>
                        </label>
                        <label>
                            Gross Income (From prior year tax filing):
                            <input type="text" name="grossincome" onChange={handleChange}/>
                        </label>
                        <div>
                        <label>
                            Street affress:
                            <input type="text" name="street" onChange={handleChange}/>
                        </label>
                        <label>
                            City:
                            <input type="text" name="city" onChange={handleChange}/>
                        </label>
                        <label>
                            State:
                            <input type="text" name="state" onChange={handleChange}/>
                        </label>
                        <label>
                            Supervisor:
                            <input type="text" name="supervisor" onChange={handleChange}/>
                        </label>
                    </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Previous Employment</legend>
                    <div>                   
                        <label>
                            Company:
                            <input type="text" name="prevcompany" onChange={handleChange}/>
                        </label>
                        <label>
                            Occupation/Title:
                            <input type="text" name="prevoccupation" onChange={handleChange}/>
                        </label>
                        <label>
                            How long?:
                            <input type="text" name="previouslong" onChange={handleChange}/>
                        </label>
                        <label>
                            Gross Income:
                            <input type="text" name="prevgrossincome" onChange={handleChange}/>
                        </label>
                        <div>
                        <label>
                            Street affress:
                            <input type="text" name="prevstreet" onChange={handleChange}/>
                        </label>
                        <label>
                            City:
                            <input type="text" name="prevcity" onChange={handleChange}/>
                        </label>
                        <label>
                            State:
                            <input type="text" name="prevstate" onChange={handleChange}/>
                        </label>
                        <label>
                            Supervisor:
                            <input type="text" name="prevsupervisor" onChange={handleChange}/>
                        </label>
                    </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Current Residence</legend>                    
                    <label>
                        Type:
                        <input type="radio" value='Apt' name="residence" onChange={handleChange}/> Apartment
                        <input type="radio" value='House' name="residence" onChange={handleChange}/> House
                        <input type="radio" value='Condo' name="residence" onChange={handleChange}/> Condo
                    </label>
                    <div>
                        <label>
                            Square Feet (SF):
                            <input type="number" name="squarefootage" onChange={handleChange}/>
                        </label>
                    </div>
                    <label>
                        Number of Bedrooms?:
                        <input type="number" name="numbed" onChange={handleChange}/>
                    </label>
                    <label>
                        Rent amount (/Month):
                        <input type="number" name="rentamount" onChange={handleChange}/> 
                    </label>
                    <div>
                    <label>
                        Street address:
                        <input type="text" name="curstreetres" onChange={handleChange}/>
                    </label>
                    <label>
                        City:
                        <input type="text" name="curcityres" onChange={handleChange}/>
                    </label>
                    <label>
                        State:
                        <input type="text" name="curstateres" onChange={handleChange}/>
                    </label>
                    <label>
                        ZIP:
                        <input type="number" name="curzipres" onChange={handleChange}/>
                    </label>
                    <label>
                        How long at this address?:
                        <input type="number" name="curdurationres" onChange={handleChange}/>
                    </label>
                    <label>
                        Current lease expiration date?:
                        <input type="date" name="curexpirationres" onChange={handleChange}/>
                    </label>
                    <label>
                        Desire for moving?:
                        <input type="text" name="movingreason" onChange={handleChange}/>
                    </label>
                    <p className="legend"> Current landlord</p>
                    <label>
                        Name:
                        <input type="text" name="landlordname" onChange={handleChange}/>
                    </label>
                    <label>
                        Address:
                        <input type="text" name="landlordaddress" onChange={handleChange}/>
                    </label>
                    <label>
                        Phone:
                        <input type="text" name="landlordphone" onChange={handleChange}/>
                    </label>
                    <label>
                        Email:
                        <input type="email" name="landlordemail" onChange={handleChange}/>
                    </label>
                </div>
               
                </fieldset>
                <fieldset>
                    <legend>Previous Residence</legend>
                    
                    <label>
                        Type:
                        <input type="radio" value='Apt' name="prevresidence" onChange={handleChange}/> Apartment
                        <input type="radio" value='House' name="prevresidence" onChange={handleChange}/> House
                        <input type="radio" value='Condo' name="prevresidence" onChange={handleChange}/> Condo
                    </label>
                    <div>
                        <label>
                            Square Feet (SF):
                            <input type="number" name="prevsquarefootage" onChange={handleChange}/> 
                        </label>
                    </div>
                    <label>
                        Number of Bedrooms?:
                        <input type="number" name="prevnumbed" onChange={handleChange}/>
                    </label>
                    <label>
                        Rent amount (/Month):
                        <input type="number" name="prevrentamount" onChange={handleChange}/> 
                    </label>
                    <div>
                    <label>
                        Street address:
                        <input type="text" name="prevstreetres" onChange={handleChange}/>
                    </label>
                    <label>
                        City:
                        <input type="text" name="prevcityres" onChange={handleChange}/>
                    </label>
                    <label>
                        State:
                        <input type="text" name="prevstateres" onChange={handleChange}/>
                    </label>
                    <label>
                        ZIP:
                        <input type="number" name="prevzipres" onChange={handleChange}/>
                    </label>
                    <label>
                        Start Date:
                        <input type="date" name="prevstartdate" onChange={handleChange}/>
                    </label>
                    <label>
                        End Date:
                        <input type="date" name="prevenddate" onChange={handleChange}/>
                    </label>                    
                    <p className="legend"> Previous landlord</p>
                    <label>
                        Name:
                        <input type="text" name="prevlandlordname" onChange={handleChange}/>
                    </label>
                    <label>
                        Address:
                        <input type="text" name="prevlandlordaddress" onChange={handleChange}/>
                    </label>
                    <label>
                        Phone:
                        <input type="text" name="prevlandlordphone" onChange={handleChange}/>
                    </label>
                    <label>
                        Email:
                        <input type="email" name="prevlandlordemail" onChange={handleChange}/>
                    </label>
                </div>
               
                </fieldset>
                <fieldset>
                    <legend>Previous residence (2nd)</legend>                    
                    <label>
                        Type:
                        <input type="radio" value='Apt' name="prevresidence2" onChange={handleChange}/> Apartment
                        <input type="radio" value='House' name="prevresidence2" onChange={handleChange}/> House
                        <input type="radio" value='Condo' name="prevresidence2" onChange={handleChange}/> Condo
                    </label>
                    <div>
                        <label>
                            Square Feet (SF):
                            <input type="number" name="prevsquarefootage2" onChange={handleChange}/> 
                        </label>
                    </div>
                    <label>
                        Number of Bedrooms?:
                        <input type="number" name="prevnumbed2" onChange={handleChange}/>
                    </label>
                    <label>
                        Rent amount (/Month):
                        <input type="number" name="prevrentamount2" onChange={handleChange}/> 
                    </label>
                    <div>
                    <label>
                        Street address:
                        <input type="text" name="prevstreetres2" onChange={handleChange}/>
                    </label>
                    <label>
                        City:
                        <input type="text" name="prevcityres2" onChange={handleChange}/>
                    </label>
                    <label>
                        State:
                        <input type="text" name="prevstateres2" onChange={handleChange}/>
                    </label>
                    <label>
                        ZIP:
                        <input type="number" name="prevzipres2" onChange={handleChange}/>
                    </label>
                    <label>
                        Start Date:
                        <input type="date" name="prevstartdate2" onChange={handleChange}/>
                    </label>
                    <label>
                        End Date:
                        <input type="date" name="prevenddate2" onChange={handleChange}/>
                    </label>                    
                    <p className="legend"> Previous landlord</p>
                    <label>
                        Name:
                        <input type="text" name="prevlandlordname2" onChange={handleChange}/>
                    </label>
                    <label>
                        Address:
                        <input type="text" name="prevlandlordaddress2" onChange={handleChange}/>
                    </label>
                    <label>
                        Phone:
                        <input type="text" name="prevlandlordphone2" onChange={handleChange}/>
                    </label>
                    <label>
                        Email:
                        <input type="text" name="prevlandlordemail2" onChange={handleChange}/>
                    </label>
                </div>
               
                </fieldset>
                <fieldset>
                    <legend>Personal reference</legend>
                    <div>
                        <label>
                            Fullname:
                            <input type="text" name="reffullname1" onChange={handleChange}/>
                        </label>
                        <label>
                            Relationship:
                            <input type="text" name="refrelation1" onChange={handleChange}/>
                        </label>
                        <label>
                            Email:
                            <input type="email" name="refemail1" onChange={handleChange}/>
                        </label>
                        <label>
                            Phone:
                            <input type="text" name="refphone1" onChange={handleChange}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Fullname:
                            <input type="text" name="reffullname2" onChange={handleChange}/>
                        </label>
                        <label>
                            Relationship:
                            <input type="text" name="refrelation2" onChange={handleChange}/>
                        </label>
                        <label>
                            Email:
                            <input type="email" name="refemail2" onChange={handleChange}/>
                        </label>
                        <label>
                            Phone:
                            <input type="text" name="refphone2" onChange={handleChange}/>
                        </label>
                    </div>
                    
                    
                </fieldset>
                <fieldset>
                    <legend>Additional detail (if any) </legend>
                    <div>
                        <label>
                            Please add any other information 
                            <input type="text" name="adddetail" onChange={handleChange}/>
                        </label>
                    </div>
                    <div>
                        <p>
                            I hereby certify that I am at least 18 years of age. Applicant represents that all information given on this application is true and correct. Applicant hereby authorizes verification of all references and facts, including but not limited to current and previous landlords, employers, and personal refe rences. Applicant hereby authorizes owner/agent to obtain any and all Unlawful Detainer, Credit Reports, Telechecks and/or Criminal Background Reports. Applicant agrees to furnish additional credit and/or personal references upon request. Applicant understands that incomplete or incorrect information provided in the application may cause a delay in processing which may result in denial of tenancy. Applicant hereby waives any claim and releases from liability any person providing or obtaining said verification or additional information.
                        </p>
                    </div>
                </fieldset>
                <fieldset>
                    <div>
                        <label>
                            Applicant's Signature
                            <input type="text" name="applicantsignature" onChange={handleChange}/>
                        </label>
                        <label>
                            Date signed
                            <input type="date" name="applicantdatesignature" onChange={handleChange}/>
                        </label>
                        <button type="Submit" className="text-bold">Submit</button>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
  )
}

export default RentForm