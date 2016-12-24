import $ from 'jquery';

export default () => {
  const ids = [];
  $('.update').each((i, el) => ids.push(el.id));
  ids.filter(el => el !== '').forEach(el => {
    $(`#${el}`).click(() => {
      $(`#${el}`).find('hr').removeClass('update').addClass('seen');
      console.log('clicked')
    })
    $(`#${el}`).inViewport(xs => {
      if (xs) {
        console.log(xs);
        console.log('el', el);
        $(`#${el}`).addClass('animate');
      }
    });
  });
};

