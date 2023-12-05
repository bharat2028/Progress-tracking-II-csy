import React,{Component} from 'react';
const withLogger = (WrappedComponent) =>{
return class extends Component{
    componentDidMount(){
        console.log("Component ${WrappedComponent.name} is mounted");
    }
    render(){
        return <WrappedComponent {...this.props} />
    }
};
};

class Mycomponent extends Component {
    render(){
        return <div>My Component</div>;
    
    }
}
const EnhancedCoponent = withLogger(Mycomponent);
const Hoc = () =>{
    return (
        <div>
        <h1>Higher Order Coponent Example</h1>
        <EnhancedCoponent/>
        </div>
    )
}
export default Hoc;