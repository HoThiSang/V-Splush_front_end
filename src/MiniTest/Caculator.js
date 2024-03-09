import React, { useState } from 'react'
import {Container,Input,Button,Form,FormGroup,Label} from "reactstrap"
const Caculator = () => {
    const [values,setValues]=useState({
        hocky1:"",
        hocky2:""
    })
    const [sum,setSum]=useState("")
    const [result,setResult]=useState("")
    const [hocluc,setHocluc]=useState("")

    const handelValues=(e)=>{
        const value=e.target.value
        setValues(value)
    }
    const handelSubmit =(e)=>{
        e.preventDefault()
        const hk1=e.target.hk1.value
        const hk2=e.target.hk2.value

        let ketqua={}
        let hocluc={}
        var Sum=(parseFloat(hk1)+parseFloat(hk2))/2

        if(Sum>4 && Sum<=6){
            ketqua="Bạn được lên lớp"
            hocluc="Học sinh trung bình"
        }else if(Sum>6 && Sum<=7.5){
            ketqua="Bạn được lên lớp"
            hocluc="Học sinh Khá"
        }else if(Sum>7.5 && Sum<=8.5){
            ketqua="Bạn được lên lớp"
            hocluc="Học sinh Giỏi"
        }else if(Sum>8.5 && Sum<=10){
            ketqua="Bạn được lên lớp"
            hocluc="Học sinh Xuất sắc"
        }else{
            ketqua="Bạn không được lên lớp"
            hocluc="Học sinh Yếu"
        }

        setHocluc(hocluc)
        setResult(ketqua)
        setSum(Sum)
       
    }
  return (
    <div>
      <Container>
        <Form onSubmit={handelSubmit}>
            <FormGroup>
                <Label>Học kỳ một</Label>
                <Input onChange={handelValues} value={values.hocky1} name='hk1'></Input>
            </FormGroup>
            <FormGroup>
                <Label>Học kỳ hai</Label>
                <Input onChange={handelValues} value={values.hocky2} name='hk2'></Input>
            </FormGroup>
            <Button type='submit'>Tính</Button>
        </Form>
        <FormGroup>
                <Label>Tổng điểm</Label>
                <Input name='hk1' value={sum}></Input>
            </FormGroup>
            <FormGroup>
                <Label>Kêt quả</Label>
                <Input name='hk1' value={result}></Input>
            </FormGroup>
            <FormGroup>
                <Label>Học lực</Label>
                <Input name='hk1' value={hocluc}></Input>
            </FormGroup>
      </Container>
    </div>
  )
}

export default Caculator
