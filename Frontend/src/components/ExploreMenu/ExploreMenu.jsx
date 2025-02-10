import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets' 

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu featuring a delecatable array of dishes . Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      <div className="explore-menu-items">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev==item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-items-list'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="menu-image" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })
        }
      </div>
      <hr />
    </div>
  )
}
import './ExploreMenu.css'
export default ExploreMenu
