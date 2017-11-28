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

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.text.SpannableStringBuilder;
import android.text.Spanned;
import android.text.style.AbsoluteSizeSpan;
import android.widget.LinearLayout;
import android.widget.TextView;
import com.facebook.litho.ComponentContext;
import com.facebook.litho.LithoView;

public class PlaygroundActivity extends AppCompatActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    final ComponentContext componentContext = new ComponentContext(this);

    SpannableStringBuilder stringBuilder = new SpannableStringBuilder("BIG TEXT");
    stringBuilder.setSpan(new AbsoluteSizeSpan(24, true), 0, 8, Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);

    LinearLayout container = new LinearLayout(this);
    container.setOrientation(LinearLayout.VERTICAL);

    container.addView(LithoView.create(
        this,
        PlaygroundComponent
            .create(componentContext)
            .text(stringBuilder)
            .build()));

    TextView textView = new TextView(this);
    textView.setText(stringBuilder);
    container.addView(textView);

    setContentView(container);
  }
}
