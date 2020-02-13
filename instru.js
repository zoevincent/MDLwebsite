const photos = document.querySelectorAll('.js-instru-photo')

// scale and color on tablet and phone
for (const _photo of photos) {
    _photo.addEventListener('touchmove', () => {
        _photo.style.filter = "grayscale(0)"
        _photo.style.transform = "scale(1.2, 1.2)"
    })
}