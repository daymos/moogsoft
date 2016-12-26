import $ from 'jquery';

export default () => {
  const ids = [];
  $('.update').each((i, el) => ids.push(el.id));
  ids.filter(el => el !== '').forEach(el => {
    $(`#${el}`).click(() => {
      $(`#${el}`).find('hr').removeClass('update').addClass('seen');
    });
    $(`#${el}`).inViewport(xs => {
      if (xs) {
        $(`#${el}`).addClass('animate');
      }
    });
  });
};

