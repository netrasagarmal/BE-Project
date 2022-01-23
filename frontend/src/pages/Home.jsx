import './pagebg.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
   const [details, setDetails] = useState();
   const [username, setUsername] = useState('');
   const [quote, setQuote] = useState('');
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');

   const getData = async () => {
      try {
         const response = await axios.get('http://localhost:8000/sample/');
         setDetails(response.data.data);
      } catch (err) {
         console.log(err);
      }
   };

   const postData = async () => {
      try {
         const response = await axios.post('http://localhost:8000/sample/', {
            username: this.state.username,
            name: this.state.name,
            email: this.state.email
         });
         setUsername(response.data.username);
         setName(response.data.name);
         setEmail(response.data.email);
      } catch (err) {
         console.log(err);
      }
   };

   const handleInput = (e) => {
      setName(e.target.value);
   };

   const handleSubmit = (e) => {
      postData();
   };

   useEffect(() => {
      getData();
   }, []);

   return (
      <div>
         <h1 className="font-bold text-xl">Home</h1>

         <form>
            <div>
               <p>UserName</p>
               <input type="text" onChange={handleInput} value={username} />
            </div>

            <div>
               <p>Name</p>
               <input type="text" />
            </div>
         </form>
      </div>
   );
}

/*import React from "react";
//import './App.css';
class Home extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
            "http://127.0.0.1:8000/sample")
			.then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;

		return (
		<div className = "Home">
			<h1> Fetch data from an api in react </h1> {
				items && items.length > 0 && items.map((item) => (
				<ol >
					User_Name: { item.username },
					Full_Name: { item.name },
					User_Email: { item.email }
					</ol>
				))
			}
            {console.log(items)}
		</div>
	);
}
}

export default Home;
*/
/*
import React from "react";
import axios from "axios";

class Home extends React.Component {
	state = {
		details: [],
		user: "",
		quote: "",
	};

	componentDidMount() {
		let data;

		axios
			.get("http://localhost:8000/sample/")
			.then((res) => {
				data = res.data;
				this.setState({
					details: data,
				});
			})
			.catch((err) => {});
	}


	handleInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post("http://localhost:8000/sample/", {
				name: this.state.user,
				detail: this.state.quote,
			})
			.then((res) => {
				this.setState({
					username: "",
					name: "",
				});
			})
			.catch((err) => {});
	};

	render() {
		return (
			<div className="container jumbotron ">
				<form onSubmit={this.handleSubmit}>

					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text"
								id="basic-addon1">
								{" "}
								Username{" "}
							</span>
						</div>
						<input type="text" className="form-control"
							placeholder="Name of the Poet/Author"
							aria-label="Username"
							aria-describedby="basic-addon1"
							value={this.state.username} name="username"
							onChange={this.handleInput} />
					</div>

					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text">
							Name
							</span>
						</div>
						<textarea className="form-control "
								aria-label="With textarea"
								placeholder="Tell us what you think of ....."
								value={this.state.quote} name="name"
								onChange={this.handleInput}>
						</textarea>
					</div>



					<button type="submit" className="btn btn-primary mb-5">
						Submit
					</button>
				</form>

				<hr
					style={{
						color: "#000000",
						backgroundColor: "#000000",
						height: 0.5,
						borderColor: "#000000",
					}}
				/>

				{this.state.details.map((detail, id) => (
					<div key={id}>
						<div className="card shadow-lg">
							<div >Quote {id + 1}</div>
								<div className="card-body">
									<blockquote>
										<h1> {detail.username} </h1>
										<footer className="blockquote-footer">
											{" "}
											<cite title="Source Title">{detail.name}</cite><br></br>
											<cite title="Source Title">{detail.email}</cite>
										</footer>
									</blockquote>
								</div>
						</div>
						<span className="border border-primary "></span>
					</div>
				))}
			</div>
		);
	}
}
export default Home;*/

// class Home extends React.Component {
// 	state = {
// 		details: [],
// 		user: "",
// 		quote: "",
// 	};

// 	componentDidMount() {
// 		let data;

// 		axios
// 			.get("http://localhost:8000/sample/")
// 			.then((res) => {
// 				data = res.data;
// 				this.setState({
// 					details: data,
// 				});
// 			})
// 			.catch((err) => {});
// 	}

// 	handleInput = (e) => {
// 		this.setState({
// 			[e.target.name]: e.target.value,
// 		});
// 	};

// 	handleSubmit = (e) => {
// 		e.preventDefault();

// 		axios
// 			.post("http://localhost:8000/sample/", {
// 				username: this.state.username,
// 				name: this.state.name,
// 				email: this.state.email,
// 			})
// 			.then((res) => {
// 				this.setState({
// 					username: "",
// 					name: "",
// 					email: "",
// 				});
// 			})
// 			.catch((err) => {});
// 	};

// 	render() {
// 		return (
// 			<div className="container jumbotron ">
// 				<form onSubmit={this.handleSubmit}>

// 					<div className="input-group mb-3">
// 						<div className="input-group-prepend">
// 							<span className="input-group-text"
// 								id="basic-addon1">
// 								{" "}
// 								Username{" "}
// 							</span>
// 						</div>
// 						<input type="text" className="form-control"
// 							placeholder="Name of the Poet/Author"
// 							aria-label="Username"
// 							aria-describedby="basic-addon1"
// 							value={this.state.username} name="username"
// 							onChange={this.handleInput} />
// 					</div>

// 					<div className="input-group mb-3">
// 						<div className="input-group-prepend">
// 							<span className="input-group-text">
// 							Name
// 							</span>
// 						</div>
// 						<textarea className="form-control "
// 								aria-label="With textarea"
// 								placeholder="Name of person"
// 								value={this.state.name} name="name"
// 								onChange={this.handleInput}>
// 						</textarea>
// 					</div>

// 					<div className="input-group mb-3">
// 						<div className="input-group-prepend">
// 							<span className="input-group-text"
// 								id="basic-addon1">
// 								{" "}
// 								Email{" "}
// 							</span>
// 						</div>
// 						<input type="text" className="form-control"
// 							placeholder="Email of person"
// 							aria-label="Email"
// 							aria-describedby="basic-addon1"
// 							value={this.state.email} name="email"
// 							onChange={this.handleInput} />
// 					</div>

// 					<button type="submit" className="btn btn-primary mb-5">
// 						Submit
// 					</button>
// 				</form>

// 				<hr
// 					style={{
// 						color: "#000000",
// 						backgroundColor: "#000000",
// 						height: 0.5,
// 						borderColor: "#000000",
// 					}}
// 				/>

// 				{this.state.details.map((detail, id) => (
// 					<div key={id}>
// 						<div className="card shadow-lg">
// 							<div >Quote {id + 1}</div>
// 								<div className="card-body">
// 									<blockquote>
// 										<h1> {detail.username} </h1>
// 										<footer className="blockquote-footer">
// 											{" "}
// 											<cite title="Source Title">{detail.name}</cite><br></br>
// 											<cite title="Source Title">{detail.email}</cite>
// 										</footer>
// 									</blockquote>
// 								</div>
// 						</div>
// 						<span className="border border-primary "></span>
// 					</div>
// 				))}
// 			</div>
// 		);
// 	}
// }
// export default Home;
