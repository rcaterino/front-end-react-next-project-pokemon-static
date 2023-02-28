import { Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image";
import Link from "next/link";


export const Navbar = () => {

    const { theme } = useTheme();
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0x 50px',
            backgroundColor: theme?.colors.gray100.value
        }}>
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="icono de app"
                width={70}
                height={70}
            />

            <Link style={{
                 display: 'flex',
                flexDirection: 'row',
               
            }} href='/'>
                <Text color='white' h2>P</Text>
                <Text color='white' h3>okémon</Text>
            </Link>
            <Spacer css={{ flex: 1 }}/>

            <Link style={{
                 display: 'flex',
                 marginRight: '20px'
            }} href='/favorites'>
                
                <Text color='white' h3>Favoritos</Text>
            </Link>
        </div>
    )
}
