const CHANGE_NAME = "CHANGE_NAME";

export const changeName = (payload) => ({
  type: CHANGE_NAME,
  payload,
});

// Не хорошо когда у нас стейт является простым типом данных, лучше обернутьв объект и там дать ему значение
export const nameReducer = (state = "Maksym", action) => {
  if (action.type === CHANGE_NAME) {
    // здесь делаем копию нашего состояние и изменяем только то поле которое нам нужно
    //  return {...state, name:action.payload}
    return action.payload;
  } else {
    return state;
  }
};
