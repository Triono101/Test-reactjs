import { useState } from "react";
import Counter from "./Pembahasan/Counter";
import Effect from "./Pembahasan/Effect";
import { useToggle } from "./Pembahasan/Hook/useToggle";
import Identity from "./Pembahasan/Identity";

const Hooks = () => {

    let [label, setLabel] = useState('ON');
    let [lampu, setLampu] = useToggle();

    const style = {
        background: lampu ? 'yellow' : 'black',
        marginLeft: '35px',
        marginBottom: '35px',
        textAlign: 'center',
        height: '200px',
        width: '400px',
        border: '2px solid dodgerblue'
    }

    const saklar = () => {
        setLampu(!lampu);

        setLabel(e => {
            if(e === 'ON') {
                return 'OFF'
            }
            return 'ON';
        })
    }

    return(
        <div>
            <Counter />
            <Effect />
            <Identity />
            <div style={style}>
                <button onClick={saklar}>{label}</button>
            </div>
        </div>
    )
}
export default Hooks;