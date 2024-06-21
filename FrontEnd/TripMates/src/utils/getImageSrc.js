
export const getImageSrc = (content) => {
    const parser = new DOMParser();

    const doc = parser.parseFromString(content, 'text/html');

    const imgElements = doc.querySelectorAll('img');

    const imgSrcs = [];
    imgElements.forEach(img => {
        imgSrcs.push(img.src);
    });

    return imgSrcs
}

export const getImageFile = async (imgSrc) => {
    const imgFilesList = [];

    const fetchPromises = imgSrc.map(async (img) => {
        const res = await fetch(img);

        const myBlob = await res.blob();

        const fileName = img.split("/").pop() || "unknown";
        const file = new File([myBlob], fileName, {
          type: myBlob.type,
        });
        console.log(file);
        imgFilesList.push(file);
    });
    
    await Promise.all(fetchPromises);

    return imgFilesList
}