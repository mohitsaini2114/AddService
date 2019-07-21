import React, { Component } from 'react';
import NetworkComponent from './NetworkComponent'; 
import axios from 'axios'
var fileDownload = require('js-file-download');
// var ejs = require('ejs');
// var fs = require("fs");
// var doc = fs.read("./template/docker-compose.yml");
// var data;
// var editor = require('/Users/msaini/Documents/Generator-UI/generator-app/node_modules/mem-fs-editor')
// import fs from 'fs'
//   import fs2 from '/Users/msaini/Documents/Generator-UI/generator-app/node_modules/mem-fs-editor'
//   import memFs from 'mem-fs'
  //var store = require('mem-fs').create();

  // "start": "node index.js",

class Compose extends Component {
    // state = {

    // };
    constructor(props){
        super(props)
        this.state = {
            id: this.props.id,
            service: [],
            serviceName: '',
            imageName: '', 
            portNumber: '',
            replica: '',

            networkClick: false,
            networksOne: [],
            configs: []
        }
        this.handleServiceNameChange = this.handleServiceNameChange.bind(this)
        this.handleNetworkClick = this.handleNetworkClick.bind(this)
        //this.handleSubmit = this.handleSubmit.bind(this)
    }
    styles = {
        fontSize: 20,
        fontWeight: "bold"
    }

    handleServiceNameChange(event) {
        this.setState({serviceName: event.target.value})

        this.state.service.serviceName = this.state.serviceName
        this.setState({service: this.state.service.serviceName})
        this.props.callbackFromParent(this.state.service, this.state.id)
        console.log("servie name: " + this.state.serviceName)
      }
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleNetworkClick() {
        this.setState({
            networkClick:!this.state.networkClick
        })
    }

    handleAddNetworkOne(){
        this.setState({networksOne: [...this.state.networksOne, ""]})
    }

    handleNetworkOneInput(e, index){
        this.state.networksOne[index] = e.target.value
        this.setState({networksOne: this.state.networksOne})
    }

    handleRemoveNetworkOne(index){
        this.state.networksOne.splice(index,1)

        console.log(this.state.networksOne, "$$$$")

        this.setState({networksOne: this.state.networksOne})
    }
    handleAddConfig(){
        this.setState({configs: [...this.state.configs, ""]})
    }
    handleConfigSourceInput(e, index){
        if( this.state.configs[index] == ""){
            this.state.configs[index] ={}
        }
        
        this.state.configs[index].source = e.target.value
        this.setState({configs: this.state.configs})
    }
    handleConfigTargetInput(e, index){
        if( this.state.configs[index] == ""){
            this.state.configs[index] ={}
        }
        this.state.configs[index].target = e.target.value
        this.setState({configs: this.state.configs})

        this.state.service.configs = this.state.configs
        this.setState({service: this.state.service.configs})
        this.props.callbackFromParent(this.state.service, this.state.id)
    }
    handleConfigVersionInput(e, index){
        if( this.state.configs[index] == ""){
            this.state.configs[index] ={}
        }
        this.state.configs[index].version = e.target.value
        this.setState({configs: this.state.configs})
    }
    handleConfigFileInput(e, index){
        if( this.state.configs[index] == ""){
            this.state.configs[index] ={}
        }
        this.state.configs[index].file = e.target.value
        this.setState({configs: this.state.configs})
    }
    handleRemoveConfig(index){
        this.state.configs.splice(index,1)

        console.log(this.state.configs, "$$$$")

        this.setState({configs: this.state.configs})
    }

    submitHandler = event => {
        var services = []

        event.preventDefault()
        services.push(this.state)
        //console.log()
        // var data = this.state;

        
        // var ejsData = ejs.render(doc,data);
        // fileDownload(ejsData, 'docker-compose.yml');
        // var data= [];
        // data.push(this.state)
        


        // axios.post('http://localhost:7000/',this.state)
        // //https://jsonplaceholder.typicode.com/posts
        //     .then(response => {
            
        //         fileDownload(response.data, 'docker-compose.yml');
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })



        // fetch('https://localhost:4000/compose', this.state)
        //     .then(response => response.json())
        //     .catch(err => console.error(err))
 
        // fetch("http://localhost:4000/compose")
        //     .then(res => res.text())
        //     .then(res => this.setState())
        //     .catch(err => err);
        

        // const data = new FormData();
        // data.append(this.state)
        // fetch('http://localhost:4000/upload', {
        // method: 'POST',
        // body: data
        // }).then(response => {
        // response.json().then(body => {
        // this.setState({ imageURL: `http://localhost:4000/${body.file}` });
        // });
        // });
    }
    // handleSubmit(){
    //     'use strict';
    //     var services = []
    //     //console.log(this.state.networksOne,"mera network")
    //     //console.log(this.state.configs, "mera config")

    //     services.push(this.state.networksOne)
    //     console.log(services)
    //     //var Generator = require('yeoman-generator');
    //     //this.registerTransformStream(replace(/\r\n\s*\r\n/g, '\r\n'));
    //     //const fs = require('fs');
    //     // var memFs = require("mem-fs");
    //     // var editor = require("mem-fs-editor");
 
    //     //var store = memFs.create();
    //     //var fs = editor.create(store);


    //     // const FileEditor = require('mem-fs-editor');
    //     // this.fs = FileEditor.create(this.env.sharedFs);
    //     // this.fs.copyTpl(
    //     //   this.templatePath('docker-compose.yml'),
    //     //   this.destinationPath('public/docker-compose.yml'),
    //     //   {
    //     //     columns: this.services
    //     //   }
    //     // );
    //     //services.toString('utf8');
    //     //var fs = require('graceful-fs')

    //     // var store = memFs.create();
    //     // var fs = editor.create(store);
    //     // fs.copyTpl('./docker-compose.yml', './public/docker-compose.yml',
    //     //  {
    //     //     columns: this.services
    //     //  }
    //     //   );
    //     //fs.write("somefile.js", "var a = 1;");
    // }
    // templatePath() {
    //     const path = require('path');
    //     let filepath = path.join.apply(path, arguments);
    
    //     if (!path.isAbsolute(filepath)) {
    //       filepath = path.join(this.sourceRoot(), filepath);
    //     }
    
    //     return filepath;
    //   }

    //   destinationPath() {
    //     const path = require('path');
    //     let filepath = path.join.apply(path, arguments);
    
    //     if (!path.isAbsolute(filepath)) {
    //       filepath = path.join(this.destinationRoot(), filepath);
    //     }
    
    //     return filepath;
    //   }

    render() { 
        const {serviceName, imageName, portNumber, replica} = this.state
       return (
        <React.Fragment>
            <div>
           <label> <br></br>
            <span style = {this.styles} className = "badge badge-primary m-2">Collection(Team) name :</span>
            <input type="text" name="name" />
            </label>
            <h1>Services</h1>
            

            <label className= "m-4"> 
            <span style = {this.styles} className = "badge badge-primary m-2">Services name :</span>
            <input type="text" name="serviceName" value={serviceName} onChange={this.changeHandler} />
            <div>
            <span style = {this.styles} className = "badge badge-primary m-2">Image name :</span>
            
            <input type="text" name="imageName" value={imageName} onChange={this.changeHandler}  />
            </div>
            <div>
            <span style = {this.styles} className = "badge badge-primary m-2">Port Number :</span>
            <input type="text" name="portNumber" value={portNumber} placeholder="8080:8080" onChange={this.changeHandler} />
            </div>
            <div>
            <span style = {this.styles} className = "badge badge-primary m-2">Health Check URL:</span>
            <input type="text" name="health" placeholder="http://localhost:8080/patient"/>
            </div>
             <div>
            <span style = {this.styles} className = "badge badge-primary m-2">Number of Replicas :</span>
            <input type="text" name="replica" value={replica} onChange={this.changeHandler}/>
            </div>
            <div >
            <span style = {this.styles} className = "badge badge-primary m-2">Network</span>
            {/* <button onClick = {this.handleNetworkClick}>Plus</button> */}
            <button onClick = {(e) => this.handleAddNetworkOne(e)}> Add Network</button>
            {/* {this.state.networkClick ? (<NetworkComponent></NetworkComponent>) :""} */}
            {
                this.state.networksOne.map((network, index) => {
                    return(
                        <div key={index}>
                            <span style = {this.styles} className = "badge badge-primary m-3">Network 1: </span>
                            <input onChange={(e) => this.handleNetworkOneInput(e, index)} value={network}/>
                            <button onClick={() => this.handleRemoveNetworkOne(index)}>Remove</button>
                        </div>
                    )
                })
            }
            </div>
            <div >
            <span style = {this.styles} className = "badge badge-primary m-2">Config</span>
            <button onClick = {(e) => this.handleAddConfig(e)}> Add Config</button>
            {
                this.state.configs.map((config, index) => {
                    return(
                        <div key={index}>
                            <div>
                            <span style = {this.styles} className = "badge badge-primary m-3">Source: </span>
                            <input onChange={(e) => this.handleConfigSourceInput(e, index)} value={config.source}/>
                            <button onClick={() => this.handleRemoveConfig(index)}>Remove</button>
                            </div>
                            <div>
                            <span style = {this.styles} className = "badge badge-primary m-3">Target: </span>
                            <input onChange={(e) => this.handleConfigTargetInput(e, index)} value={config.target}/>
                            </div>
                            <div>
                            <span style = {this.styles} className = "badge badge-primary m-3">Version: </span>
                            <input onChange={(e) => this.handleConfigVersionInput(e, index)} value={config.version}/>
                            </div>
                            <div>
                            <span style = {this.styles} className = "badge badge-primary m-3">File: </span>
                            <input onChange={(e) => this.handleConfigFileInput(e, index)} value={config.file}/>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            </label>
            <button onClick = {this.submitHandler}> Submit </button>

        
            </div>
        </React.Fragment>
        );
    }
}
 
export default Compose; 