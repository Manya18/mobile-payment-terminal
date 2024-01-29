import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../../public/icon-home.png";
import styled from "styled-components";

const StyledHeader = styled.nav`
  display: flex;
  background-color: #efdecd;
  box-shadow: 0px 5px 15px 0px rgba(49, 23, 9, 0.2);
`;

const Header = () => {
  const { pathname } = useRouter();
  return (
    <StyledHeader>
      <Link key="Home" href="/">
        <Image src={logo} width={36} height={36} alt="logo" />
      </Link>
    </StyledHeader>
  );
};

export default Header;
