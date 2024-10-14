import styled from "styled-components";

export const ContentPage = styled.div`
  margin: 0;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(22, 20, 24);
  color: #eee;
  user-select: none;
`;

export const Container = styled.div`
  display: flex;
  padding: 20px;  
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Button = styled.button`
width: 70px;
padding: 5px;
margin: 10px;
border: 1px solid #ffffff22;
background-color: #282c34;
color: #fff;
border-radius: 0.5rem;
cursor: pointer;
transition: 0.5s all;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  width: 50%;
  margin: 1rem;
  border: 1px solid #ffffff22;
  background-color: #282c34;
  background: linear-gradient(
    0deg,
    rgba(40, 44, 52, 1) 0%,
    rgba(17, 0, 32, 0.5) 100%
  );
  box-shadow: 0 7px 20px 5px #00000088;
  border-radius: 0.7rem;
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  overflow: hidden;
  transition: 0.5s all;

  hr {
    width: 100%;
    border: none;
    border-bottom: 1px solid #88888855;
    margin-top: 0;
  }

  ins {
    text-decoration: none;
  }

  .main {
    display: flex;
    flex-direction: column;
    width: 90%;
    padding: 1rem;

    .tokenImage {
      border-radius: 0.5rem;
      max-width: 100%;
      height: 250px;
      object-fit: cover;
    }

    .creator {
      display: flex;
      align-items: center;
      margin-top: 0.2rem;
      margin-bottom: -0.3rem;

      ins {
        color: #a89ec9;
        text-decoration: none;
      }

      .wrapper {
        display: flex;
        align-items: center;
        border: 1px solid #ffffff22;
        padding: 0.3rem;
        margin: 0;
        margin-right: 0.5rem;
        border-radius: 100%;
        box-shadow: inset 0 0 0 4px #000000aa;

        img {
          border-radius: 100%;
          border: 1px solid #ffffff22;
          width: 2rem;
          height: 2rem;
          object-fit: cover;
          margin: 0;
        }
      }
    }
  }

  ::before {
    position: fixed;
    content: "";
    box-shadow: 0 0 100px 40px #ffffff08;
    top: -10%;
    left: -100%;
    transform: rotate(-45deg);
    height: 60rem;
    transition: 0.7s all;
  }

  &:hover {
    border: 1px solid #ffffff44;
    box-shadow: 0 7px 50px 10px #000000aa;
    transform: scale(1.015);
    filter: brightness(1.3);

    ::before {
      filter: brightness(0.5);
      top: -100%;
      left: 200%;
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const TaskInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #4A90E2;
    box-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
  }
`;

export const AddButton = styled(Button)`
  padding: 10px 20px;
  background-color: #violet;
  width: 50%;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #357ABD;
  }
  
  &:active {
    background-color: #2A6FA1;
  }
`;