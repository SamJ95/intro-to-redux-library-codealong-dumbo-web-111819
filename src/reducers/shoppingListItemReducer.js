export default function shoppingListItemReducer(
	state = {
		items: []
	},
	action
) {
	//A reducer function which basically uses switch and case
	//statements to update state through an action. The reducer is producing a 
	//a counter 

	switch (action.type) {
		case 'INCREASE_COUNT':
			console.log('Current state.items length %s', state.items.length);
			console.log('Updating state.items length to s%', state.items.length +1);
			return {
				...state,
				items: state.items.concat(state.items.length + 1)
			}
		default:
			console.log('Initial state.items length: %s', state.items.length);
			return state;
	}
}
