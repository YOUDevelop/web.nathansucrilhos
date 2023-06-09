import styled from "styled-components";
import { Instagram } from "../icons";

const FollowMeContainer = styled.div`
    padding: 4rem 8rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    h1 {
        font-weight: 700;
        font-size: 3.25rem;
    }

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10rem;

        li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
    }

    @media (max-width: 1000px) {
        text-align: center;

        ul {
            gap: 4rem;
        }
    }

    @media (max-width: 600px) {
        padding: 2rem 3rem;

        ul {
            flex-direction: column;
            gap: 1rem;
        }

        h1 {
            font-size: 2rem;
        }
    }
`;

const FollowMe: React.FC = () => {
    return (
        <FollowMeContainer>
            <h1>Siga-me nas redes sociais</h1>
            <ul>
                {/* <li>
                    <YouTube/>
                    <p>natansucrilhos</p>
                </li> */}
                <li onClick={() => open("https://www.instagram.com/digitalinsano/", "_blank")}>
                    <Instagram/>
                    <p>digitalinsano</p>
                </li>
                <li onClick={() => open("https://www.instagram.com/natansucrilhos/", "_blank")}>
                    <Instagram/>
                    <p>natansucrilhos</p>
                </li>
                {/* <li onClick={() => open("https://www.tiktok.com/@natansucrilhos", "_blank")}>
                    <TikTok/>
                    <p>natansucrilhos</p>
                </li> */}
            </ul>
        </FollowMeContainer>
    );
};

export default FollowMe;
