import actions from '../../actions/index';
import ProductMock from '../../__mocks__/ProducMock';

describe('Actions', () => {
    test('AddToCard Actions', () => {
        const payload = ProductMock;
        const expected = {
            type: 'ADD_TO_CART',
            payload,
        };
        expect(actions.addToCart(payload)).toEqual(expected);
    });
    test('removeFromCart Actions', () => {
        const payload = ProductMock;
        const expected = {
            type: 'REMOVE_FROM_CART',
            payload,
        };
        expect(actions.removeFromCart(payload)).toEqual(expected);
    });

});

