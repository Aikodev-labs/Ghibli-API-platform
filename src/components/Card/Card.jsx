import PropTypes from 'prop-types'

const Card = ({movieData}) => {

  if (movieData === null ){
    return "Loading"
  }
  
  const { title, director, producer, image, running_time } = movieData
  
  return (
    <>
      <div className=' w-[394px] h-[477px] rounded shadow-lg bg-white'>
          <div className='w-full h-1/2 rounded-t bg-cover bg-[center_top_24rem]' style={{ backgroundImage: `url(${image})` }}> 
          </div>
            <div className='m-5'>
                <span className='text-lg font-medium font-neue-lt'> {title.es} | {title.jp} </span>
                <div className='text-base font-light py-4'>
                    <p><span className='font-normal font-neue-ltcd'> Running time: </span> {running_time} min </p>
                    <p><span className='font-normal font-neue-ltcd'>Directed by: </span> {director} </p>
                    <p><span className='font-normal font-neue-ltcd'>Produced by: </span> {producer} </p>
                </div>
                <div className='flex gap-3 text-xs my-8'>
                <div className='cursor-pointer bg-gray-300 text-gray-700 px-4 py-1 rounded-full'>#gibliStudio</div>
                <div className='cursor-pointer bg-gray-300 text-gray-700 px-4 py-1 rounded-full'>#Miyazaki</div>
                <div className='cursor-pointer bg-gray-300 text-gray-700 px-4 py-1 rounded-full'>#anime</div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Card;

Card.propTypes = {
  movieData: PropTypes.object.isRequired,
}