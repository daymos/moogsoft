import $ from 'jquery';


export const clearAll = target => $(target).empty();

export const updateDom = el => {
  clearAll('.ulcontainer');
  $('.ulcontainer').append(el);
};
