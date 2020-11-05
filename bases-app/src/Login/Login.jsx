import React from 'react';
import { Panel, Form, FormGroup, FormControl, ControlLabel, ButtonToolbar, Button, Alert, Loader } from 'rsuite';
import './Login.css';

import Http from '../Http/Http';

export default class Login extends React.Component{
    constructor(props){
        super(props);
		this.state={
            loading:false,
			formVal:{
				user:"",
				pwd:""
			}
		};
	}
    render(){
        return(
            <div className='flex'>
				<Panel shaded bordered bodyFill className='login'>
					<Panel header='Ingresa'>
						<Form className='flex-blox' onChange={this.change} formValue={this.state.formVal}>
							<FormGroup>
								<ControlLabel>Usuario</ControlLabel>
								<FormControl name="user" />
							</FormGroup>
							<FormGroup>
								<ControlLabel>Contraseña</ControlLabel>
								<FormControl name="pwd" type="password" />
							</FormGroup>
							<FormGroup className='right'>
								<ButtonToolbar>
									<Button appearance="primary" onClick={this.login}>Ingresar</Button>
								</ButtonToolbar>
							</FormGroup>
						</Form>
					</Panel>
				</Panel>
                {this.state.loading? <Loader backdrop content="loading..." center />:null}
                
			</div>
        );
    }

    change=(value)=>{
		this.setState({
			formVal:value
		});
    }
    
	login=async()=>{
        this.setState({loading:true});
        let resp=null;
        try {
            resp = await Http.login(this.state.formVal);    
        } catch (error) {
            console.log(error);
        }
        if(resp?.login){
            localStorage.setItem('user','admin');
            this.setState({loading:false});
            this.props.history.push('/');
        }
        else{
            Alert.warning('Error en la contraseña o en el usuario.', 5000);
            this.setState({loading:false});
        }
        
	}
}