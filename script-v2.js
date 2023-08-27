const section01 = document.querySelector('#section-01');
const faceWrap = document.querySelector('.face-wrap');
const faces = document.querySelectorAll('.face');

section01.addEventListener('scroll', () => {
  const firstFace = faces[0];
  const firstFaceRect = firstFace.getBoundingClientRect();
  const lastFace = faces[faces.length - 1];

  console.log(firstFaceRect.right)
  const viewportWidth = window.innerWidth;
//   console.log(viewportWidth)
//   if (firstFaceRect.x < viewportWidth) {
//     // 이동할 얼굴 요소를 가져옵니다.
//     const movedFace = firstFace;
    
//     // 가장 처음에 있는 얼굴 요소를 삭제합니다.
//     firstFace.remove();

//     // 이동할 얼굴 요소를 .face-wrap에 추가합니다.
//     faceWrap.appendChild(movedFace);
//   }
});