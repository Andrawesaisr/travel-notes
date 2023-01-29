import React from 'react';
import './style.css';
import Bar from './component/bar';
import Card from './component/card'
import data from './data';
export default function App(){
    const info=data.map((item)=>{
       return <Card
        {...item}
        />
    })
    return (
        <div>
          <Bar />
        {info}          
        </div>
    );
}