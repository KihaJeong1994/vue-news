import ListView from './ListView'
import bus from "../utils/bus";

// HOC 하이 오더 컴포넌트 : 현재 news,ask,jobs view가 반복되고 있으므로 하나의 상위 컴포넌트를 지정해서 재사용성 증가
export default function createListView(name) {
    return {
        //재사용할 인스턴스 컴포넌트, 옵션들이 들어갈 자리
        name,
        created() {
            bus.$emit("start::spinner");
            this.$store
                .dispatch(`FETCH_LIST`, this.$route.name)
                .then(() => {
                    console.log("fetched");
                    bus.$emit("end::spinner");
                })
                .catch((error) => {
                    console.log(error);
                    bus.$emit("end::spinner");
                });
        },
        render(createElement) {
            return createElement(ListView)
        },
    }
}