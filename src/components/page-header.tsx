import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'; // Assuming breadcrumb component exists or is created

interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumb?: { name: string; href?: string }[];
}

// Minimal Breadcrumb implementation since it's not in the scaffold
const SimpleBreadcrumb = ({ items }: { items: { name: string; href?: string }[] }) => (
  <nav aria-label="Breadcrumb">
    <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
      {items.map((item, index) => (
        <li key={item.name} className="flex items-center gap-1.5">
          {index > 0 && <span>/</span>}
          {item.href ? (
            <a href={item.href} className="transition-colors hover:text-foreground">
              {item.name}
            </a>
          ) : (
            <span className="font-medium text-foreground">{item.name}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export function PageHeader({ title, description, breadcrumb }: PageHeaderProps) {
  return (
    <div className="space-y-2">
      {breadcrumb && <SimpleBreadcrumb items={breadcrumb} />}
      <h1 className="text-3xl font-bold tracking-tight font-headline">{title}</h1>
      {description && <p className="text-muted-foreground">{description}</p>}
    </div>
  );
}
