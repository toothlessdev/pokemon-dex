import { useNavigate } from "react-router-dom";
import * as Styles from "./HomePage.styled";
import logo from "@/assets/logo.png";

export const HomePage = () => {
    const navigate = useNavigate();

    return (
        <Styles.PageContainer>
            <Styles.LogoImage src={logo} alt="포켓몬 도감" />
            <Styles.Button onClick={() => navigate("/dex")}>포켓몬 도감 시작하기</Styles.Button>
        </Styles.PageContainer>
    );
};
