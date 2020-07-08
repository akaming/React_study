# 04. JSX의 기본 규칙 알아보기
JSX 는 리액트에서 생김새를 정의할 때, 사용하는 문법이다. 얼핏보면 HTML 같이 생겼지만 실제로는 JavaScript 이다.

```
return <div>안녕하세요</div>;

```
리액트 컴포넌트 파일에서 XML 형태로 코드를 작성하면 babel 이 JSX 를 JavaScript 로 변환을 해준다.


JSX 가 JavaScript 로 제대로 변환이 되려면 지켜주어야 하는 몇가지 규칙이 있다.


## JSX 규칙
### 꼭 닫혀야 하는 태그

태그는 꼭 닫혀있어야 한다.
만약에 태그와 태그 사이에 별도의 내용이 없다면 self closing tag를 사용해야 한다.

__App.js__
```
    <div>태그는 꼭 닫혀야 한다!</div>
    <Hello />
    <input />
    <br />
```


### 두개 이상의 태그는 하나의 태그
두개 이상의 태그는 하나의 태그로 꼭 감싸줘야 한다. 만약에 태그로 감싸고 싶지 않을때는 <></> (fragment)로 감싸준다.
 
__App.js__
```
    <>
        <div>두개 이상의</div>
        <p>태그는 감싸자</p>
    </>
```

### 자바스크립트 값은 중괄호
자바스크립트의 값을 내부에서 보여줄때는 중괄호{} 로 감싸서 보여준다.

__App.js__
```
    const name = '이렇게';
    return (
        <div>JavaScript 값 보여줄땐, {name}</div>
    ) 
```

### style 을 사용할때는 객체
JSX 내부에서 style 을 사용할때는 객체로  
__App.js__
```
    const style = {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: 24,
        padding: '1rem'
    }
    return (
        <div style={style}></div>
    )
```

### CSS를 사용할때는 className
css를 사용할때는 class 가 아니라 className 으로 작성한다. (Camel case로 사용)
__App.js__
```
    <div className="my-style">
        style과 className
    </div>
```

### 주석
주석을 사용할때 /* */ 사용한다면 중괄호를 써야 한다.

__App.js__
```
    return (
        <div>
            {/*주석은 이렇게*/}
            <input
                // 또는 이렇게
            />
        </div>
    )
```