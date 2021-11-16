import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { deleteCartItem, sendCart } from '../../redux/actions/cartActions';
import {
    IconButton, Button, Box, DrawerCloseButton, Drawer, DrawerOverlay, DrawerFooter, DrawerContent, DrawerHeader, DrawerBody,
    Stack, useDisclosure, Text,
} from '@chakra-ui/react';
import { ICart } from "../../interfaces/cartInterface";
import BurgerCartItem from './burgerCartItem';
import { useHistory } from "react-router";

interface BurgerCartProps {

}

const BurgerCart: React.FC<BurgerCartProps> = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    let history = useHistory();
    const dispatch = useDispatch();
    const { listCart } = useSelector((state: any) => state.cartReducer);

    const handleClick = () => {
        onOpen();
    }
    const handleDelete = (id: number) => {
        let listCartDelete = listCart.filter((element: ICart) => element.BurgerItem.id !== id);
        dispatch(deleteCartItem(listCartDelete));
    }
    const handleCart = () => {
        if(listCart.length !== 0 ) {
            console.log(listCart);
            dispatch(sendCart(listCart));
            onClose();
            history.push("/finish");
        }
      
    }

    return (
        <React.Fragment>
            <IconButton onClick={() => handleClick()}
                key={'sm'}
                m={4}
                aria-label="Cart"
                colorScheme="teal"
                icon={<AiOutlineShoppingCart />} />

            <Drawer onClose={onClose} isOpen={isOpen} size={'sm'}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader>
                        {'Sus Pedidos'}
                    </DrawerHeader>
                    <DrawerCloseButton />
                    <DrawerBody>
                        <Stack spacing="24px">
                            {listCart.length === 0 &&
                                <Box>
                                    <Text>No hay hamburguesas en su carrito</Text>

                                </Box>}
                            {listCart.map((elemento: ICart) =>
                                <div key={elemento.BurgerItem.id}>
                                    <Box>
                                        <BurgerCartItem
                                            ImageBurger={elemento.BurgerItem.Image}
                                            Title={elemento.BurgerItem.Title}
                                            Price={elemento.BurgerItem.Price}
                                            Unit={elemento.Unit}
                                            Id={elemento.BurgerItem.id}
                                            HandleDelete={handleDelete} />
                                    </Box>
                                </div>
                            )}
                        </Stack>
                    </DrawerBody>
                    <DrawerFooter borderTopWidth="1px">
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme="blue" onClick={() => handleCart()}> Finalizar compra</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </React.Fragment>
    );
}

export default BurgerCart;