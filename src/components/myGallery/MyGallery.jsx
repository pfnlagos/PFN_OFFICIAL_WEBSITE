<<<<<<< HEAD
=======
// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useState, useMemo, useEffect, useCallback  } from "react";
// import Pagination from "../pagination/Pagination";
// import './MyGallery.css'
// import { SRLWrapper } from "simple-react-lightbox";
// // import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// // import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import { images } from './../../teamMembers/gallery';
// import axios from "axios";
// import { CloudinaryContext, Image, Transformation } from "cloudinary-react";

// let PageSize = 12;
// const MyGallery = () => {
//   const [cloudData, setCloudData] = useState([]);

//   const [currentPage, setCurrentPage] = useState(1);

//   const currentData = useMemo(() => {
//     const firstPageIndex = (currentPage - 1) * PageSize;
//     const lastPageIndex = firstPageIndex + PageSize;
//     return cloudData.slice(firstPageIndex, lastPageIndex);
//   }, [currentPage, cloudData]);

//   const config = {
//     headers: {
//       Authorization: `Basic ${btoa(`${455712326831995}:${process.env.REACT_APP_CLOUDINARY_API_KEY}`)}`,
//     },
//   };

//   const getCldImage = useCallback(async () => {
//     try {
//       const res = await axios.get(
//         "https://api.cloudinary.com/v1_1/pentecostal-fellowship-of-nigeria-lagos/resources/image",
//         config
//       );
//       console.log(res.data.resources);
//       setCloudData(res.data.resources);
//     } catch (error) {
//       console.log(error);
//     }
//   }, [config]);
  
//   useEffect(() => {
//     getCldImage();
//   }, [getCldImage]);

//   return (
//     <>
//       <button onClick={getCldImage} className="fetch-button">
//         Fetch Images
//       </button>

//         <SRLWrapper>
//           <CloudinaryContext cloudName="pentecostal-fellowship-of-nigeria-lagos" className="myGalleryContainer">
//           {currentData?.map((data, i) => (
//               <Image key={i} publicId={data.public_id} className="pics" style={{width: "300px", height: "200px", objectFit: "cover"}}>
//                   <Transformation
//                         crop="scale"
//                         // width="200"
//                         // height="200"
//                         dpr="auto"
//                         responsive_placeholder="blank"
//                     />
//               </Image>
//           ))}
//           </CloudinaryContext>
//         </SRLWrapper>
//       <div className="d-flex justify-content-center">
//           <Pagination
//             className="pagination-bar"
//             currentPage={currentPage}
//             totalCount={images.length}
//             pageSize={PageSize}
//             onPageChange={(page) => setCurrentPage(page)}
//           />
//       </div>
//     </>
//   );
// }

// export default MyGallery

>>>>>>> ca33a33 (commit)

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo, useEffect, useCallback } from "react";
import Pagination from "../pagination/Pagination";
import "./MyGallery.css";
import { SRLWrapper } from "simple-react-lightbox";
import axios from "axios";
import { CloudinaryContext, Image, Transformation } from "cloudinary-react";

let PageSize = 12;
const MyGallery = () => {
  const [cloudData, setCloudData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextCursor, setNextCursor] = useState(null); // For Cloudinary pagination

  // Memoize currentData based on cloudData and pagination
  const currentData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return cloudData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, cloudData]);

  // Fetch images from backend API
  const getCldImage = useCallback(async (cursor = null) => {
    try {
<<<<<<< HEAD
      const res = await axios.get("https://pfn-api.onrender.com/api/images", {
=======
      const res = await axios.get("http://localhost:5000/api/images", {
>>>>>>> ca33a33 (commit)
        params: {
          next_cursor: cursor, // Fetch images using next_cursor for pagination
        },
      });

      console.log(res.data);

      // Append new images and set the next_cursor for future requests
      setCloudData((prevData) => [...prevData, ...res.data.images]);
      setNextCursor(res.data.next_cursor); // Store the cursor for the next request
    } catch (error) {
      console.log("Error fetching images:", error);
    }
  }, []);

  useEffect(() => {
    getCldImage(); // Fetch images initially when the component loads
  }, [getCldImage]);

  return (
    <>
      <SRLWrapper>
        <CloudinaryContext cloudName="pentecostal-fellowship-of-nigeria-lagos" className="myGalleryContainer">
          {currentData?.map((data, i) => (
            <Image
              key={i}
              publicId={data.public_id}
              className="pics"
              style={{ width: "300px", height: "200px", objectFit: "cover" }}
            >
              <Transformation crop="scale" dpr="auto" responsive_placeholder="blank" />
            </Image>
          ))}
        </CloudinaryContext>
      </SRLWrapper>

      <div className="d-flex justify-content-center">
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={cloudData.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
};

export default MyGallery;
