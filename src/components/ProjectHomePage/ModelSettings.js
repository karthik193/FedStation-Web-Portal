import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios  from 'axios';
import "./modelSettings.css"
import Modal from "../../components/ProjectHomePage/Modal";
import ModelTrigger from '../../components/ProjectHomePage/ModelTrigger';
import Table from 'react-bootstrap/Table'



export default function ModelSettings() {
    
    const[details,setDetails]=useState([]);
    const[maxUser,setMaxUser]=useState('');
    const[trigger,setTrigger]=useState('')
    const[model,setModel]=useState([]);
    const[input,setInput]=useState('')
    const [type, setType] = useState('')
    const [label, setLabel] = useState('')
    const [modalOpen, setModalOpen] = useState(false);
    const [modalTriggerEveryOpen, setModalTriggerEveryOpen] = useState(false);

    const params = useParams();

    useEffect(()=>{
        async function getModelDetails(){
            const data= await fetch("https://fedstation.herokuapp.com/getProject/"+params.id)
            .then(res=>res.json())
            .then((data)=>{
                setDetails(data);
                setModel(data.modelType)
                setMaxUser(data.maxUsersSize)
                setTrigger(data.triggerEvery)
                setInput(data.triggerEvery)
            });
        }
        getModelDetails();
        
    },[]);
    console.log(input)

    async function handleChange(){
        console.log(document.getElementById("editField").value)
        if (document.getElementById("editField").value === null || document.getElementById("editField").value === "") {
            document.getElementById("editErr").innerText = "Please fill all the required values!";
            document.getElementById("editErr").hidden = false;
            console.log(document.getElementById("editField").value)
            
        }
        else if (Number(document.getElementById("editField").value) < 1) {
            document.getElementById("editErr").innerText = "Please enter valid number!";
            document.getElementById("editErr").hidden = false;
        }
        else{
            document.getElementById("editErr").innerText = "";
            document.getElementById("editErr").hidden = true;

            axios.patch("http://fedstation.herokuapp.com/updateTriggerOrSize/" + params.id + "?field=triggerEvery&value=" + input)
        // .then(res=>{
        //     setInput(input)
        // })
            await fetch("https://fedstation.herokuapp.com/getProject/"+params.id)
            .then(res=>res.json())
            .then((data)=>{
                setDetails(data);
                setModel(data.modelType)
                setMaxUser(data.maxUsersSize)
                setTrigger(input)})
        }
        // if (document.getElementById("selectField").value === null || document.getElementById("selectField").value === "0") {
        //     document.getElementById("editErr").innerText = "Please fill all the required values!";
        //     document.getElementById("editErr").hidden = false;
        // }
        // else {
        //     document.getElementById("editErr").innerText = "";
        //     document.getElementById("editErr").hidden = true;

            
        // }
        axios.patch("http://fedstation.herokuapp.com/updateTriggerOrSize/" + params.id + "?field=maxUsersSize&value=" + type)
            .then(res => {
                setMaxUser(type)
            })
        
    }
    
    return (
        <div className='modelSetting'>
            <h3>Model Settings</h3>
            {/* <hr style={{height:"1px",border:"none",color:"#333",backgroundColor:"#333"}}/> */}
            <hr/>
            {/* <div className='modelSettingItems'>
                    <div className='modelDetails'>
                        <div className='title'>
                            <br/><p>Model</p><br/><br/>
                            <p>Aggregation type</p><br/><br/>
                            
                            <p >Start at time  </p><br/><br/>
                            {details.recieveAt ? <div><p>Recieve at time</p><br/><br/></div> : <span></span>}
                            <p>Trigger Every</p><br/><br/>
                            <p>Max Users size </p><br/>
                        </div>
                        <div className='value'>
                            <br/><p>{model.model}</p><br/><br/>
                            <p>{model.aggregationType}</p><br/><br/>
                            
                            <p>{details.startAtTime}</p><br/>
                            {details.recieveAt ?<div>
                                <p>{details.recieveAt}</p><br/>
                            </div>  : <span></span>} */}
                            {/* <div className='editable'>
                                <p>{maxUser}</p>
                                <button className='edit' type='button' onClick={() => setModalOpen(true)}>Edit</button>
                            </div><br/> */}
                            {/* <div className='editable'>
                                <p>{trigger}</p>
                                <button className='edit' type='button' onClick={() => setModalTriggerEveryOpen(true)}>Edit</button>
                            </div><br/> */}
                            {/* <br/><div>
                                <input type="number" id="editField" className='editField' value={input} style={{width:"50px"}} onChange={(e)=>{
                                    if(e.target.value===""||(/[0-9]/)){
                                        setInput(e.target.value) 
                                    }
                                    }}/>
                                
                            </div><br/><br/>
                            <div>
                                <select id='selectField' className='editField' value={type} onChange={(e) => {
                                    let index = e.nativeEvent.target.selectedIndex;
                                    let label = e.nativeEvent.target[index].text;
                                    let value = e.target.value;
                                    setType(value)
                                    setLabel(label)
                                }} style={{ 'width': 'fit-content',height:"fit-content",padding:"px",border:"none",fontSize:"1.5rem" }}>
                                    <option style={{padding:"10px"}} value={maxUser}>{maxUser}</option>
                                    <option value='1'>0-50</option>
                                    <option value='2'>50-100</option>
                                    <option value='3'>100-150</option>
                                </select>
                            </div>
                        </div>
                        
                    </div>
                    
                    
            </div> */}
            <div className='modelSettingItems'>
                <div style={{display:"flex",alignItems:"center"}}>
                    <p style={{marginLeft:"20px"}}>Model</p>
                    <p style={{marginLeft:"475px"}}>{model.model}</p>
                </div>  

                <div style={{display:"flex",alignItems:"center",marginTop:"30px"}}>
                    <p style={{marginLeft:"20px"}}>Aggregation type</p>
                    <p style={{marginLeft:"400px"}}>{model.aggregationType}</p>
                </div>   
                
                <div style={{display:"flex",alignItems:"center",marginTop:"30px"}}>
                    <p style={{marginLeft:"20px"}}>Start at time </p>
                    <p style={{marginLeft:"447px"}}>{details.startAtTime}</p>
                </div>   
                
                <div style={{display:"flex",alignItems:"center",marginTop:"20px"}}>
                    {details.recieveAt ? <div><p style={{marginLeft:"20px"}}>Recieve at time</p></div> : <span></span>}
                    {details.recieveAt ?<div>
                                            <p style={{marginLeft:"450px"}}>{details.recieveAt}</p>
                                        </div>  : <span></span>}
                </div>  

                <div style={{display:"flex",alignItems:"center",marginTop:"20px"}}>
                    <p style={{marginLeft:"20px"}}>Trigger Every</p>
                    <input type="number" id="editField" className='editField' value={input} style={{width:"60px",marginLeft:"427px", padding:"0px 12px"}} onChange={(e)=>{
                                    if(e.target.value===""||(/[0-9]/)){
                                        setInput(e.target.value) 
                                    }
                                    }}/>
                </div>   

                <div style={{display:"flex",alignItems:"center",marginTop:"40px"}}>
                    <p style={{marginLeft:"20px"}}>Max Users size</p>
                    <select id='selectField' className='editField' value={type} onChange={(e) => {
                                    let index = e.nativeEvent.target.selectedIndex;
                                    let label = e.nativeEvent.target[index].text;
                                    let value = e.target.value;
                                    setType(value)
                                    setLabel(label)
                                }} style={{ width: 'fit-content',height:"fit-content",padding:"17px",border:"none",fontSize:"1.5rem",marginLeft:"415px"}}>
                                    <option style={{padding:"10px"}} value={maxUser}>{maxUser}</option>
                                    <option value='1'>0-50</option>
                                    <option value='2'>50-100</option>
                                    <option value='3'>100-150</option>
                                </select>
                </div>    
            </div>
            <div style={{marginTop:"40px"}}>
                <p style={{ marginLeft:"40px"}} id="editErr" className='editErrMsg' hidden={true}></p>
                <input className='edit' style={{marginLeft:"40px",marginTop:"0px"}} type="submit" value="Save" onClick={handleChange}/>
            </div>
            
            {/* <h3>Delete Model</h3>
            <div className='modelSettingItems' style={{border:"2px solid #E7411B"}}>
                <div className="modelSettingContainer">
                    <div>
                        <strong style={{display:"block"}}>Delete this model</strong>
                        <span style={{fontSize:"14px",display:"block"}}>Once you delete a model, there is no going back. Please be certain.</span>
                    </div>
                    
                    <button className='deleteModel'>Delete</button>
                </div>
            </div> 
            
                (e)=>{
                                    setInput(e.target.value)
                                    axios.patch("http://fedstation.herokuapp.com/updateTriggerOrSize/" + params.id + "?field=triggerEvery&value=" + input)
                                    .then(res => {
                                        setInput(e.target.value)
                                    })
                                    
                                    }

            */}
            

            {modalOpen && <Modal setOpenModal={setModalOpen} setMaxUser={setMaxUser} />}
            {modalTriggerEveryOpen && <ModelTrigger setOpenModal={setModalTriggerEveryOpen} setTrigger={setTrigger} />}
        </div>
    )
}
