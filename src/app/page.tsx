import Button from '../components/Button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <h1 className="text-4xl font-bold mb-8">My Storybook App</h1>
      <div className="flex flex-col gap-4 items-center">
        <Button primary size="large" label="Primary Button" />
        <Button size="medium" label="Secondary Button" />
        <Button primary size="small" label="Small Primary Button" />
      </div>
    </main>
  );
}