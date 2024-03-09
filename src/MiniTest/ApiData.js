import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Container} from "reactstrap"
const ApiData = () => {
    const [value,setValue]=useState([])

    useEffect(()=>{
        GetAPI()
    },[])

    const GetAPI =async()=>{
        const url=await axios.get("https://645de77c12e0a87ac0e2722d.mockapi.io/danhsachsinhvien")
        setValue(url.data)
    }
  return (
    <div>
      <Container>
        <div className="card">
            <div className="card-header">
                <div className="row">
                    Danh Dách Học Sinh
                </div>
            </div>
            <div className="card-body">
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>Tên</th>
                            <th>Giới tính</th>
                            <th>Quê quán</th>
                            <th>Số điện thoại</th>
                        </tr>
                    </thead>
                    <tbody>
                    {value.map((item)=>(
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.gioitinh}</td>
                            <td>{item.quequan}</td>
                            <td>{item.sodienthoai}</td>
                        </tr>
                    ))}
                        
                    </tbody>
                </table>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default ApiData
