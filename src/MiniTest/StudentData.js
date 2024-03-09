import React, { Component } from 'react'
import Data from './Data'
import { Container, Table } from "reactstrap"
export default class StudentData extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            arr: Data(),
            student: []
        })
    }

    componentDidMount() {
        this.handelDisplay()
    }

    handelDisplay = () => {
        const arr = Data()
        this.setState({
            student: this.state.arr.map((item) => ({
                name: item.Hoten,
                quequan: item.Quequan,
                namsinh: item.Ngasinh,
                gioitinh: item.Qtinh
            }
            ))
        })
    }
    render() {
        return (
            <div>
                <Container onClick={this.handelDisplay}>
                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                                <div className="col">
                                    Danh Sách Học Sinh
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <Table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Họ Và Tên</th>
                                        <th>Quê Quán</th>
                                        <th>Năm Sinh</th>
                                        <th>Giới Tính</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.student.map((item, key) => (
                                        <tr>
                                            <td>{key + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.quequan}</td>
                                            <td>{item.namsinh}</td>
                                            <td>{item.gioitinh}</td>
                                        </tr>
                                    ))}

                                </tbody>
                            </Table>
                        </div>
                    </div>

                </Container>
            </div>
        )
    }
}
