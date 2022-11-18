import React from 'react'
import {Table} from 'react-bootstrap'

function StoreNamePage(props) {
    const {storeList} = props;
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>가게이름</th>
                        <th>가게주소</th>
                        <th>가게카테고리</th>
                        <th>가게평점</th>
                    </tr>
                </thead>
                <tbody>
                    {storeList?.map((store,index)=>(
                        <tr key={index}>
                            <td>{store.name}</td>
                            <td>{store.address}</td>
                            <td>{store.category}</td>
                            <td>{store.avgStar}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default StoreNamePage