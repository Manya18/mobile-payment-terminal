import { GetServerSideProps, GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";

const CarPage = () => {
    const params = useParams();
    const id = params.id;
    console.log("uid", id)
    
    return (
        <div>
            <Head>
                <title>Пополнить ${id}</title>
            </Head>
            <div>
                <div>Введите данные для пополнения</div>
                <div>
                    <Image src={`/${id}.png`}  width={100} height={100} alt={id+''}/>
                    <div>
                        Введите номер телефона:
                        <input></input>
                    </div>
                    <div>
                        Введите сумму:
                        <input></input> руб.
                    </div>
                    <button></button>
                </div>
            </div>
        </div>

    )
}

export default CarPage;