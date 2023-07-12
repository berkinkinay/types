import React from "react";
import styled from "styled-components";

type GreatProps = {
  name: string;
  massageCount?: number;
  isLoggedIn: Boolean;
};

export default function Example(props: GreatProps) {
  const { massageCount = 0 } = props;
  return (
    <Container>
      <h1 className="main">
        {props.isLoggedIn
          ? `welcome ${props.name}! You have ${massageCount} unread massages`
          : `Welcome ven inside typescript app`}
      </h1>
    </Container>
  );
}

const Container = styled.div`
  .main {
    padding: 0;
    margin: 0;
    height: 100vh;
    background: #393e46;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .inside {
    display: flex;
    background-color: red;
    font-size: 20px;
    height: 100vh;
    width: max-content;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .name {
    font-size: 30px;
    margin-left: 5px;
    margin-right: 5px;
  }
`;
