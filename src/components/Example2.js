import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Header from '../container/Header';
 
const Example2 = () => {
    const [data, setData] = useState('');
    const [queue, setQueue] = useState('');
    const history = useNavigate();
    
 
    const saveProduct = async (e) => {
        try {
            e.preventDefault();
            await axios.post('http://108.137.89.216:9010/publisher2/',{
                queue : queue,
                data : data
            });
            alert("Terkirim")
            history("/example2");
        } catch (error) {
            alert("Error Network")
        }
    }
 
    return (
        <div className='container'>
            <Header />
            <form onSubmit={ saveProduct }>
            <div class="mb-3">
                <label for="exampleInputEmail1" className="form-label">Input Total Message</label>
                <input class="form-control" type="number" className="form-control" 
                        placeholder="Total Message"
                        value={ data }
                        onChange={ (e) => setData(e.target.value) } />
                <div id="emailHelp" className="form-text">Recommendation under 1000</div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
 
export default Example2