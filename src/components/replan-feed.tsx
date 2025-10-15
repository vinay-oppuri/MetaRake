import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MOCK_REPLAN_FEED } from '@/lib/placeholder-data';
import { Bot, User } from 'lucide-react';

export function ReplanFeed() {
  return (
    <ScrollArea className="h-96 w-full">
      <div className="space-y-4 pr-4">
        {MOCK_REPLAN_FEED.map((event) => (
          <div key={event.id} className="flex gap-3">
            <Avatar>
              <AvatarFallback>
                {event.source === 'system' ? <Bot /> : <User />}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-semibold">{event.title}</span> - {event.description}
              </p>
              <p className="text-xs text-muted-foreground">{event.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
