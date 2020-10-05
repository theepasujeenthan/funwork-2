
var React = require("react");
var SchoolInfo = require("./SchoolInfo.jsx")
var AddSchool = require("./AddSchool.jsx");

var createReactClass = require('create-react-class');
module.exports = createReactClass({
   render:function(){
       return(
           <div>
        <div className="jumbotron text-white jumbotron-image home">
        {/*<img className="logo" src="lll.png" width="100%"/>*/}
                    <h1 className="mb-4">
                      Student Online Registation Form
                    </h1>
                   
                    <h3 className="mb-4">
                   Warmly Welcome All Student
                    </h3>
                    
                  </div>
           <div className="row">
                <div className="col-md-6">
                    
                <h2>   Do you want to Learn Online?<br/>
                       if so, Now fill out this form. </h2>
                    <AddSchool />
                </div>
                <div className="col-md-6">
                <img className="my_bg2" src="https://image.freepik.com/free-vector/online-education-isometric-design_1284-19157.jpg"/>
         
                    {
                        
                        this.props.schools.map(function(s,index){
                            return(
                                <SchoolInfo info={s} key={"school"+index} />
                            )         
                        })
                    }
                </div>
                </div>
           </div>
       )
   } 
});
