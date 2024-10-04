
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
      const res = await axios.get("https://pfn-api.onrender.com/api/images", {
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
