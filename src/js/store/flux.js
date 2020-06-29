const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			agendas: [],
			fullName: "",
			email: "",
			phone: "",
			address: ""
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getAgendas: async url => {
				const response = await fetch(url);
				const data = await response.json();
				/* console.log(data); */
				setStore({
					agendas: data
				});
				/* console.log(data[0].full_name); */
			},
			getUpdate: contacto => {
				//console.log(contacto.id);
				const store = getStore();
				console.log(contacto);
				const response = fetch("https://assets.breatheco.de/apis/fake/contact/" + contacto, {
					method: "PUT",
					body: JSON.stringify({
						full_name: store.fullName,
						email: store.email,
						agenda_slug: "JoseManuel_Agenda",
						address: store.address,
						phone: store.phone
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			},
			getDelete: contacto => {
				const store = getStore(contacto);
				/* console.log(contacto); */
				const response = fetch("https://assets.breatheco.de/apis/fake/contact/" + contacto, {
					method: "DELETE"
				})
					.then(resp => resp.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			},
			getContactos: datos => {
				setStore({
					fullName: datos.full_name,
					email: datos.email,
					phone: datos.phone,
					address: datos.address
				});
			},

			getName: newdata => {
				const data = newdata;
				/* console.log(data); */
				setStore({
					fullName: data
				});
			},
			getEmail: newdata => {
				const data = newdata;
				setStore({
					email: newdata
				});
			},
			getPhone: newdata => {
				const data = newdata;
				setStore({
					phone: newdata
				});
			},
			getAddress: newdata => {
				const data = newdata;
				setStore({
					address: newdata
				});
			},
			getNewContact: () => {
				const store = getStore();
				const response = fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify({
						full_name: store.fullName,
						email: store.email,
						agenda_slug: "JoseManuel_Agenda",
						address: store.address,
						phone: store.phone
					}),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => resp.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));

				/* );
				const data = response.json();
				const store = getStore();
				console.log(store.fullName, store.phone, store.address, store.email); */
			}
		}
	};
};

export default getState;
