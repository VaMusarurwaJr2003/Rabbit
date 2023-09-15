import React from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './widget.scss'
import rabbit from '../../assets/TSURO.png'

const Widget = ({type}) => {
let data;

//temporary
const amount = 100;
const diff = 20;

switch(type){
case "rabbit":
  data={
    title:"RABBITS",
    isMoney: false,
    link: "See all rabbits",
    icon: 
      <img src={rabbit} alt='rabbit' className='rabbit' /> 
  };
  break;

  case "orders":
  data={
    title:"ORDERS",
    isMoney: false,
    link: "View all Orders",
    icon: 
      <ShoppingCartOutlinedIcon className='icon' /> 
  };
  break;

  case "kits":
    data={
      title:"KITS",
      isMoney: false,
      link: "View all kits",
      icon: 
        <img src={rabbit} alt='rabbit' className='rabbit' /> 
    };
    break;

  case "income":
  data={
    title:"INCOME",
    isMoney: true,
    link: "View net income",
    icon: 
    <MonetizationOnOutlinedIcon className='icon' /> 
  };
  break;
  default:
    break;
}

  return (

    <div className='widget'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>
          {data.isMoney && "$" } {amount}
          </span>
        <span className='link'>{data.link}</span>
      </div>

      <div className='right'>
        <div className='percentage positive'>
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
      {data.icon}
      </div>
    </div>
  )
}

export default Widget