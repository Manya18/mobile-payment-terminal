import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../../public/icon-home.png"

const navigation = [
    { id: 1, title: 'Home', path: '/'},
    { id: 3, title: 'Пополнить', path: '/contacts'},
]

const Header = () => {
    const {pathname} = useRouter();
    return (
    <nav style={{display: 'flex', backgroundColor:"lightsteelblue"}}>
        <Link key='Home' href='/'> 
            <Image src={logo} width={36} height={36} alt="logo"/>
        </Link>
    </nav>
    )
  }
  
  export default Header;