# `logAnalyticsLogAnalyticsImportCustomContent` Submodule <a name="`logAnalyticsLogAnalyticsImportCustomContent` Submodule" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LogAnalyticsLogAnalyticsImportCustomContent <a name="LogAnalyticsLogAnalyticsImportCustomContent" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content oci_log_analytics_log_analytics_import_custom_content}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsimportcustomcontent"

loganalyticsloganalyticsimportcustomcontent.NewLogAnalyticsLogAnalyticsImportCustomContent(scope Construct, id *string, config LogAnalyticsLogAnalyticsImportCustomContentConfig) LogAnalyticsLogAnalyticsImportCustomContent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig">LogAnalyticsLogAnalyticsImportCustomContentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig">LogAnalyticsLogAnalyticsImportCustomContentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.resetExpect">ResetExpect</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.resetIsOverwrite">ResetIsOverwrite</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.putTimeouts"></a>

```go
func PutTimeouts(value LogAnalyticsLogAnalyticsImportCustomContentTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts">LogAnalyticsLogAnalyticsImportCustomContentTimeouts</a>

---

##### `ResetExpect` <a name="ResetExpect" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.resetExpect"></a>

```go
func ResetExpect()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.resetId"></a>

```go
func ResetId()
```

##### `ResetIsOverwrite` <a name="ResetIsOverwrite" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.resetIsOverwrite"></a>

```go
func ResetIsOverwrite()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LogAnalyticsLogAnalyticsImportCustomContent resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsimportcustomcontent"

loganalyticsloganalyticsimportcustomcontent.LogAnalyticsLogAnalyticsImportCustomContent_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsimportcustomcontent"

loganalyticsloganalyticsimportcustomcontent.LogAnalyticsLogAnalyticsImportCustomContent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsimportcustomcontent"

loganalyticsloganalyticsimportcustomcontent.LogAnalyticsLogAnalyticsImportCustomContent_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsimportcustomcontent"

loganalyticsloganalyticsimportcustomcontent.LogAnalyticsLogAnalyticsImportCustomContent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LogAnalyticsLogAnalyticsImportCustomContent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LogAnalyticsLogAnalyticsImportCustomContent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LogAnalyticsLogAnalyticsImportCustomContent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LogAnalyticsLogAnalyticsImportCustomContent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.changeList">ChangeList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList">LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.contentName">ContentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.fieldNames">FieldNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.parserNames">ParserNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.sourceNames">SourceNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference">LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.expectInput">ExpectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.importCustomContentFileInput">ImportCustomContentFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.isOverwriteInput">IsOverwriteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.expect">Expect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.importCustomContentFile">ImportCustomContentFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.isOverwrite">IsOverwrite</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ChangeList`<sup>Required</sup> <a name="ChangeList" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.changeList"></a>

```go
func ChangeList() LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList">LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList</a>

---

##### `ContentName`<sup>Required</sup> <a name="ContentName" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.contentName"></a>

```go
func ContentName() *string
```

- *Type:* *string

---

##### `FieldNames`<sup>Required</sup> <a name="FieldNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.fieldNames"></a>

```go
func FieldNames() *[]*string
```

- *Type:* *[]*string

---

##### `ParserNames`<sup>Required</sup> <a name="ParserNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.parserNames"></a>

```go
func ParserNames() *[]*string
```

- *Type:* *[]*string

---

##### `SourceNames`<sup>Required</sup> <a name="SourceNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.sourceNames"></a>

```go
func SourceNames() *[]*string
```

- *Type:* *[]*string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.timeouts"></a>

```go
func Timeouts() LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference">LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference</a>

---

##### `ExpectInput`<sup>Optional</sup> <a name="ExpectInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.expectInput"></a>

```go
func ExpectInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImportCustomContentFileInput`<sup>Optional</sup> <a name="ImportCustomContentFileInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.importCustomContentFileInput"></a>

```go
func ImportCustomContentFileInput() *string
```

- *Type:* *string

---

##### `IsOverwriteInput`<sup>Optional</sup> <a name="IsOverwriteInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.isOverwriteInput"></a>

```go
func IsOverwriteInput() interface{}
```

- *Type:* interface{}

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Expect`<sup>Required</sup> <a name="Expect" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.expect"></a>

```go
func Expect() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImportCustomContentFile`<sup>Required</sup> <a name="ImportCustomContentFile" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.importCustomContentFile"></a>

```go
func ImportCustomContentFile() *string
```

- *Type:* *string

---

##### `IsOverwrite`<sup>Required</sup> <a name="IsOverwrite" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.isOverwrite"></a>

```go
func IsOverwrite() interface{}
```

- *Type:* interface{}

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct <a name="LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsimportcustomcontent"

&loganalyticsloganalyticsimportcustomcontent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct {

}
```


### LogAnalyticsLogAnalyticsImportCustomContentConfig <a name="LogAnalyticsLogAnalyticsImportCustomContentConfig" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsimportcustomcontent"

&loganalyticsloganalyticsimportcustomcontent.LogAnalyticsLogAnalyticsImportCustomContentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ImportCustomContentFile: *string,
	Namespace: *string,
	Expect: *string,
	Id: *string,
	IsOverwrite: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.importCustomContentFile">ImportCustomContentFile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#import_custom_content_file LogAnalyticsLogAnalyticsImportCustomContent#import_custom_content_file}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#namespace LogAnalyticsLogAnalyticsImportCustomContent#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.expect">Expect</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#expect LogAnalyticsLogAnalyticsImportCustomContent#expect}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#id LogAnalyticsLogAnalyticsImportCustomContent#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.isOverwrite">IsOverwrite</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#is_overwrite LogAnalyticsLogAnalyticsImportCustomContent#is_overwrite}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts">LogAnalyticsLogAnalyticsImportCustomContentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ImportCustomContentFile`<sup>Required</sup> <a name="ImportCustomContentFile" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.importCustomContentFile"></a>

```go
ImportCustomContentFile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#import_custom_content_file LogAnalyticsLogAnalyticsImportCustomContent#import_custom_content_file}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#namespace LogAnalyticsLogAnalyticsImportCustomContent#namespace}.

---

##### `Expect`<sup>Optional</sup> <a name="Expect" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.expect"></a>

```go
Expect *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#expect LogAnalyticsLogAnalyticsImportCustomContent#expect}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#id LogAnalyticsLogAnalyticsImportCustomContent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsOverwrite`<sup>Optional</sup> <a name="IsOverwrite" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.isOverwrite"></a>

```go
IsOverwrite interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#is_overwrite LogAnalyticsLogAnalyticsImportCustomContent#is_overwrite}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentConfig.property.timeouts"></a>

```go
Timeouts LogAnalyticsLogAnalyticsImportCustomContentTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts">LogAnalyticsLogAnalyticsImportCustomContentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#timeouts LogAnalyticsLogAnalyticsImportCustomContent#timeouts}

---

### LogAnalyticsLogAnalyticsImportCustomContentTimeouts <a name="LogAnalyticsLogAnalyticsImportCustomContentTimeouts" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsimportcustomcontent"

&loganalyticsloganalyticsimportcustomcontent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#create LogAnalyticsLogAnalyticsImportCustomContent#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#delete LogAnalyticsLogAnalyticsImportCustomContent#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#update LogAnalyticsLogAnalyticsImportCustomContent#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#create LogAnalyticsLogAnalyticsImportCustomContent#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#delete LogAnalyticsLogAnalyticsImportCustomContent#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/log_analytics_log_analytics_import_custom_content#update LogAnalyticsLogAnalyticsImportCustomContent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList <a name="LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsimportcustomcontent"

loganalyticsloganalyticsimportcustomcontent.NewLogAnalyticsLogAnalyticsImportCustomContentChangeListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.get"></a>

```go
func Get(index *f64) LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference <a name="LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsimportcustomcontent"

loganalyticsloganalyticsimportcustomcontent.NewLogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.conflictFieldDisplayNames">ConflictFieldDisplayNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.conflictParserNames">ConflictParserNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.conflictSourceNames">ConflictSourceNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.createdFieldDisplayNames">CreatedFieldDisplayNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.createdParserNames">CreatedParserNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.createdSourceNames">CreatedSourceNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.updatedFieldDisplayNames">UpdatedFieldDisplayNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.updatedParserNames">UpdatedParserNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.updatedSourceNames">UpdatedSourceNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct">LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConflictFieldDisplayNames`<sup>Required</sup> <a name="ConflictFieldDisplayNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.conflictFieldDisplayNames"></a>

```go
func ConflictFieldDisplayNames() *[]*string
```

- *Type:* *[]*string

---

##### `ConflictParserNames`<sup>Required</sup> <a name="ConflictParserNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.conflictParserNames"></a>

```go
func ConflictParserNames() *[]*string
```

- *Type:* *[]*string

---

##### `ConflictSourceNames`<sup>Required</sup> <a name="ConflictSourceNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.conflictSourceNames"></a>

```go
func ConflictSourceNames() *[]*string
```

- *Type:* *[]*string

---

##### `CreatedFieldDisplayNames`<sup>Required</sup> <a name="CreatedFieldDisplayNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.createdFieldDisplayNames"></a>

```go
func CreatedFieldDisplayNames() *[]*string
```

- *Type:* *[]*string

---

##### `CreatedParserNames`<sup>Required</sup> <a name="CreatedParserNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.createdParserNames"></a>

```go
func CreatedParserNames() *[]*string
```

- *Type:* *[]*string

---

##### `CreatedSourceNames`<sup>Required</sup> <a name="CreatedSourceNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.createdSourceNames"></a>

```go
func CreatedSourceNames() *[]*string
```

- *Type:* *[]*string

---

##### `UpdatedFieldDisplayNames`<sup>Required</sup> <a name="UpdatedFieldDisplayNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.updatedFieldDisplayNames"></a>

```go
func UpdatedFieldDisplayNames() *[]*string
```

- *Type:* *[]*string

---

##### `UpdatedParserNames`<sup>Required</sup> <a name="UpdatedParserNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.updatedParserNames"></a>

```go
func UpdatedParserNames() *[]*string
```

- *Type:* *[]*string

---

##### `UpdatedSourceNames`<sup>Required</sup> <a name="UpdatedSourceNames" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.updatedSourceNames"></a>

```go
func UpdatedSourceNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct">LogAnalyticsLogAnalyticsImportCustomContentChangeListStruct</a>

---


### LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference <a name="LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/loganalyticsloganalyticsimportcustomcontent"

loganalyticsloganalyticsimportcustomcontent.NewLogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.logAnalyticsLogAnalyticsImportCustomContent.LogAnalyticsLogAnalyticsImportCustomContentTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



