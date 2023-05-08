import styled from "styled-components";

export const Container = styled.div`
    background-color: #f5f5f5;
    margin-top: 50px;
    width: 500px;
    height: auto;
    padding: 30px;
    margin-left: auto;
    margin-right: auto;
    transition: transform 500ms;
    cursor: pointer;
    box-shadow: 5px 10px 8px #888888;
`;

export const Title = styled.h1`
    text-align: center;
    margin-bottom: 50px;
    color:#8b8589;
`;

export const BtnContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 45px;
`;

export const Button = styled.button`
    width: 150px;
    height: 45px;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 500;
    background-color: #008b8b;
    color: white;
    cursor: pointer;
    border: none;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover {
        background-color: #db7093;
    }
`;

export const Message = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #8b8589;
`;