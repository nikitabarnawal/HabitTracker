import { useRouteError } from "react-router-dom";
import styled from "styled-components";

const ErrorMessage = styled.div`
  font-size: 3rem;
  font-style: italic;
`;

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <ErrorMessage>Sorry, an unexpected error has occurred.</ErrorMessage>
      <ErrorMessage>
        <i>{error.statusText || error.message}</i>
      </ErrorMessage>
    </div>
  );
}
