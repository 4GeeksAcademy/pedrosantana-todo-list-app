import React, { useEffect, useState } from "react";

//create your first component
const Input = () => {

	let [listItems, setListItems] = useState([
		"Make the bed",
		"Wash my hands"
	])

	useEffect(() =>{
        if(listItems.length==0 && inputValue==""){
			alert("No tasks, add a task");}
		});

	const [inputValue, setInputValue] = useState("");

	const validateInput = (e) => {
		if(e.key === 'Enter'){
			if (inputValue === ""){
				alert("The input cannot be empty");
			} else {
				setListItems([...listItems, inputValue]);
				setInputValue("");
			}
		}
	};

	const deleteItem = (ind) => {
		const newArray = [...listItems];
		newArray.splice(ind, 1);
		setListItems(newArray);
	}

	return (
		<div className="container">
			<input type="text" onChange={e => 
					setInputValue(e.target.value)
					}
					onKeyUp={validateInput}
					value={inputValue} className="form-control" 
					placeholder="What needs to be done?"
			/>
			<ul className="list-group">
				{
					listItems.map((item, i) =>
					<li className="list-group-item d-flex flex-row">
						{item}
						<i className="closed fa-solid fa-xmark"
							onClick={() => deleteItem(i)}>

						</i>
					</li>)
				}
			</ul>
		</div>
	);
};

export default Input;
