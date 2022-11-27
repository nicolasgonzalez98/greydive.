
import styled from "styled-components";


export default function NotF404(){

    const NotFoundPage = styled.div`
        background-color: white;
        min-height: 100vh;
        min-width: 100%;
        color: black;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    `

    const Image404 = styled.img`
        height: 50%;
        width: 60%;
        
    `

    const Bloque = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `

    return (
        <NotFoundPage>
            <Bloque >
                <Image404
                    src='../page-not-found.211a85e40c.svg' 
                    alt='Not found'
                    className='mb-3'
                 />
                <h1 className="text-center font-weight-bold">Page not found</h1>
                <p className="text-center text-justify text-sm-left">The page you are looking for doesn't exist or has been moved</p>
            </Bloque>
        </NotFoundPage>
    )
}