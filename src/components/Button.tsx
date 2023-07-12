import React from "react";
import styled from "styled-components";

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export const Button = (props: ButtonProps) => {
  return (
    <Container>
      {" "}
      <button
        className="button"
        onClick={(event) => props.handleClick(event, 1)}
      >
        {" "}
        Click{" "}
      </button>{" "}
    </Container>
  );
};

const Container = styled.div`
  .button {
    --bg: #f3c1f0;
    --hover-bg: #ffffff;
    --hover-text: rgb(4, 4, 5);
    color: rgb(16, 76, 155);
    font-weight: 500;
    border: 1px solid var(--bg);
    border-radius: 4px;
    padding: 0.8em 2em;
    background: var(--bg);
    transition: 0.2s;
    width: 290px;
    height: fit-content;
    text-align: center;
  }

  .button:hover {
    color: var(--hover-text);
    transform: translate(-0.25rem, -0.25rem);
    background: var(--hover-bg);
    box-shadow: 0.25rem 0.25rem var(--bg);
  }

  .button:active {
    transform: translate(0);
    box-shadow: none;
  }

  .wrapper {
    position: relative;
    background: #1f1144;
  }

  .font {
    font-family: "Fugaz One", cursive;
    font-size: 30px;
  }
`;
