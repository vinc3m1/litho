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

import com.facebook.litho.Component
import com.facebook.litho.ComponentContext
import com.facebook.litho.annotations.LayoutSpec
import com.facebook.litho.annotations.OnCreateLayout
import com.facebook.litho.annotations.Prop
import com.facebook.yoga.YogaEdge.ALL
import com.makeramen.litho.children
import com.makeramen.litho.column
import com.makeramen.litho.row
import com.makeramen.litho.text

@LayoutSpec
object ListItemSpec {
  
  @OnCreateLayout
  fun onCreateLayout(
      c: ComponentContext,
      @Prop color: Int,
      @Prop title: String,
      @Prop subtitle: String): Component = column(c) {
    paddingDip(ALL, 16f)
    backgroundColor(color)
    children {
      text {
        text(title)
        textSizeSp(40f)
      }
      text {
        text(subtitle)
        textSizeSp(20f)
      }
      row {
        touchExpansionDip(ALL, 10f)
        children {
          text {
            text("left")
            touchExpansionDip(ALL, 5f)
          }
          text {
            text("right")
            touchExpansionDip(ALL, 5f)
          }
        }
      }
    }
  }.build()
}
