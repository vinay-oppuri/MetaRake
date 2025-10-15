import { ScrollArea } from '@/components/ui/scroll-area';

interface LogViewerProps {
  logs: string[];
}

export function LogViewer({ logs }: LogViewerProps) {
  return (
    <ScrollArea className="h-72 w-full rounded-md border bg-muted p-4">
      <pre className="text-sm">
        {logs.map((log, index) => (
          <code key={index} className="block">
            {log}
          </code>
        ))}
      </pre>
    </ScrollArea>
  );
}
