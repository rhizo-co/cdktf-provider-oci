# `stackMonitoringMetricExtensionsTestManagement` Submodule <a name="`stackMonitoringMetricExtensionsTestManagement` Submodule" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackMonitoringMetricExtensionsTestManagement <a name="StackMonitoringMetricExtensionsTestManagement" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management oci_stack_monitoring_metric_extensions_test_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmetricextensionstestmanagement"

stackmonitoringmetricextensionstestmanagement.NewStackMonitoringMetricExtensionsTestManagement(scope Construct, id *string, config StackMonitoringMetricExtensionsTestManagementConfig) StackMonitoringMetricExtensionsTestManagement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig">StackMonitoringMetricExtensionsTestManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig">StackMonitoringMetricExtensionsTestManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.putTimeouts"></a>

```go
func PutTimeouts(value StackMonitoringMetricExtensionsTestManagementTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts">StackMonitoringMetricExtensionsTestManagementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StackMonitoringMetricExtensionsTestManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmetricextensionstestmanagement"

stackmonitoringmetricextensionstestmanagement.StackMonitoringMetricExtensionsTestManagement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmetricextensionstestmanagement"

stackmonitoringmetricextensionstestmanagement.StackMonitoringMetricExtensionsTestManagement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmetricextensionstestmanagement"

stackmonitoringmetricextensionstestmanagement.StackMonitoringMetricExtensionsTestManagement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmetricextensionstestmanagement"

stackmonitoringmetricextensionstestmanagement.StackMonitoringMetricExtensionsTestManagement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a StackMonitoringMetricExtensionsTestManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StackMonitoringMetricExtensionsTestManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StackMonitoringMetricExtensionsTestManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the StackMonitoringMetricExtensionsTestManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.testRunId">TestRunId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.testRunMetricSuffix">TestRunMetricSuffix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.testRunNamespaceName">TestRunNamespaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.testRunResourceGroupName">TestRunResourceGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference">StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.metricExtensionIdInput">MetricExtensionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.resourceIdsInput">ResourceIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.metricExtensionId">MetricExtensionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.resourceIds">ResourceIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TestRunId`<sup>Required</sup> <a name="TestRunId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.testRunId"></a>

```go
func TestRunId() *string
```

- *Type:* *string

---

##### `TestRunMetricSuffix`<sup>Required</sup> <a name="TestRunMetricSuffix" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.testRunMetricSuffix"></a>

```go
func TestRunMetricSuffix() *string
```

- *Type:* *string

---

##### `TestRunNamespaceName`<sup>Required</sup> <a name="TestRunNamespaceName" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.testRunNamespaceName"></a>

```go
func TestRunNamespaceName() *string
```

- *Type:* *string

---

##### `TestRunResourceGroupName`<sup>Required</sup> <a name="TestRunResourceGroupName" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.testRunResourceGroupName"></a>

```go
func TestRunResourceGroupName() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.timeouts"></a>

```go
func Timeouts() StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference">StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetricExtensionIdInput`<sup>Optional</sup> <a name="MetricExtensionIdInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.metricExtensionIdInput"></a>

```go
func MetricExtensionIdInput() *string
```

- *Type:* *string

---

##### `ResourceIdsInput`<sup>Optional</sup> <a name="ResourceIdsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.resourceIdsInput"></a>

```go
func ResourceIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MetricExtensionId`<sup>Required</sup> <a name="MetricExtensionId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.metricExtensionId"></a>

```go
func MetricExtensionId() *string
```

- *Type:* *string

---

##### `ResourceIds`<sup>Required</sup> <a name="ResourceIds" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.resourceIds"></a>

```go
func ResourceIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StackMonitoringMetricExtensionsTestManagementConfig <a name="StackMonitoringMetricExtensionsTestManagementConfig" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmetricextensionstestmanagement"

&stackmonitoringmetricextensionstestmanagement.StackMonitoringMetricExtensionsTestManagementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MetricExtensionId: *string,
	ResourceIds: *[]*string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.metricExtensionId">MetricExtensionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#metric_extension_id StackMonitoringMetricExtensionsTestManagement#metric_extension_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.resourceIds">ResourceIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#resource_ids StackMonitoringMetricExtensionsTestManagement#resource_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#id StackMonitoringMetricExtensionsTestManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts">StackMonitoringMetricExtensionsTestManagementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MetricExtensionId`<sup>Required</sup> <a name="MetricExtensionId" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.metricExtensionId"></a>

```go
MetricExtensionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#metric_extension_id StackMonitoringMetricExtensionsTestManagement#metric_extension_id}.

---

##### `ResourceIds`<sup>Required</sup> <a name="ResourceIds" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.resourceIds"></a>

```go
ResourceIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#resource_ids StackMonitoringMetricExtensionsTestManagement#resource_ids}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#id StackMonitoringMetricExtensionsTestManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementConfig.property.timeouts"></a>

```go
Timeouts StackMonitoringMetricExtensionsTestManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts">StackMonitoringMetricExtensionsTestManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#timeouts StackMonitoringMetricExtensionsTestManagement#timeouts}

---

### StackMonitoringMetricExtensionsTestManagementTimeouts <a name="StackMonitoringMetricExtensionsTestManagementTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmetricextensionstestmanagement"

&stackmonitoringmetricextensionstestmanagement.StackMonitoringMetricExtensionsTestManagementTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#create StackMonitoringMetricExtensionsTestManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#delete StackMonitoringMetricExtensionsTestManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#update StackMonitoringMetricExtensionsTestManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#create StackMonitoringMetricExtensionsTestManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#delete StackMonitoringMetricExtensionsTestManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_metric_extensions_test_management#update StackMonitoringMetricExtensionsTestManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference <a name="StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/stackmonitoringmetricextensionstestmanagement"

stackmonitoringmetricextensionstestmanagement.NewStackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.stackMonitoringMetricExtensionsTestManagement.StackMonitoringMetricExtensionsTestManagementTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



