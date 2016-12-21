import $ from 'jquery';

export const updateDom = (el) => $('.ulcontainer').append(el);

export const clearAll = (target) => () => $(target).remove();
