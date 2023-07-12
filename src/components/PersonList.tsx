import React from "react";
import styled from "styled-components";
import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <Container>
      <div className="name">
        {props.names.map((name) => {
          return (
            <h2 key={name.first}>
              {name.first} {name.last}
            </h2>
          );
        })}
        <h2> </h2>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .name {
    padding: 0;
    margin: 0;
    gap: 10px;
    height: 100vh;
    background: #21113b;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
