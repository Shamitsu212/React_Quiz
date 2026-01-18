export type Answer = {
    id: number;
    text: string;
};

export type Question = {
    label: string;
    q: Answer[];
};

export const questions: Question[] = [
  {
    label: "Что такое React?",
    q: [
      { id: 0, text: "Библиотека для создания UI" },
      { id: 1, text: "Язык программирования" },
      { id: 2, text: "СУБД" },
      { id: 3, text: "Операционная система" },
    ],
  },
  {
    label: "Что такое JSX?",
    q: [
      { id: 0, text: "Расширение синтаксиса JavaScript для разметки" },
      { id: 1, text: "Тип данных в JS" },
      { id: 2, text: "CSS-фреймворк" },
      { id: 3, text: "Библиотека для тестирования" },
    ],
  },
  {
    label: "Что делает useState?",
    q: [
      { id: 0, text: "Создаёт состояние в функциональном компоненте" },
      { id: 1, text: "Обновляет DOM напрямую" },
      { id: 2, text: "Создаёт стили для компонента" },
      { id: 3, text: "Запускает API-запрос" },
    ],
  },
  {
    label: "Что делает useEffect?",
    q: [
      { id: 0, text: "Выполняет побочные эффекты в компоненте" },
      { id: 1, text: "Создаёт новое состояние" },
      { id: 2, text: "Отрисовывает компонент без рендера" },
      { id: 3, text: "Устанавливает маршруты в React Router" },
    ],
  },
  {
    label: "Какая разница между state и props?",
    q: [
      { id: 0, text: "State — внутреннее состояние, props — внешние данные" },
      { id: 1, text: "State хранится в HTML, props — в CSS" },
      { id: 2, text: "State только для классовых компонентов" },
      { id: 3, text: "Props изменяются напрямую внутри компонента" },
    ],
  },
];
