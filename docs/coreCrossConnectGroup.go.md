# `coreCrossConnectGroup` Submodule <a name="`coreCrossConnectGroup` Submodule" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreCrossConnectGroup <a name="CoreCrossConnectGroup" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group oci_core_cross_connect_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecrossconnectgroup"

corecrossconnectgroup.NewCoreCrossConnectGroup(scope Construct, id *string, config CoreCrossConnectGroupConfig) CoreCrossConnectGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig">CoreCrossConnectGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig">CoreCrossConnectGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.putMacsecProperties">PutMacsecProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetCustomerReferenceName">ResetCustomerReferenceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetMacsecProperties">ResetMacsecProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMacsecProperties` <a name="PutMacsecProperties" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.putMacsecProperties"></a>

```go
func PutMacsecProperties(value CoreCrossConnectGroupMacsecProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.putMacsecProperties.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties">CoreCrossConnectGroupMacsecProperties</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.putTimeouts"></a>

```go
func PutTimeouts(value CoreCrossConnectGroupTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts">CoreCrossConnectGroupTimeouts</a>

---

##### `ResetCustomerReferenceName` <a name="ResetCustomerReferenceName" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetCustomerReferenceName"></a>

```go
func ResetCustomerReferenceName()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetId"></a>

```go
func ResetId()
```

##### `ResetMacsecProperties` <a name="ResetMacsecProperties" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetMacsecProperties"></a>

```go
func ResetMacsecProperties()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CoreCrossConnectGroup resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecrossconnectgroup"

corecrossconnectgroup.CoreCrossConnectGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecrossconnectgroup"

corecrossconnectgroup.CoreCrossConnectGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecrossconnectgroup"

corecrossconnectgroup.CoreCrossConnectGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecrossconnectgroup"

corecrossconnectgroup.CoreCrossConnectGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CoreCrossConnectGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CoreCrossConnectGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CoreCrossConnectGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CoreCrossConnectGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.macsecProperties">MacsecProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference">CoreCrossConnectGroupMacsecPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.ociLogicalDeviceName">OciLogicalDeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.ociPhysicalDeviceName">OciPhysicalDeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference">CoreCrossConnectGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.customerReferenceNameInput">CustomerReferenceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.macsecPropertiesInput">MacsecPropertiesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties">CoreCrossConnectGroupMacsecProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.customerReferenceName">CustomerReferenceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MacsecProperties`<sup>Required</sup> <a name="MacsecProperties" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.macsecProperties"></a>

```go
func MacsecProperties() CoreCrossConnectGroupMacsecPropertiesOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference">CoreCrossConnectGroupMacsecPropertiesOutputReference</a>

---

##### `OciLogicalDeviceName`<sup>Required</sup> <a name="OciLogicalDeviceName" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.ociLogicalDeviceName"></a>

```go
func OciLogicalDeviceName() *string
```

- *Type:* *string

---

##### `OciPhysicalDeviceName`<sup>Required</sup> <a name="OciPhysicalDeviceName" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.ociPhysicalDeviceName"></a>

```go
func OciPhysicalDeviceName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.timeouts"></a>

```go
func Timeouts() CoreCrossConnectGroupTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference">CoreCrossConnectGroupTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CustomerReferenceNameInput`<sup>Optional</sup> <a name="CustomerReferenceNameInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.customerReferenceNameInput"></a>

```go
func CustomerReferenceNameInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MacsecPropertiesInput`<sup>Optional</sup> <a name="MacsecPropertiesInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.macsecPropertiesInput"></a>

```go
func MacsecPropertiesInput() CoreCrossConnectGroupMacsecProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties">CoreCrossConnectGroupMacsecProperties</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CustomerReferenceName`<sup>Required</sup> <a name="CustomerReferenceName" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.customerReferenceName"></a>

```go
func CustomerReferenceName() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreCrossConnectGroupConfig <a name="CoreCrossConnectGroupConfig" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecrossconnectgroup"

&corecrossconnectgroup.CoreCrossConnectGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	CustomerReferenceName: *string,
	DefinedTags: *map[string]*string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	MacsecProperties: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#compartment_id CoreCrossConnectGroup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.customerReferenceName">CustomerReferenceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#customer_reference_name CoreCrossConnectGroup#customer_reference_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#defined_tags CoreCrossConnectGroup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#display_name CoreCrossConnectGroup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#freeform_tags CoreCrossConnectGroup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#id CoreCrossConnectGroup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.macsecProperties">MacsecProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties">CoreCrossConnectGroupMacsecProperties</a></code> | macsec_properties block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts">CoreCrossConnectGroupTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#compartment_id CoreCrossConnectGroup#compartment_id}.

---

##### `CustomerReferenceName`<sup>Optional</sup> <a name="CustomerReferenceName" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.customerReferenceName"></a>

```go
CustomerReferenceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#customer_reference_name CoreCrossConnectGroup#customer_reference_name}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#defined_tags CoreCrossConnectGroup#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#display_name CoreCrossConnectGroup#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#freeform_tags CoreCrossConnectGroup#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#id CoreCrossConnectGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MacsecProperties`<sup>Optional</sup> <a name="MacsecProperties" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.macsecProperties"></a>

```go
MacsecProperties CoreCrossConnectGroupMacsecProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties">CoreCrossConnectGroupMacsecProperties</a>

macsec_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#macsec_properties CoreCrossConnectGroup#macsec_properties}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupConfig.property.timeouts"></a>

```go
Timeouts CoreCrossConnectGroupTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts">CoreCrossConnectGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#timeouts CoreCrossConnectGroup#timeouts}

---

### CoreCrossConnectGroupMacsecProperties <a name="CoreCrossConnectGroupMacsecProperties" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecrossconnectgroup"

&corecrossconnectgroup.CoreCrossConnectGroupMacsecProperties {
	State: *string,
	EncryptionCipher: *string,
	IsUnprotectedTrafficAllowed: interface{},
	PrimaryKey: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#state CoreCrossConnectGroup#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties.property.encryptionCipher">EncryptionCipher</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#encryption_cipher CoreCrossConnectGroup#encryption_cipher}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties.property.isUnprotectedTrafficAllowed">IsUnprotectedTrafficAllowed</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#is_unprotected_traffic_allowed CoreCrossConnectGroup#is_unprotected_traffic_allowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties.property.primaryKey">PrimaryKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey">CoreCrossConnectGroupMacsecPropertiesPrimaryKey</a></code> | primary_key block. |

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#state CoreCrossConnectGroup#state}.

---

##### `EncryptionCipher`<sup>Optional</sup> <a name="EncryptionCipher" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties.property.encryptionCipher"></a>

```go
EncryptionCipher *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#encryption_cipher CoreCrossConnectGroup#encryption_cipher}.

---

##### `IsUnprotectedTrafficAllowed`<sup>Optional</sup> <a name="IsUnprotectedTrafficAllowed" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties.property.isUnprotectedTrafficAllowed"></a>

```go
IsUnprotectedTrafficAllowed interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#is_unprotected_traffic_allowed CoreCrossConnectGroup#is_unprotected_traffic_allowed}.

---

##### `PrimaryKey`<sup>Optional</sup> <a name="PrimaryKey" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties.property.primaryKey"></a>

```go
PrimaryKey CoreCrossConnectGroupMacsecPropertiesPrimaryKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey">CoreCrossConnectGroupMacsecPropertiesPrimaryKey</a>

primary_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#primary_key CoreCrossConnectGroup#primary_key}

---

### CoreCrossConnectGroupMacsecPropertiesPrimaryKey <a name="CoreCrossConnectGroupMacsecPropertiesPrimaryKey" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecrossconnectgroup"

&corecrossconnectgroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey {
	ConnectivityAssociationKeySecretId: *string,
	ConnectivityAssociationNameSecretId: *string,
	ConnectivityAssociationKeySecretVersion: *string,
	ConnectivityAssociationNameSecretVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey.property.connectivityAssociationKeySecretId">ConnectivityAssociationKeySecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#connectivity_association_key_secret_id CoreCrossConnectGroup#connectivity_association_key_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey.property.connectivityAssociationNameSecretId">ConnectivityAssociationNameSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#connectivity_association_name_secret_id CoreCrossConnectGroup#connectivity_association_name_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey.property.connectivityAssociationKeySecretVersion">ConnectivityAssociationKeySecretVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#connectivity_association_key_secret_version CoreCrossConnectGroup#connectivity_association_key_secret_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey.property.connectivityAssociationNameSecretVersion">ConnectivityAssociationNameSecretVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#connectivity_association_name_secret_version CoreCrossConnectGroup#connectivity_association_name_secret_version}. |

---

##### `ConnectivityAssociationKeySecretId`<sup>Required</sup> <a name="ConnectivityAssociationKeySecretId" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey.property.connectivityAssociationKeySecretId"></a>

```go
ConnectivityAssociationKeySecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#connectivity_association_key_secret_id CoreCrossConnectGroup#connectivity_association_key_secret_id}.

---

##### `ConnectivityAssociationNameSecretId`<sup>Required</sup> <a name="ConnectivityAssociationNameSecretId" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey.property.connectivityAssociationNameSecretId"></a>

```go
ConnectivityAssociationNameSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#connectivity_association_name_secret_id CoreCrossConnectGroup#connectivity_association_name_secret_id}.

---

##### `ConnectivityAssociationKeySecretVersion`<sup>Optional</sup> <a name="ConnectivityAssociationKeySecretVersion" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey.property.connectivityAssociationKeySecretVersion"></a>

```go
ConnectivityAssociationKeySecretVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#connectivity_association_key_secret_version CoreCrossConnectGroup#connectivity_association_key_secret_version}.

---

##### `ConnectivityAssociationNameSecretVersion`<sup>Optional</sup> <a name="ConnectivityAssociationNameSecretVersion" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey.property.connectivityAssociationNameSecretVersion"></a>

```go
ConnectivityAssociationNameSecretVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#connectivity_association_name_secret_version CoreCrossConnectGroup#connectivity_association_name_secret_version}.

---

### CoreCrossConnectGroupTimeouts <a name="CoreCrossConnectGroupTimeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecrossconnectgroup"

&corecrossconnectgroup.CoreCrossConnectGroupTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#create CoreCrossConnectGroup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#delete CoreCrossConnectGroup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#update CoreCrossConnectGroup#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#create CoreCrossConnectGroup#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#delete CoreCrossConnectGroup#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect_group#update CoreCrossConnectGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreCrossConnectGroupMacsecPropertiesOutputReference <a name="CoreCrossConnectGroupMacsecPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecrossconnectgroup"

corecrossconnectgroup.NewCoreCrossConnectGroupMacsecPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreCrossConnectGroupMacsecPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.putPrimaryKey">PutPrimaryKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.resetEncryptionCipher">ResetEncryptionCipher</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.resetIsUnprotectedTrafficAllowed">ResetIsUnprotectedTrafficAllowed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.resetPrimaryKey">ResetPrimaryKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrimaryKey` <a name="PutPrimaryKey" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.putPrimaryKey"></a>

```go
func PutPrimaryKey(value CoreCrossConnectGroupMacsecPropertiesPrimaryKey)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.putPrimaryKey.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey">CoreCrossConnectGroupMacsecPropertiesPrimaryKey</a>

---

##### `ResetEncryptionCipher` <a name="ResetEncryptionCipher" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.resetEncryptionCipher"></a>

```go
func ResetEncryptionCipher()
```

##### `ResetIsUnprotectedTrafficAllowed` <a name="ResetIsUnprotectedTrafficAllowed" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.resetIsUnprotectedTrafficAllowed"></a>

```go
func ResetIsUnprotectedTrafficAllowed()
```

##### `ResetPrimaryKey` <a name="ResetPrimaryKey" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.resetPrimaryKey"></a>

```go
func ResetPrimaryKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.primaryKey">PrimaryKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference">CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.encryptionCipherInput">EncryptionCipherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowedInput">IsUnprotectedTrafficAllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.primaryKeyInput">PrimaryKeyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey">CoreCrossConnectGroupMacsecPropertiesPrimaryKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.encryptionCipher">EncryptionCipher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowed">IsUnprotectedTrafficAllowed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties">CoreCrossConnectGroupMacsecProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.primaryKey"></a>

```go
func PrimaryKey() CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference">CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference</a>

---

##### `EncryptionCipherInput`<sup>Optional</sup> <a name="EncryptionCipherInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.encryptionCipherInput"></a>

```go
func EncryptionCipherInput() *string
```

- *Type:* *string

---

##### `IsUnprotectedTrafficAllowedInput`<sup>Optional</sup> <a name="IsUnprotectedTrafficAllowedInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowedInput"></a>

```go
func IsUnprotectedTrafficAllowedInput() interface{}
```

- *Type:* interface{}

---

##### `PrimaryKeyInput`<sup>Optional</sup> <a name="PrimaryKeyInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.primaryKeyInput"></a>

```go
func PrimaryKeyInput() CoreCrossConnectGroupMacsecPropertiesPrimaryKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey">CoreCrossConnectGroupMacsecPropertiesPrimaryKey</a>

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `EncryptionCipher`<sup>Required</sup> <a name="EncryptionCipher" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.encryptionCipher"></a>

```go
func EncryptionCipher() *string
```

- *Type:* *string

---

##### `IsUnprotectedTrafficAllowed`<sup>Required</sup> <a name="IsUnprotectedTrafficAllowed" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowed"></a>

```go
func IsUnprotectedTrafficAllowed() interface{}
```

- *Type:* interface{}

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreCrossConnectGroupMacsecProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecProperties">CoreCrossConnectGroupMacsecProperties</a>

---


### CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference <a name="CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecrossconnectgroup"

corecrossconnectgroup.NewCoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.resetConnectivityAssociationKeySecretVersion">ResetConnectivityAssociationKeySecretVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.resetConnectivityAssociationNameSecretVersion">ResetConnectivityAssociationNameSecretVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectivityAssociationKeySecretVersion` <a name="ResetConnectivityAssociationKeySecretVersion" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.resetConnectivityAssociationKeySecretVersion"></a>

```go
func ResetConnectivityAssociationKeySecretVersion()
```

##### `ResetConnectivityAssociationNameSecretVersion` <a name="ResetConnectivityAssociationNameSecretVersion" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.resetConnectivityAssociationNameSecretVersion"></a>

```go
func ResetConnectivityAssociationNameSecretVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretIdInput">ConnectivityAssociationKeySecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretVersionInput">ConnectivityAssociationKeySecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretIdInput">ConnectivityAssociationNameSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretVersionInput">ConnectivityAssociationNameSecretVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretId">ConnectivityAssociationKeySecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretVersion">ConnectivityAssociationKeySecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretId">ConnectivityAssociationNameSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretVersion">ConnectivityAssociationNameSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey">CoreCrossConnectGroupMacsecPropertiesPrimaryKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectivityAssociationKeySecretIdInput`<sup>Optional</sup> <a name="ConnectivityAssociationKeySecretIdInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretIdInput"></a>

```go
func ConnectivityAssociationKeySecretIdInput() *string
```

- *Type:* *string

---

##### `ConnectivityAssociationKeySecretVersionInput`<sup>Optional</sup> <a name="ConnectivityAssociationKeySecretVersionInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretVersionInput"></a>

```go
func ConnectivityAssociationKeySecretVersionInput() *string
```

- *Type:* *string

---

##### `ConnectivityAssociationNameSecretIdInput`<sup>Optional</sup> <a name="ConnectivityAssociationNameSecretIdInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretIdInput"></a>

```go
func ConnectivityAssociationNameSecretIdInput() *string
```

- *Type:* *string

---

##### `ConnectivityAssociationNameSecretVersionInput`<sup>Optional</sup> <a name="ConnectivityAssociationNameSecretVersionInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretVersionInput"></a>

```go
func ConnectivityAssociationNameSecretVersionInput() *string
```

- *Type:* *string

---

##### `ConnectivityAssociationKeySecretId`<sup>Required</sup> <a name="ConnectivityAssociationKeySecretId" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretId"></a>

```go
func ConnectivityAssociationKeySecretId() *string
```

- *Type:* *string

---

##### `ConnectivityAssociationKeySecretVersion`<sup>Required</sup> <a name="ConnectivityAssociationKeySecretVersion" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretVersion"></a>

```go
func ConnectivityAssociationKeySecretVersion() *string
```

- *Type:* *string

---

##### `ConnectivityAssociationNameSecretId`<sup>Required</sup> <a name="ConnectivityAssociationNameSecretId" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretId"></a>

```go
func ConnectivityAssociationNameSecretId() *string
```

- *Type:* *string

---

##### `ConnectivityAssociationNameSecretVersion`<sup>Required</sup> <a name="ConnectivityAssociationNameSecretVersion" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretVersion"></a>

```go
func ConnectivityAssociationNameSecretVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreCrossConnectGroupMacsecPropertiesPrimaryKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupMacsecPropertiesPrimaryKey">CoreCrossConnectGroupMacsecPropertiesPrimaryKey</a>

---


### CoreCrossConnectGroupTimeoutsOutputReference <a name="CoreCrossConnectGroupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecrossconnectgroup"

corecrossconnectgroup.NewCoreCrossConnectGroupTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreCrossConnectGroupTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreCrossConnectGroup.CoreCrossConnectGroupTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



