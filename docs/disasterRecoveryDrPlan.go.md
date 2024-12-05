# `disasterRecoveryDrPlan` Submodule <a name="`disasterRecoveryDrPlan` Submodule" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DisasterRecoveryDrPlan <a name="DisasterRecoveryDrPlan" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan oci_disaster_recovery_dr_plan}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplan"

disasterrecoverydrplan.NewDisasterRecoveryDrPlan(scope Construct, id *string, config DisasterRecoveryDrPlanConfig) DisasterRecoveryDrPlan
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig">DisasterRecoveryDrPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig">DisasterRecoveryDrPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.putTimeouts"></a>

```go
func PutTimeouts(value DisasterRecoveryDrPlanTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts">DisasterRecoveryDrPlanTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DisasterRecoveryDrPlan resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplan"

disasterrecoverydrplan.DisasterRecoveryDrPlan_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplan"

disasterrecoverydrplan.DisasterRecoveryDrPlan_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplan"

disasterrecoverydrplan.DisasterRecoveryDrPlan_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplan"

disasterrecoverydrplan.DisasterRecoveryDrPlan_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DisasterRecoveryDrPlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DisasterRecoveryDrPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DisasterRecoveryDrPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DisasterRecoveryDrPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.lifeCycleDetails">LifeCycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.peerDrProtectionGroupId">PeerDrProtectionGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.peerRegion">PeerRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.planGroups">PlanGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList">DisasterRecoveryDrPlanPlanGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference">DisasterRecoveryDrPlanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.drProtectionGroupIdInput">DrProtectionGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.drProtectionGroupId">DrProtectionGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `LifeCycleDetails`<sup>Required</sup> <a name="LifeCycleDetails" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.lifeCycleDetails"></a>

```go
func LifeCycleDetails() *string
```

- *Type:* *string

---

##### `PeerDrProtectionGroupId`<sup>Required</sup> <a name="PeerDrProtectionGroupId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.peerDrProtectionGroupId"></a>

```go
func PeerDrProtectionGroupId() *string
```

- *Type:* *string

---

##### `PeerRegion`<sup>Required</sup> <a name="PeerRegion" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.peerRegion"></a>

```go
func PeerRegion() *string
```

- *Type:* *string

---

##### `PlanGroups`<sup>Required</sup> <a name="PlanGroups" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.planGroups"></a>

```go
func PlanGroups() DisasterRecoveryDrPlanPlanGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList">DisasterRecoveryDrPlanPlanGroupsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.timeouts"></a>

```go
func Timeouts() DisasterRecoveryDrPlanTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference">DisasterRecoveryDrPlanTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DrProtectionGroupIdInput`<sup>Optional</sup> <a name="DrProtectionGroupIdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.drProtectionGroupIdInput"></a>

```go
func DrProtectionGroupIdInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DrProtectionGroupId`<sup>Required</sup> <a name="DrProtectionGroupId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.drProtectionGroupId"></a>

```go
func DrProtectionGroupId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlan.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DisasterRecoveryDrPlanConfig <a name="DisasterRecoveryDrPlanConfig" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplan"

&disasterrecoverydrplan.DisasterRecoveryDrPlanConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayName: *string,
	DrProtectionGroupId: *string,
	Type: *string,
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#display_name DisasterRecoveryDrPlan#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.drProtectionGroupId">DrProtectionGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#dr_protection_group_id DisasterRecoveryDrPlan#dr_protection_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#type DisasterRecoveryDrPlan#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#defined_tags DisasterRecoveryDrPlan#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#freeform_tags DisasterRecoveryDrPlan#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#id DisasterRecoveryDrPlan#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts">DisasterRecoveryDrPlanTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#display_name DisasterRecoveryDrPlan#display_name}.

---

##### `DrProtectionGroupId`<sup>Required</sup> <a name="DrProtectionGroupId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.drProtectionGroupId"></a>

```go
DrProtectionGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#dr_protection_group_id DisasterRecoveryDrPlan#dr_protection_group_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#type DisasterRecoveryDrPlan#type}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#defined_tags DisasterRecoveryDrPlan#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#freeform_tags DisasterRecoveryDrPlan#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#id DisasterRecoveryDrPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanConfig.property.timeouts"></a>

```go
Timeouts DisasterRecoveryDrPlanTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts">DisasterRecoveryDrPlanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#timeouts DisasterRecoveryDrPlan#timeouts}

---

### DisasterRecoveryDrPlanPlanGroups <a name="DisasterRecoveryDrPlanPlanGroups" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroups.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplan"

&disasterrecoverydrplan.DisasterRecoveryDrPlanPlanGroups {

}
```


### DisasterRecoveryDrPlanPlanGroupsSteps <a name="DisasterRecoveryDrPlanPlanGroupsSteps" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsSteps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsSteps.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplan"

&disasterrecoverydrplan.DisasterRecoveryDrPlanPlanGroupsSteps {

}
```


### DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep <a name="DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplan"

&disasterrecoverydrplan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep {

}
```


### DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation <a name="DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplan"

&disasterrecoverydrplan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation {

}
```


### DisasterRecoveryDrPlanTimeouts <a name="DisasterRecoveryDrPlanTimeouts" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplan"

&disasterrecoverydrplan.DisasterRecoveryDrPlanTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#create DisasterRecoveryDrPlan#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#delete DisasterRecoveryDrPlan#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#update DisasterRecoveryDrPlan#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#create DisasterRecoveryDrPlan#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#delete DisasterRecoveryDrPlan#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/disaster_recovery_dr_plan#update DisasterRecoveryDrPlan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DisasterRecoveryDrPlanPlanGroupsList <a name="DisasterRecoveryDrPlanPlanGroupsList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplan"

disasterrecoverydrplan.NewDisasterRecoveryDrPlanPlanGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DisasterRecoveryDrPlanPlanGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.get"></a>

```go
func Get(index *f64) DisasterRecoveryDrPlanPlanGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DisasterRecoveryDrPlanPlanGroupsOutputReference <a name="DisasterRecoveryDrPlanPlanGroupsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplan"

disasterrecoverydrplan.NewDisasterRecoveryDrPlanPlanGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DisasterRecoveryDrPlanPlanGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.isPauseEnabled">IsPauseEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.steps">Steps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList">DisasterRecoveryDrPlanPlanGroupsStepsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroups">DisasterRecoveryDrPlanPlanGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsPauseEnabled`<sup>Required</sup> <a name="IsPauseEnabled" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.isPauseEnabled"></a>

```go
func IsPauseEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.steps"></a>

```go
func Steps() DisasterRecoveryDrPlanPlanGroupsStepsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList">DisasterRecoveryDrPlanPlanGroupsStepsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DisasterRecoveryDrPlanPlanGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroups">DisasterRecoveryDrPlanPlanGroups</a>

---


### DisasterRecoveryDrPlanPlanGroupsStepsList <a name="DisasterRecoveryDrPlanPlanGroupsStepsList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplan"

disasterrecoverydrplan.NewDisasterRecoveryDrPlanPlanGroupsStepsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DisasterRecoveryDrPlanPlanGroupsStepsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.get"></a>

```go
func Get(index *f64) DisasterRecoveryDrPlanPlanGroupsStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DisasterRecoveryDrPlanPlanGroupsStepsOutputReference <a name="DisasterRecoveryDrPlanPlanGroupsStepsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplan"

disasterrecoverydrplan.NewDisasterRecoveryDrPlanPlanGroupsStepsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DisasterRecoveryDrPlanPlanGroupsStepsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.errorMode">ErrorMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.memberId">MemberId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.userDefinedStep">UserDefinedStep</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList">DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsSteps">DisasterRecoveryDrPlanPlanGroupsSteps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ErrorMode`<sup>Required</sup> <a name="ErrorMode" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.errorMode"></a>

```go
func ErrorMode() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MemberId`<sup>Required</sup> <a name="MemberId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.memberId"></a>

```go
func MemberId() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UserDefinedStep`<sup>Required</sup> <a name="UserDefinedStep" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.userDefinedStep"></a>

```go
func UserDefinedStep() DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList">DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsOutputReference.property.internalValue"></a>

```go
func InternalValue() DisasterRecoveryDrPlanPlanGroupsSteps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsSteps">DisasterRecoveryDrPlanPlanGroupsSteps</a>

---


### DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList <a name="DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplan"

disasterrecoverydrplan.NewDisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.get"></a>

```go
func Get(index *f64) DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList <a name="DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplan"

disasterrecoverydrplan.NewDisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.get"></a>

```go
func Get(index *f64) DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference <a name="DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplan"

disasterrecoverydrplan.NewDisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation">DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation">DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocation</a>

---


### DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference <a name="DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplan"

disasterrecoverydrplan.NewDisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.functionId">FunctionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.functionRegion">FunctionRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.objectStorageScriptLocation">ObjectStorageScriptLocation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList">DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.requestBody">RequestBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.runAsUser">RunAsUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.runOnInstanceId">RunOnInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.runOnInstanceRegion">RunOnInstanceRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.scriptCommand">ScriptCommand</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.stepType">StepType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep">DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FunctionId`<sup>Required</sup> <a name="FunctionId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.functionId"></a>

```go
func FunctionId() *string
```

- *Type:* *string

---

##### `FunctionRegion`<sup>Required</sup> <a name="FunctionRegion" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.functionRegion"></a>

```go
func FunctionRegion() *string
```

- *Type:* *string

---

##### `ObjectStorageScriptLocation`<sup>Required</sup> <a name="ObjectStorageScriptLocation" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.objectStorageScriptLocation"></a>

```go
func ObjectStorageScriptLocation() DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList">DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepObjectStorageScriptLocationList</a>

---

##### `RequestBody`<sup>Required</sup> <a name="RequestBody" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.requestBody"></a>

```go
func RequestBody() *string
```

- *Type:* *string

---

##### `RunAsUser`<sup>Required</sup> <a name="RunAsUser" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.runAsUser"></a>

```go
func RunAsUser() *string
```

- *Type:* *string

---

##### `RunOnInstanceId`<sup>Required</sup> <a name="RunOnInstanceId" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.runOnInstanceId"></a>

```go
func RunOnInstanceId() *string
```

- *Type:* *string

---

##### `RunOnInstanceRegion`<sup>Required</sup> <a name="RunOnInstanceRegion" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.runOnInstanceRegion"></a>

```go
func RunOnInstanceRegion() *string
```

- *Type:* *string

---

##### `ScriptCommand`<sup>Required</sup> <a name="ScriptCommand" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.scriptCommand"></a>

```go
func ScriptCommand() *string
```

- *Type:* *string

---

##### `StepType`<sup>Required</sup> <a name="StepType" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.stepType"></a>

```go
func StepType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStepOutputReference.property.internalValue"></a>

```go
func InternalValue() DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep">DisasterRecoveryDrPlanPlanGroupsStepsUserDefinedStep</a>

---


### DisasterRecoveryDrPlanTimeoutsOutputReference <a name="DisasterRecoveryDrPlanTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/disasterrecoverydrplan"

disasterrecoverydrplan.NewDisasterRecoveryDrPlanTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DisasterRecoveryDrPlanTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.disasterRecoveryDrPlan.DisasterRecoveryDrPlanTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



