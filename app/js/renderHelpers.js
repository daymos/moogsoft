import dateFormat from 'dateFormat';

export const formatDate = date => dateFormat(date, 'dddd, h:MM:ss TT');

export const renderInviteText = invite => (
  `<div>
     <div class = 'details'> ${invite.invite.match(/\[(.*?)]/)[1]}</div> 
     <hr class = '${(invite.isUpdate) ? 'updatehr' : 'seen'}'>
     <div class = 'reference'>${invite.invite.split('[')[0]}</div> 
      <div class = 'link'> Click<a href='http://www.moogsoft.com'> here </a> to open the situation room</div> 
  </div> `
);

export const renderInvite = invite => (
  `<li class='${(invite.isUpdate) ? 'update' : 'old'}' id='${invite.invite_id}' >
  <div class='content-container'>
  <dic class='id'>${invite.invite_id}</div>
  <div class='invite'>${renderInviteText(invite)}</div>
  <div class='lifooter'>
  <span class='sender_id'>${invite.sender_id}</span>
  <span class='vector'>  via ${invite.vector}</span>
  <span class='time'> ${formatDate(invite.invite_time)}</span>
  <span > ${invite.status}</span>
  </div>
  </div>
  </li>`
);

// encapsulateLiInsideUl :: String DomEl -> String DomEl
export const renderHistory = history => (
  `<ul id='history'>${history.join('')}</ul>`
);

