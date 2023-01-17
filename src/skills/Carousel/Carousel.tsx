import React, {Children, cloneElement, ReactElement, useEffect, useState} from 'react';
import s from "./Carousel.module.scss"
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'


/*Children.map(children,(child)=>{
    return cloneElement(child,{
        style:{
            height : '100%',
            width : '100%'
        },
    })
})
{ children: ReactNode  }
)*/


interface CarouselProps {
    children: ReactElement[]
}

export function Carousel({ children }: CarouselProps) {const [pages, setPages] = useState<JSX.Element[]>([])
    const [offset, setOffset] = useState<number>(0)
    const PAGE_WIDTH = 720

    const handleLeftArrowClick = () => {
        setOffset(current => {
            const newOffset = current + PAGE_WIDTH
            return Math.min(newOffset, 0)
        })
    }

    const handleRightArrowClick = () => {
        setOffset(current => {
            const newOffset = current - PAGE_WIDTH
            const maxOffset = -(PAGE_WIDTH * (pages?.length - 1))
            return Math.max(newOffset, maxOffset)
        })
    }

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        minWidth: `${PAGE_WIDTH}px`,
                        maxWidth: `${PAGE_WIDTH}px`
                    }
                })
            })
        )
    }, [])

    return (
        <div className={s.mainContainer}>
            <div className={s.window}>
                <button className={s.arrow_left_button} onClick={handleLeftArrowClick}>
                    <FaChevronLeft />
                </button>
                <div
                    className={s.allItemsContainer}
                    style={{
                        transform: `translateX(${offset}px)`
                    }}
                >
                    {pages}
                </div>
                <button
                    className={s.arrow_right_button}
                    onClick={handleRightArrowClick}
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    )
}



