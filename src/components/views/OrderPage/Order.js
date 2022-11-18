import axios from 'axios';
import React, { useState } from 'react'
import {Button ,Form, InputGroup} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import StoreNamePage from './StoreNamePage';

function Search() {
    const navigator=useNavigate()
    const [StoreList, setStoreList] = useState([])
    const [Keyword, setKeyword] = useState("")
    const [MemberId, setMemberId] = useState("")




    const searchValueHandler=(e)=>{
        setKeyword(e.currentTarget.value)
        console.log("검색",Keyword)
    }
    const memberId=(e)=>{
        setMemberId(e.currentTarget.value)
    }
    const variable={
        "keyword":Keyword,
        "memberId":MemberId
    }
    const searchHandler=(e)=>{
        e.preventDefault() 
        axios.post(process.env.REACT_APP_BE_URL + '/api/search',variable)
        .then(response=>{
            if(response.data.success){
                setStoreList(response.data)
            }else{
                alert("가게목록 조회 실패 했어요")
            }
        })
    }

    return (
        <div className=''>
            <div>
                <InputGroup className="mb-3" action="search" >
                    <Form.Control
                    placeholder="뭘 검색 할꺼니?"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={searchValueHandler}
                    />
                    <Form.Control
                    placeholder="유저 id long"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={memberId}
                    />
                        <Button variant="outline-secondary" id="button-search" type="submit" onClick={searchHandler}>
                        검색
                        </Button>
                </InputGroup>
            </div>
            <div>
                <StoreNamePage storeList={StoreList.data}/>
            </div>
        </div>
  )
}

export default Search