import Card from "./Card";

function ProfileCard(props){
    return (
        <div>
            <Card title="bsk" backgroundColor="#4ea04e" text1="안녕하세요 백승관"
                  text2="내 소개를 합니다."/>


            <Card title="ahm" backgroundColor="pink">
                <p>안녕하세요, 현미입니다.</p>
                <p>저도 리액트를 공부하고 개발중입니다.</p>
            </Card>
        </div>
    )
}

export default ProfileCard;