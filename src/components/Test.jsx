import React,{useState} from 'react'
import { Button,Input } from "@chakra-ui/react";

const Test = ({setCode}) => {
    const [show, setShow] = useState(false)
    const [answer, setAnswer] = useState(false)
    const [password, setPassword] = useState('')
  return (
    <div style={{display:'grid', gap:'5px', marginBottom:'10px'}}>
        <Button
        colorScheme="green"
        onClick={() => setShow(!show)}>โจทย์</Button>
      {show && 
      <div>
      <h1>โจทย์: ให้นักเรียนเขียนโปรแกรมเพื่อตรวจสอบข้อมูลซ้ำใน List ของ people ที่กำหนดให้ โดยมีข้อมูลดังนี้</h1>
      <code>
        <h2>{`const people = [`}</h2>
        <h2> {`{ id: 1, name: 'Alice' },`}</h2>
        <h2> {`{ id: 2, name: 'Bob' },`}</h2>
        <h2> {`{ id: 3, name: 'Alice' },`}</h2>
        <h2> {`{ id: 4, name: 'David' },`}</h2>
      <h2>{`];`}</h2>
      <h1>ถ้าพบข้อมูลซ้ำ return true ; ถ้าไม่พบข้อมูลซ้ำ return false ; และ print ข้อมูลที่ซ้ำออกมา</h1>
      </code>
      <div style={{display:"flex", gap:"5px"}}>
    <Button
        colorScheme="green"
        onClick={() => {
            if(!answer && password === 'Alice'){
                setAnswer(true)
                setCode(`function hasDuplicates(list) {
  const seen = [];

  for (const item of list) {
    const value = item['name'];
    if (seen.includes(value)) {
      console.log("this data has duplicated", value)
      return true;
    }
    seen.push(value);
  }
  return false;  // ไม่พบรายการที่ซ้ำกัน
}

const people = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Alice' },
  { id: 4, name: 'David' }
];

console.log(hasDuplicates(people));`)
            }else{
                setAnswer(false)
            }   
        }}>เฉลย</Button>
        <Input onChange={(e)=>{setPassword(e.target.value)}} placeholder='please input the password for the answer'/>
</div>
      </div>
      }
    </div>
  )
}

export default Test