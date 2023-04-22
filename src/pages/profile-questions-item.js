import React, { useEffect, useState } from "react";
import OnlyMobile from "../components/OnlyMobile";
import Footer from "../components/Footer";
import QuestionsItem from "../components/Profile/QuestionsItem";
import questions1 from "./../assets/profile/questions-1.png";
import questions2 from "./../assets/profile/questions-2.png";
import questions3 from "./../assets/profile/questions-3.png";
import questions4 from "./../assets/profile/questions-4.png";
import { useParams } from "react-router-dom";

const dataTest = [
  {
    id: "1",
    title: "Сканував QR-код",
    desc: "Що робити далі?",
    content: `Після сканування QR-коду, потрібно буде внести гроші в апарат. 

    Просто натисність на головному екрані кнопку з номером свого поста. 
    
    Далі слідкуйте інструкції. 
    Виберіть спосіб оплати 
    ( ApplePay, GooglePay чи карткою). 
    
    Вводіть суму, чи вибирайте з доступних.
    
    Після оплати, сума грошей з’явиться на екрані Вашого поста на мийці. 
    
    `,
    image: questions1,
  },
  {
    id: "2",
    title: "Залишились “зайві” гроші в автоматі",
    desc: "Куди вони дінуться ?",
    content: `Якщо Ви внесли, наприклад, 200 гривень, помили машину і залишилось ще 80. 

    Не хвилюйтесь. 
    
    Гроші, які Ви не використали будуть нараховані на ваш рахунок в особистому кабінеті.
    `,
    image: questions2,
  },
  {
    id: "3",
    title: "Як правильно мити авто ?",
    desc: "Поради від власника",
    content: `Якщо Ви внесли, наприклад, 200 гривень, помили машину і залишилось ще 80. Не хвилюйтесь. Гроші, які Ви не використали будуть нараховані на ваш рахунок в особистому кабінеті.
    
    `,
    image: questions3,
  },
  {
    id: "4",
    title: "Навіщо Вам карта клієнта ?",
    desc: "Кілька аргументів",
    content: `1.) 80 гривень на рахунок.Оформлення картки клієнта відразу нарахує Вам 80 гривень на рахунок. 
    2.) Акції та знижки
    Оформлення картки надає Вам можливість брати участь в акціях та знижках нащої мережі автомийок. 
    
    `,
    image: questions4,
  },
];

const ProfileQuestionsItem = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    dataTest.forEach((item) => {
      if (item.id === id) setData(item);
    });
  }, [id]);
  return (
    <>
      <QuestionsItem data={data} />
      <Footer current="profile" />
      <OnlyMobile />
    </>
  );
};

export default ProfileQuestionsItem;
