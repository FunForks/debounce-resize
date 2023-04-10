# React Debounce Resize

[Demo](https://funforks.github.io/debounce-resize)

A proof-of-concept demo that displays a green circle with a maximum diameter which must appear entirely inside a given frame. The optimum centre of the circle is defined by a red square, which is positioned randomly within the frame each time the page is loaded. The green circle will place its centre as close to the centre of the red square as possible, without breaching the border of the frame.

The frame is centred and its size is proportional to the size of the viewport. The random location of the red square is set proportionally to the size of the frame.

As you resize the viewport of the page, the frame and the red square will maintain their proportional sizes. The green circle will adjust its size and location, to respect its maximum size, its optimal centre and its constraint to the frame.

To prevent constant re-renderings, the adjustment of the green is debounced. This means that it will initially retain its size and position, and will only adjust itself after the resizing of the viewport is paused.