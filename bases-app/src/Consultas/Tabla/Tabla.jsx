import React from 'react';
import { Table } from 'rsuite';
import Http from '../../Http/Http';
const { Column, HeaderCell, Cell, Pagination } = Table;

export default class Tabla extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: [],
            disLength:20,
            page:1
        };
        Http.consulta(this.props.consulta).then((val)=>{
            this.setState({
                loading: false,
                data: val
            });
        });
        
    }
    render(){
        return(
            <div style={{width:'90%', margin:'20px auto'}}>
                {this.getTable()}
                <Pagination
                    lengthMenu={[
                        {
                            value: 20,
                            label: 20
                        },
                        {
                            value: 50,
                            label: 50
                        },
                        {
                            value: 100,
                            label: 100
                        }
                    ]}
                    activePage={this.state.page}
                    displayLength={this.state.disLength}
                    total={this.state.data.length}
                    onChangePage={this.changePage}
                    onChangeLength={this.changeLength}
                />
            </div>
        );
    }

    getTable=()=>{
        switch(this.props.consulta) {
            case 1:
                return (
                    <Table height={420} data={this.getData()} loading={this.state.loading}  autoHeight>
                        <Column width={300} align="center" fixed>
                            <HeaderCell>Profesional</HeaderCell>
                            <Cell dataKey="Profesional" />
                        </Column>

                        <Column width={300} fixed>
                            <HeaderCell>Inventos Asignados</HeaderCell>
                            <Cell dataKey="Inventos_asignados" />
                        </Column>
                    </Table>
                );
            case 2:
                return (
                    <Table height={420} data={this.getData()} loading={this.state.loading} autoHeight>
                        <Column width={300} align="center" fixed>
                            <HeaderCell>Pais</HeaderCell>
                            <Cell dataKey="Pais" />
                        </Column>

                        <Column width={300} fixed>
                            <HeaderCell>Respuestas</HeaderCell>
                            <Cell dataKey="Respuestas" />
                        </Column>
                    </Table>
                );
            case 3:
                return (
                    <Table height={420} data={this.getData()} loading={this.state.loading} autoHeight>
                        <Column width={300} align="center" fixed>
                            <HeaderCell>Pais</HeaderCell>
                            <Cell dataKey="Pais" />
                        </Column>

                        <Column width={300} fixed>
                            <HeaderCell>Area</HeaderCell>
                            <Cell dataKey="Area" />
                        </Column>
                    </Table>
                );
            case 4:
                return (
                    <Table height={420} data={this.getData()} loading={this.state.loading} autoHeight>
                        <Column width={300} align="center" fixed>
                            <HeaderCell>Area</HeaderCell>
                            <Cell dataKey="Area" />
                        </Column>

                        <Column width={300} fixed>
                            <HeaderCell>Jefe de jefes</HeaderCell>
                            <Cell dataKey="Jefe de jefes" />
                        </Column>
                        <Column width={300} fixed>
                            <HeaderCell>Jefe</HeaderCell>
                            <Cell dataKey="Jefe" />
                        </Column>
                        <Column width={300} fixed>
                            <HeaderCell>Subalternos</HeaderCell>
                            <Cell dataKey="Subalternos" />
                        </Column>
                    </Table>
                );
            case 5:
                return (
                    <Table height={420} data={this.getData()} loading={this.state.loading} autoHeight>
                        <Column width={300} align="center" fixed>
                            <HeaderCell>Area</HeaderCell>
                            <Cell dataKey="Area" />
                        </Column>

                        <Column width={300} fixed>
                            <HeaderCell>Profesional</HeaderCell>
                            <Cell dataKey="Prof" />
                        </Column>
                        <Column width={300} fixed>
                            <HeaderCell>Salario</HeaderCell>
                            <Cell dataKey="Salario" />
                        </Column>
                        <Column width={300} fixed>
                            <HeaderCell>Promedio</HeaderCell>
                            <Cell dataKey="Prom" />
                        </Column>
                    </Table>
                );
            case 6:
                return (
                    <Table height={420} data={this.getData()} loading={this.state.loading} autoHeight>
                        <Column width={300} align="center" fixed>
                            <HeaderCell>Pais</HeaderCell>
                            <Cell dataKey="Pais" />
                        </Column>

                        <Column width={300} fixed>
                            <HeaderCell>Correctas</HeaderCell>
                            <Cell dataKey="Correctas" />
                        </Column>
                    </Table>
                );
            case 7:
                return (
                    <Table height={420} data={this.getData()} loading={this.state.loading} autoHeight>
                        <Column width={300} align="center" fixed>
                            <HeaderCell>Invento</HeaderCell>
                            <Cell dataKey="Invento" />
                        </Column>

                        <Column width={300} fixed>
                            <HeaderCell>Profesional</HeaderCell>
                            <Cell dataKey="Profesional" />
                        </Column>
                        <Column width={300} fixed>
                            <HeaderCell>Area</HeaderCell>
                            <Cell dataKey="Area" />
                        </Column>
                    </Table>
                );
            case 8:
                return (
                    <Table height={420} data={this.getData()} loading={this.state.loading} autoHeight>
                        <Column width={300} align="center" fixed>
                            <HeaderCell>Inicial</HeaderCell>
                            <Cell dataKey="Inicial" />
                        </Column>

                        <Column width={300} fixed>
                            <HeaderCell>Area</HeaderCell>
                            <Cell dataKey="Area" />
                        </Column>
                    </Table>
                );
            case 9:
                return (
                    <Table height={420} data={this.getData()} loading={this.state.loading} autoHeight>
                        <Column width={300} align="center" fixed>
                            <HeaderCell>Inventor</HeaderCell>
                            <Cell dataKey="Inventor" />
                        </Column>

                        <Column width={300} fixed>
                            <HeaderCell>Invento</HeaderCell>
                            <Cell dataKey="Invento" />
                        </Column>
                    </Table>
                );
            case 10:
                return (
                    <Table height={420} data={this.getData()} loading={this.state.loading} autoHeight>
                        <Column width={300} align="center" fixed>
                            <HeaderCell>Inventor</HeaderCell>
                            <Cell dataKey="Inventor" />
                        </Column>

                        <Column width={300} fixed>
                            <HeaderCell>Invento</HeaderCell>
                            <Cell dataKey="Invento" />
                        </Column>
                        <Column width={300} fixed>
                            <HeaderCell>Anio</HeaderCell>
                            <Cell dataKey="Anio" />
                        </Column>
                    </Table>
                );
            case 11:
                return (
                    <Table height={420} data={this.getData()} loading={this.state.loading} autoHeight>
                        <Column width={300} align="center" fixed>
                            <HeaderCell>Pais</HeaderCell>
                            <Cell dataKey="Pais" />
                        </Column>

                        <Column width={300} fixed>
                            <HeaderCell>Area</HeaderCell>
                            <Cell dataKey="Area" />
                        </Column>
                        <Column width={300} fixed>
                            <HeaderCell>Fronteras</HeaderCell>
                            <Cell dataKey="Fronteras" />
                        </Column>
                    </Table>
                );
            case 12:
                return (
                    <Table height={420} data={this.getData()} loading={this.state.loading} autoHeight>
                        <Column width={300} align="center" fixed>
                            <HeaderCell>Invento</HeaderCell>
                            <Cell dataKey="Invento" />
                        </Column>
                    </Table>
                );
            case 13:
                return (
                    <Table height={420} data={this.getData()} loading={this.state.loading} autoHeight>
                        <Column width={300} fixed>
                            <HeaderCell>Profesional</HeaderCell>
                            <Cell dataKey="Prof" />
                        </Column>
                        <Column width={300} fixed>
                            <HeaderCell>Salario</HeaderCell>
                            <Cell dataKey="Salario" />
                        </Column>
                        <Column width={300} fixed>
                            <HeaderCell>Comision</HeaderCell>
                            <Cell dataKey="Comision" />
                        </Column>
                        <Column width={300} fixed>
                            <HeaderCell>Total</HeaderCell>
                            <Cell dataKey="Total" />
                        </Column>
                    </Table>
                );
            case 14:
                return (
                    <Table height={420} data={this.getData()} loading={this.state.loading} autoHeight>
                        <Column width={300} align="center" fixed>
                            <HeaderCell>Encuesta</HeaderCell>
                            <Cell dataKey="Encuesta" />
                        </Column>

                        <Column width={300} fixed>
                            <HeaderCell>Paises</HeaderCell>
                            <Cell dataKey="Paises" />
                        </Column>
                    </Table>
                );
            case 15:
                return (
                    <Table height={420} data={this.getData()} loading={this.state.loading} autoHeight>
                        <Column width={300} align="center" fixed>
                            <HeaderCell>Pais</HeaderCell>
                            <Cell dataKey="Pais" />
                        </Column>

                        <Column width={300} fixed>
                            <HeaderCell>Poblacion</HeaderCell>
                            <Cell dataKey="Poblacion" />
                        </Column>
                    </Table>
                );
            case 16:
                return (
                    <Table height={420} data={this.getData()} loading={this.state.loading} autoHeight>
                        <Column width={300} align="center" fixed>
                            <HeaderCell>Area</HeaderCell>
                            <Cell dataKey="Area" />
                        </Column>

                        <Column width={300} fixed>
                            <HeaderCell>Profesional</HeaderCell>
                            <Cell dataKey="Prof" />
                        </Column>
                    </Table>
                );
            case 17:
                return (
                    <Table height={420} data={this.getData()} loading={this.state.loading} autoHeight>
                        <Column width={300} align="center" fixed>
                            <HeaderCell>Invento</HeaderCell>
                            <Cell dataKey="Invento" />
                        </Column>
                    </Table>
                );
            case 18:
                return (
                    <Table height={420} data={this.getData()} loading={this.state.loading} autoHeight>
                        <Column width={300} align="center" fixed>
                            <HeaderCell>Pais</HeaderCell>
                            <Cell dataKey="Pais" />
                        </Column>

                        <Column width={300} fixed>
                            <HeaderCell>Area</HeaderCell>
                            <Cell dataKey="Area" />
                        </Column>
                    </Table>
                );
            case 19:
                return (
                    <Table height={420} data={this.getData()} loading={this.state.loading} autoHeight>
                        <Column width={300} align="center" fixed>
                            <HeaderCell>Pais</HeaderCell>
                            <Cell dataKey="Pais" />
                        </Column>

                        <Column width={300} fixed>
                            <HeaderCell>Fronteras</HeaderCell>
                            <Cell dataKey="Fronteras" />
                        </Column>
                    </Table>
                );
            case 20:
                return (
                    <Table height={420} data={this.getData()} loading={this.state.loading} autoHeight>
                        <Column width={300} fixed>
                            <HeaderCell>Profesional</HeaderCell>
                            <Cell dataKey="Prof" />
                        </Column>
                        <Column width={300} fixed>
                            <HeaderCell>Salario</HeaderCell>
                            <Cell dataKey="Salario" />
                        </Column>
                        <Column width={300} fixed>
                            <HeaderCell>Comision</HeaderCell>
                            <Cell dataKey="Comision" />
                        </Column>
                    </Table>
                );
            default:
                return(
                    <h1>Error de consulta</h1>
                )
        }
    }
    getData=()=>{
        const start = this.state.disLength * (this.state.page-1);
        const end = start + this.state.disLength;
        return this.state.data.slice( start, end );
    }
    changeLength=(dk)=>{
        this.setState({page:1, disLength: dk})
    }
    changePage=(dk)=>{
        this.setState({page:dk});
    }
}