import Button from '../components/Button';
import Card from '../components/Card';
import Alert from '../components/Alert';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">My Storybook Components</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-2">Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <Button primary size="large" label="Primary Button" />
            <Button size="medium" label="Secondary Button" />
            <Button primary size="small" label="Small Primary" />
          </div>
          
          <h2 className="text-2xl font-semibold mb-2 mt-8">Alerts</h2>
          <div className="space-y-4">
            <Alert type="info" title="Information" message="This is an informational message." />
            <Alert type="success" title="Success" message="Operation completed successfully!" />
            <Alert type="warning" title="Warning" message="Please proceed with caution." />
            <Alert type="error" title="Error" message="An error has occurred." />
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold mb-2">Cards</h2>
          <Card 
            title="Card Component" 
            description="This is a sample card component using Tailwind CSS." 
            imageUrl="https://source.unsplash.com/random/300x200/?nature"
          />
        </div>
      </div>
    </main>
  );
}