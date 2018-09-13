import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchData} from './Actions/index'
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
//import Select, { Option } from 'rc-select';
//import 'rc-select/assets/index.css';

class ResultList extends Component {
    constructor (props) {
      super(props)
      this.state = {value: ''};
      this.state = { 
        SelectObj : {}
      };
      this.handleChange = this.handleChange.bind(this);
    } 
    handleChange(dataListRes) {
      this.setState({value: dataListRes});
    }
    componentWillMount(){
        this.props.fetchData()
    }
    getResultData(){
        const { selectedOption } = this.state;
        const value = dataListRes && dataListRes.value;
        const {dataListRes} = this.props
        if (dataListRes.data.Data != undefined){
            
            return (<Table responsive striped hover>
                <tbody>
                {
                    dataListRes.data.Data.map(p=> {
                    return (
                        <tr key={p.IdCentro}>
                        <td>{`${p.IdCentro}:`}</td>
                        <td><strong>{p.Codigo}</strong></td>
                        </tr>
                    )
                    })
                }
                </tbody>
            </Table>)
          //return (        
          //  <Select 
          //  value={this.state.value} 
          //  onChange={this.handleChange}
          //  onSelect={this.onSelect}
          //  onInputKeyDown={this.onKeyDown}
          //  notFoundContent=""
          //  allowClear
          //  placeholder="please select"
          //  combobox
          //  backfill
          //  >{dataListRes.data.Data.map(p=>
          //      <Option value={""+p.name+""}>{p.Text}</Option>
          //  )}
          //  </Select>
          //)
        }
        //if (dataListRes.data.Data != undefined){
        //  //return dataListRes.data.Data.map(p=> {p.Text}
        //    //<strong className = "partners" key={p.Value}> {p.Text} </strong>
        //<Select 
        //>
        //    {dataListRes.data.Data.map((product) => {
        //        return(
        //        <Option value={""+product.Value+""}>{product.Text}</Option>
        //        )
        //    })}
        //</Select>
        //}
    }
    render(){
        return (
            <div>
                {this.props.dataListRes.isFetching && <text>Loadin</text>}
                {
                    this.getResultData()
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    
    return {dataListRes: state.dataReducer}
}
const mapDispatchToProps = dispatch =>{
    return{
        fetchData: () => dispatch(fetchData())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ResultList)