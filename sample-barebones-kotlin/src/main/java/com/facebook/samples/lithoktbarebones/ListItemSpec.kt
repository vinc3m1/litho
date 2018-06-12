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

import android.util.Log
import com.facebook.yoga.YogaEdge.ALL

import com.facebook.litho.Column
import com.facebook.litho.Component
import com.facebook.litho.ComponentContext
import com.facebook.litho.StateValue
import com.facebook.litho.annotations.LayoutSpec
import com.facebook.litho.annotations.OnCreateInitialState
import com.facebook.litho.annotations.OnCreateLayout
import com.facebook.litho.annotations.Prop
import com.facebook.litho.annotations.State
import com.facebook.litho.widget.Text

@LayoutSpec
object ListItemSpec {

    @OnCreateInitialState
    fun onCreateInitialState(c: ComponentContext, @Prop index: Int, indexState: StateValue<Int>) {
        Thread.sleep(100)
        indexState.set(index)
    }


    @OnCreateLayout
    fun onCreateLayout(
            c: ComponentContext,
            @State indexState: Int,
            @Prop color: Int,
            @Prop title: String,
            @Prop subtitle: String): Component {
        Log.d("vmi", "index: " + indexState + " onCreateLayout on thread " + Thread.currentThread().name)
        Thread.sleep(100)
        return Column.create(c)
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
    }

}
