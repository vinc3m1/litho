package com.facebook.samples.litho.playground;

import android.util.Log;
import com.facebook.litho.ClickEvent;
import com.facebook.litho.ComponentContext;
import com.facebook.litho.ComponentLayout;
import com.facebook.litho.InvisibleEvent;
import com.facebook.litho.StateValue;
import com.facebook.litho.VisibleEvent;
import com.facebook.litho.annotations.LayoutSpec;
import com.facebook.litho.annotations.OnCreateInitialState;
import com.facebook.litho.annotations.OnCreateLayout;
import com.facebook.litho.annotations.OnEvent;
import com.facebook.litho.annotations.OnUpdateState;
import com.facebook.litho.annotations.Param;
import com.facebook.litho.annotations.Prop;
import com.facebook.litho.annotations.PropDefault;
import com.facebook.litho.annotations.State;
import com.facebook.litho.widget.Text;
import io.reactivex.Observable;
import io.reactivex.observers.DisposableObserver;

@LayoutSpec
public class SizeTextSpec {

  @PropDefault
  static int size = 22;

  @OnCreateLayout
  static ComponentLayout onCreateLayout(
      ComponentContext c,
      @Prop String text,
      @State int _size,
      @Prop(optional = true) int size) {

    return Text.create(c)
        .text(text)
        .textSizeSp(_size)
        .clickHandler(SizeText.onClick(c))
        .visibleHandler(SizeText.onVisible(c))
        .invisibleHandler(SizeText.onInvisible(c))
        .buildWithLayout();
  }

  @OnEvent(ClickEvent.class)
  static void onClick(ComponentContext c) {
    Log.d("vmi", "CLICK TEXT");
  }

  @OnEvent(VisibleEvent.class)
  static void onVisible(
      ComponentContext c,
      @Prop Observable<Integer> sizeObservable,
      @State DisposableObserver<Integer> observer) {
    sizeObservable.subscribeWith(observer);
  }

  @OnEvent(InvisibleEvent.class)
  static void onInvisible(ComponentContext c,
      @State DisposableObserver<Integer> observer) {
    observer.dispose();
  }

  @OnUpdateState
  static void updateSize(
      StateValue<Integer> _size,
      @Param int newSize) {
    _size.set(newSize);
  }

  @OnCreateInitialState
  static void createInitialState(
      final ComponentContext c,
      @Prop(optional = true) int size,
      StateValue<DisposableObserver<Integer>> observer,
      final StateValue<Integer> _size) {
    _size.set(size);

    observer.set(new DisposableObserver<Integer>() {
      @Override
      public void onNext(Integer integer) {
        SizeText.updateSize(c, integer);
      }

      @Override
      public void onError(Throwable e) { }

      @Override
      public void onComplete() { }
    });
  }
}
