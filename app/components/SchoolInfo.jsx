var React = require("react");
var actions = require("../actions/SchoolActions");

var createReactClass = require('create-react-class');
module.exports = createReactClass({
    deleteSchool: function(e){
        e.preventDefault();
        actions.deleteSchool(this.props.info);
    },
    render:function(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3>Applicant's Full Detail</h3>
                {this.props.info.name}
                    <span className="pull-right text-uppercase delete-button" onClick={this.deleteSchool}>&times;</span>
                </div>
                <div className="panel-body">  <b>Student full name</b>  {this.props.info.name}</div>
                <div className="panel-body"><b>Address : </b>{this.props.info.address}</div>
               
                <div className="panel-body"><b>Date of Birth : </b>{this.props.info.dob}</div>
                <div className="panel-body"><b>NIC Number : </b>{this.props.info.nic}</div>
                <div className="panel-body"><b>Gender: </b>{this.props.info.gender}</div>
                <div className="panel-body"><b>Contact Number: </b>{this.props.info.contact}</div>
                <div className="panel-body"><b>Contact Email: </b>{this.props.info.email}</div>
                <div className="panel-body"><b>Course: </b>{this.props.info.course}</div>
            </div>
        )
    }
})
