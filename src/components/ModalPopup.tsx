import { useEffect, useState } from "react";
import {
  ErrorModal,
  ModalPopup,
  OkModal,
  EscapeButton,
} from "./StyledComponents";

interface MessageProps {
  active: boolean;
  setActive: (active: boolean) => void;
}

const Modal = ({ active, setActive }: MessageProps) => {
  const [response, setResponse] = useState(Boolean);
  const [error, setError] = useState(Boolean);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Генерируем случайное число
        const random = Math.floor(Math.random() * 2);
        if (random === 1) {
          setResponse(true);
          setError(false);
        } else {
          // Имитируем неуспешный ответ
          setResponse(false);
          setError(true);
        }
      } catch (error) {
        setResponse(false);
        setError(true);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {active && (
        <ModalPopup>
          {response ? (
            <OkModal>
              Счет успешно пополнен!
              <button onClick={() => setActive(false)}>Закрыть</button>
            </OkModal>
          ) : (
            <ErrorModal>
              Произошла ошибка.
              Повторите попытку
              <EscapeButton onClick={() => setActive(false)}>
                Закрыть
              </EscapeButton>
            </ErrorModal>
          )}
        </ModalPopup>
      )}
    </div>
  );
};

export default Modal;
