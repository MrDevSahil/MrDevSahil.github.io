import { 
  Navbar, 
  FollowUp, 
  BlogContent, 
  Footer 
} from "../components";

function Blog() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <FollowUp />
      <BlogContent />
      <Footer />
    </div>
  );
}

export default Blog;
