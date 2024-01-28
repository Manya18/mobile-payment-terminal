import { FC } from 'react';
import styles from "./Home.module.css";
import styled from "styled-components"
import Head from 'next/head';
import Image from "next/image";
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

export const getStaticProps: GetStaticProps = async (operators:any) => {
  const response = await fetch('http://localhost:3000/api/requests/getOperators/');
  const data = await response.json();
  console.log("data", data)
  if (!data) {
    return {
      notFound: true,
    }
  }
  
  return {
    props: { operators: data },
  }
};

const Container = styled.div`
  max-width: 600px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border: 3px solid darkblue;
  width: calc(100% / 3 - 50px);
`;

const Button = styled.div`
  padding: 10px;
  background-color: lightsteelblue;
  margin: 10px 0 0 0;

`;

const Home = ({operators}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log('operators', operators)
  return (
    <div>
      <Head>
          <title>Операторы</title>
      </Head> 
      <div> Выберите оператора: </div>
      <Container>
        {operators && operators.map(({ id, icon, path }) => (
          <Block key={id}>
            <Image src={`/${icon}.png`}  width={100} height={100} alt={icon}/>
            <Link href={`http://localhost:3000/operator/${icon}`}>
              <Button>Пополнить</Button>
            </Link>
          </Block>
        ))}
      </Container>
    </div>
  )
}

export default Home;