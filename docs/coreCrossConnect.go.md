# `coreCrossConnect` Submodule <a name="`coreCrossConnect` Submodule" id="rhizo-co-terraform-provider-oci.coreCrossConnect"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreCrossConnect <a name="CoreCrossConnect" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect oci_core_cross_connect}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecrossconnect"

corecrossconnect.NewCoreCrossConnect(scope Construct, id *string, config CoreCrossConnectConfig) CoreCrossConnect
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig">CoreCrossConnectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig">CoreCrossConnectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.putMacsecProperties">PutMacsecProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetCrossConnectGroupId">ResetCrossConnectGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetCustomerReferenceName">ResetCustomerReferenceName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetFarCrossConnectOrCrossConnectGroupId">ResetFarCrossConnectOrCrossConnectGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetIsActive">ResetIsActive</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetMacsecProperties">ResetMacsecProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetNearCrossConnectOrCrossConnectGroupId">ResetNearCrossConnectOrCrossConnectGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMacsecProperties` <a name="PutMacsecProperties" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.putMacsecProperties"></a>

```go
func PutMacsecProperties(value CoreCrossConnectMacsecProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.putMacsecProperties.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties">CoreCrossConnectMacsecProperties</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.putTimeouts"></a>

```go
func PutTimeouts(value CoreCrossConnectTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts">CoreCrossConnectTimeouts</a>

---

##### `ResetCrossConnectGroupId` <a name="ResetCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetCrossConnectGroupId"></a>

```go
func ResetCrossConnectGroupId()
```

##### `ResetCustomerReferenceName` <a name="ResetCustomerReferenceName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetCustomerReferenceName"></a>

```go
func ResetCustomerReferenceName()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFarCrossConnectOrCrossConnectGroupId` <a name="ResetFarCrossConnectOrCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetFarCrossConnectOrCrossConnectGroupId"></a>

```go
func ResetFarCrossConnectOrCrossConnectGroupId()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetId"></a>

```go
func ResetId()
```

##### `ResetIsActive` <a name="ResetIsActive" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetIsActive"></a>

```go
func ResetIsActive()
```

##### `ResetMacsecProperties` <a name="ResetMacsecProperties" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetMacsecProperties"></a>

```go
func ResetMacsecProperties()
```

##### `ResetNearCrossConnectOrCrossConnectGroupId` <a name="ResetNearCrossConnectOrCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetNearCrossConnectOrCrossConnectGroupId"></a>

```go
func ResetNearCrossConnectOrCrossConnectGroupId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CoreCrossConnect resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecrossconnect"

corecrossconnect.CoreCrossConnect_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecrossconnect"

corecrossconnect.CoreCrossConnect_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecrossconnect"

corecrossconnect.CoreCrossConnect_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecrossconnect"

corecrossconnect.CoreCrossConnect_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CoreCrossConnect resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CoreCrossConnect to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CoreCrossConnect that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CoreCrossConnect to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.macsecProperties">MacsecProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference">CoreCrossConnectMacsecPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.ociLogicalDeviceName">OciLogicalDeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.ociPhysicalDeviceName">OciPhysicalDeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.portName">PortName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference">CoreCrossConnectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.crossConnectGroupIdInput">CrossConnectGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.customerReferenceNameInput">CustomerReferenceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.farCrossConnectOrCrossConnectGroupIdInput">FarCrossConnectOrCrossConnectGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.isActiveInput">IsActiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.locationNameInput">LocationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.macsecPropertiesInput">MacsecPropertiesInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties">CoreCrossConnectMacsecProperties</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.nearCrossConnectOrCrossConnectGroupIdInput">NearCrossConnectOrCrossConnectGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.portSpeedShapeNameInput">PortSpeedShapeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.crossConnectGroupId">CrossConnectGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.customerReferenceName">CustomerReferenceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.farCrossConnectOrCrossConnectGroupId">FarCrossConnectOrCrossConnectGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.isActive">IsActive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.locationName">LocationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.nearCrossConnectOrCrossConnectGroupId">NearCrossConnectOrCrossConnectGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.portSpeedShapeName">PortSpeedShapeName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MacsecProperties`<sup>Required</sup> <a name="MacsecProperties" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.macsecProperties"></a>

```go
func MacsecProperties() CoreCrossConnectMacsecPropertiesOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference">CoreCrossConnectMacsecPropertiesOutputReference</a>

---

##### `OciLogicalDeviceName`<sup>Required</sup> <a name="OciLogicalDeviceName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.ociLogicalDeviceName"></a>

```go
func OciLogicalDeviceName() *string
```

- *Type:* *string

---

##### `OciPhysicalDeviceName`<sup>Required</sup> <a name="OciPhysicalDeviceName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.ociPhysicalDeviceName"></a>

```go
func OciPhysicalDeviceName() *string
```

- *Type:* *string

---

##### `PortName`<sup>Required</sup> <a name="PortName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.portName"></a>

```go
func PortName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.timeouts"></a>

```go
func Timeouts() CoreCrossConnectTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference">CoreCrossConnectTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CrossConnectGroupIdInput`<sup>Optional</sup> <a name="CrossConnectGroupIdInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.crossConnectGroupIdInput"></a>

```go
func CrossConnectGroupIdInput() *string
```

- *Type:* *string

---

##### `CustomerReferenceNameInput`<sup>Optional</sup> <a name="CustomerReferenceNameInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.customerReferenceNameInput"></a>

```go
func CustomerReferenceNameInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FarCrossConnectOrCrossConnectGroupIdInput`<sup>Optional</sup> <a name="FarCrossConnectOrCrossConnectGroupIdInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.farCrossConnectOrCrossConnectGroupIdInput"></a>

```go
func FarCrossConnectOrCrossConnectGroupIdInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsActiveInput`<sup>Optional</sup> <a name="IsActiveInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.isActiveInput"></a>

```go
func IsActiveInput() interface{}
```

- *Type:* interface{}

---

##### `LocationNameInput`<sup>Optional</sup> <a name="LocationNameInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.locationNameInput"></a>

```go
func LocationNameInput() *string
```

- *Type:* *string

---

##### `MacsecPropertiesInput`<sup>Optional</sup> <a name="MacsecPropertiesInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.macsecPropertiesInput"></a>

```go
func MacsecPropertiesInput() CoreCrossConnectMacsecProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties">CoreCrossConnectMacsecProperties</a>

---

##### `NearCrossConnectOrCrossConnectGroupIdInput`<sup>Optional</sup> <a name="NearCrossConnectOrCrossConnectGroupIdInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.nearCrossConnectOrCrossConnectGroupIdInput"></a>

```go
func NearCrossConnectOrCrossConnectGroupIdInput() *string
```

- *Type:* *string

---

##### `PortSpeedShapeNameInput`<sup>Optional</sup> <a name="PortSpeedShapeNameInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.portSpeedShapeNameInput"></a>

```go
func PortSpeedShapeNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CrossConnectGroupId`<sup>Required</sup> <a name="CrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.crossConnectGroupId"></a>

```go
func CrossConnectGroupId() *string
```

- *Type:* *string

---

##### `CustomerReferenceName`<sup>Required</sup> <a name="CustomerReferenceName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.customerReferenceName"></a>

```go
func CustomerReferenceName() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FarCrossConnectOrCrossConnectGroupId`<sup>Required</sup> <a name="FarCrossConnectOrCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.farCrossConnectOrCrossConnectGroupId"></a>

```go
func FarCrossConnectOrCrossConnectGroupId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.isActive"></a>

```go
func IsActive() interface{}
```

- *Type:* interface{}

---

##### `LocationName`<sup>Required</sup> <a name="LocationName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.locationName"></a>

```go
func LocationName() *string
```

- *Type:* *string

---

##### `NearCrossConnectOrCrossConnectGroupId`<sup>Required</sup> <a name="NearCrossConnectOrCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.nearCrossConnectOrCrossConnectGroupId"></a>

```go
func NearCrossConnectOrCrossConnectGroupId() *string
```

- *Type:* *string

---

##### `PortSpeedShapeName`<sup>Required</sup> <a name="PortSpeedShapeName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.portSpeedShapeName"></a>

```go
func PortSpeedShapeName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnect.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreCrossConnectConfig <a name="CoreCrossConnectConfig" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecrossconnect"

&corecrossconnect.CoreCrossConnectConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	LocationName: *string,
	PortSpeedShapeName: *string,
	CrossConnectGroupId: *string,
	CustomerReferenceName: *string,
	DefinedTags: *map[string]*string,
	DisplayName: *string,
	FarCrossConnectOrCrossConnectGroupId: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	IsActive: interface{},
	MacsecProperties: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreCrossConnect.CoreCrossConnectMacsecProperties,
	NearCrossConnectOrCrossConnectGroupId: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreCrossConnect.CoreCrossConnectTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#compartment_id CoreCrossConnect#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.locationName">LocationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#location_name CoreCrossConnect#location_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.portSpeedShapeName">PortSpeedShapeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#port_speed_shape_name CoreCrossConnect#port_speed_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.crossConnectGroupId">CrossConnectGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#cross_connect_group_id CoreCrossConnect#cross_connect_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.customerReferenceName">CustomerReferenceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#customer_reference_name CoreCrossConnect#customer_reference_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#defined_tags CoreCrossConnect#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#display_name CoreCrossConnect#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.farCrossConnectOrCrossConnectGroupId">FarCrossConnectOrCrossConnectGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#far_cross_connect_or_cross_connect_group_id CoreCrossConnect#far_cross_connect_or_cross_connect_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#freeform_tags CoreCrossConnect#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#id CoreCrossConnect#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.isActive">IsActive</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#is_active CoreCrossConnect#is_active}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.macsecProperties">MacsecProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties">CoreCrossConnectMacsecProperties</a></code> | macsec_properties block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.nearCrossConnectOrCrossConnectGroupId">NearCrossConnectOrCrossConnectGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#near_cross_connect_or_cross_connect_group_id CoreCrossConnect#near_cross_connect_or_cross_connect_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts">CoreCrossConnectTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#compartment_id CoreCrossConnect#compartment_id}.

---

##### `LocationName`<sup>Required</sup> <a name="LocationName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.locationName"></a>

```go
LocationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#location_name CoreCrossConnect#location_name}.

---

##### `PortSpeedShapeName`<sup>Required</sup> <a name="PortSpeedShapeName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.portSpeedShapeName"></a>

```go
PortSpeedShapeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#port_speed_shape_name CoreCrossConnect#port_speed_shape_name}.

---

##### `CrossConnectGroupId`<sup>Optional</sup> <a name="CrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.crossConnectGroupId"></a>

```go
CrossConnectGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#cross_connect_group_id CoreCrossConnect#cross_connect_group_id}.

---

##### `CustomerReferenceName`<sup>Optional</sup> <a name="CustomerReferenceName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.customerReferenceName"></a>

```go
CustomerReferenceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#customer_reference_name CoreCrossConnect#customer_reference_name}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#defined_tags CoreCrossConnect#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#display_name CoreCrossConnect#display_name}.

---

##### `FarCrossConnectOrCrossConnectGroupId`<sup>Optional</sup> <a name="FarCrossConnectOrCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.farCrossConnectOrCrossConnectGroupId"></a>

```go
FarCrossConnectOrCrossConnectGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#far_cross_connect_or_cross_connect_group_id CoreCrossConnect#far_cross_connect_or_cross_connect_group_id}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#freeform_tags CoreCrossConnect#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#id CoreCrossConnect#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsActive`<sup>Optional</sup> <a name="IsActive" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.isActive"></a>

```go
IsActive interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#is_active CoreCrossConnect#is_active}.

---

##### `MacsecProperties`<sup>Optional</sup> <a name="MacsecProperties" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.macsecProperties"></a>

```go
MacsecProperties CoreCrossConnectMacsecProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties">CoreCrossConnectMacsecProperties</a>

macsec_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#macsec_properties CoreCrossConnect#macsec_properties}

---

##### `NearCrossConnectOrCrossConnectGroupId`<sup>Optional</sup> <a name="NearCrossConnectOrCrossConnectGroupId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.nearCrossConnectOrCrossConnectGroupId"></a>

```go
NearCrossConnectOrCrossConnectGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#near_cross_connect_or_cross_connect_group_id CoreCrossConnect#near_cross_connect_or_cross_connect_group_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectConfig.property.timeouts"></a>

```go
Timeouts CoreCrossConnectTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts">CoreCrossConnectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#timeouts CoreCrossConnect#timeouts}

---

### CoreCrossConnectMacsecProperties <a name="CoreCrossConnectMacsecProperties" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecrossconnect"

&corecrossconnect.CoreCrossConnectMacsecProperties {
	State: *string,
	EncryptionCipher: *string,
	IsUnprotectedTrafficAllowed: interface{},
	PrimaryKey: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#state CoreCrossConnect#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.encryptionCipher">EncryptionCipher</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#encryption_cipher CoreCrossConnect#encryption_cipher}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.isUnprotectedTrafficAllowed">IsUnprotectedTrafficAllowed</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#is_unprotected_traffic_allowed CoreCrossConnect#is_unprotected_traffic_allowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.primaryKey">PrimaryKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey">CoreCrossConnectMacsecPropertiesPrimaryKey</a></code> | primary_key block. |

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#state CoreCrossConnect#state}.

---

##### `EncryptionCipher`<sup>Optional</sup> <a name="EncryptionCipher" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.encryptionCipher"></a>

```go
EncryptionCipher *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#encryption_cipher CoreCrossConnect#encryption_cipher}.

---

##### `IsUnprotectedTrafficAllowed`<sup>Optional</sup> <a name="IsUnprotectedTrafficAllowed" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.isUnprotectedTrafficAllowed"></a>

```go
IsUnprotectedTrafficAllowed interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#is_unprotected_traffic_allowed CoreCrossConnect#is_unprotected_traffic_allowed}.

---

##### `PrimaryKey`<sup>Optional</sup> <a name="PrimaryKey" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties.property.primaryKey"></a>

```go
PrimaryKey CoreCrossConnectMacsecPropertiesPrimaryKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey">CoreCrossConnectMacsecPropertiesPrimaryKey</a>

primary_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#primary_key CoreCrossConnect#primary_key}

---

### CoreCrossConnectMacsecPropertiesPrimaryKey <a name="CoreCrossConnectMacsecPropertiesPrimaryKey" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecrossconnect"

&corecrossconnect.CoreCrossConnectMacsecPropertiesPrimaryKey {
	ConnectivityAssociationKeySecretId: *string,
	ConnectivityAssociationNameSecretId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey.property.connectivityAssociationKeySecretId">ConnectivityAssociationKeySecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#connectivity_association_key_secret_id CoreCrossConnect#connectivity_association_key_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey.property.connectivityAssociationNameSecretId">ConnectivityAssociationNameSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#connectivity_association_name_secret_id CoreCrossConnect#connectivity_association_name_secret_id}. |

---

##### `ConnectivityAssociationKeySecretId`<sup>Required</sup> <a name="ConnectivityAssociationKeySecretId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey.property.connectivityAssociationKeySecretId"></a>

```go
ConnectivityAssociationKeySecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#connectivity_association_key_secret_id CoreCrossConnect#connectivity_association_key_secret_id}.

---

##### `ConnectivityAssociationNameSecretId`<sup>Required</sup> <a name="ConnectivityAssociationNameSecretId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey.property.connectivityAssociationNameSecretId"></a>

```go
ConnectivityAssociationNameSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#connectivity_association_name_secret_id CoreCrossConnect#connectivity_association_name_secret_id}.

---

### CoreCrossConnectTimeouts <a name="CoreCrossConnectTimeouts" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecrossconnect"

&corecrossconnect.CoreCrossConnectTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#create CoreCrossConnect#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#delete CoreCrossConnect#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#update CoreCrossConnect#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#create CoreCrossConnect#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#delete CoreCrossConnect#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_cross_connect#update CoreCrossConnect#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreCrossConnectMacsecPropertiesOutputReference <a name="CoreCrossConnectMacsecPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecrossconnect"

corecrossconnect.NewCoreCrossConnectMacsecPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreCrossConnectMacsecPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.putPrimaryKey">PutPrimaryKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resetEncryptionCipher">ResetEncryptionCipher</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resetIsUnprotectedTrafficAllowed">ResetIsUnprotectedTrafficAllowed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resetPrimaryKey">ResetPrimaryKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrimaryKey` <a name="PutPrimaryKey" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.putPrimaryKey"></a>

```go
func PutPrimaryKey(value CoreCrossConnectMacsecPropertiesPrimaryKey)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.putPrimaryKey.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey">CoreCrossConnectMacsecPropertiesPrimaryKey</a>

---

##### `ResetEncryptionCipher` <a name="ResetEncryptionCipher" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resetEncryptionCipher"></a>

```go
func ResetEncryptionCipher()
```

##### `ResetIsUnprotectedTrafficAllowed` <a name="ResetIsUnprotectedTrafficAllowed" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resetIsUnprotectedTrafficAllowed"></a>

```go
func ResetIsUnprotectedTrafficAllowed()
```

##### `ResetPrimaryKey` <a name="ResetPrimaryKey" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.resetPrimaryKey"></a>

```go
func ResetPrimaryKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.primaryKey">PrimaryKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference">CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.encryptionCipherInput">EncryptionCipherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowedInput">IsUnprotectedTrafficAllowedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.primaryKeyInput">PrimaryKeyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey">CoreCrossConnectMacsecPropertiesPrimaryKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.encryptionCipher">EncryptionCipher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowed">IsUnprotectedTrafficAllowed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties">CoreCrossConnectMacsecProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.primaryKey"></a>

```go
func PrimaryKey() CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference">CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference</a>

---

##### `EncryptionCipherInput`<sup>Optional</sup> <a name="EncryptionCipherInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.encryptionCipherInput"></a>

```go
func EncryptionCipherInput() *string
```

- *Type:* *string

---

##### `IsUnprotectedTrafficAllowedInput`<sup>Optional</sup> <a name="IsUnprotectedTrafficAllowedInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowedInput"></a>

```go
func IsUnprotectedTrafficAllowedInput() interface{}
```

- *Type:* interface{}

---

##### `PrimaryKeyInput`<sup>Optional</sup> <a name="PrimaryKeyInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.primaryKeyInput"></a>

```go
func PrimaryKeyInput() CoreCrossConnectMacsecPropertiesPrimaryKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey">CoreCrossConnectMacsecPropertiesPrimaryKey</a>

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `EncryptionCipher`<sup>Required</sup> <a name="EncryptionCipher" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.encryptionCipher"></a>

```go
func EncryptionCipher() *string
```

- *Type:* *string

---

##### `IsUnprotectedTrafficAllowed`<sup>Required</sup> <a name="IsUnprotectedTrafficAllowed" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.isUnprotectedTrafficAllowed"></a>

```go
func IsUnprotectedTrafficAllowed() interface{}
```

- *Type:* interface{}

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreCrossConnectMacsecProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecProperties">CoreCrossConnectMacsecProperties</a>

---


### CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference <a name="CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecrossconnect"

corecrossconnect.NewCoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretVersion">ConnectivityAssociationKeySecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretVersion">ConnectivityAssociationNameSecretVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretIdInput">ConnectivityAssociationKeySecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretIdInput">ConnectivityAssociationNameSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretId">ConnectivityAssociationKeySecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretId">ConnectivityAssociationNameSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey">CoreCrossConnectMacsecPropertiesPrimaryKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectivityAssociationKeySecretVersion`<sup>Required</sup> <a name="ConnectivityAssociationKeySecretVersion" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretVersion"></a>

```go
func ConnectivityAssociationKeySecretVersion() *string
```

- *Type:* *string

---

##### `ConnectivityAssociationNameSecretVersion`<sup>Required</sup> <a name="ConnectivityAssociationNameSecretVersion" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretVersion"></a>

```go
func ConnectivityAssociationNameSecretVersion() *string
```

- *Type:* *string

---

##### `ConnectivityAssociationKeySecretIdInput`<sup>Optional</sup> <a name="ConnectivityAssociationKeySecretIdInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretIdInput"></a>

```go
func ConnectivityAssociationKeySecretIdInput() *string
```

- *Type:* *string

---

##### `ConnectivityAssociationNameSecretIdInput`<sup>Optional</sup> <a name="ConnectivityAssociationNameSecretIdInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretIdInput"></a>

```go
func ConnectivityAssociationNameSecretIdInput() *string
```

- *Type:* *string

---

##### `ConnectivityAssociationKeySecretId`<sup>Required</sup> <a name="ConnectivityAssociationKeySecretId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationKeySecretId"></a>

```go
func ConnectivityAssociationKeySecretId() *string
```

- *Type:* *string

---

##### `ConnectivityAssociationNameSecretId`<sup>Required</sup> <a name="ConnectivityAssociationNameSecretId" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.connectivityAssociationNameSecretId"></a>

```go
func ConnectivityAssociationNameSecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreCrossConnectMacsecPropertiesPrimaryKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectMacsecPropertiesPrimaryKey">CoreCrossConnectMacsecPropertiesPrimaryKey</a>

---


### CoreCrossConnectTimeoutsOutputReference <a name="CoreCrossConnectTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corecrossconnect"

corecrossconnect.NewCoreCrossConnectTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreCrossConnectTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreCrossConnect.CoreCrossConnectTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



