import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      
      <div className="space-y-6 mb-8">
        <h2 className="text-lg font-semibold">Button Components</h2>
        
        {/* Small Buttons */}
        <div className="space-y-4">
          <h3 className="font-medium">Small Size</h3>
          <div className="flex gap-4">
            <Button title="Small Rounded-sm" styles="text-sm rounded-sm" />
            <Button title="Small Rounded-md" styles="text-sm rounded-md" />
            <Button title="Small Rounded-full" styles="text-sm rounded-full" />
          </div>
        </div>

        {/* Medium Buttons */}
        <div className="space-y-4">
          <h3 className="font-medium">Medium Size</h3>
          <div className="flex gap-4">
            <Button title="Medium Rounded-sm" styles="text-base rounded-sm" />
            <Button title="Medium Rounded-md" styles="text-base rounded-md" />
            <Button title="Medium Rounded-full" styles="text-base rounded-full" />
          </div>
        </div>

        {/* Large Buttons */}
        <div className="space-y-4">
          <h3 className="font-medium">Large Size</h3>
          <div className="flex gap-4">
            <Button title="Large Rounded-sm" styles="text-lg rounded-sm px-6 py-3" />
            <Button title="Large Rounded-md" styles="text-lg rounded-md px-6 py-3" />
            <Button title="Large Rounded-full" styles="text-lg rounded-full px-6 py-3" />
          </div>
        </div>

        {/* Additional rounded-lg button as requested */}
        <div className="space-y-4">
          <h3 className="font-medium">Additional Shape</h3>
          <div className="flex gap-4">
            <Button title="Rounded-lg Button" styles="rounded-lg" />
          </div>
        </div>
      </div>
      <Card />
    </div>
    
  )
}
export default Landing