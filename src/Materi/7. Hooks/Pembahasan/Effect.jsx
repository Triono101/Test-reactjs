import { useEffect, useState } from "react"

const Effect = () => {
    let [text, setText] = useState('');
    let [dispaly, setDisplay] = useState({});
    let [seconds, setSeconds] = useState(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.json())
        .then(res => setDisplay(res));
    }, []);

    useEffect(() => {
        localStorage.setItem('tetx', text);
        console.log('sinkronisasi');
    }, [text]);

    useEffect(() => {
        console.log('interval');
        let intervalId = setInterval(() => {
            setSeconds(s => s + 1)
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return(
        <div style={{textAlign: 'center', marginTop: '20px'}}>
            <textarea cols="30" rows="10" onChange={(e) => setText(e.target.value)} />
            <p>{dispaly.name} ({dispaly.email}) : {dispaly.website}</p>
            <div>Waktu: {Math.floor(seconds / 60)} Menit {seconds % 60} Detik</div>
        </div>
    )
}

export default Effect; 