import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Header from '../container/Header';
 
const Publisher = () => {
    const [data, setData] = useState('');
    const [queue, setQueue] = useState('');
    const history = useNavigate();
    
 
    const saveProduct = async (e) => {
        e.preventDefault();
        await axios.post('http://108.137.89.216/publisher/',{
            queue : queue,
            data : data
        });
        alert("Terkirim")
        history("/");
    }
 
    return (
        <div className='container'>
            <Header />
            <form onSubmit={ saveProduct }>
            {/* <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Queue</label>
                <input type="text" class="form-control" 
                    placeholder="Queue"
                    value={ queue }
                    onChange={ (e) => setQueue(e.target.value) } />
            </div> */}
            <div class="mb-3">
                <label for="exampleInputEmail1" className="form-label">Input Message</label>
                <textarea type="text" className="form-control" 
                        placeholder="message"
                        value={ data }
                        onChange={ (e) => setData(e.target.value) }></textarea>
                <div id="emailHelp" className="form-text">Json, String, Number, and etc</div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
 
export default Publisher