# `coreInstanceMaintenanceEvent` Submodule <a name="`coreInstanceMaintenanceEvent` Submodule" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreInstanceMaintenanceEvent <a name="CoreInstanceMaintenanceEvent" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event oci_core_instance_maintenance_event}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstancemaintenanceevent"

coreinstancemaintenanceevent.NewCoreInstanceMaintenanceEvent(scope Construct, id *string, config CoreInstanceMaintenanceEventConfig) CoreInstanceMaintenanceEvent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig">CoreInstanceMaintenanceEventConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig">CoreInstanceMaintenanceEventConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetAlternativeResolutionAction">ResetAlternativeResolutionAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetCanDeleteLocalStorage">ResetCanDeleteLocalStorage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetTimeWindowStart">ResetTimeWindowStart</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.putTimeouts"></a>

```go
func PutTimeouts(value CoreInstanceMaintenanceEventTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts">CoreInstanceMaintenanceEventTimeouts</a>

---

##### `ResetAlternativeResolutionAction` <a name="ResetAlternativeResolutionAction" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetAlternativeResolutionAction"></a>

```go
func ResetAlternativeResolutionAction()
```

##### `ResetCanDeleteLocalStorage` <a name="ResetCanDeleteLocalStorage" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetCanDeleteLocalStorage"></a>

```go
func ResetCanDeleteLocalStorage()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimeWindowStart` <a name="ResetTimeWindowStart" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.resetTimeWindowStart"></a>

```go
func ResetTimeWindowStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CoreInstanceMaintenanceEvent resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstancemaintenanceevent"

coreinstancemaintenanceevent.CoreInstanceMaintenanceEvent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstancemaintenanceevent"

coreinstancemaintenanceevent.CoreInstanceMaintenanceEvent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstancemaintenanceevent"

coreinstancemaintenanceevent.CoreInstanceMaintenanceEvent_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstancemaintenanceevent"

coreinstancemaintenanceevent.CoreInstanceMaintenanceEvent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CoreInstanceMaintenanceEvent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CoreInstanceMaintenanceEvent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CoreInstanceMaintenanceEvent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CoreInstanceMaintenanceEvent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.additionalDetails">AdditionalDetails</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.alternativeResolutionActions">AlternativeResolutionActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.canReschedule">CanReschedule</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.correlationToken">CorrelationToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.estimatedDuration">EstimatedDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceAction">InstanceAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.maintenanceCategory">MaintenanceCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.maintenanceReason">MaintenanceReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.startWindowDuration">StartWindowDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeFinished">TimeFinished</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeHardDueDate">TimeHardDueDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference">CoreInstanceMaintenanceEventTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.alternativeResolutionActionInput">AlternativeResolutionActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.canDeleteLocalStorageInput">CanDeleteLocalStorageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceMaintenanceEventIdInput">InstanceMaintenanceEventIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeWindowStartInput">TimeWindowStartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.alternativeResolutionAction">AlternativeResolutionAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.canDeleteLocalStorage">CanDeleteLocalStorage</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceMaintenanceEventId">InstanceMaintenanceEventId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeWindowStart">TimeWindowStart</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdditionalDetails`<sup>Required</sup> <a name="AdditionalDetails" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.additionalDetails"></a>

```go
func AdditionalDetails() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `AlternativeResolutionActions`<sup>Required</sup> <a name="AlternativeResolutionActions" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.alternativeResolutionActions"></a>

```go
func AlternativeResolutionActions() *[]*string
```

- *Type:* *[]*string

---

##### `CanReschedule`<sup>Required</sup> <a name="CanReschedule" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.canReschedule"></a>

```go
func CanReschedule() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CorrelationToken`<sup>Required</sup> <a name="CorrelationToken" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.correlationToken"></a>

```go
func CorrelationToken() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EstimatedDuration`<sup>Required</sup> <a name="EstimatedDuration" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.estimatedDuration"></a>

```go
func EstimatedDuration() *string
```

- *Type:* *string

---

##### `InstanceAction`<sup>Required</sup> <a name="InstanceAction" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceAction"></a>

```go
func InstanceAction() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `MaintenanceCategory`<sup>Required</sup> <a name="MaintenanceCategory" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.maintenanceCategory"></a>

```go
func MaintenanceCategory() *string
```

- *Type:* *string

---

##### `MaintenanceReason`<sup>Required</sup> <a name="MaintenanceReason" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.maintenanceReason"></a>

```go
func MaintenanceReason() *string
```

- *Type:* *string

---

##### `StartWindowDuration`<sup>Required</sup> <a name="StartWindowDuration" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.startWindowDuration"></a>

```go
func StartWindowDuration() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeFinished"></a>

```go
func TimeFinished() *string
```

- *Type:* *string

---

##### `TimeHardDueDate`<sup>Required</sup> <a name="TimeHardDueDate" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeHardDueDate"></a>

```go
func TimeHardDueDate() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeouts"></a>

```go
func Timeouts() CoreInstanceMaintenanceEventTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference">CoreInstanceMaintenanceEventTimeoutsOutputReference</a>

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `AlternativeResolutionActionInput`<sup>Optional</sup> <a name="AlternativeResolutionActionInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.alternativeResolutionActionInput"></a>

```go
func AlternativeResolutionActionInput() *string
```

- *Type:* *string

---

##### `CanDeleteLocalStorageInput`<sup>Optional</sup> <a name="CanDeleteLocalStorageInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.canDeleteLocalStorageInput"></a>

```go
func CanDeleteLocalStorageInput() interface{}
```

- *Type:* interface{}

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceMaintenanceEventIdInput`<sup>Optional</sup> <a name="InstanceMaintenanceEventIdInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceMaintenanceEventIdInput"></a>

```go
func InstanceMaintenanceEventIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeWindowStartInput`<sup>Optional</sup> <a name="TimeWindowStartInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeWindowStartInput"></a>

```go
func TimeWindowStartInput() *string
```

- *Type:* *string

---

##### `AlternativeResolutionAction`<sup>Required</sup> <a name="AlternativeResolutionAction" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.alternativeResolutionAction"></a>

```go
func AlternativeResolutionAction() *string
```

- *Type:* *string

---

##### `CanDeleteLocalStorage`<sup>Required</sup> <a name="CanDeleteLocalStorage" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.canDeleteLocalStorage"></a>

```go
func CanDeleteLocalStorage() interface{}
```

- *Type:* interface{}

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceMaintenanceEventId`<sup>Required</sup> <a name="InstanceMaintenanceEventId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.instanceMaintenanceEventId"></a>

```go
func InstanceMaintenanceEventId() *string
```

- *Type:* *string

---

##### `TimeWindowStart`<sup>Required</sup> <a name="TimeWindowStart" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.timeWindowStart"></a>

```go
func TimeWindowStart() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEvent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreInstanceMaintenanceEventConfig <a name="CoreInstanceMaintenanceEventConfig" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstancemaintenanceevent"

&coreinstancemaintenanceevent.CoreInstanceMaintenanceEventConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceMaintenanceEventId: *string,
	AlternativeResolutionAction: *string,
	CanDeleteLocalStorage: interface{},
	DefinedTags: *map[string]*string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts,
	TimeWindowStart: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.instanceMaintenanceEventId">InstanceMaintenanceEventId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#instance_maintenance_event_id CoreInstanceMaintenanceEvent#instance_maintenance_event_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.alternativeResolutionAction">AlternativeResolutionAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#alternative_resolution_action CoreInstanceMaintenanceEvent#alternative_resolution_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.canDeleteLocalStorage">CanDeleteLocalStorage</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#can_delete_local_storage CoreInstanceMaintenanceEvent#can_delete_local_storage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#defined_tags CoreInstanceMaintenanceEvent#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#display_name CoreInstanceMaintenanceEvent#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#freeform_tags CoreInstanceMaintenanceEvent#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#id CoreInstanceMaintenanceEvent#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts">CoreInstanceMaintenanceEventTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.timeWindowStart">TimeWindowStart</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#time_window_start CoreInstanceMaintenanceEvent#time_window_start}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceMaintenanceEventId`<sup>Required</sup> <a name="InstanceMaintenanceEventId" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.instanceMaintenanceEventId"></a>

```go
InstanceMaintenanceEventId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#instance_maintenance_event_id CoreInstanceMaintenanceEvent#instance_maintenance_event_id}.

---

##### `AlternativeResolutionAction`<sup>Optional</sup> <a name="AlternativeResolutionAction" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.alternativeResolutionAction"></a>

```go
AlternativeResolutionAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#alternative_resolution_action CoreInstanceMaintenanceEvent#alternative_resolution_action}.

---

##### `CanDeleteLocalStorage`<sup>Optional</sup> <a name="CanDeleteLocalStorage" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.canDeleteLocalStorage"></a>

```go
CanDeleteLocalStorage interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#can_delete_local_storage CoreInstanceMaintenanceEvent#can_delete_local_storage}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#defined_tags CoreInstanceMaintenanceEvent#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#display_name CoreInstanceMaintenanceEvent#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#freeform_tags CoreInstanceMaintenanceEvent#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#id CoreInstanceMaintenanceEvent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.timeouts"></a>

```go
Timeouts CoreInstanceMaintenanceEventTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts">CoreInstanceMaintenanceEventTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#timeouts CoreInstanceMaintenanceEvent#timeouts}

---

##### `TimeWindowStart`<sup>Optional</sup> <a name="TimeWindowStart" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventConfig.property.timeWindowStart"></a>

```go
TimeWindowStart *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#time_window_start CoreInstanceMaintenanceEvent#time_window_start}.

---

### CoreInstanceMaintenanceEventTimeouts <a name="CoreInstanceMaintenanceEventTimeouts" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstancemaintenanceevent"

&coreinstancemaintenanceevent.CoreInstanceMaintenanceEventTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#create CoreInstanceMaintenanceEvent#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#delete CoreInstanceMaintenanceEvent#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#update CoreInstanceMaintenanceEvent#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#create CoreInstanceMaintenanceEvent#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#delete CoreInstanceMaintenanceEvent#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_instance_maintenance_event#update CoreInstanceMaintenanceEvent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreInstanceMaintenanceEventTimeoutsOutputReference <a name="CoreInstanceMaintenanceEventTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coreinstancemaintenanceevent"

coreinstancemaintenanceevent.NewCoreInstanceMaintenanceEventTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreInstanceMaintenanceEventTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreInstanceMaintenanceEvent.CoreInstanceMaintenanceEventTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



