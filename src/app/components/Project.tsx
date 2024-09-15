import { AmazonwebservicesOriginalWordmark, CsharpOriginal, DockerOriginal, JavascriptOriginal, MicrosoftsqlserverOriginal, MongodbOriginal, MysqlOriginal, NestjsOriginal, NodejsOriginal, ReactOriginal, VuejsOriginal } from "devicons-react"
import styled from "styled-components"

interface Props {
    title: string,
    message: string,
    link: string,
    techs?: string[]
}

export default function Project(props: Props) {
    const iconSize = 40;

    return (
        <Card onClick={() => window.open(props.link)}>
            <div>
                <h3>{props.title}</h3>
                <p>{props.message}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: 20 }}>
                {props.techs && props.techs.map((tech) => {
                    switch (tech) {
                        case 'react':
                            return <ReactOriginal size={iconSize} />
                        case 'csharp':
                            return <CsharpOriginal size={iconSize} />
                        case 'mysql':
                            return <MysqlOriginal size={iconSize} />
                        case 'vuejs':
                            return <VuejsOriginal size={iconSize} />
                        case 'js':
                            return <JavascriptOriginal size={iconSize} />
                        case 'nestjs':
                            return <NestjsOriginal size={iconSize} />
                        case 'sqlserver':
                            return <MicrosoftsqlserverOriginal size={iconSize} />
                        case 'mongo':
                            return <MongodbOriginal size={iconSize} />
                        case 'docker':
                            return <DockerOriginal size={iconSize} />
                        case 'aws':
                            return <AmazonwebservicesOriginalWordmark size={iconSize} />
                        case 'node':
                            return <NodejsOriginal size={iconSize} />
                        default:
                            return null
                    }
                })}
            </div>
        </Card>
    )
}

const Card = styled.article`
    width: 100%;
    max-width: 375px;
    height: 220px;
    border: 2px solid #ccc;
    padding: 10px;
    border-radius: 8px;
    transition: all .3s ease-in-out;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
        display: flex;
        flex-direction: column;
    }

    h3 {
        font-size: 2.4rem;
        margin: 0;
    }

    p {
        font-size: 1.6rem;
    }

    &:hover {
        background-color: #ccc;
        color: rgba(26, 26, 26, 1);
    }
`