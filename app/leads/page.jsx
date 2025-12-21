"use client";

import style from "./leads.module.css";

const LeadsPage = () => {
  const leads = [
    {
      name: "Андрій",
      type: "Заробітчанин",
      date: "21-12-2025",
      contacts: {
        phone: "0685325881",
        viber: "0685325881",
        mail: "andrewgrechukh123@gmail.com",
        telegram: "@Monoliz1503",
      },
      request: {
        rooms: 2,
        budget: "100грн",
        district: "Центр",
      },
      ai_summary:
        "За запитом: купує дистанційно, готівка. Цікавить район Корбутівка, 2-кімнатна до 55к. Хоче поверх від 5 до 10. Новобудова",
    },
  ];

  return (
    <div className={style.page}>
      <main className={style.main}>
        <div className={style.top}>
          <h1>Список лідів</h1>
          <form
            className={style.form}
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              className={style.search}
              type="text"
              placeholder="фільтрація лідів"
            />
          </form>
        </div>
        <ul className={style.list}>
          {leads.map((lead, k) => (
            <li className={style.item} key={k}>
              <div className={style.lead}>
                <header className={style.leadHeader}>
                  <h3 className={style.leadType}>{lead.type}</h3>
                  <small className={style.leadDate}>{lead.date}</small>
                  <span className={style.leadBudget}>
                    {lead.request.budget}
                  </span>
                </header>
                <div>
                  {Object.entries(lead.request).map(([key, value], k) => (
                    <p key={k}>
                      <b>{key}: </b>
                      {value}
                    </p>
                  ))}
                  <p>
                    <b>AI висновок: </b>
                    {lead.ai_summary}
                  </p>
                </div>
                <footer className={style.leadFooter}>
                  {Object.entries(lead.contacts).map(([key, value], k) => (
                    <p key={k}>
                      <b>{key}: </b>
                      {value}
                    </p>
                  ))}
                </footer>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default LeadsPage;
