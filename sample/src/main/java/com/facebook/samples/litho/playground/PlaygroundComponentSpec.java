/*
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only.  Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

package com.facebook.samples.litho.playground;

import android.graphics.Color;
import android.util.Log;
import com.facebook.litho.ClickEvent;
import com.facebook.litho.Column;
import com.facebook.litho.Component;
import com.facebook.litho.ComponentContext;
import com.facebook.litho.ComponentLayout;
import com.facebook.litho.InvisibleEvent;
import com.facebook.litho.VisibleEvent;
import com.facebook.litho.annotations.LayoutSpec;
import com.facebook.litho.annotations.OnCreateLayout;
import com.facebook.litho.annotations.OnEvent;
import com.facebook.litho.annotations.Prop;
import io.reactivex.Observable;

@LayoutSpec
public class PlaygroundComponentSpec {

  // @OnCreateTreeProp
  // static Observable<Integer> onCreateTextSizeObservable(
  //     ComponentContext c,
  //     @Prop Observable<Integer> sizeObservable) {
  //   return sizeObservable;
  // }

  @OnCreateLayout
  static Component onCreateLayout(ComponentContext c,
      @Prop Observable<Integer> sizeObservable) {

    return Column.create(c)
        .clickHandler(PlaygroundComponent.onClick(c))
        .backgroundColor(Color.WHITE)
        .child(SizeText.create(c)
            .sizeObservable(sizeObservable)
            .size(22)
            .text("Playground sample"))
        .build();
  }

  @OnEvent(ClickEvent.class)
  static void onClick(ComponentContext c) {
    Log.d("vmi", "CLICK COMPONENT");
  }

  @OnEvent(VisibleEvent.class)
  static void onVisible(ComponentContext c) {
    Log.d("vmi", "VISIBLE");
  }

  @OnEvent(InvisibleEvent.class)
  static void onInvisible(ComponentContext c) {
    Log.d("vmi", "INVISIBLE");
  }
}
