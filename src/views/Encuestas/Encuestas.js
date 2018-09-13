import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Modal, ModalBody, ModalFooter, ModalHeader, Nav, NavItem, NavLink,
     Pagination, PaginationItem, PaginationLink, Row, Table, TabContent, TabPane, Tooltip } from 'reactstrap';
import Widget03 from '../../views/Widgets/Widget03'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import axios from 'axios';
import classNames from 'classnames';
import ReactFileReader from 'react-file-reader';
import Excel from "../../assets/img/ExcelIcon.png";
import Workbook from 'react-excel-workbook'
import readXlsxFile from 'read-excel-file'
 
const parseJson = require('parse-json');
const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

// Card Chart 1
const cardChartData1 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandPrimary,
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40],
    },
  ],
};

const cardChartOpts1 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData1.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData1.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  }
}


// Card Chart 2
const cardChartData2 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: brandInfo,
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11],
    },
  ],
};

const cardChartOpts2 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent',
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        },

      }],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, cardChartData2.datasets[0].data) - 5,
          max: Math.max.apply(Math, cardChartData2.datasets[0].data) + 5,
        },
      }],
  },
  elements: {
    line: {
      tension: 0.00001,
      borderWidth: 1,
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 3
const cardChartData3 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40],
    },
  ],
};

const cardChartOpts3 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
    },
  },
};

// Card Chart 4
const cardChartData4 = {
  labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'transparent',
      data: [78, 81, 80, 45, 34, 12, 40, 75, 34, 89, 32, 68, 54, 72, 18, 98],
    },
  ],
};

const cardChartOpts4 = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
        barPercentage: 0.6,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
};

// Social Box Chart
const socialBoxData = [
  { data: [65, 59, 84, 84, 51, 55, 40], label: 'facebook' },
  { data: [1, 13, 9, 17, 34, 41, 38], label: 'twitter' },
  { data: [78, 81, 80, 45, 34, 12, 40], label: 'linkedin' },
  { data: [35, 23, 56, 22, 97, 23, 64], label: 'google' },
];

const makeSocialBoxData = (dataSetNo) => {
  const dataset = socialBoxData[dataSetNo];
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'rgba(255,255,255,.1)',
        borderColor: 'rgba(255,255,255,.55)',
        pointHoverBackgroundColor: '#fff',
        borderWidth: 2,
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const socialChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

// sparkline charts
const sparkLineChartData = [
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'New Clients',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Recurring Clients',
  },
  {
    data: [35, 23, 56, 22, 97, 23, 64],
    label: 'Pageviews',
  },
  {
    data: [65, 59, 84, 84, 51, 55, 40],
    label: 'Organic',
  },
  {
    data: [78, 81, 80, 45, 34, 12, 40],
    label: 'CTR',
  },
  {
    data: [1, 13, 9, 17, 34, 41, 38],
    label: 'Bounce Rate',
  },
];

const makeSparkLineData = (dataSetNo, variant) => {
  const dataset = sparkLineChartData[dataSetNo];
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        backgroundColor: 'transparent',
        borderColor: variant ? variant : '#c2cfd6',
        data: dataset.data,
        label: dataset.label,
      },
    ],
  };
  return () => data;
};

const sparklineChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    xAxes: [
      {
        display: false,
      }],
    yAxes: [
      {
        display: false,
      }],
  },
  elements: {
    line: {
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
  legend: {
    display: false,
  },
};

// Main Chart

//Random Numbers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var elements = 27;
var data1 = [];
var data2 = [];
var data3 = [];

for (var i = 0; i <= elements; i++) {
  data1.push(random(50, 200));
  data2.push(random(80, 100));
  data3.push(65);
}

const mainChart = {
  labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: hexToRgba(brandInfo, 10),
      borderColor: brandInfo,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data1,
    },
    {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: brandSuccess,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: data2,
    },
    {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: brandDanger,
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: data3,
    },
  ],
};

const mainChartOpts = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips,
    intersect: true,
    mode: 'index',
    position: 'nearest',
    callbacks: {
      labelColor: function(tooltipItem, chart) {
        return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
      }
    }
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          drawOnChartArea: false,
        },
      }],
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250,
        },
      }],
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3,
    },
  },
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      modal: false,
      OpenModalValid: false,
      radioSelected: 2,
      ResulInter: "",
      result: [],
      tooltipOpen: [false, false],
      ObjExcelCabecera : [],
      ObjExcelDetalle : [],
      ObjExcelOpcion : [],
      tooltips: [
        {
          placement: 'top',
          text: 'Top',
        },
        {
          placement: 'bottom',
          text: 'Bottom',
        },
        {
          placement: 'left',
          text: 'Left',
        },
        {
          placement: 'right',
          text: 'Right',
        },
      ],
      activeTab: '1',
      NombreExcel : "Selectionar Archivo Excel"
    };
    this.toggle             =   this.toggle.bind(this);
    this.toggleTab          =   this.toggleTab.bind(this);
    this.AddEncuesta        =   this.AddEncuesta.bind(this);
    this.EditEncuesta       =   this.EditEncuesta.bind(this);
    this.DeleteEncuesta     =   this.DeleteEncuesta.bind(this);
    this.RefreshEncuesta    =   this.RefreshEncuesta.bind(this);
    this.FileUploadChange   =   this.FileUploadChange.bind(this);  
    this.InsertaEncuesta    =   this.InsertaEncuesta.bind(this);  
    this.RemplaceCabecera   =   this.RemplaceCabecera.bind(this); 
    this.RemplaDetalle      =   this.RemplaDetalle.bind(this); 
    this.RemplaceOpciones   =   this.RemplaceOpciones.bind(this);  
    this.CloseModalValid    =   this.CloseModalValid.bind(this);  
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  AddEncuesta() {
    this.setState({
      danger: !this.state.danger,
      ObjExcelCabecera : [],
      ObjExcelDetalle : [],
      ObjExcelOpcion : [],
    });
  }
  CloseModalValid(){
    this.setState({OpenModalValid: false});
  }
  EditEncuesta() {
    this.setState({
      danger: !this.state.danger,
    });
  }

  DeleteEncuesta() {
    this.setState({
      danger: !this.state.danger,
    });
  }

  RefreshEncuesta() {
    this.setState({
      danger: !this.state.danger,
    });
  }

  toggle(i) {
    const newArray = this.state.tooltipOpen.map((element, index) => {
      return (index === i ? !element : false);
    });
    this.setState({
      tooltipOpen: newArray,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  componentDidMount() {
    var config = {
        headers: {  
            'Access-Control-Allow-Origin': '*'
        }, 
        withCredentials : false, 
        Credentials: true 
      };
    //axios.get(`http://red.lindley.pe/AmigoApi/api/CargaParametro/Listar`, config)
    axios.get(`http://localhost:51237/api/CargaParametro/Listar`, config)
    //axios.get('https://jsonplaceholder.typicode.com/users', config)
    .then(res => { 
        const result = res.data.Data.Listas;
        this.setState({ result });
    })  
    .catch(function (error) {
        // handle error 
        console.log(error);    
    })
  } 
  FileUploadChange = (files) => {
      var asdas = files;
      const NomExcel = files[0].name;

      //var Url = "http://red.lindley.pe/AmigoApi/api/CargaParametro/Listar";
      //ExcelInsertData((Url,model)
            
      //this.setState({OpenModalValid: true});
      readXlsxFile(files[0]).then((rows) => {
          const ImpExcel = rows.filter(c => c["0"] != "SURCOD")
          this.setState({
              ObjExcelCabecera : ImpExcel,
              NombreExcel : NomExcel
          })
      })
            
      readXlsxFile(files[0], { sheet: 2 }).then((rows) => {
          const ImpExcel1 = rows.filter(d => d["0"] != "SURCOD")
          this.setState({
              ObjExcelDetalle : ImpExcel1
          })
      })
            
      readXlsxFile(files[0], { sheet: 3 }).then((rows) => {
          const ImpExcel2 = rows.filter(o => o["0"] != "SURCOD")
          this.setState({
              ObjExcelOpcion : ImpExcel2
          })
      })
  }  
  InsertaEncuesta() {
    var config = {
        headers: {  
            'Access-Control-Allow-Origin': '*'
        }, 
        withCredentials : false, 
        Credentials: true 
    }
    var Url =  "http://localhost:51237/api/CargaParametro/RegistrarEncuesta"; 
    var ObjCabecera = this.RemplaceCabecera(this.state.ObjExcelCabecera).replace("},]","}]");
    var ObjDetalle  = this.RemplaDetalle(this.state.ObjExcelDetalle).replace("},]","}]");
    var ObjOpcion   = this.RemplaceOpciones(this.state.ObjExcelOpcion).replace("},]","}]");
    var data = {"Id_TempEncuesta": 10, "Str_Cabecera": ObjCabecera , "Str_Detallle": ObjDetalle, "Str_Opciones": ObjOpcion }
    axios.post(Url, data)
    .then(res => { 
        const ResulInter = res.data.Data;
        this.setState({ ResulInter });
        
        this.AddEncuesta();
        this.setState({OpenModalValid: true});
    })  
    .catch(function (error) {
        // handle error 
        console.log(error);    
    })
  } 
  
  RemplaceCabecera(ObjExcel){       
    var i = 0; 
    var string = "";  
    var Sep = ""; 
    for(const i in ObjExcel){
        if( ObjExcel.length == 1){ Sep = "}" }else{ Sep = "}," }
        string += ('{"SURCOD":' + ObjExcel[i][0] + ',"SURDES":"' + ObjExcel[i][1] + '"' + Sep);
    }
    return ('['+string+']');
  }
  RemplaDetalle(ObjExcel){       
    var i = 0; 
    var string = ""; 
    var Sep = ""; 
    for(const i in ObjExcel){
        if( ObjExcel.length == 1){ Sep = "}" }else{ Sep = "}," }
        var CORRELATIVO = (ObjExcel[i][4] == null ? 1 : ObjExcel[i][4]);
        string += ('{"SURCOD":' + ObjExcel[i][0] + ',"SURQSTDES":"' + ObjExcel[i][1] + '"' + ',"SURQSTNUM":"' + ObjExcel[i][2] +  '","SURANSTYP":"' + ObjExcel[i][3]  +  '","CORRELATIVO":' + CORRELATIVO + Sep);
    }
    return ('['+string+']');
  }	
  RemplaceOpciones(ObjExcel){       
    var i = 0; 
    var string = "";  
    var Sep = ""; 
    for(const i in ObjExcel){
        if( ObjExcel.length == 1){ Sep = "}" }else{ Sep = "}," }
        string += ('{"SURCOD":' + ObjExcel[i][0] + ',"SURQSTNUM":"' + ObjExcel[i][1] + '"' + ',"SURCMBKEY":"' + ObjExcel[i][2] +  '","SURCMBDES":"' + ObjExcel[i][3] + '"' + Sep);
    }			
    return ('['+string+']');
  }
  render() { 
    var ClassExcel = null; 
    var ListExcel = [];
    ClassExcel  =   <Button  block outline color="secondary" aria-label="Plantilla Encuesta Excel">
                        <img src={Excel} alt="Plantilla Encuesta Excel" height="18"/>
                    </Button>

    return (
      <div className="animated fadeIn">
        <Row>
            <Col>
            <Card>
                <CardHeader>
                <i className="fa fa-align-justify"></i> Lista De Encuestas
                </CardHeader>
                <CardBody>
                <Table responsive striped>
                    <thead>
                    <tr>
                    <th>#Id</th>
                    <th>Nombre Encuesta</th>
                    <th></th>
                    <th>
                        {/* 
                        <Button  block outline color="secondary" aria-label="Plantilla Encuesta Excel" >
                            <img src={Excel} alt="Plantilla Encuesta Excel" height="18"/>
                        </Button> 
                        */}
                        <Workbook filename="PlantillaEncuesta.xlsx" element={ClassExcel}>
                            <Workbook.Sheet data={ListExcel} name="CABECERA">
                                <Workbook.Column label="SURCOD" value="name"  />
                                <Workbook.Column label="SURDES" value="name"  />
                            </Workbook.Sheet>
                            <Workbook.Sheet data={ListExcel} name="DETALLE">
                                <Workbook.Column label="SURCOD"     value="name"  />
                                <Workbook.Column label="SURQSTDES"  value="name"  />
                                <Workbook.Column label="SURANSTYP"  value="name"  />
                            </Workbook.Sheet>
                            <Workbook.Sheet data={ListExcel} name="OPCIONES">
                                <Workbook.Column label="SURCOD"     value="name"  />
                                <Workbook.Column label="SURQSTNUM"  value="name"  />
                                <Workbook.Column label="SURCMBKEY"  value="name"  />
                                <Workbook.Column label="SURCMBDES"  value="name"  />
                            </Workbook.Sheet>
                        </Workbook>
                    </th>
                    <th>
                        <Button block outline color="success" 
                                onClick={this.AddEncuesta} className="mr-1"id="AddTolTip" >
                            <i className="fa fa-plus-circle "></i>
                        </Button>
                        <Tooltip placement="top" isOpen={this.state.tooltipOpen[1]} autohide={false} target="AddTolTip" toggle={() => {this.toggle(1);}}>
                        Agregar Encuesta
                        </Tooltip>
                    </th>
                    </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.result.map(p=> 
                        <tr key={p.IdSurveyItem}>
                            <td>{p.IdSurveyItem}</td>
                            <td className="DesList">{p.Description}</td>
                            <td>
                                <Button block outline color="warning" 
                                        onClick={this.EditEncuesta} className="mr-1">
                                    <i className="icon-note"></i>
                                </Button>
                            </td>
                            <td>
                                <Button block outline color="danger" 
                                        onClick={this.DeleteEncuesta} className="mr-1">
                                    <i className="icon-trash"></i>
                                </Button>
                            </td>
                            <td>
                                <Button block outline color="info" 
                                        onClick={this.RefreshEncuesta} className="mr-1">
                                    <i className="icon-refresh"></i>
                                </Button>
                            </td>
                        </tr>                    
                      )}                      
                    </tbody>
                    <Modal isOpen={this.state.danger} toggle={this.AddEncuesta}
                        className={'modal-success ' + this.props.className}>
                        <ModalHeader toggle={this.AddEncuesta}>Agregar Nueva Encuesta</ModalHeader>
                        <ModalBody>
                          <ReactFileReader fileTypes={[".xls",".xlsx"]} base64={false} multipleFiles={false} handleFiles={this.FileUploadChange}>                                
                              <Button color="success" >Cargar Encuesta Excel</Button>
                          </ReactFileReader> <br/>
                          <Nav tabs>
                            <NavItem>
                                <NavLink className={classNames({ active: this.state.activeTab === '1' })}
                                        onClick={() => {
                                        this.toggleTab('1');
                                        }}>
                                <i className="icon-list"></i> Cabecera 
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classNames({ active: this.state.activeTab === '2' })}
                                        onClick={() => {
                                        this.toggleTab('2');
                                        }}>
                                <i className="icon-speech"></i> Detalle
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={classNames({ active: this.state.activeTab === '3' })}
                                        onClick={() => {
                                        this.toggleTab('3');
                                        }}>
                                <i className="icon-options"></i> Opciones
                                </NavLink>
                            </NavItem>
                          </Nav>
                          <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">
                                <Table responsive striped>
                                    <thead>
                                    <tr>
                                        <th>Codigo</th>
                                        <th>Nombre Encuesta</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.state.ObjExcelCabecera.map(c =>
                                        <tr key={c[0]}>
                                            <td>{c[0]}</td>
                                            <td className="DesList">{c[1]}</td>
                                        </tr>                    
                                    )}  
                                    </tbody>   
                                </Table>       
                            </TabPane>
                            <TabPane tabId="2" className="p-3">
                                <Table responsive striped>
                                    <thead>
                                        <tr>
                                        <th>Codigo</th>
                                        <th>Detalle Pregunta</th>
                                        <th>SURQSTNUM</th>
                                        <th>Tipo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.state.ObjExcelDetalle.map(d =>
                                        <tr key={d[0]}>
                                            <td>{d[0]}</td>
                                            <td>{d[1]}</td>
                                            <td>{d[2]}</td>
                                            <td>{d[3]}</td>
                                        </tr>                    
                                    )}                    
                                    </tbody>   
                                </Table>    
                            </TabPane>
                            <TabPane tabId="3" className="p-3">
                                <Table responsive striped>
                                    <thead>
                                        <tr>
                                        <th>Codigo</th>
                                        <th>SURQSTNUM</th>
                                        <th>SURCMBKEY</th>
                                        <th>SURCMBDES</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        this.state.ObjExcelOpcion.map(o =>
                                        <tr key={o[0]}>
                                            <td>{o[0]}</td>
                                            <td>{o[1]}</td>
                                            <td>{o[2]}</td>
                                            <td>{o[3]}</td>
                                        </tr>                    
                                    )}           
                                    </tbody>   
                                </Table>   
                            </TabPane>   
                          </TabContent>  
                        </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={this.InsertaEncuesta}>Agregar</Button>{' '}
                            <Button color="danger" onClick={this.AddEncuesta}>Cancelar</Button>
                        </ModalFooter>
                    </Modal>

                    <Modal isOpen={this.state.OpenModalValid} toggle={this.OpenModalValid}
                        className={'modal-success ' + this.props.className}>
                        <ModalHeader toggle={this.OpenModalValid}>Mensaje Encuesta</ModalHeader>
                        <ModalBody>   
                            <div>Se Guardo Correcnamente la Encuesta  {this.state.ResulInter}</div>             
                        </ModalBody> 
                        <ModalFooter>
                            <Button color="danger" onClick={this.CloseModalValid}>Cerrar</Button>
                        </ModalFooter>
                    </Modal> 
                </Table>
                <nav>
                    <Pagination>
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                        <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                    </Pagination>
                </nav>
                </CardBody>
            </Card>
            </Col>
        </Row>      
      </div>
    );
  }
}

export default Dashboard;
