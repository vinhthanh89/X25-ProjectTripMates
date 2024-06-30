/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getLocation } from "../../services/location";

const RenderSearchInput = ({ searchInput , handleSetLocationId }) => {
  const [dataLocation, setDataLocation] = useState([]);

  useEffect(() => {
    const fetchDataLocation = async () => {
      try {
        const response = await getLocation();
        const dataResponse = response.data.locationData
        const dataFilter = dataResponse.filter((item) => {
            const locationLower = item.locationName.toLowerCase()
            const searchInputLower = searchInput ? searchInput.toLowerCase() : ' '
            
            return locationLower.startsWith(searchInputLower)
          })
        setDataLocation(dataFilter);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataLocation();
  }, [searchInput]);

  const handleClickLocation = (location , locationId , locationThumbnail ) => {
    handleSetLocationId(location , locationId , locationThumbnail )
    setDataLocation([])
  }


  // const render = dataLocation.filter((item) => {
  //   const locationLower = item.locationName.toLowerCase()
  //   const searchInputLower = searchInput ? searchInput.toLowerCase() : ' '
  //   return locationLower.startsWith(searchInputLower)
  // });

  const renderDataLocation = dataLocation.map((item) => {
    const {_id, locationThumbnail, locationName, continent , country } = item;
    return (
      <div
        key={_id}
        onClick={() => handleClickLocation(locationName , _id , locationThumbnail )}
        className="flex w-full h-[70px] py-[10px] pl-[5px] rounded-[8px]  hover:bg-[#d7d5d5] cursor-pointer"
      >
        <div className="w-[50px] h-full">
          <img
            className="w-full h-full object-cover rounded-[8px]"
            src={locationThumbnail}
            alt=""
          />
        </div>
        <div className="ml-[18px]">
          <p className="font-bold text-[16px]">{locationName}</p>
          <p className="text-[#5f5e5e]">
            {country ? `${country} ,` : ""}{" "}
            {continent ? continent : ""}
          </p>
        </div>
      </div>
    );
  });



  return (
    <>
      {dataLocation.length === 0 ? (
        <></>
      ) : (
        <>
          {renderDataLocation}
        </>
      )}
    </>
  );
};

export default RenderSearchInput;
