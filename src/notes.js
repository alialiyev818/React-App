import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image4 from './image4.png';

const notes = [
    {
        title: "Shopping List 🛒",
        content: `Eggs 🥚
        Milk 🥛
        Bread 🍞
        Apples 🍎
        Bananas 🍌
        Chicken breasts 🍗
        Ground beef 🐄
        Rice 🌾
        Pasta 🍝
        Cereal 🥣
        Spinach 🌿`,
        image: image1,
        createdDate: "2023-01-01"
    },
    {
        title: "Deadlines ❗",
        content: `DEC 23 - Last day of Classes 🏁
      JAN 09 - Last day of Exams 🏁
      OCT XX - CP: Eolimp Week 2 📄
      OCT XX - CP: Contests 📄🔵
      NOV XX - CP: Final Contest ❗
      OCT XX - Discrete S: HW5 📄
      NOV XX - Discrete S: Midterm 3❗
      OCT XX - Discrete S: Final ❗ 
      OCT XX - C. Networks: Lab Work 📄
      OCT XX - C. Networks: Final ❗
      OCT XX - Database S: HW2 📄
      OCT XX - Database S: HW3 (GW)📄
      OCT XX - Database S: Final ❗
      OCT XX - Az History: Quiz #2 ❗
      OCT XX - Az History: Final❗
      OCT XX - Az History: Bonus 📄
      OCT XX - Web & Mobile: HW3 (GW)📄
      OCT XX - Web & Mobile: Final ❗
    `,
        createdDate: "2023-01-02",
    },
    {
        title: "Upcoming Contests 👨🏻‍💻",
        content:
            `🟡 NOV 25 16:00 Atcoder B.
        🟢 NOV 29 18:30 CodeChef
        🟡 DEC 02 16:00 Atcoder B.
        🟢 DEC 06 18:30 CodeChef 
        🟠 DEC 09 16:00 Atcoder R.
        🟡 DEC 10 16:00 Atcoder B.
        🟢 DEC 13 18:30 Codechef 
        🟡 DEC 16 16:00 Atcoder B.
        🟢 DEC 20 18:30 CodeChef
        🟢 DEC 27 18:30 Codechef
        🟡 NOV 25 16:00 Atcoder B.`,

        createdDate: "2023-01-01",
    },
    {
        title: "Class Schedule 📅",
        content: `Competitive Programming I (CRN: 10395)
        Database Systems (CRN: 10345)
        Discrete Structures (CRN: 10381)
        History of Azerbaijan (CRN: 10207)
        Intro to Computer Networks (CRN: 10366)
        Web & Mobile I (CRN: 10375)`,
        createdDate: "2023-01-01",
        image: image4
    },
    {
        title: "Lost Points 🥲",
        content: `🟢 Databases: 0 ( + Awaiting P)
        🟡 Web: 3.6 ( + Awaiting P)
        🟡 History: 4.6 ( + Awaiting P)
        🟠 Network: 8.5
        🔴 Discrete: ~20`,
        image: image2,
        createdDate: "2023-01-01",
    }
];

export default notes;
