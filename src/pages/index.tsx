import Head from "next/head";
import Image from "next/image";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import {
  Operator,
  Container,
  Main,
  StyledButton,
  Text,
} from "@/components/StyledComponents";

export const getStaticProps: GetStaticProps = async (operators: any) => {
  const response = await fetch(
    "http://localhost:3000/api/requests/getOperators/"
  );
  const data = await response.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { operators: data },
  };
};

const Home = ({
  operators,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div>
      <Head>
        <title>Операторы</title>
      </Head>
      <Main>
        <Text> Выберите оператора: </Text>
        <Container>
          {operators &&
            operators.map(({ icon }: any) => (
              <Operator key={icon}>
                <Image
                  src={`/${icon}.png`}
                  priority={true}
                  width={130}
                  height={130}
                  alt={icon}
                />
                <Link href={`http://localhost:3000/operator/${icon}`}>
                  <StyledButton>Пополнить</StyledButton>
                </Link>
              </Operator>
            ))}
        </Container>
      </Main>
    </div>
  );
};

export default Home;
