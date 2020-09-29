import React from 'react'
import styled from 'styled-components'
import { AiOutlineWhatsApp, AiOutlineMail, AiOutlineGithub } from 'react-icons/ai'


export const Table = styled.table `
    align-items: center;
    text-align: center;
    margin: 1rem 1.5rem;
    border: 0.25rem groove ${props => props.theme.colors.tbBorder};
`
export const Thead = styled.thead `
    font-size: 2rem;
`
export const Tbody = styled.tbody  `
    font-size: 1.25rem;
`
export const Tfoot = styled.tfoot`
    font-size: 1.5rem;
    cursor: pointer;
`

const itemsTable = [
    {
        id: 1,
        text: "Data de nascimento",
        info: "12/02/1989"
    },
    {
        id: 2,
        text: "Idade",
        info: "31 anos de idade"
    },
    {
        id: 3,
        text: "Escolaridade",
        info: "Ensino superior interrompido"
    },
    {
        id: 4,
        text: "Estado civil",
        info: "Solteiro"
    }
]

const getItemsTable = itemsTable.map((item) =>
    <tr key={item.id}>
        <td>{item.text}</td>
        <td>{item.info}</td>
    </tr>
)

const whatsApp = [{
    id: 1,
    text: "WhatsApp",
    link: "https://wa.me/5518988171857"
}]

const mail = [{
    id: 1,
    text: "E-Mail",
    link: "mailto:cruz213.rodrigo@outlook.com?subject=Assunto"
}]

const gitHub = [{
    id: 1,
    text: "gitHub",
    link: "https://github.com/RodrigoWebDev-BR"
}]

const rwd = [{
    id: 1,
    text: "Rodrigo Cruz Candido",
    link: "https://rodrigowebdev.com.br/",
    textLink: "rodrigowebdev.com.br"
}]

const getLinkRwd = rwd.map((item) =>
    <tr>
        <th colSpan={2}>
            <a href={item.link}>{item.textLink}</a>
        </th>
    </tr>
)

const getTitleRwd = rwd.map((item) =>
    <tr>
        <th colSpan = { 2 }>{item.text}</th>
    </tr>
)

const getWhatsApp = whatsApp.map((item) =>
    <tr key={item.id}>
        <td>{item.text}</td>
        <td><a href={item.link} target={item.link}>
           <AiOutlineWhatsApp /> 
       </a></td>
    </tr>
)

const getMail = mail.map((item) =>
    <tr key={item.id}>
        <td>{item.text}</td>
        <td><a href={item.link} target={item.link}>
            <AiOutlineMail />
        </a></td>
    </tr>
)

const getGitHub = gitHub.map((item) =>
    <tr key={item.id}>
        <td>{item.text}</td>
        <td><a href={item.link} target={item.link}>
            <AiOutlineGithub/>
        </a></td>
    </tr>
)

export default function() {
    return(
        <Table id="about">
            <Thead>
                { getTitleRwd }
            </Thead>
            <Tbody>
                <tr>
                    <td colSpan = { 2 }>
                        Nascido na cidade de Araçatuba, e criado no município de Birigui no noroeste paulista, <br/>
                        sou Rodrigo, tenho 31 anos. <br/>
                        Curto animações japonesas, mais conhecidas como animes, tais como Shingeki no Kyojin, <br/>
                        Akame ga Kill, Elfen Lied, Death Note, Black Lagon, Vinland Saga, entre outras. <br />
                        Sou um, vamos assim que se dizem... 'fiel seguidor do metal' - apesar de já ter passado <br/>
                        por essa fase, mas ouço só rock, não apenas metal. Bandas como Lamb of God, Arch Enemy, <br/>
                        Bullet for My Valentine, Jinjer, Shadowside, Iced Earth, enfim... inúmeras bandas. <br/>
                        Estudei no Instituto Federal de Educação, Ciências e Tecnologia do Estado de São Paulo, <br/>
                        mais conhecido como IFSP ou apenas IF, mas não consegui concluir o curso por motivos pessoais.
                    </td>
                </tr>
                { getItemsTable }
                { getMail }
                { getWhatsApp }
                { getGitHub }
            </Tbody>
            <Tfoot>
                { getLinkRwd }
            </Tfoot>
        </Table>
    )
}