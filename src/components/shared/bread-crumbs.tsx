'use client'

import React from 'react'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '../ui/breadcrumb'
import { usePathname } from 'next/navigation'

const AppBreadcrumbs = () => {
  const pathname = usePathname()  
  console.log(pathname)

  
  return (
    <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem className="hidden md:block">
        <BreadcrumbLink href="#">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator className="hidden md:block" />
      <BreadcrumbItem>
        <BreadcrumbPage>
          {pathname.split("/").slice(1).join(" / ")}
        </BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
  )
}

export default AppBreadcrumbs
