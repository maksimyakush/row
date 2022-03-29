import {Button} from '../Button';

type ShoppingCart = {
    name: {
        label: string
    }
}



const Card = ({children, shoppingCart}: {children: any, shoppingCart: ShoppingCart[]}) => {




    const [first] = shoppingCart;
    const {name: {label}} = first;
    return children({label})
}

Card.Button = Button;

export { Card }