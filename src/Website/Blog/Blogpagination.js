import React, { useState, useEffect } from 'react';
import { request } from 'graphql-request';
import ReactPaginate from 'react-paginate';
import './Pagination.css';
import blockview from "../../assets/img/GridIcon.svg"
import listview from "../../assets/img/ListIcon.svg"


const Blogpagination = () => {
	const [blogPosts, setBlogPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(3);
	const [BlogView,setBlogView] =useState('Grid');
    function Selectview (viewname){
		// alert(viewname)
		setBlogView(viewname)
	}

	// useEffect(() => {
	// 	const fetchBlogPosts = async () => {
	// 		const { posts } = await request(
	// 			'https://api-us-east-1.graphcms.com/v2/cl3zo5a7h1jq701xv8mfyffi4/master',
	// 			`
	// 		{ 
	// 			posts {
	// 				id
	// 				title
	// 				excert
	// 				postUrl
	// 				cover {
	// 				  url
	// 				}
	// 				datePublished
	// 				author {
	// 				  firstName
	// 				  profilePicture {
	// 					 url
	// 				  }
	// 				}
	// 			 }
	// 		}
	// 	 `
	// 		);

	// 		setBlogPosts(posts);
	// 	};

	// 	fetchBlogPosts();
	// }, []);
    

	useEffect(() => {
		const fetchBlogPosts = async () => {
			const { posts } = {"posts":[
				{
				  id: '1',
				  domain_name: 'Data Science',
				  topics: 'Python For Beginnertttttttttttttttttttttttttttttttttttttttttttttttttttttttttt sfjsjf  sfjhsajfsjfjfjsj nfjsajfjsfjs nssfhsdjfdfjdsjf nsfjsfsfjsj nsjfjfjefjd ssnfjsdjfh',
				  blog_picture: null,
				  blog_content: 'As you delve into Python, focus on mastering the basics, including variables, data types, conditionals, and loops. Embrace the power of functions and modular programming to break down complex tasks into manageable pieces. Practice is key, so embark on small projects, explore libraries, and gradually delve into more advanced topics like object-oriented programming and data manipulation. In this process, donot forget to reference Python rich documentation and seek help from the thriving online community. Your Python adventure is just beginning, and with dedication, the possibilities are endless.',
				  content_owner: 'vijay',
				  Reference_link: null,
				  created_data: 2023-11-14,
				  last_updated_by: 'vijay'
				},
				{
				  id: '2',
				  domain_name: 'Data Science',
				  topics: 'Statistics for Data Science with Python',
				  blog_picture: null,
				  blog_content: 'Write Python code to conduct various statistical tests including a T test, an ANOVA, and regression analysis. Interpret the results of your statistical analysis after conducting hypothesis testing. Calculate descriptive statistics and visualization by writing Python code.Create a final project that demonstrates your understanding of various statistical test using Python and evaluate your peers projects.  ',
				  content_owner: 'vijay',
				  Reference_link: null,
				  created_data: 2023-11-14,
				  last_updated_by: 'vijay'
				},
				{
				  id: '3',
				  domain_name: 'Data Science',
				  topics: 'Data Science: Machine Learning',
				  blog_picture: null,
				  blog_content: 'You will learn about training data, and how to use a set of data to discover potentially predictive relationships. As you build the movie recommendation system, you will learn how to train algorithms using training data so you can predict the outcome for future datasets. You will also learn about overtraining and techniques to avoid it such as cross-validation. All of these skills are fundamental to machine learning.',
				  content_owner: 'vijay',
				  Reference_link: null,
				  created_data: 2023-11-14,
				  last_updated_by: 'vijay'
				},
				{
				  id: '4',
				  domain_name: 'Data Science',
				  topics: 'Role And Impact Of Deep Learning In Data Science',
				  blog_picture: null,
				  blog_content: 'If you find a world in which deep learning might take over from commonly used data science techniques, it won’t be a surprise. Yes! In this world, technology is still under development, and its not just algorithms that learn – the entire system does! The field is still in its infancy and growing, the underlying maths could be challenging and complex to understand. Still, prominent data scientists can run their programs on neural networks without much worry about their work. The blog will help us understand Deep Learning and how to bring deep learning into practice in the field of data science.',
				  content_owner: 'vijay',
				  Reference_link: null,
				  created_data: 2023-11-14,
				  last_updated_by: 'vijay'
				}
			  ]};
			  
console.log(posts);
			setBlogPosts(posts);
		};

		fetchBlogPosts();
	}, []);
	
	  
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

	const paginate = ({ selected }) => {
		setCurrentPage(selected + 1);
	};

	return (
		<div className="container10 totalblogcontainer">
			<div>
				<div className='viewbtn'> 
				<button onClick={()=>Selectview("Grid")}>
					<img src={blockview} alt="Gridview" />
				</button>
				<button onClick={()=>Selectview("List")}>
					<img src={listview} alt="Listview"/>
				</button>  
       
					</div>
			</div>
			{blogPosts ? BlogView==='Grid'?(
				<div className="blog-content-section">
					<div className="blog-container">
						{currentPosts.map((currentPost) => (
							<div className="blog-post" key={currentPost.id}>
								<img className="cover-img" src={currentPost.blog_picture} alt="" />
								<h2 className="title">{currentPost.topics}</h2>

								<div className="description">{currentPost.blog_content}</div>
								<div className="card-details">
									<div className="lh-details">
										
										<p className="date">
											{new Date(
												`${currentPost.created_data}`
											).toLocaleDateString('en-us', {
												year: 'numeric',
												month: 'short',
												day: 'numeric',
											})}
										</p>
                                        <p>{currentPost.domain_name}</p>
									</div>
									{/* <a
										href={currentPost.postUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="read-more"
									>
										Read post
									</a> */}
								</div>
							</div>
						))}
					</div>
					<ReactPaginate
						onPageChange={paginate}
						pageCount={Math.ceil(blogPosts.length / postsPerPage)}
						previousLabel={'Prev'}
						nextLabel={'Next'}
						containerClassName={'pagination'}
						pageLinkClassName={'page-number'}
						previousLinkClassName={'page-number'}
						nextLinkClassName={'page-number'}
						activeLinkClassName={'active'}
					/>
					
				</div>
			):(
				/*List view Area*/
				<div className="blog-content-section">
					<div className='desktoplistcontainer'>
						{currentPosts.map((currentPost) => (
							<div className="row widthcontainer">
								<div className="col-12 bloglistviewcontainer">
				<div className="row ">
					
					<img className="col-md-2" src={currentPost.blog_picture} alt=""  />
					
					<div className="col-md-8">
					<div className='Blogmobilelistheading'>{currentPost.topics}</div>

                    <p className='Desktopview Blogdesktoplistcontent'>{currentPost.blog_content}</p>
					</div>
					<div className="col-md-2 Desktopview">
					<p >
											{new Date(
												`${currentPost.created_data}`
											).toLocaleDateString('en-us', {
												year: 'numeric',
												month: 'short',
												day: 'numeric',
											})}
										</p>
                                        <p>Developer</p>
					</div>
				</div>
				<div className="row Mobileview blogcontent2">
					<div className='col-md-12  containoverflow'>
					<div className='Blogcontentlistview'>{currentPost.blog_content}</div>
					</div>
				</div>
				<div className='row Mobileview blogcontent3'>
				<div className="card-details">
									<div className="lh-details">
										
										<p className="date">
											{new Date(
												`${currentPost.created_data}`
											).toLocaleDateString('en-us', {
												year: 'numeric',
												month: 'short',
												day: 'numeric',
											})}
										</p>
                                        <p>Developer</p>
									</div>
									
								</div>
				</div>
				</div></div>
						))}
						</div>
						<ReactPaginate
						onPageChange={paginate}
						pageCount={Math.ceil(blogPosts.length / postsPerPage)}
						previousLabel={'Prev'}
						nextLabel={'Next'}
						containerClassName={'pagination'}
						pageLinkClassName={'page-number'}
						previousLinkClassName={'page-number'}
						nextLinkClassName={'page-number'}
						activeLinkClassName={'active'}
					/>
						</div>

			): (
				<div className="loading">Loading...</div>
			)}
		</div>
	);
};

export default Blogpagination;
