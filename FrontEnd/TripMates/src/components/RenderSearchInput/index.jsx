/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getLocation } from "../../services/location";

const RenderSearchInput = ({ searchInput , handleSetLocationId }) => {
  const [dataLocation, setDataLocation] = useState([]);

  const fetchDataLocation = async () => {
    try {
      const response = await getLocation();
      setDataLocation(response.data.locationData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataLocation();
  }, []);

  const handleClickLocation = (location , locationId) => {
    handleSetLocationId(location , locationId)
    setDataLocation([])
  }


  const render = dataLocation.filter((item) => {
    const locationLower = item.locationName.toLowerCase()
    const searchInputLower = searchInput ? searchInput.toLowerCase() : ' '
    return locationLower.startsWith(searchInputLower)
  });

  const renderDataLocation = render.map((item) => {
    const {_id, locationThumbnail, locationName, locationDependent } = item;
    return (
      <div
        key={_id}
        onClick={() => handleClickLocation(locationName , _id)}
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
            {locationDependent.country ? `${locationDependent.country} ,` : ""}{" "}
            {locationDependent.continent ? locationDependent.continent : ""}
          </p>
        </div>
      </div>
    );
  });



  return (
    <>
      {render.length === 0 ? (
        <></>
      ) : (
        <>
          <div className="w-full h-[1px] bg-[lightgray] mt-[10px]"></div>
          {renderDataLocation}
        </>
      )}
    </>
  );
};

export default RenderSearchInput;
