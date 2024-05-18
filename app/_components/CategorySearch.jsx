import React from 'react'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

function CategorySearch() {
  return (
    <div className="mb-10 items-center flex flex-col gap-4">
      <h2 className="font-bold text-4xl tracking-wide">
        Search <span className="text-primary"> Doctor</span>
      </h2>
      <p className="text-gray-500 text-xl">
        Search your doctor and book appoinment in one click
      </p>
      <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search..." />
        <Button type="submit">
          <Search className='h-4 w-4 mr-2' />
          Search
        </Button>
      </div>
    </div>
  );
}

export default CategorySearch
