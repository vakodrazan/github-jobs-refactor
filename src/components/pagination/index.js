import React, { useContext, useEffect, useState } from "react";
// import Job from "./Job";
import ReactPaginate from "react-paginate";
import { Card } from "../index";
import JobContainer from "../../container/jobs";
import { GlobalContext } from "../../context/GlobalContext";

const JobPagination = () => {
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
    <Card>
      {jobs.slice(offset, offset + PER_PAGE).map((item) => (
        <JobContainer job={item} key={item.id} />
      ))}
      <ReactPaginate
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
    </Card>
  );
};

export default JobPagination;
