
// panel�N���X���擾
const panels = document.querySelectorAll('.panel')

// �z��ŗv�f���擾�ł���̂Ń��[�v�ŉ�
panels.forEach((panel) => {
    // �擾�����v�f�ɑ΂���click�C�x���g��t�^����
    panel.addEventListener('click', () => {
        // �N���b�N�����v�f�ɑ΂��āAactive�N���X��t�^����
        // ����ŗv�f���L����
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        // active�N���X���폜����(����ꍇ)
        panel.classList.remove('active')
    })
}