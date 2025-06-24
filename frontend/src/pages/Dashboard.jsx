import FeedbackForm from "../components/FeedbackForm";
import FeedbackList from "../components/FeedbackList";

export default function Dashboard() {
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Feedback Dashboard</h1>
      <FeedbackForm fetchFeedbacks={() => {}} />
      <FeedbackList />
    </div>
  );
}
