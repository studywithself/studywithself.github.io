import Stack from '../Stack';
import Project from '../Project';
import Contact from '../Contact';

export default function DesignMode() {
    return (
        <div className="flex flex-col gap-0 w-full">
            <Stack />
            <Project />
            <Contact />
        </div>
    );
}