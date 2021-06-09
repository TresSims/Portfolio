import axios from 'axios';

const Home = ({ projects, error }) => {
    if (error){
	return <div>An error occured: {error.message}</div>
    }
    return (
	<ul>
	    {projects.map(project => (
		<li key={project.id}>{project.name} </li>
	    ))}
	</ul>
    );
};

Home.getInitialProps = async ctx => {
    try{
	const pro = await axios.get('http://backend:1337/projects');
	const projects = pro.data;
	return{ projects }
    } catch(error) {
	return{error};
    }
};

export default Home;
