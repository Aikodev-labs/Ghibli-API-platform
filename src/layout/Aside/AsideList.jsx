import { PropTypes } from 'prop-types';

import { NavLink } from 'react-router-dom';

const AsideList = ({ menu }) => {
  return (
    <div className='mb-4'>
        <NavLink to={menu.path} className='text-cyan700 font-bold text-xl mb-3'>{menu.label}</NavLink>
        <ul className='text-cyan700 flex flex-col gap-1'>
            {menu.children.map((item, index) => (
                <li key={index}>
                    <NavLink to={item.path} className='text-cyan700 font-normal text-lg'>{item.label}</NavLink>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default AsideList

AsideList.propTypes = {
    menu: PropTypes.object.isRequired,        
}