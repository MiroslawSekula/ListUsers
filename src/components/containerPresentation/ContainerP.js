import React from 'react'
import './ContainerP.css'
import GetAxios from '../AxiosComponent/GetAxiosComponent';

    
    function ContainerP() {
        return (
            <div className="tableStyle">
            <table className="table costomTable" id="costomTable">
                <thead>
                    <tr className="costomTableHead">
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>tel</th>
                    </tr>
                </thead>
                    <GetAxios/>
                </table>
        </div>
      );
    }


export default ContainerP;





