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
import Modal from "@/components/ModalPopup";

const CarPage = () => {
  const [sum, setSum] = useState("1");
  // 0 - начальное состояние, 1 - ошибка, 2 - все верно
  const [phoneCheck, setPhoneCheck] = useState(0);
  const [sumCheck, setSumCheck] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [modal, setModal] = useState(false);
  const params = useParams();
  const id = params?.id || 'MTS';

  const handlePay = () => {
    console.log(phoneCheck, sumCheck)
    if (phoneCheck===2 && sumCheck===2) {
      setModal(true);
    }
  };

  const handleChangePhone = (e: string) => {
    setPhoneNumber(e);
    if(validatePhoneNumber(e)) setPhoneCheck(2);
    else setPhoneCheck(1);
    // setPhoneCheck(!validatePhoneNumber(e));
  };

  const validatePhoneNumber = (e: string) => {
    const phoneNumberPattern = /^79\d{9}$/;
    return phoneNumberPattern.test(e);
  };

  const handleChangeSum = (e: string) => {
    setSum(e);
    if (parseInt(e) > 1000 || parseInt(e) < 1 || e=='') setSumCheck(1);
    else setSumCheck(2);
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
            {phoneCheck===1 && <ErrorMes>Номер телефона введен неверно</ErrorMes>}
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
            {sumCheck===1 && <ErrorMes>Введите сумму от 1 до 1000 руб.</ErrorMes>}
          </Label>
          <StyledButton onClick={() => handlePay()}>Пополнить</StyledButton>
        </DataCard>
      </Main>
      <Modal active={modal} setActive={setModal} />
    </div>
  );
};

export default CarPage;
