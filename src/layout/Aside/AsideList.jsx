import { PropTypes } from 'prop-types';

const AsideList = ({ menu }) => {
  return (
    <div className='mb-4'>
        <h3 className='font-bold text-xl text-cyan950 mb-3'>{menu.label}</h3>
        <ul className='text-cyan700 flex flex-col gap-1'>
            {menu.children.map((item, index) => (
                <li key={index}>{item.label}</li>
            ))}
        </ul>
    </div>
  )
}

export default AsideList

AsideList.propTypes = {
    menu: PropTypes.object.isRequired,        
}