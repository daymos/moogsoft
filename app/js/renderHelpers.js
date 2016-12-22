import dateFormat from 'dateFormat';

export const formatDate = date => dateFormat(date, 'dddd, mmmm dS, yyyy, h:MM:ss TT');

export const renderInviteText = str => (
  `<div>
  <div class = 'reference'>${str.split('[')[0]}</div> 
  <div class = 'details'> ${str.match(/\[(.*?)]/)[1]}</div> 
    <div class = 'link'> Click<a href='http://www.moogsoft.com'> here </a> to open the situation room</div> 
      </div>`
);

export const renderInvite = invite => (
  `<li class='${(invite.isUpdate) ? 'update' : 'old'}'>
  <div class='sender_id'>${invite.sender_id} via <span class='vector'>${invite.vector}<span></div>
  <div class='invite'>${renderInviteText(invite.invite)}</div>
  <div class='time'>sent ${formatDate(invite.invite_time)}</div>
  <div class='status'>status ${invite.status}</div>
  </li>`
);

// encapsulateLiInsideUl :: String DomEl -> String DomEl
export const renderHistory = history => (
  `<ul id='history'>${history.join('')}</ul>`
);

