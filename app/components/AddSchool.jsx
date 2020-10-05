var React = require("react");
var actions = require("../actions/SchoolActions");
var createReactClass = require('create-react-class');
module.exports = createReactClass({
    getInitialState:function(){
      return {
          name:"",
          Address:"",
          dob:"",
          nic:"",
          gender:"",
          contact:"",
          email:"",
          course:""


      }  
    },
    addSchool:function(e){
        e.preventDefault();
        actions.addSchool(this.state);
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    render:function(){
        return(
            <div>

            <form className="form" onSubmit={this.addSchool}>
                <div className="form-group">
                    <label className="control-label" htmlFor="name">Student Full Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Type your Full Name" />                    
                </div>
                
                <div className="form-group">
                    <label className="control-label" htmlFor="address">Address:</label>
                    <input type="text" className="form-control" id="address" name="address" value={this.state.address} onChange={this.handleInputChange} placeholder="Type your Address" />                    
                </div>
                
                <div className="form-group">
                    <label className="control-label" htmlFor="dob">Date Of Birth:</label>
                    <input type="text" className="form-control" id="dob" name="dob" value={this.state.dob} onChange={this.handleInputChange} placeholder="Type your DOB" />                    
                </div>

                <div className="form-group">
                    <label className="control-label" htmlFor="dob">NIC No:</label>
                    <input type="text" className="form-control" id="nic" name="nic" value={this.state.nic} onChange={this.handleInputChange} placeholder="Type your Nic No" />                    
                </div>

                <div className="form-group">
                    <label className="control-label" htmlFor="gender">Gender:</label>
                    <input type="text" className="form-control" id="gender" name="gender" value={this.state.gender} onChange={this.handleInputChange} placeholder="Type your Gender" />                    
                </div>

                <div className="form-group">
                    <label className="control-label" htmlFor="gender">Contact No:</label>
                    <input type="text" className="form-control" id="contact" name="contact" value={this.state.contact} onChange={this.handleInputChange} placeholder="Type your Contact No" />                    
                </div>

                <div className="form-group">
                    <label className="control-label" htmlFor="gender">Email:</label>
                    <input type="text" className="form-control" id="email" name="email" value={this.state.email} onChange={this.handleInputChange} placeholder="Type your email id" />                    
                </div>

                <div className="form-group">
                    <label className="control-label" htmlFor="couse">Course:</label>

                    
                    <input type="text" className="form-control" id="course" name="course" value={this.state.course} onChange={this.handleInputChange} placeholder="Type your Course" />                    
                </div>

                <div className="form-group">
                    <button className="btn" type="submit">Submit</button>   
                </div>

                <div className="form-group">
                   
                </div>
            </form>

            
            </div>
        )
    }
})
