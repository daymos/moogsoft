import dateFormat from 'dateFormat';

export const formatDate = date => dateFormat(date, 'dddd, h:MM:ss TT');

export const renderInviteText = str => (
  `<div>
  <div class = 'details'> ${str.match(/\[(.*?)]/)[1]}</div> 
    <hr>
    <div class = 'reference'>${str.split('[')[0]}</div> 
    <div class = 'link'> Click<a href='http://www.moogsoft.com'> here </a> to open the situation room</div> 
      </div>`
);

export const renderInvite = invite => (
  `<li class='${(invite.isUpdate) ? 'update' : 'old'}'>
  <div class='overlay'>
  <div class='invite'>${renderInviteText(invite.invite)}</div>
  <div class='lifooter'>
  <span class='sender_id'>${invite.sender_id}</span>
  <span class='vector'>  via ${invite.vector}</span>
  <span class='time'> ${formatDate(invite.invite_time)}</span>
  </div>
  </div>
  </li>`
);

// encapsulateLiInsideUl :: String DomEl -> String DomEl
export const renderHistory = history => (
  `<ul id='history'>${history.join('')}</ul>`
);

