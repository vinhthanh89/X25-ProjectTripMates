import { useSearchParams } from "react-router-dom"


const FilterTopicContainer = () => {
      const [searchParams , setSearchParams] = useSearchParams()
      const queryContinent = searchParams.get('continent')

      console.log(queryContinent);
      
  return (
    <div>
      <h1>search</h1>
    </div>
  )
}

export default FilterTopicContainer
