import React from 'react'
import { PanelGroup, Panel, Button } from 'rsuite';
import Tabla from './Tabla/Tabla';

export default class Consultas extends React.Component{
    constructor(props){
        super(props);
        this.state={
            consulta:0
        };
    }
    render(){
        return(
            <div>
                {this.getConsulta()}
            </div>
        );
    }
    
    getConsulta=()=>{
        if(this.state.consulta===0)
            return (
                <div>
                    <h1 style={{textAlign:'center'}}>Consultas</h1>
                    <PanelGroup accordion defaultActiveKey={1} bordered style={{width:'90%', margin:'20px auto'}}>
                        {this.data.map((val,i,_)=>
                            <Panel header={val.consulta} eventKey={i+1} key={i+1}>
                                <cite>{val.desc}</cite>
                                <br/>
                                <div style={{width:'100%', display:'flex', flexDirection:'column'}}>
                                    <Button color="cyan" appearance="ghost" onClick={(t)=>this.setConsulta(i+1)} style={{alignSelf:'flex-end'}}>Ver datos</Button>
                                </div>
                            </Panel>
                        )}
                    </PanelGroup>
                </div>
                
            );
        else
            return(
                <div style={{width:'100%', display:'flex', flexDirection:'column'}}>
                    <Button color="cyan" appearance="ghost" onClick={(t)=>this.setState({consulta:0})} style={{alignSelf:'flex-end'}}>Regresar</Button>
                    <h1 style={{textAlign:'center'}}>Consulta #{this.state.consulta}</h1>
                    <Tabla consulta={ this.state.consulta }/>
                </div>
            );
        
    }

    data=[
        {consulta:'Consulta 1', desc:'Desplegar cada profesional, y el número de inventos que tiene asignados ordenados de mayor a menor.'},
        {consulta:'Consulta 2', desc:'Desplegar los países de cada continente y el número de preguntas que han contestado de cualquier encuesta. Si hay países que no han contestado ninguna encuesta, igual debe aparecer su nombre el la lista'},
        {consulta:'Consulta 3', desc:'Desplegar todos los países que no tengan ningún inventor y que no tengan ninguna frontera con otro país ordenados por su área.'},
        {consulta:'Consulta 4', desc:'Desplegar el nombre de cada jefe seguido detodos sus subalternos, para todos los profesionales ordenados por el jefe alfabéticamente.'},
        {consulta:'Consulta 5', desc:'Desplegar todos los profesionales, y su salario cuyo salario es mayor al promedio del salario de los profesionales en su misma área.'},
        {consulta:'Consulta 6', desc:'Desplegar los nombres de los países que han contestado encuestas, ordenados del país que másaciertos ha tenido hasta el que menos aciertos ha tenido.'},
        {consulta:'Consulta 7', desc:'Desplegar los inventos documentados por todos los profesionales expertos en Óptica.'},
        {consulta:'Consulta 8', desc:'Desplegar la suma del área de todos los países agrupados por la inicial de su nombre.'},
        {consulta:'Consulta 9', desc:'Desplegar todos los inventores y sus inventos cuyo nombre del inventor inicie con las letras BE.'},
        {consulta:'Consulta 10', desc:'Desplegar el nombre de todos los inventores que inicien con B y terminen con r o con n que tengan inventos del siglo 19.'},
        {consulta:'Consulta 11', desc:'Desplegar el nombre del país y el área de todos los países que tienen mas de siete fronteras ordenarlos por el de mayor área.'},
        {consulta:'Consulta 12', desc:'Desplegar todos los inventos de cuatro letras que inicien con L.'},
        {consulta:'Consulta 13', desc:'Desplegar el nombre del profesional, su salario, su comisión y el total de salario (sueldo mas comisión) de todos los profesionales con comisión mayor que el 25% de su salario.'},
        {consulta:'Consulta 14', desc:'Desplegar cada encuesta y el número de países que las han contestado, ordenadas de mayor a menor.'},
        {consulta:'Consulta 15', desc:'Desplegar los países cuya población sea mayor a la población de los países centroamericanos juntos.'},
        {consulta:'Consulta 16', desc:'Desplegar todos los Jefes de cada profesional que no este en el mismo departamento que el del profesional que atiende al inventor Pasteur.'},
        {consulta:'Consulta 17', desc:'Desplegar el nombre de todos los inventos inventados el mismo año que BENZ invento algún invento.'},
        {consulta:'Consulta 18', desc:'Desplegar los nombres y el número de habitantes de todas las islas que tiene un área mayor o igual al área de Japón.'},
        {consulta:'Consulta 19', desc:'Desplegar todos los países con el nombre de cada país con el cual tiene una frontera.'},
        {consulta:'Consulta 20', desc:'Desplegar el nombre del profesional su salario y su comisión de los empleados cuyo salario es mayor que el doble de su comisión.'}
    ];

    setConsulta=(r)=>{
        this.setState({consulta:r})
    }
}