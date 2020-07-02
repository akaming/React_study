# 01. 리액트는 어쩌다 만들어졌을까?

JavaScript를 사용하여 HTML로 구성한 UI 를 제어해보았다면, DOM을 변형시키기 위하여 우리가 어떤 작업을 해야하는지 익숙 할 것이다. 브라우저의 [DOM](https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/%EC%86%8C%EA%B0%9C) Selecor API를 사용해서 특정 DOM을 선택한뒤, 특정 이벤트가    발생하면 변화를 주도록 설정해야 된다. 

```html
<h2 id="number">0</h2>
<div>
  <button id="increase">+1</button>
  <button id="decrease">-1</button>
</div>
```

위와 같이 HTML이 구성되어 있고, id를 사용하여 DOM을 선택한뒤, 원하는 이벤트가 발생하면 DOM의 특적 속성을 바꾸주어야 한다.

```javascript
const number = document.getElementById('number');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

increase.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current + 1;
};

decrease.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current - 1;
};
```
현재 위 코드를 보면 "+1 버튼이 눌리면, __id__ 가 __number__ 인 DOM을 선택해서 __innerText__ 속성을 1씩 더 해줘라" 라는 규칙이 있다. 사용자의 Interaction이 별로 없는 웹페이지라면 상관없겠지만, 만약에 Interaction이 자주 발생하고, 이에 따라 동적으로 UI를 표현해야된다면, 이러한 규칙이 정말 다양해질것이고 그러면 관리하기 힘들어질것이다.  

웹 애플리케이션의 규모가 커지면, DOM을 직접 건드리면서 작업을 하면 코드가 난잡해지기 쉽다.

 그래서 Ember, Backbone, AngularJS 등의 프레임 워크가 만들어졌었는데, 이 프레임워크들은 작동방식이 각각 다르지만 쉽게 설명하자면 자바스크립트의 특정 값이 바뀌면 특정 DOM의 속성이 바뀌도록 연결을 해주어서 업데이트 하는 작업을 간소화 해주는 방식으로 웹개발의 어려움을 해결해주었다.

__하지만__ 리액트의 경우에는 조금 다른 발상에서 만들어졌다. 리액트는 어떠한 상태가 바뀌었을때 그 상태에 따라 DOM 을 어떻게 업데이트 할 지 규칙을 정하는것이 아니라, 아예 다 날려버리고 처음부터 모든걸 새로 만들어서 보여주면 어떨까? 라는 아이디어에서 개발이 시작되었다.

그러면 "업데이트를 어떻게 해야 할 지" 에 대한 고민을 전혀 안해도 되기 때문에 개발이 정말 쉬워질 것이다. 하지만, 정말로 동적인 UI를 보여주기 위해서 모든걸 다 날려버리고 모든걸 새로 만들게 된다면, 속도가 굉장히 느릴 것이다. 작은 웹애플리케이션 이라면 상관없겠지만 규모가 큰 웹애플리케이션 이라면 상상도 할 수 없는 일이다.

__하지만__, 리액트에서는 Virtual DOM 이라는 것을 사용해서 이를 가능케 했다.


![Virtual DOM 이미지](./img/vr.png)
Virtual DOM 은 가상의 DOM 이다. 브라우저에 실제로 보여지는 DOM 이 아니라 그냥 메모리에 가상으로 존재하는 DOM 으로서 그냥 JavaScript 객체이기 때문에 작동 성능이 실제로 브라우저에서 DOM 을 보여주는 것 보다 속도가 훨씬 빠르다. 리액트는 상태가 업데이트 되면, 업데이트가 필요한 곳의 UI 를 Virtual DOM 을 통해서 렌더링한다. 그리고 나서 리액트 개발팀이 만든 매우 효율적인 비교 알고리즘을 통하여 실제 브라우저에 보여지고 있는 DOM 과 비교를 한 후, 차이가 있는 곳을 감지하여 이를 실제 DOM 에 패치시켜준다. 이를 통하여, "업데이트를 어떻게 할 지" 에 대한 고민을 하지 않으면서, 빠른 성능도 지켜낼 수 있게 되었다.

## Virtual DOM 특징
- DOM의 가벼운 복사 본
- in-memory에 존재해서 실제 렌더 되지 않음
- JavaScript 객체로 이루어진 tree data structure
- React와 같은 UI 라이브러리에 널리 쓰임
