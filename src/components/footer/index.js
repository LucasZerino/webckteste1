import React from 'react'
import styled from 'styled-components'
import Mark from './imgs/Webckmark.png'

class Footer extends React.Component{

    render() {
        const FooterMain = styled.div`
            background-color: #111;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            .mark{
                position: relative;
                width: 100px;
                background: transparent;
                left: 50%;
                transform: translateX(-50%);
            }
            .cop{
                margin-top: 10px;
                margin-left: 10px;
                font-size: 10px;
            }
            .criado{
                margin-left: 10px;
                margin-top: 10px;
                font-size: 10px;
            }
            .descricao{
                position: absolute;
                display: flex;
                margin-top: 5px;
                left: 10px;
                color: gray;
            }
        
        `

        const SocialIcons = styled.div`
            .social_icon {
                font-size: 15px;
                color: #555;
                margin: 0 5px;
                cursor: pointer;
                transition: .5s;
                &:hover {
                    color: #04e5e5;
                }
            }
        `
        return (
            <FooterMain>
                <SocialIcons>
                <div className='descricao'>
                <h1 className='criado'>Criado e desenvolvido por Webck Soluções</h1>
                <h1 className='cop'>Copyright © 2022.</h1>
            </div>
            <a href='https://webck.com.br/' target="_blank"><img className='mark' src={Mark}/></a> 
                </SocialIcons>
            </FooterMain>
        )
    }
}
export default Footer