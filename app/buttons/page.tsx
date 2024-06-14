import { Button } from "@/components/ui/button";

const ButtonsPage = () => {
  return (
    <div className="p-10">
      <h1 className="mb-9 text-4xl">Buttons Page</h1>

      <div className="flex flex-col items-start gap-6">
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="primaryOutline">Primary Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondaryOutline">Secondary Outline</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="dangerOutline">Danger Outline</Button>
        <Button variant="super">Super</Button>
        <Button variant="superOutline">Super Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="sidebar">Sidebar</Button>
        <Button variant="sidebarOutline">Sidebar Outline</Button>
      </div>
    </div>
  );
};

export default ButtonsPage;
