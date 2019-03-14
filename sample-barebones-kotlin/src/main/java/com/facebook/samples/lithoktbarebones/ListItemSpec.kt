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

package com.facebook.samples.lithoktbarebones

import android.view.View
import com.facebook.litho.ClickEvent
import com.facebook.yoga.YogaEdge.ALL

import com.facebook.litho.Column
import com.facebook.litho.Component
import com.facebook.litho.ComponentContext
import com.facebook.litho.annotations.*
import com.facebook.litho.widget.Text

@LayoutSpec
object ListItemSpec {
  
  @OnCreateLayout
  fun onCreateLayout(
      c: ComponentContext,
      @Prop color: Int,
      @Prop title: String,
      @Prop subtitle: String): Component = Column.create(c)
        .clickHandler(ListItem.onClick(c))
        .paddingDip(ALL, 16f)
        .backgroundColor(color)
        .child(
            Text.create(c)
                .text(title)
                .textSizeSp(40f))
        .child(
            Text.create(c)
                .text(subtitle)
                .textSizeSp(20f))
        .build()

  @OnEvent(ClickEvent::class)
  fun onClick(
      c: ComponentContext,
      @FromEvent view: View,
      @Prop number: Int,
      @Prop clickListener: ItemClickListener ) = clickListener.onItemClicked(number)
}

interface ItemClickListener {
  fun onItemClicked(number: Int)
}