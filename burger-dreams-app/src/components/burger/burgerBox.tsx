import { Box, Image, Flex, Center, Avatar, Stack, Heading, Text, Button } from "@chakra-ui/react";
import React from "react";
import BurgerOption from "./burgerOptions";

interface BurgerListProps {
    ImageBox: string;
    TitleBox: string;
    TipoBurgerBox: string;
    PrecioBox: number;
    RecomentacionBox: number;
}

const BurgerBox: React.FC<BurgerListProps> = ({ ImageBox, TitleBox, TipoBurgerBox, PrecioBox, RecomentacionBox }: BurgerListProps) => {
    return (
        <React.Fragment>
            <Center py={6}>
                <Box
                    maxW={'470px'}
                    w={'375px'}
                    bg={'white'}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Image
                        h={'160px'}
                        w={'full'}
                        src={ImageBox}
                        objectFit={'cover'}
                    />
                    <Box p={6}>
                        <Stack spacing={0} align={'center'} mb={5}>
                            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                {TitleBox}
                            </Heading>
                            <Text color={'gray.500'}>{TipoBurgerBox}</Text>
                        </Stack>
                        <Stack direction={'row'} justify={'center'} spacing={6}>
                            <Stack spacing={0} align={'center'}>
                                <Text fontWeight={600}>{PrecioBox}</Text>
                                <Text fontSize={'sm'} color={'gray.500'}>
                                Precio
                                </Text>
                            </Stack>
                            <Stack spacing={0} align={'center'}>
                                <Text fontWeight={600}>{RecomentacionBox}</Text>
                                <Text fontSize={'sm'} color={'gray.500'}>
                                    Recomendación
                                </Text>
                            </Stack>
                        </Stack>
                        <BurgerOption />
                    </Box>
                </Box>
            </Center>
        </React.Fragment>
    );
}

export default BurgerBox;