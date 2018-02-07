# RN-Modal-Nested-Modal

Displays multiple dialog overlay for native react.

## Usage

```jsx
...
import ModalNestedModal from 'rn-modal-nested-modal';

class MyComponent extends Component {

  ...
  
  constructor(props, context) {
    super(props, context);
    this.state = {
      visible: true
    };
  }

  ...

  render() {
    return (
      <View style={styles.container}>
        <ModalNestedModal 
        alphaDim={0.5}
        colorDim={"#000000"}
        isTop={true}
        visible={this.state.visible}
        onRequestClose={() => { }}
        onTouchOutside={() => { this.setState({ visible: !this.state.visible }) }}>
          <View style={[styles.modalContainer]}>
            <Text style={styles.modalTitle}>Dialog Answer</Text>
            <Text style={styles.modalContent}>I'm Here</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
              <TouchableOpacity 
              style={{ padding: 8 }} 
              onPress={() => { this.setState({ visible: !this.state.visible }) }}>
                <Text style={styles.modalButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ModalNestedModal>
        </View>
    )
  }

  ...
};
```

Show/Hide modal

```jsx
<ModalNestedModal visible={true/false} />
```


Show at the top.

```jsx
<ModalNestedModal isTop={true} />
```


Event when touch outside.

```jsx
<ModalNestedModal onTouchOutside={() => {}}/>
```

zIndex between modal together

```jsx
<ModalNestedModal zIndex={1}/>
```

## Custom
colorDim, alphaDim

```jsx
<ModalNestedModal alphaDim={0.5} colorDim={"#000000"}/>
```


## Contributing

If you'd like to see something added or changed to this module please open a new GitHub issue. Pull requests are always welcome.

## Author
Created and maintained by [Hien Nguyen](https://github.com/hiennguyen92).

## License
Copyright (c) 2017-2018, Hien Nguyen <hiennguyen92@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
