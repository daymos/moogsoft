
export const compose = (...args) => value => args.reverse().reduce((acc, fn) => fn(acc), value);

// stringify ::  Object -> String
export const stringify = data => JSON.stringify(data);

// parse :: String -> Object
export const parse = data => JSON.parse(data);

// updateView :: Object -> String DomElement
export const renderInvite = invite => (
   `<li class='${(invite.isUpdate) ? 'update' : 'old'}'>
  <div class='sender_id'>from ${invite.sender_id}</div>
  <div class='invite'>${invite.invite}</div>
  <div class='vector'>${invite.vector}</div>
  <div class='time'>sent at ${new Date(invite.invite_time)}</div>
  <div class='status'>status ${invite.status}</div>
  </li>`
);

// encapsulateLiInsideUl :: String DomEl -> String DomEl
export const renderHistory = history => (
   `<ul id='history'>${history.join('')}</ul>`
);
// genUlComponent :: fn -> Functor -> Functor Object
export const genArrayOfLiComponents = fn => data => data.map(fn);

export const trace = msg => val => {
  console.log(msg, val, typeof val);
  return val;
};

// markUpdats :: Array Obj -> Array Obj
export const markUpdates = update => (
    update.map(el => Object.assign(el, { isUpdate: true }))
);

export const concat = first => second => first.concat(second);

