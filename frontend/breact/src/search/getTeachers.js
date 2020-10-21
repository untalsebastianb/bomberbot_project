

export const getTeachers = (teachers, teacherToSearch) => {
    if (teacherToSearch === undefined) {
        return teachers;
      }
    else if (teacherToSearch === '') {
        return teachers;
    }
      teacherToSearch = teacherToSearch.toLocaleLowerCase()
      return (
        teachers.filter( teacher => teacher.first_name.toLocaleLowerCase().includes( teacherToSearch ) )
      )
}
