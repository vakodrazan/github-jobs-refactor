import styled from "styled-components";
import ReactPaginate from "react-paginate";


export const Container = styled.article`
    display: grid;
    gap: 32px;

    .pagination {
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        gap: 12px;
        margin: 0;
        padding: 0;


        li {
            border: 1px solid #B7BCCE;
            color: #B7BCCE;
            box-sizing: border-box;
            border-radius: 4px;
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            cursor: pointer;

            &:hover {
                border: 1px solid #1E86FF;
                color: #1E86FF;
            }

            &.active {
                background-color: #1E86FF;
                border: 1px solid #1E86FF;
                color: #fff;
            }

            &.disabled {
                &:hover {
                    border: 1px solid #B7BCCE;
                    color: #B7BCCE;
                }
            }
        }
    }
`;

export const List = styled(ReactPaginate)``;