
import Spiner from './Spiner';
import useGif from '../hooks/useGif';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

const Random = () => {


  const {gif,loading,fetchData} = useGif();

  // function clickHandler() {
  //   fetchData();
  // }
  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>A Random Gif</h1>

      {
        loading ? (<Spiner />):(<img src={gif} width="450" alt="" />)
      }


      <button onClick={() => fetchData()}
        className='w-10/12 bg-white opacity-2 text-lg py-2 rounded-lg mb-[20px]'>
        Generate
      </button>

    </div>
  )
}

export default Random
