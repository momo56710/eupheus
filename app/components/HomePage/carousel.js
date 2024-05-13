'use client'
import { courses } from '@/objects/courses'
import React, { useState } from 'react'
import CourseCard from './components/courseCard'

export default function Carousel({ title, type, checkbox, sort }) {
    const [selectedItemType, setSelectedItemType] = useState(type[0])
    const [selectedItemSort, setSelectedItemSort] = useState(sort[0])
    //menu 
    const Menu = ({ items, selectedItem, setSelectedItem, style }) => {

        const [isOpen, setIsOpen] = useState(false);

        const handleClick = () => {
            setIsOpen(!isOpen);
        };

        const menuItems = items.map((item, i) => (
            item == selectedItem ? '' :
                <li key={i} className="cursor-pointer" onClick={() => { setSelectedItem(item); setIsOpen(false) }}>
                    {item}
                </li>
        ));

        const arrow = isOpen ? '∧' : '∨';
        return <div className={`relative`}>
            <button type="button" onClick={handleClick} className="menuButton">
                <span style={{ color: style }}>{selectedItem}</span> {arrow}
            </button>
            {isOpen && (
                <ul className="menuList absolute bg-white">{menuItems}</ul>
            )}
        </div>
    }


    return (
        <div className='font-bold text-eupheus-blue'>
            <div className='flex justify-between items-center  p-10  max-w-[1440px] m-auto'>
                <p className='text-[2em]'>{title}</p>
                <div className='flex gap-4'>
                    <div className='w-[230px] text-[18px]'>
                        {
                            type.length == 0 ? '' : <Menu items={type} selectedItem={selectedItemType} setSelectedItem={setSelectedItemType} />
                        }
                    </div>
                    {
                        checkbox.map((e, i) => (
                            <div key={i}>
                                <input type='checkbox' />
                                <span>{e}</span>
                            </div>))
                    }
                    {
                        <>
                            <p>Sort :</p>
                            <Menu items={sort} style={'green'} selectedItem={selectedItemSort} setSelectedItem={setSelectedItemSort} />
                        </>
                    }
                </div>
            </div>
            <div className='bg-gray-200 '>
                <div className='flex justify-around p-10 flex-wrap  max-w-[1440px] m-auto'>
                {
                    courses.map((e, i) => (<CourseCard key={i} course={e} />))
                }
                </div>
            </div>
        </div>
    )
}
