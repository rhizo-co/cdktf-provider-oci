# `fusionAppsFusionEnvironmentRefreshActivity` Submodule <a name="`fusionAppsFusionEnvironmentRefreshActivity` Submodule" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FusionAppsFusionEnvironmentRefreshActivity <a name="FusionAppsFusionEnvironmentRefreshActivity" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_refresh_activity oci_fusion_apps_fusion_environment_refresh_activity}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironmentrefreshactivity"

fusionappsfusionenvironmentrefreshactivity.NewFusionAppsFusionEnvironmentRefreshActivity(scope Construct, id *string, config FusionAppsFusionEnvironmentRefreshActivityConfig) FusionAppsFusionEnvironmentRefreshActivity
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig">FusionAppsFusionEnvironmentRefreshActivityConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig">FusionAppsFusionEnvironmentRefreshActivityConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.resetIsDataMaskingOpted">ResetIsDataMaskingOpted</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.putTimeouts"></a>

```go
func PutTimeouts(value FusionAppsFusionEnvironmentRefreshActivityTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeouts">FusionAppsFusionEnvironmentRefreshActivityTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.resetId"></a>

```go
func ResetId()
```

##### `ResetIsDataMaskingOpted` <a name="ResetIsDataMaskingOpted" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.resetIsDataMaskingOpted"></a>

```go
func ResetIsDataMaskingOpted()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a FusionAppsFusionEnvironmentRefreshActivity resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironmentrefreshactivity"

fusionappsfusionenvironmentrefreshactivity.FusionAppsFusionEnvironmentRefreshActivity_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironmentrefreshactivity"

fusionappsfusionenvironmentrefreshactivity.FusionAppsFusionEnvironmentRefreshActivity_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironmentrefreshactivity"

fusionappsfusionenvironmentrefreshactivity.FusionAppsFusionEnvironmentRefreshActivity_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironmentrefreshactivity"

fusionappsfusionenvironmentrefreshactivity.FusionAppsFusionEnvironmentRefreshActivity_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a FusionAppsFusionEnvironmentRefreshActivity resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the FusionAppsFusionEnvironmentRefreshActivity to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing FusionAppsFusionEnvironmentRefreshActivity that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_refresh_activity#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the FusionAppsFusionEnvironmentRefreshActivity to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.refreshActivityId">RefreshActivityId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.refreshIssueDetailsList">RefreshIssueDetailsList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList">FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.serviceAvailability">ServiceAvailability</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.timeAccepted">TimeAccepted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.timeExpectedFinish">TimeExpectedFinish</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.timeFinished">TimeFinished</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.timeOfRestorationPoint">TimeOfRestorationPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference">FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.fusionEnvironmentIdInput">FusionEnvironmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.isDataMaskingOptedInput">IsDataMaskingOptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.sourceFusionEnvironmentIdInput">SourceFusionEnvironmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.fusionEnvironmentId">FusionEnvironmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.isDataMaskingOpted">IsDataMaskingOpted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.sourceFusionEnvironmentId">SourceFusionEnvironmentId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `RefreshActivityId`<sup>Required</sup> <a name="RefreshActivityId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.refreshActivityId"></a>

```go
func RefreshActivityId() *string
```

- *Type:* *string

---

##### `RefreshIssueDetailsList`<sup>Required</sup> <a name="RefreshIssueDetailsList" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.refreshIssueDetailsList"></a>

```go
func RefreshIssueDetailsList() FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList">FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList</a>

---

##### `ServiceAvailability`<sup>Required</sup> <a name="ServiceAvailability" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.serviceAvailability"></a>

```go
func ServiceAvailability() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeAccepted`<sup>Required</sup> <a name="TimeAccepted" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.timeAccepted"></a>

```go
func TimeAccepted() *string
```

- *Type:* *string

---

##### `TimeExpectedFinish`<sup>Required</sup> <a name="TimeExpectedFinish" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.timeExpectedFinish"></a>

```go
func TimeExpectedFinish() *string
```

- *Type:* *string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.timeFinished"></a>

```go
func TimeFinished() *string
```

- *Type:* *string

---

##### `TimeOfRestorationPoint`<sup>Required</sup> <a name="TimeOfRestorationPoint" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.timeOfRestorationPoint"></a>

```go
func TimeOfRestorationPoint() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.timeouts"></a>

```go
func Timeouts() FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference">FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `FusionEnvironmentIdInput`<sup>Optional</sup> <a name="FusionEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.fusionEnvironmentIdInput"></a>

```go
func FusionEnvironmentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsDataMaskingOptedInput`<sup>Optional</sup> <a name="IsDataMaskingOptedInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.isDataMaskingOptedInput"></a>

```go
func IsDataMaskingOptedInput() interface{}
```

- *Type:* interface{}

---

##### `SourceFusionEnvironmentIdInput`<sup>Optional</sup> <a name="SourceFusionEnvironmentIdInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.sourceFusionEnvironmentIdInput"></a>

```go
func SourceFusionEnvironmentIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `FusionEnvironmentId`<sup>Required</sup> <a name="FusionEnvironmentId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.fusionEnvironmentId"></a>

```go
func FusionEnvironmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsDataMaskingOpted`<sup>Required</sup> <a name="IsDataMaskingOpted" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.isDataMaskingOpted"></a>

```go
func IsDataMaskingOpted() interface{}
```

- *Type:* interface{}

---

##### `SourceFusionEnvironmentId`<sup>Required</sup> <a name="SourceFusionEnvironmentId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.sourceFusionEnvironmentId"></a>

```go
func SourceFusionEnvironmentId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivity.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FusionAppsFusionEnvironmentRefreshActivityConfig <a name="FusionAppsFusionEnvironmentRefreshActivityConfig" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironmentrefreshactivity"

&fusionappsfusionenvironmentrefreshactivity.FusionAppsFusionEnvironmentRefreshActivityConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FusionEnvironmentId: *string,
	SourceFusionEnvironmentId: *string,
	Id: *string,
	IsDataMaskingOpted: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.fusionEnvironmentId">FusionEnvironmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_refresh_activity#fusion_environment_id FusionAppsFusionEnvironmentRefreshActivity#fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.sourceFusionEnvironmentId">SourceFusionEnvironmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_refresh_activity#source_fusion_environment_id FusionAppsFusionEnvironmentRefreshActivity#source_fusion_environment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_refresh_activity#id FusionAppsFusionEnvironmentRefreshActivity#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.isDataMaskingOpted">IsDataMaskingOpted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_refresh_activity#is_data_masking_opted FusionAppsFusionEnvironmentRefreshActivity#is_data_masking_opted}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeouts">FusionAppsFusionEnvironmentRefreshActivityTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FusionEnvironmentId`<sup>Required</sup> <a name="FusionEnvironmentId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.fusionEnvironmentId"></a>

```go
FusionEnvironmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_refresh_activity#fusion_environment_id FusionAppsFusionEnvironmentRefreshActivity#fusion_environment_id}.

---

##### `SourceFusionEnvironmentId`<sup>Required</sup> <a name="SourceFusionEnvironmentId" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.sourceFusionEnvironmentId"></a>

```go
SourceFusionEnvironmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_refresh_activity#source_fusion_environment_id FusionAppsFusionEnvironmentRefreshActivity#source_fusion_environment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_refresh_activity#id FusionAppsFusionEnvironmentRefreshActivity#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsDataMaskingOpted`<sup>Optional</sup> <a name="IsDataMaskingOpted" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.isDataMaskingOpted"></a>

```go
IsDataMaskingOpted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_refresh_activity#is_data_masking_opted FusionAppsFusionEnvironmentRefreshActivity#is_data_masking_opted}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityConfig.property.timeouts"></a>

```go
Timeouts FusionAppsFusionEnvironmentRefreshActivityTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeouts">FusionAppsFusionEnvironmentRefreshActivityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_refresh_activity#timeouts FusionAppsFusionEnvironmentRefreshActivity#timeouts}

---

### FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct <a name="FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironmentrefreshactivity"

&fusionappsfusionenvironmentrefreshactivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct {

}
```


### FusionAppsFusionEnvironmentRefreshActivityTimeouts <a name="FusionAppsFusionEnvironmentRefreshActivityTimeouts" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironmentrefreshactivity"

&fusionappsfusionenvironmentrefreshactivity.FusionAppsFusionEnvironmentRefreshActivityTimeouts {
	Create: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_refresh_activity#create FusionAppsFusionEnvironmentRefreshActivity#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/fusion_apps_fusion_environment_refresh_activity#create FusionAppsFusionEnvironmentRefreshActivity#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList <a name="FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironmentrefreshactivity"

fusionappsfusionenvironmentrefreshactivity.NewFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.get"></a>

```go
func Get(index *f64) FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference <a name="FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironmentrefreshactivity"

fusionappsfusionenvironmentrefreshactivity.NewFusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.refreshIssues">RefreshIssues</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct">FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RefreshIssues`<sup>Required</sup> <a name="RefreshIssues" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.refreshIssues"></a>

```go
func RefreshIssues() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct">FusionAppsFusionEnvironmentRefreshActivityRefreshIssueDetailsListStruct</a>

---


### FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference <a name="FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/fusionappsfusionenvironmentrefreshactivity"

fusionappsfusionenvironmentrefreshactivity.NewFusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.fusionAppsFusionEnvironmentRefreshActivity.FusionAppsFusionEnvironmentRefreshActivityTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



