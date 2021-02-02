import React, { useContext, useEffect, useState } from "react";

import JobContainer from "./jobs";
import { Pagination } from "../components";
import { GlobalContext } from "../context/GlobalContext";

const PaginationContainer = () => {
    const { state, dispatch } = useContext(GlobalContext);
    const { jobs } = state;

    const [offset, setOffset] = useState(0);
    const PER_PAGE = 5;

    useEffect(() => {
        dispatch({type: "JOB_TITLE", jobs})
    }, [jobs]);

  const handlePageClick = (data) => {
    setOffset(data.selected * PER_PAGE);
    window.scrollTo(0, 0);
  };

  return (
    <Pagination>
      {jobs && jobs.slice(offset, offset + PER_PAGE).map((item) => (
        <JobContainer job={item} key={item.id} />
      ))}
        {jobs.length > 0 &&
            <Pagination.List
                previousLabel={"<"}
                nextLabel={">"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={Math.ceil(jobs.length / PER_PAGE)}
                marginPagesDisplayed={1}
                pageRangeDisplayed={1}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
            />
        }
    </Pagination>
  );
};

export default PaginationContainer;
