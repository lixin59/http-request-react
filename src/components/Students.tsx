import React from 'react';
import HTTP from '../utils/HTTP';

class Students extends React.Component<any, any> {
  state = {
    grade: 2,
    reload: false,
  }
  dataOperator(data:any) {
    console.log(data);
    return data.map((item:any) => {
      item['key'] = new Date().getTime();
      return item;
    });
  }
  render() {
    return (
      <div>
        {/* <table border="1">*/}
        {/*  <thead>*/}
        {/*    <tr>*/}
        {/*      <th>Student ID</th>*/}
        {/*      <th>Student Name</th>*/}
        {/*      <th>Grade No.</th>*/}
        {/*    </tr>*/}
        {/*  </thead>*/}
        {/*  <tbody>*/}
        {/*    <HTTP.Get*/}
        {/*      url="http://localhost:8080/getStudents"*/}
        {/*      delay={1000}*/}
        {/*      loading={*/}
        {/*        <tr>*/}
        {/*          <td colSpan={3} align="center">Data is loading...</td>*/}
        {/*        </tr>*/}
        {/*      }*/}
        {/*      error={*/}
        {/*        <tr>*/}
        {/*          <td colSpan={3} align="center">Some error occured! </td>*/}
        {/*        </tr>*/}
        {/*      }*/}
        {/*    >*/}
        {/*      {(data: any[])=>{*/}
        {/*        return data.map((item)=>(*/}
        {/*          <tr key={item.id}>*/}
        {/*            <td>{item.id}</td>*/}
        {/*            <td>{item.name}</td>*/}
        {/*            <td>{item.grade}</td>*/}
        {/*          </tr>*/}
        {/*        ));*/}
        {/*      }}*/}
        {/*    </HTTP.Get>*/}
        {/*  </tbody>*/}
        {/* </table>*/}
        {/* <table border="1">*/}
        {/*  <thead>*/}
        {/*    <tr>*/}
        {/*      <th>Student ID</th>*/}
        {/*      <th>Student Name</th>*/}
        {/*      <th>Grade No.</th>*/}
        {/*      <th>Student key</th>*/}
        {/*    </tr>*/}
        {/*  </thead>*/}
        {/*  <tbody>*/}
        {/*    <HTTP.Post*/}
        {/*      url="http://localhost:8080/getGradeStudents"*/}
        {/*      data={{*/}
        {/*        grade: this.state.grade,*/}
        {/*      }}*/}
        {/*      dataOperator={this.dataOperator}*/}
        {/*      delay={2000}*/}
        {/*      loading={*/}
        {/*        <tr>*/}
        {/*          <td colSpan={3} align="center">Data is loading...</td>*/}
        {/*        </tr>*/}
        {/*      }*/}
        {/*      error={*/}
        {/*        <tr>*/}
        {/*          <td colSpan={3} align="center">Some error occured! </td>*/}
        {/*        </tr>*/}
        {/*      }*/}
        {/*    >*/}
        {/*      {(data: any[])=>{*/}
        {/*        return data.map((item)=>(*/}
        {/*          <tr key={item.id}>*/}
        {/*            <td>{item.id}</td>*/}
        {/*            <td>{item.name}</td>*/}
        {/*            <td>{item.grade}</td>*/}
        {/*            <td>{item.key}</td>*/}
        {/*          </tr>*/}
        {/*        ));*/}
        {/*      }}*/}
        {/*    </HTTP.Post>*/}
        {/*  </tbody>*/}
        {/* </table>*/}
        <button
          onClick={()=> {
            this.setState({ reload: !this.state.reload });
            console.log(this.state.reload);
          }}
        >刷新</button>
        <table
          border="1"
          style={{ width: '200px', margin: '100px' }}
        >
          <thead style={{ backgroundColor: '#1fdbdb' }}>
            <tr>
              <th>id</th>
              <td>{'gun_id'}</td>
              <td>{'workorder_id'}</td>
              <td>{'sequence'}</td>
              <td>{'count'}</td>
              <td>{'total'}</td>
              <td>{'mode'}</td>
            </tr>
          </thead>
          <tbody>
            <HTTP.Get
              url="http://localhost:8080/getTools"
              delay={1000}
              reload={this.state.reload}
              loading={
                <tr>
                  <td colSpan={3} align="center">Data is loading...</td>
                </tr>
              }
              error={
                <tr>
                  <td colSpan={3} align="center">Some error occured! </td>
                </tr>
              }
            >
              {(data: any[])=>{
                return data.map((item)=>(
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.gun_id}</td>
                    <td>{item.workorder_id}</td>
                    <td>{item.sequence}</td>
                    <td>{item.count}</td>
                    <td>{item.total}</td>
                    <td>{item.mode}</td>
                  </tr>
                ));
              }}
            </HTTP.Get>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Students;
