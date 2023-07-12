import React from "react";
import styled from "styled-components";
import { PersonProps } from "./Person.types";

export const Person = (props: PersonProps) => {
  return (
    <Container>
      <div className="name">
        {" "}
        {props.name.first} {props.name.last}{" "}
      </div>
    </Container>
  );
};

const Container = styled.div`
  .name {
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
`;
