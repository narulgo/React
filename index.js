function a() {

    let value = 1

    return () => value++

}

const func = a()

func() // 1

func() // 2

func() // 3