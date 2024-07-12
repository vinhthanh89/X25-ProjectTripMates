export const calculateDifferenceDays = (createdAt) => {
    const createDate = new Date(createdAt);
    const currentDate = new Date();
  
    const timeDifference = currentDate - createDate;
  
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const monthDifference = Math.floor(daysDifference / 30);
  
    if(monthDifference === 0){
        return `${daysDifference} days ago`
    }

    if(monthDifference === 1){
        return `${monthDifference} month ago`
    }

    if(monthDifference > 1){
        return `${monthDifference} months ago`
    }

}