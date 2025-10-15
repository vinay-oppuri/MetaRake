'use client';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { navConfig, NavCategory, NavItem } from './nav';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Train } from 'lucide-react';

const AppSidebar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <Sidebar className="hidden md:flex md:flex-col md:w-64" collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2 p-2">
          <Train className="w-6 h-6 text-primary" />
          <span className="font-semibold text-lg">RakeWise DSS</span>
        </div>
      </SidebarHeader>
      <SidebarContent className="p-0">
        <SidebarMenu>
          {navConfig.map((category: NavCategory) => (
            <SidebarGroup key={category.title}>
              <SidebarGroupLabel>{category.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                {category.items.map((item: NavItem) => (
                  <SidebarMenuItem key={item.title}>
                    <Link href={item.href} passHref legacyBehavior>
                      <SidebarMenuButton
                        asChild
                        isActive={isActive(item.href)}
                        tooltip={{ children: item.title }}
                      >
                        <a>
                          {item.icon}
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                ))}
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
         {/* Footer content can go here */}
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
