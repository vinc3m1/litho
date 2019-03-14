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

import android.app.Activity
import android.graphics.Color
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import androidx.recyclerview.widget.OrientationHelper
import com.facebook.litho.ComponentContext
import com.facebook.litho.LithoView
import com.facebook.litho.widget.*

class SampleActivity : Activity() {

    private val items = ArrayList<Int>()

    private val handler = Handler(Looper.getMainLooper())

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val context = ComponentContext(this)

        val recyclerBinder = RecyclerBinder.Builder()
                .layoutInfo(LinearLayoutInfo(this, OrientationHelper.VERTICAL, false))
                .build(context)

        val component = Recycler.create(context)
                .binder(recyclerBinder)
                .snapHelper(EndSnapHelper())
                .itemAnimator(null)
                .build()

        val clickListener = object : ItemClickListener {
            override fun onItemClicked(number: Int) {
                val index = items.indexOf(number)
                if (index >= 0) {
                    items.removeAt(index)
                    recyclerBinder.removeItemAt(index)
                    handler.postDelayed({
                      items.add(index, number)
                      recyclerBinder.insertItemAt(index, createRenderInfo(number, context, this))
                    }, 100)
                }
            }
        }

        addContent(recyclerBinder, context, clickListener)

        setContentView(LithoView.create(context, component))
    }

    private fun addContent(recyclerBinder: RecyclerBinder, context: ComponentContext, clickListener: ItemClickListener) {
        for (i in 0 until 100) {
            items.add(i)
            recyclerBinder.insertItemAt(
                    i,
                createRenderInfo(i, context, clickListener)) }
    }

    private fun createRenderInfo(number: Int, context: ComponentContext, clickListener: ItemClickListener) =
         ComponentRenderInfo.create()
            .component(
                ListItem.create(context)
                    .color(if (number % 2 == 0) Color.WHITE else Color.LTGRAY)
                    .number(number)
                    .clickListener(clickListener)
                    .title("$number Hello, world!")
                    .subtitle("Litho tutorial")
                    .build())
            .build()
}
