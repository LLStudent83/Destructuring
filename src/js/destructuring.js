const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

export default function destructObj(obj) {
  const { special } = obj;
  for (let i = 0; i <= special.length - 1; i += 1) {
    if (special[i].description === undefined) {
      special[i].description = 'Описание недоступно';
    }
  }
  return special;

}

destructObj(character);
