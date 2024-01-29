import Head from "next/head";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import {
  Main,
  StyledButton,
  Text,
  DataCard,
  Label,
  ErrorMes,
  FlexDiv,
} from "@/components/StyledComponents";
import PhoneInput from "react-phone-input-2";

const CarPage = () => {
  const [sum, setSum] = useState("1");
  const [phoneCheck, setPhoneCheck] = useState(true);
  const [sumCheck, setSumCheck] = useState(Boolean);
  const [phoneNumber, setPhoneNumber] = useState("");

  const params = useParams();
  const id = params.id;

  const handlePay = () => {};

  const handleChangePhone = (e: string) => {
    setPhoneNumber(e);
    setPhoneCheck(validatePhoneNumber(e));
  };

  const validatePhoneNumber = (e: string) => {
    const phoneNumberPattern = /^79\d{9}$/;
    console.log(phoneNumberPattern.test(e), e);
    return phoneNumberPattern.test(e);
  };

  const handleChangeSum = (e: string) => {
    setSum(e);
    if (parseInt(e) > 1000 || parseInt(e) < 1) setSumCheck(true);
    else setSumCheck(false);
  };

  return (
    <div>
      <Head>
        <title>Пополнить {id}</title>
      </Head>
      <Main>
        <Text>Введите данные для пополнения</Text>
        <DataCard>
          <Image src={`/${id}.png`} width={100} height={100} alt={id + ""} />
          <Label>
            Номер телефона:
            <PhoneInput
              country={"ru"}
              value={phoneNumber}
              onChange={(e) => handleChangePhone(e)}
              placeholder="+7(999) 999-9999"
              specialLabel=""
              inputProps={{
                required: true,
              }}
            />
            {!phoneCheck && <ErrorMes>Номер телефона введен неверно</ErrorMes>}
          </Label>
          <Label>
            Сумма:
            <FlexDiv>
              <input
                type="number"
                value={sum}
                style={{ width: "160px" }}
                onChange={(e) => handleChangeSum(e.target.value)}
              />
              <div style={{ marginLeft: "5px" }}>руб.</div>
            </FlexDiv>
            {sumCheck && <ErrorMes>Введите сумму от 1 до 1000 руб.</ErrorMes>}
          </Label>
          <StyledButton onClick={() => handlePay()}>Пополнить</StyledButton>
        </DataCard>
      </Main>
    </div>
  );
};

export default CarPage;
