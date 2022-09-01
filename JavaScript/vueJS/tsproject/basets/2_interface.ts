interface Rect {
    readonly id: number
    color?: string
    size: {
        width: number
        height: number
    }
}
const rect1: Rect = {
    id: 1,
    size: {
        width: 15,
        height: 20,
    },
    color: '#ccc'
}
const rect2: Rect = {
    id: 2,
    size: {
        width: 70,
        height: 70,
    }
}
rect2.color = '#fff '

const rect3 = {} as Rect
const rect4 = <Rect>{}

//====================================

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: 3,
    size: {
        width: 15,
        height: 15,
    },
    getArea():number {
        return this.size.width * this.size.height
    },
}
rect5.getArea()

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}