import PropTypes from 'prop-types'

const Card = ({movieData}) => {

  if (movieData === null ){
    return "Loading"
  }
  
  const { title, director, producer, image, running_time } = movieData
  
  return (
    <>
      <div className='xl:w-[394px] xl:h-[477px] w-[370px] h-[480px] rounded shadow-lg bg-white xl:mt-16'>
          <div className='w-full h-1/2 rounded-t bg-cover bg-[center_top_24rem]' style={{ backgroundImage: `url(${image})` }}> 
          </div>
            <div className='xl:m-5 m-2'>
                <span className='xl:text-lg text-[14px] font-medium font-neue-lt'> {title.es} | {title.jp} </span>
                <div className='text-base font-light xl:py-4 py-1'>
                    <p className='text-[12px] xl:text-[16px]'><span className='font-normal font-neue-ltcd'> Running time: </span> {running_time} min </p>
                    <p className='text-[12px] xl:text-[16px]'><span className='font-normal font-neue-ltcd'>Directed by: </span> {director} </p>
                    <p className='text-[12px] xl:text-[16px]'><span className='font-normal font-neue-ltcd'>Produced by: </span> {producer} </p>
                </div>
                <div className='flex gap-3 text-xs xl:my-8 my-3'>
                <div className='cursor-pointer bg-gray-300 text-gray-700 xl:px-4 px-3 py-1 rounded-full'>#gibliStudio</div>
                <div className='cursor-pointer bg-gray-300 text-gray-700 xl:px-4 px-3 py-1 rounded-full'>#Miyazaki</div>
                <div className='cursor-pointer bg-gray-300 text-gray-700 xl:px-4 px-3 py-1 rounded-full'>#anime</div>
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