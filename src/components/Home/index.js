import './index.css'
import UserInfo from '../UserInfo'
import BlogList from '../BlogList'

const Home = () => (
  <div className="home-container" data-testid="loader">
    <div className="User-info">
      <UserInfo />
    </div>
    <div className="blog-list">
      <BlogList />
    </div>
  </div>
)

export default Home
