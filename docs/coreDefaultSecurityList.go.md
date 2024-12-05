# `coreDefaultSecurityList` Submodule <a name="`coreDefaultSecurityList` Submodule" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreDefaultSecurityList <a name="CoreDefaultSecurityList" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list oci_core_default_security_list}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

coredefaultsecuritylist.NewCoreDefaultSecurityList(scope Construct, id *string, config CoreDefaultSecurityListConfig) CoreDefaultSecurityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig">CoreDefaultSecurityListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig">CoreDefaultSecurityListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putEgressSecurityRules">PutEgressSecurityRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putIngressSecurityRules">PutIngressSecurityRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetEgressSecurityRules">ResetEgressSecurityRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetIngressSecurityRules">ResetIngressSecurityRules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEgressSecurityRules` <a name="PutEgressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putEgressSecurityRules"></a>

```go
func PutEgressSecurityRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putEgressSecurityRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutIngressSecurityRules` <a name="PutIngressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putIngressSecurityRules"></a>

```go
func PutIngressSecurityRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putIngressSecurityRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putTimeouts"></a>

```go
func PutTimeouts(value CoreDefaultSecurityListTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts">CoreDefaultSecurityListTimeouts</a>

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEgressSecurityRules` <a name="ResetEgressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetEgressSecurityRules"></a>

```go
func ResetEgressSecurityRules()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetId"></a>

```go
func ResetId()
```

##### `ResetIngressSecurityRules` <a name="ResetIngressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetIngressSecurityRules"></a>

```go
func ResetIngressSecurityRules()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CoreDefaultSecurityList resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

coredefaultsecuritylist.CoreDefaultSecurityList_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

coredefaultsecuritylist.CoreDefaultSecurityList_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

coredefaultsecuritylist.CoreDefaultSecurityList_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

coredefaultsecuritylist.CoreDefaultSecurityList_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CoreDefaultSecurityList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CoreDefaultSecurityList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CoreDefaultSecurityList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CoreDefaultSecurityList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.egressSecurityRules">EgressSecurityRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList">CoreDefaultSecurityListEgressSecurityRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.ingressSecurityRules">IngressSecurityRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList">CoreDefaultSecurityListIngressSecurityRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference">CoreDefaultSecurityListTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.egressSecurityRulesInput">EgressSecurityRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.ingressSecurityRulesInput">IngressSecurityRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.manageDefaultResourceIdInput">ManageDefaultResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.manageDefaultResourceId">ManageDefaultResourceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EgressSecurityRules`<sup>Required</sup> <a name="EgressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.egressSecurityRules"></a>

```go
func EgressSecurityRules() CoreDefaultSecurityListEgressSecurityRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList">CoreDefaultSecurityListEgressSecurityRulesList</a>

---

##### `IngressSecurityRules`<sup>Required</sup> <a name="IngressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.ingressSecurityRules"></a>

```go
func IngressSecurityRules() CoreDefaultSecurityListIngressSecurityRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList">CoreDefaultSecurityListIngressSecurityRulesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.timeouts"></a>

```go
func Timeouts() CoreDefaultSecurityListTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference">CoreDefaultSecurityListTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EgressSecurityRulesInput`<sup>Optional</sup> <a name="EgressSecurityRulesInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.egressSecurityRulesInput"></a>

```go
func EgressSecurityRulesInput() interface{}
```

- *Type:* interface{}

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IngressSecurityRulesInput`<sup>Optional</sup> <a name="IngressSecurityRulesInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.ingressSecurityRulesInput"></a>

```go
func IngressSecurityRulesInput() interface{}
```

- *Type:* interface{}

---

##### `ManageDefaultResourceIdInput`<sup>Optional</sup> <a name="ManageDefaultResourceIdInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.manageDefaultResourceIdInput"></a>

```go
func ManageDefaultResourceIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManageDefaultResourceId`<sup>Required</sup> <a name="ManageDefaultResourceId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.manageDefaultResourceId"></a>

```go
func ManageDefaultResourceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityList.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreDefaultSecurityListConfig <a name="CoreDefaultSecurityListConfig" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

&coredefaultsecuritylist.CoreDefaultSecurityListConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManageDefaultResourceId: *string,
	CompartmentId: *string,
	DefinedTags: *map[string]*string,
	DisplayName: *string,
	EgressSecurityRules: interface{},
	FreeformTags: *map[string]*string,
	Id: *string,
	IngressSecurityRules: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.manageDefaultResourceId">ManageDefaultResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#manage_default_resource_id CoreDefaultSecurityList#manage_default_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#compartment_id CoreDefaultSecurityList#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#defined_tags CoreDefaultSecurityList#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#display_name CoreDefaultSecurityList#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.egressSecurityRules">EgressSecurityRules</a></code> | <code>interface{}</code> | egress_security_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#freeform_tags CoreDefaultSecurityList#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#id CoreDefaultSecurityList#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.ingressSecurityRules">IngressSecurityRules</a></code> | <code>interface{}</code> | ingress_security_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts">CoreDefaultSecurityListTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManageDefaultResourceId`<sup>Required</sup> <a name="ManageDefaultResourceId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.manageDefaultResourceId"></a>

```go
ManageDefaultResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#manage_default_resource_id CoreDefaultSecurityList#manage_default_resource_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#compartment_id CoreDefaultSecurityList#compartment_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#defined_tags CoreDefaultSecurityList#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#display_name CoreDefaultSecurityList#display_name}.

---

##### `EgressSecurityRules`<sup>Optional</sup> <a name="EgressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.egressSecurityRules"></a>

```go
EgressSecurityRules interface{}
```

- *Type:* interface{}

egress_security_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#egress_security_rules CoreDefaultSecurityList#egress_security_rules}

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#freeform_tags CoreDefaultSecurityList#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#id CoreDefaultSecurityList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IngressSecurityRules`<sup>Optional</sup> <a name="IngressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.ingressSecurityRules"></a>

```go
IngressSecurityRules interface{}
```

- *Type:* interface{}

ingress_security_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#ingress_security_rules CoreDefaultSecurityList#ingress_security_rules}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListConfig.property.timeouts"></a>

```go
Timeouts CoreDefaultSecurityListTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts">CoreDefaultSecurityListTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#timeouts CoreDefaultSecurityList#timeouts}

---

### CoreDefaultSecurityListEgressSecurityRules <a name="CoreDefaultSecurityListEgressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

&coredefaultsecuritylist.CoreDefaultSecurityListEgressSecurityRules {
	Destination: *string,
	Protocol: *string,
	Description: *string,
	DestinationType: *string,
	IcmpOptions: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions,
	Stateless: interface{},
	TcpOptions: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions,
	UdpOptions: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.destination">Destination</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#destination CoreDefaultSecurityList#destination}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#protocol CoreDefaultSecurityList#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#description CoreDefaultSecurityList#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.destinationType">DestinationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#destination_type CoreDefaultSecurityList#destination_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.icmpOptions">IcmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions">CoreDefaultSecurityListEgressSecurityRulesIcmpOptions</a></code> | icmp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.stateless">Stateless</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#stateless CoreDefaultSecurityList#stateless}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.tcpOptions">TcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions">CoreDefaultSecurityListEgressSecurityRulesTcpOptions</a></code> | tcp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.udpOptions">UdpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions">CoreDefaultSecurityListEgressSecurityRulesUdpOptions</a></code> | udp_options block. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.destination"></a>

```go
Destination *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#destination CoreDefaultSecurityList#destination}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#protocol CoreDefaultSecurityList#protocol}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#description CoreDefaultSecurityList#description}.

---

##### `DestinationType`<sup>Optional</sup> <a name="DestinationType" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.destinationType"></a>

```go
DestinationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#destination_type CoreDefaultSecurityList#destination_type}.

---

##### `IcmpOptions`<sup>Optional</sup> <a name="IcmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.icmpOptions"></a>

```go
IcmpOptions CoreDefaultSecurityListEgressSecurityRulesIcmpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions">CoreDefaultSecurityListEgressSecurityRulesIcmpOptions</a>

icmp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#icmp_options CoreDefaultSecurityList#icmp_options}

---

##### `Stateless`<sup>Optional</sup> <a name="Stateless" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.stateless"></a>

```go
Stateless interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#stateless CoreDefaultSecurityList#stateless}.

---

##### `TcpOptions`<sup>Optional</sup> <a name="TcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.tcpOptions"></a>

```go
TcpOptions CoreDefaultSecurityListEgressSecurityRulesTcpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions">CoreDefaultSecurityListEgressSecurityRulesTcpOptions</a>

tcp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#tcp_options CoreDefaultSecurityList#tcp_options}

---

##### `UdpOptions`<sup>Optional</sup> <a name="UdpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRules.property.udpOptions"></a>

```go
UdpOptions CoreDefaultSecurityListEgressSecurityRulesUdpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions">CoreDefaultSecurityListEgressSecurityRulesUdpOptions</a>

udp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#udp_options CoreDefaultSecurityList#udp_options}

---

### CoreDefaultSecurityListEgressSecurityRulesIcmpOptions <a name="CoreDefaultSecurityListEgressSecurityRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

&coredefaultsecuritylist.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions {
	Type: *f64,
	Code: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions.property.type">Type</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#type CoreDefaultSecurityList#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions.property.code">Code</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#code CoreDefaultSecurityList#code}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions.property.type"></a>

```go
Type *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#type CoreDefaultSecurityList#type}.

---

##### `Code`<sup>Optional</sup> <a name="Code" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions.property.code"></a>

```go
Code *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#code CoreDefaultSecurityList#code}.

---

### CoreDefaultSecurityListEgressSecurityRulesTcpOptions <a name="CoreDefaultSecurityListEgressSecurityRulesTcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

&coredefaultsecuritylist.CoreDefaultSecurityListEgressSecurityRulesTcpOptions {
	Max: *f64,
	Min: *f64,
	SourcePortRange: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

##### `SourcePortRange`<sup>Optional</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions.property.sourcePortRange"></a>

```go
SourcePortRange CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source_port_range CoreDefaultSecurityList#source_port_range}

---

### CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange <a name="CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

&coredefaultsecuritylist.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange {
	Max: *f64,
	Min: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

### CoreDefaultSecurityListEgressSecurityRulesUdpOptions <a name="CoreDefaultSecurityListEgressSecurityRulesUdpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

&coredefaultsecuritylist.CoreDefaultSecurityListEgressSecurityRulesUdpOptions {
	Max: *f64,
	Min: *f64,
	SourcePortRange: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

##### `SourcePortRange`<sup>Optional</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions.property.sourcePortRange"></a>

```go
SourcePortRange CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source_port_range CoreDefaultSecurityList#source_port_range}

---

### CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange <a name="CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

&coredefaultsecuritylist.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange {
	Max: *f64,
	Min: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

### CoreDefaultSecurityListIngressSecurityRules <a name="CoreDefaultSecurityListIngressSecurityRules" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

&coredefaultsecuritylist.CoreDefaultSecurityListIngressSecurityRules {
	Protocol: *string,
	Source: *string,
	Description: *string,
	IcmpOptions: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions,
	SourceType: *string,
	Stateless: interface{},
	TcpOptions: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions,
	UdpOptions: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#protocol CoreDefaultSecurityList#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source CoreDefaultSecurityList#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#description CoreDefaultSecurityList#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.icmpOptions">IcmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions">CoreDefaultSecurityListIngressSecurityRulesIcmpOptions</a></code> | icmp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.sourceType">SourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source_type CoreDefaultSecurityList#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.stateless">Stateless</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#stateless CoreDefaultSecurityList#stateless}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.tcpOptions">TcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions">CoreDefaultSecurityListIngressSecurityRulesTcpOptions</a></code> | tcp_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.udpOptions">UdpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions">CoreDefaultSecurityListIngressSecurityRulesUdpOptions</a></code> | udp_options block. |

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#protocol CoreDefaultSecurityList#protocol}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source CoreDefaultSecurityList#source}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#description CoreDefaultSecurityList#description}.

---

##### `IcmpOptions`<sup>Optional</sup> <a name="IcmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.icmpOptions"></a>

```go
IcmpOptions CoreDefaultSecurityListIngressSecurityRulesIcmpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions">CoreDefaultSecurityListIngressSecurityRulesIcmpOptions</a>

icmp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#icmp_options CoreDefaultSecurityList#icmp_options}

---

##### `SourceType`<sup>Optional</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.sourceType"></a>

```go
SourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source_type CoreDefaultSecurityList#source_type}.

---

##### `Stateless`<sup>Optional</sup> <a name="Stateless" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.stateless"></a>

```go
Stateless interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#stateless CoreDefaultSecurityList#stateless}.

---

##### `TcpOptions`<sup>Optional</sup> <a name="TcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.tcpOptions"></a>

```go
TcpOptions CoreDefaultSecurityListIngressSecurityRulesTcpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions">CoreDefaultSecurityListIngressSecurityRulesTcpOptions</a>

tcp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#tcp_options CoreDefaultSecurityList#tcp_options}

---

##### `UdpOptions`<sup>Optional</sup> <a name="UdpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRules.property.udpOptions"></a>

```go
UdpOptions CoreDefaultSecurityListIngressSecurityRulesUdpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions">CoreDefaultSecurityListIngressSecurityRulesUdpOptions</a>

udp_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#udp_options CoreDefaultSecurityList#udp_options}

---

### CoreDefaultSecurityListIngressSecurityRulesIcmpOptions <a name="CoreDefaultSecurityListIngressSecurityRulesIcmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

&coredefaultsecuritylist.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions {
	Type: *f64,
	Code: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions.property.type">Type</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#type CoreDefaultSecurityList#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions.property.code">Code</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#code CoreDefaultSecurityList#code}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions.property.type"></a>

```go
Type *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#type CoreDefaultSecurityList#type}.

---

##### `Code`<sup>Optional</sup> <a name="Code" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions.property.code"></a>

```go
Code *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#code CoreDefaultSecurityList#code}.

---

### CoreDefaultSecurityListIngressSecurityRulesTcpOptions <a name="CoreDefaultSecurityListIngressSecurityRulesTcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

&coredefaultsecuritylist.CoreDefaultSecurityListIngressSecurityRulesTcpOptions {
	Max: *f64,
	Min: *f64,
	SourcePortRange: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

##### `SourcePortRange`<sup>Optional</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions.property.sourcePortRange"></a>

```go
SourcePortRange CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source_port_range CoreDefaultSecurityList#source_port_range}

---

### CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange <a name="CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

&coredefaultsecuritylist.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange {
	Max: *f64,
	Min: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

### CoreDefaultSecurityListIngressSecurityRulesUdpOptions <a name="CoreDefaultSecurityListIngressSecurityRulesUdpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

&coredefaultsecuritylist.CoreDefaultSecurityListIngressSecurityRulesUdpOptions {
	Max: *f64,
	Min: *f64,
	SourcePortRange: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a></code> | source_port_range block. |

---

##### `Max`<sup>Optional</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `Min`<sup>Optional</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

##### `SourcePortRange`<sup>Optional</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions.property.sourcePortRange"></a>

```go
SourcePortRange CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a>

source_port_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#source_port_range CoreDefaultSecurityList#source_port_range}

---

### CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange <a name="CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

&coredefaultsecuritylist.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange {
	Max: *f64,
	Min: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.property.max">Max</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.property.min">Min</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}. |

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.property.max"></a>

```go
Max *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#max CoreDefaultSecurityList#max}.

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange.property.min"></a>

```go
Min *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#min CoreDefaultSecurityList#min}.

---

### CoreDefaultSecurityListTimeouts <a name="CoreDefaultSecurityListTimeouts" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

&coredefaultsecuritylist.CoreDefaultSecurityListTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#create CoreDefaultSecurityList#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#delete CoreDefaultSecurityList#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#update CoreDefaultSecurityList#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#create CoreDefaultSecurityList#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#delete CoreDefaultSecurityList#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_default_security_list#update CoreDefaultSecurityList#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference <a name="CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

coredefaultsecuritylist.NewCoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.resetCode">ResetCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCode` <a name="ResetCode" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.resetCode"></a>

```go
func ResetCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.codeInput">CodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.typeInput">TypeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.type">Type</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions">CoreDefaultSecurityListEgressSecurityRulesIcmpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.codeInput"></a>

```go
func CodeInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.typeInput"></a>

```go
func TypeInput() *f64
```

- *Type:* *f64

---

##### `Code`<sup>Required</sup> <a name="Code" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.type"></a>

```go
func Type() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreDefaultSecurityListEgressSecurityRulesIcmpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions">CoreDefaultSecurityListEgressSecurityRulesIcmpOptions</a>

---


### CoreDefaultSecurityListEgressSecurityRulesList <a name="CoreDefaultSecurityListEgressSecurityRulesList" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

coredefaultsecuritylist.NewCoreDefaultSecurityListEgressSecurityRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CoreDefaultSecurityListEgressSecurityRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.get"></a>

```go
func Get(index *f64) CoreDefaultSecurityListEgressSecurityRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CoreDefaultSecurityListEgressSecurityRulesOutputReference <a name="CoreDefaultSecurityListEgressSecurityRulesOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

coredefaultsecuritylist.NewCoreDefaultSecurityListEgressSecurityRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CoreDefaultSecurityListEgressSecurityRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putIcmpOptions">PutIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putTcpOptions">PutTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putUdpOptions">PutUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetDestinationType">ResetDestinationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetIcmpOptions">ResetIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetStateless">ResetStateless</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetTcpOptions">ResetTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetUdpOptions">ResetUdpOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIcmpOptions` <a name="PutIcmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putIcmpOptions"></a>

```go
func PutIcmpOptions(value CoreDefaultSecurityListEgressSecurityRulesIcmpOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putIcmpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions">CoreDefaultSecurityListEgressSecurityRulesIcmpOptions</a>

---

##### `PutTcpOptions` <a name="PutTcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putTcpOptions"></a>

```go
func PutTcpOptions(value CoreDefaultSecurityListEgressSecurityRulesTcpOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putTcpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions">CoreDefaultSecurityListEgressSecurityRulesTcpOptions</a>

---

##### `PutUdpOptions` <a name="PutUdpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putUdpOptions"></a>

```go
func PutUdpOptions(value CoreDefaultSecurityListEgressSecurityRulesUdpOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.putUdpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions">CoreDefaultSecurityListEgressSecurityRulesUdpOptions</a>

---

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDestinationType` <a name="ResetDestinationType" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetDestinationType"></a>

```go
func ResetDestinationType()
```

##### `ResetIcmpOptions` <a name="ResetIcmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetIcmpOptions"></a>

```go
func ResetIcmpOptions()
```

##### `ResetStateless` <a name="ResetStateless" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetStateless"></a>

```go
func ResetStateless()
```

##### `ResetTcpOptions` <a name="ResetTcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetTcpOptions"></a>

```go
func ResetTcpOptions()
```

##### `ResetUdpOptions` <a name="ResetUdpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.resetUdpOptions"></a>

```go
func ResetUdpOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.icmpOptions">IcmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference">CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.tcpOptions">TcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.udpOptions">UdpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destinationInput">DestinationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destinationTypeInput">DestinationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.icmpOptionsInput">IcmpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions">CoreDefaultSecurityListEgressSecurityRulesIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.statelessInput">StatelessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.tcpOptionsInput">TcpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions">CoreDefaultSecurityListEgressSecurityRulesTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.udpOptionsInput">UdpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions">CoreDefaultSecurityListEgressSecurityRulesUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destination">Destination</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destinationType">DestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.stateless">Stateless</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IcmpOptions`<sup>Required</sup> <a name="IcmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.icmpOptions"></a>

```go
func IcmpOptions() CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference">CoreDefaultSecurityListEgressSecurityRulesIcmpOptionsOutputReference</a>

---

##### `TcpOptions`<sup>Required</sup> <a name="TcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.tcpOptions"></a>

```go
func TcpOptions() CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference</a>

---

##### `UdpOptions`<sup>Required</sup> <a name="UdpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.udpOptions"></a>

```go
func UdpOptions() CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destinationInput"></a>

```go
func DestinationInput() *string
```

- *Type:* *string

---

##### `DestinationTypeInput`<sup>Optional</sup> <a name="DestinationTypeInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destinationTypeInput"></a>

```go
func DestinationTypeInput() *string
```

- *Type:* *string

---

##### `IcmpOptionsInput`<sup>Optional</sup> <a name="IcmpOptionsInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.icmpOptionsInput"></a>

```go
func IcmpOptionsInput() CoreDefaultSecurityListEgressSecurityRulesIcmpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesIcmpOptions">CoreDefaultSecurityListEgressSecurityRulesIcmpOptions</a>

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `StatelessInput`<sup>Optional</sup> <a name="StatelessInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.statelessInput"></a>

```go
func StatelessInput() interface{}
```

- *Type:* interface{}

---

##### `TcpOptionsInput`<sup>Optional</sup> <a name="TcpOptionsInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.tcpOptionsInput"></a>

```go
func TcpOptionsInput() CoreDefaultSecurityListEgressSecurityRulesTcpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions">CoreDefaultSecurityListEgressSecurityRulesTcpOptions</a>

---

##### `UdpOptionsInput`<sup>Optional</sup> <a name="UdpOptionsInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.udpOptionsInput"></a>

```go
func UdpOptionsInput() CoreDefaultSecurityListEgressSecurityRulesUdpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions">CoreDefaultSecurityListEgressSecurityRulesUdpOptions</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destination"></a>

```go
func Destination() *string
```

- *Type:* *string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.destinationType"></a>

```go
func DestinationType() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Stateless`<sup>Required</sup> <a name="Stateless" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.stateless"></a>

```go
func Stateless() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference <a name="CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

coredefaultsecuritylist.NewCoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.putSourcePortRange">PutSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetMin">ResetMin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetSourcePortRange">ResetSourcePortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourcePortRange` <a name="PutSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.putSourcePortRange"></a>

```go
func PutSourcePortRange(value CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a>

---

##### `ResetMax` <a name="ResetMax" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetMax"></a>

```go
func ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetMin"></a>

```go
func ResetMin()
```

##### `ResetSourcePortRange` <a name="ResetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.resetSourcePortRange"></a>

```go
func ResetSourcePortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.sourcePortRangeInput">SourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions">CoreDefaultSecurityListEgressSecurityRulesTcpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```go
func SourcePortRange() CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference</a>

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `SourcePortRangeInput`<sup>Optional</sup> <a name="SourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.sourcePortRangeInput"></a>

```go
func SourcePortRangeInput() CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a>

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreDefaultSecurityListEgressSecurityRulesTcpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptions">CoreDefaultSecurityListEgressSecurityRulesTcpOptions</a>

---


### CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference <a name="CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

coredefaultsecuritylist.NewCoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesTcpOptionsSourcePortRange</a>

---


### CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference <a name="CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

coredefaultsecuritylist.NewCoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.putSourcePortRange">PutSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetMin">ResetMin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetSourcePortRange">ResetSourcePortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourcePortRange` <a name="PutSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.putSourcePortRange"></a>

```go
func PutSourcePortRange(value CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a>

---

##### `ResetMax` <a name="ResetMax" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetMax"></a>

```go
func ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetMin"></a>

```go
func ResetMin()
```

##### `ResetSourcePortRange` <a name="ResetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.resetSourcePortRange"></a>

```go
func ResetSourcePortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.sourcePortRangeInput">SourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions">CoreDefaultSecurityListEgressSecurityRulesUdpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```go
func SourcePortRange() CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference</a>

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `SourcePortRangeInput`<sup>Optional</sup> <a name="SourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.sourcePortRangeInput"></a>

```go
func SourcePortRangeInput() CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a>

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreDefaultSecurityListEgressSecurityRulesUdpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptions">CoreDefaultSecurityListEgressSecurityRulesUdpOptions</a>

---


### CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference <a name="CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

coredefaultsecuritylist.NewCoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListEgressSecurityRulesUdpOptionsSourcePortRange</a>

---


### CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference <a name="CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

coredefaultsecuritylist.NewCoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.resetCode">ResetCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCode` <a name="ResetCode" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.resetCode"></a>

```go
func ResetCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.codeInput">CodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.typeInput">TypeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.code">Code</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.type">Type</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions">CoreDefaultSecurityListIngressSecurityRulesIcmpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.codeInput"></a>

```go
func CodeInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.typeInput"></a>

```go
func TypeInput() *f64
```

- *Type:* *f64

---

##### `Code`<sup>Required</sup> <a name="Code" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.code"></a>

```go
func Code() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.type"></a>

```go
func Type() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreDefaultSecurityListIngressSecurityRulesIcmpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions">CoreDefaultSecurityListIngressSecurityRulesIcmpOptions</a>

---


### CoreDefaultSecurityListIngressSecurityRulesList <a name="CoreDefaultSecurityListIngressSecurityRulesList" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

coredefaultsecuritylist.NewCoreDefaultSecurityListIngressSecurityRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CoreDefaultSecurityListIngressSecurityRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.get"></a>

```go
func Get(index *f64) CoreDefaultSecurityListIngressSecurityRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CoreDefaultSecurityListIngressSecurityRulesOutputReference <a name="CoreDefaultSecurityListIngressSecurityRulesOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

coredefaultsecuritylist.NewCoreDefaultSecurityListIngressSecurityRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CoreDefaultSecurityListIngressSecurityRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putIcmpOptions">PutIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putTcpOptions">PutTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putUdpOptions">PutUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetIcmpOptions">ResetIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetSourceType">ResetSourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetStateless">ResetStateless</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetTcpOptions">ResetTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetUdpOptions">ResetUdpOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIcmpOptions` <a name="PutIcmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putIcmpOptions"></a>

```go
func PutIcmpOptions(value CoreDefaultSecurityListIngressSecurityRulesIcmpOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putIcmpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions">CoreDefaultSecurityListIngressSecurityRulesIcmpOptions</a>

---

##### `PutTcpOptions` <a name="PutTcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putTcpOptions"></a>

```go
func PutTcpOptions(value CoreDefaultSecurityListIngressSecurityRulesTcpOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putTcpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions">CoreDefaultSecurityListIngressSecurityRulesTcpOptions</a>

---

##### `PutUdpOptions` <a name="PutUdpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putUdpOptions"></a>

```go
func PutUdpOptions(value CoreDefaultSecurityListIngressSecurityRulesUdpOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.putUdpOptions.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions">CoreDefaultSecurityListIngressSecurityRulesUdpOptions</a>

---

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetIcmpOptions` <a name="ResetIcmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetIcmpOptions"></a>

```go
func ResetIcmpOptions()
```

##### `ResetSourceType` <a name="ResetSourceType" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetSourceType"></a>

```go
func ResetSourceType()
```

##### `ResetStateless` <a name="ResetStateless" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetStateless"></a>

```go
func ResetStateless()
```

##### `ResetTcpOptions` <a name="ResetTcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetTcpOptions"></a>

```go
func ResetTcpOptions()
```

##### `ResetUdpOptions` <a name="ResetUdpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.resetUdpOptions"></a>

```go
func ResetUdpOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.icmpOptions">IcmpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference">CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.tcpOptions">TcpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.udpOptions">UdpOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.icmpOptionsInput">IcmpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions">CoreDefaultSecurityListIngressSecurityRulesIcmpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.sourceTypeInput">SourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.statelessInput">StatelessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.tcpOptionsInput">TcpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions">CoreDefaultSecurityListIngressSecurityRulesTcpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.udpOptionsInput">UdpOptionsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions">CoreDefaultSecurityListIngressSecurityRulesUdpOptions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.stateless">Stateless</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IcmpOptions`<sup>Required</sup> <a name="IcmpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.icmpOptions"></a>

```go
func IcmpOptions() CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference">CoreDefaultSecurityListIngressSecurityRulesIcmpOptionsOutputReference</a>

---

##### `TcpOptions`<sup>Required</sup> <a name="TcpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.tcpOptions"></a>

```go
func TcpOptions() CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference</a>

---

##### `UdpOptions`<sup>Required</sup> <a name="UdpOptions" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.udpOptions"></a>

```go
func UdpOptions() CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IcmpOptionsInput`<sup>Optional</sup> <a name="IcmpOptionsInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.icmpOptionsInput"></a>

```go
func IcmpOptionsInput() CoreDefaultSecurityListIngressSecurityRulesIcmpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesIcmpOptions">CoreDefaultSecurityListIngressSecurityRulesIcmpOptions</a>

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.sourceTypeInput"></a>

```go
func SourceTypeInput() *string
```

- *Type:* *string

---

##### `StatelessInput`<sup>Optional</sup> <a name="StatelessInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.statelessInput"></a>

```go
func StatelessInput() interface{}
```

- *Type:* interface{}

---

##### `TcpOptionsInput`<sup>Optional</sup> <a name="TcpOptionsInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.tcpOptionsInput"></a>

```go
func TcpOptionsInput() CoreDefaultSecurityListIngressSecurityRulesTcpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions">CoreDefaultSecurityListIngressSecurityRulesTcpOptions</a>

---

##### `UdpOptionsInput`<sup>Optional</sup> <a name="UdpOptionsInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.udpOptionsInput"></a>

```go
func UdpOptionsInput() CoreDefaultSecurityListIngressSecurityRulesUdpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions">CoreDefaultSecurityListIngressSecurityRulesUdpOptions</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `Stateless`<sup>Required</sup> <a name="Stateless" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.stateless"></a>

```go
func Stateless() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference <a name="CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

coredefaultsecuritylist.NewCoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.putSourcePortRange">PutSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetMin">ResetMin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetSourcePortRange">ResetSourcePortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourcePortRange` <a name="PutSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.putSourcePortRange"></a>

```go
func PutSourcePortRange(value CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a>

---

##### `ResetMax` <a name="ResetMax" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetMax"></a>

```go
func ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetMin"></a>

```go
func ResetMin()
```

##### `ResetSourcePortRange` <a name="ResetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.resetSourcePortRange"></a>

```go
func ResetSourcePortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.sourcePortRangeInput">SourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions">CoreDefaultSecurityListIngressSecurityRulesTcpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.sourcePortRange"></a>

```go
func SourcePortRange() CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference</a>

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `SourcePortRangeInput`<sup>Optional</sup> <a name="SourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.sourcePortRangeInput"></a>

```go
func SourcePortRangeInput() CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a>

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreDefaultSecurityListIngressSecurityRulesTcpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptions">CoreDefaultSecurityListIngressSecurityRulesTcpOptions</a>

---


### CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference <a name="CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

coredefaultsecuritylist.NewCoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesTcpOptionsSourcePortRange</a>

---


### CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference <a name="CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

coredefaultsecuritylist.NewCoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.putSourcePortRange">PutSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetMax">ResetMax</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetMin">ResetMin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetSourcePortRange">ResetSourcePortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourcePortRange` <a name="PutSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.putSourcePortRange"></a>

```go
func PutSourcePortRange(value CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.putSourcePortRange.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a>

---

##### `ResetMax` <a name="ResetMax" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetMax"></a>

```go
func ResetMax()
```

##### `ResetMin` <a name="ResetMin" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetMin"></a>

```go
func ResetMin()
```

##### `ResetSourcePortRange` <a name="ResetSourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.resetSourcePortRange"></a>

```go
func ResetSourcePortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange">SourcePortRange</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.sourcePortRangeInput">SourcePortRangeInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions">CoreDefaultSecurityListIngressSecurityRulesUdpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.sourcePortRange"></a>

```go
func SourcePortRange() CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference</a>

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `SourcePortRangeInput`<sup>Optional</sup> <a name="SourcePortRangeInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.sourcePortRangeInput"></a>

```go
func SourcePortRangeInput() CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a>

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreDefaultSecurityListIngressSecurityRulesUdpOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptions">CoreDefaultSecurityListIngressSecurityRulesUdpOptions</a>

---


### CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference <a name="CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

coredefaultsecuritylist.NewCoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput">MaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.minInput">MinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxInput`<sup>Optional</sup> <a name="MaxInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.maxInput"></a>

```go
func MaxInput() *f64
```

- *Type:* *f64

---

##### `MinInput`<sup>Optional</sup> <a name="MinInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.minInput"></a>

```go
func MinInput() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange">CoreDefaultSecurityListIngressSecurityRulesUdpOptionsSourcePortRange</a>

---


### CoreDefaultSecurityListTimeoutsOutputReference <a name="CoreDefaultSecurityListTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredefaultsecuritylist"

coredefaultsecuritylist.NewCoreDefaultSecurityListTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreDefaultSecurityListTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreDefaultSecurityList.CoreDefaultSecurityListTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



