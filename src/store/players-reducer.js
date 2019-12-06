let initialState = [
  {name:'Catwoman',position:'LF',bats:'R',throws:'L'},
  { name: 'Betty Boop', position: 'C', bats: 'R', throws: 'R' },
  { name: 'CoolAid Man', position: 'SS', bats: 'L', throws: 'R' },
  { name: 'Mr. Peanut', position: '2B', bats: 'L', throws: 'L' }, 
  { name: 'The Monopoly Man', position: 'P', bats: 'R', throws: 'R' }
];

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'GET':
      return {  };

    case 'POST':
      return [...state, payload];

    case 'PUT':
      return state.map( (record,idx) => idx===payload.id ? payload.record : record );
    
    case 'DELETE':
      return state.filter((record, idx) => idx !== payload);

    default:
      return state;
  }
};