import React from 'react';
import { Card} from 'antd';
import Pic from '../assets/pic.png'

const { Meta } = Card;

const Month: React.FC = () => {
    return (
        <Card style={{ width: '100%' , marginRight:'10px'}} cover={
            <img alt="example" src={Pic} />}>
            <Meta title="September" description="2021.01.03"/>
        </Card>
    )
}

export default Month
