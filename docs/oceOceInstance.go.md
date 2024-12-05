# `oceOceInstance` Submodule <a name="`oceOceInstance` Submodule" id="rhizo-co-terraform-provider-oci.oceOceInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceOceInstance <a name="OceOceInstance" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance oci_oce_oce_instance}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/oceoceinstance"

oceoceinstance.NewOceOceInstance(scope Construct, id *string, config OceOceInstanceConfig) OceOceInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig">OceOceInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig">OceOceInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetAddOnFeatures">ResetAddOnFeatures</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetDrRegion">ResetDrRegion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetInstanceAccessType">ResetInstanceAccessType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetInstanceLicenseType">ResetInstanceLicenseType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetInstanceUsageType">ResetInstanceUsageType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetUpgradeSchedule">ResetUpgradeSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetWafPrimaryDomain">ResetWafPrimaryDomain</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.putTimeouts"></a>

```go
func PutTimeouts(value OceOceInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts">OceOceInstanceTimeouts</a>

---

##### `ResetAddOnFeatures` <a name="ResetAddOnFeatures" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetAddOnFeatures"></a>

```go
func ResetAddOnFeatures()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDrRegion` <a name="ResetDrRegion" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetDrRegion"></a>

```go
func ResetDrRegion()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceAccessType` <a name="ResetInstanceAccessType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetInstanceAccessType"></a>

```go
func ResetInstanceAccessType()
```

##### `ResetInstanceLicenseType` <a name="ResetInstanceLicenseType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetInstanceLicenseType"></a>

```go
func ResetInstanceLicenseType()
```

##### `ResetInstanceUsageType` <a name="ResetInstanceUsageType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetInstanceUsageType"></a>

```go
func ResetInstanceUsageType()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUpgradeSchedule` <a name="ResetUpgradeSchedule" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetUpgradeSchedule"></a>

```go
func ResetUpgradeSchedule()
```

##### `ResetWafPrimaryDomain` <a name="ResetWafPrimaryDomain" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.resetWafPrimaryDomain"></a>

```go
func ResetWafPrimaryDomain()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OceOceInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/oceoceinstance"

oceoceinstance.OceOceInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/oceoceinstance"

oceoceinstance.OceOceInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/oceoceinstance"

oceoceinstance.OceOceInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/oceoceinstance"

oceoceinstance.OceOceInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OceOceInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OceOceInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OceOceInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OceOceInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.guid">Guid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idcsTenancy">IdcsTenancy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.service">Service</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference">OceOceInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.addOnFeaturesInput">AddOnFeaturesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.adminEmailInput">AdminEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.drRegionInput">DrRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idcsAccessTokenInput">IdcsAccessTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceAccessTypeInput">InstanceAccessTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceLicenseTypeInput">InstanceLicenseTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceUsageTypeInput">InstanceUsageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.objectStorageNamespaceInput">ObjectStorageNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyIdInput">TenancyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyNameInput">TenancyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.upgradeScheduleInput">UpgradeScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.wafPrimaryDomainInput">WafPrimaryDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.addOnFeatures">AddOnFeatures</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.adminEmail">AdminEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.drRegion">DrRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idcsAccessToken">IdcsAccessToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceAccessType">InstanceAccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceLicenseType">InstanceLicenseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceUsageType">InstanceUsageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.objectStorageNamespace">ObjectStorageNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyId">TenancyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyName">TenancyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.upgradeSchedule">UpgradeSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.wafPrimaryDomain">WafPrimaryDomain</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Guid`<sup>Required</sup> <a name="Guid" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.guid"></a>

```go
func Guid() *string
```

- *Type:* *string

---

##### `IdcsTenancy`<sup>Required</sup> <a name="IdcsTenancy" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idcsTenancy"></a>

```go
func IdcsTenancy() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.service"></a>

```go
func Service() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeouts"></a>

```go
func Timeouts() OceOceInstanceTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference">OceOceInstanceTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `AddOnFeaturesInput`<sup>Optional</sup> <a name="AddOnFeaturesInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.addOnFeaturesInput"></a>

```go
func AddOnFeaturesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdminEmailInput`<sup>Optional</sup> <a name="AdminEmailInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.adminEmailInput"></a>

```go
func AdminEmailInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DrRegionInput`<sup>Optional</sup> <a name="DrRegionInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.drRegionInput"></a>

```go
func DrRegionInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdcsAccessTokenInput`<sup>Optional</sup> <a name="IdcsAccessTokenInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idcsAccessTokenInput"></a>

```go
func IdcsAccessTokenInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceAccessTypeInput`<sup>Optional</sup> <a name="InstanceAccessTypeInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceAccessTypeInput"></a>

```go
func InstanceAccessTypeInput() *string
```

- *Type:* *string

---

##### `InstanceLicenseTypeInput`<sup>Optional</sup> <a name="InstanceLicenseTypeInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceLicenseTypeInput"></a>

```go
func InstanceLicenseTypeInput() *string
```

- *Type:* *string

---

##### `InstanceUsageTypeInput`<sup>Optional</sup> <a name="InstanceUsageTypeInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceUsageTypeInput"></a>

```go
func InstanceUsageTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ObjectStorageNamespaceInput`<sup>Optional</sup> <a name="ObjectStorageNamespaceInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.objectStorageNamespaceInput"></a>

```go
func ObjectStorageNamespaceInput() *string
```

- *Type:* *string

---

##### `TenancyIdInput`<sup>Optional</sup> <a name="TenancyIdInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyIdInput"></a>

```go
func TenancyIdInput() *string
```

- *Type:* *string

---

##### `TenancyNameInput`<sup>Optional</sup> <a name="TenancyNameInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyNameInput"></a>

```go
func TenancyNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UpgradeScheduleInput`<sup>Optional</sup> <a name="UpgradeScheduleInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.upgradeScheduleInput"></a>

```go
func UpgradeScheduleInput() *string
```

- *Type:* *string

---

##### `WafPrimaryDomainInput`<sup>Optional</sup> <a name="WafPrimaryDomainInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.wafPrimaryDomainInput"></a>

```go
func WafPrimaryDomainInput() *string
```

- *Type:* *string

---

##### `AddOnFeatures`<sup>Required</sup> <a name="AddOnFeatures" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.addOnFeatures"></a>

```go
func AddOnFeatures() *[]*string
```

- *Type:* *[]*string

---

##### `AdminEmail`<sup>Required</sup> <a name="AdminEmail" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.adminEmail"></a>

```go
func AdminEmail() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DrRegion`<sup>Required</sup> <a name="DrRegion" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.drRegion"></a>

```go
func DrRegion() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdcsAccessToken`<sup>Required</sup> <a name="IdcsAccessToken" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.idcsAccessToken"></a>

```go
func IdcsAccessToken() *string
```

- *Type:* *string

---

##### `InstanceAccessType`<sup>Required</sup> <a name="InstanceAccessType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceAccessType"></a>

```go
func InstanceAccessType() *string
```

- *Type:* *string

---

##### `InstanceLicenseType`<sup>Required</sup> <a name="InstanceLicenseType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceLicenseType"></a>

```go
func InstanceLicenseType() *string
```

- *Type:* *string

---

##### `InstanceUsageType`<sup>Required</sup> <a name="InstanceUsageType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.instanceUsageType"></a>

```go
func InstanceUsageType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ObjectStorageNamespace`<sup>Required</sup> <a name="ObjectStorageNamespace" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.objectStorageNamespace"></a>

```go
func ObjectStorageNamespace() *string
```

- *Type:* *string

---

##### `TenancyId`<sup>Required</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyId"></a>

```go
func TenancyId() *string
```

- *Type:* *string

---

##### `TenancyName`<sup>Required</sup> <a name="TenancyName" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tenancyName"></a>

```go
func TenancyName() *string
```

- *Type:* *string

---

##### `UpgradeSchedule`<sup>Required</sup> <a name="UpgradeSchedule" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.upgradeSchedule"></a>

```go
func UpgradeSchedule() *string
```

- *Type:* *string

---

##### `WafPrimaryDomain`<sup>Required</sup> <a name="WafPrimaryDomain" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.wafPrimaryDomain"></a>

```go
func WafPrimaryDomain() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OceOceInstanceConfig <a name="OceOceInstanceConfig" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/oceoceinstance"

&oceoceinstance.OceOceInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AdminEmail: *string,
	CompartmentId: *string,
	IdcsAccessToken: *string,
	Name: *string,
	ObjectStorageNamespace: *string,
	TenancyId: *string,
	TenancyName: *string,
	AddOnFeatures: *[]*string,
	DefinedTags: *map[string]*string,
	Description: *string,
	DrRegion: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	InstanceAccessType: *string,
	InstanceLicenseType: *string,
	InstanceUsageType: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.oceOceInstance.OceOceInstanceTimeouts,
	UpgradeSchedule: *string,
	WafPrimaryDomain: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.adminEmail">AdminEmail</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#admin_email OceOceInstance#admin_email}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#compartment_id OceOceInstance#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.idcsAccessToken">IdcsAccessToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#idcs_access_token OceOceInstance#idcs_access_token}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#name OceOceInstance#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.objectStorageNamespace">ObjectStorageNamespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#object_storage_namespace OceOceInstance#object_storage_namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.tenancyId">TenancyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#tenancy_id OceOceInstance#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.tenancyName">TenancyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#tenancy_name OceOceInstance#tenancy_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.addOnFeatures">AddOnFeatures</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#add_on_features OceOceInstance#add_on_features}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#defined_tags OceOceInstance#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#description OceOceInstance#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.drRegion">DrRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#dr_region OceOceInstance#dr_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#freeform_tags OceOceInstance#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#id OceOceInstance#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.instanceAccessType">InstanceAccessType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_access_type OceOceInstance#instance_access_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.instanceLicenseType">InstanceLicenseType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_license_type OceOceInstance#instance_license_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.instanceUsageType">InstanceUsageType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_usage_type OceOceInstance#instance_usage_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts">OceOceInstanceTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.upgradeSchedule">UpgradeSchedule</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#upgrade_schedule OceOceInstance#upgrade_schedule}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.wafPrimaryDomain">WafPrimaryDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#waf_primary_domain OceOceInstance#waf_primary_domain}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdminEmail`<sup>Required</sup> <a name="AdminEmail" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.adminEmail"></a>

```go
AdminEmail *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#admin_email OceOceInstance#admin_email}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#compartment_id OceOceInstance#compartment_id}.

---

##### `IdcsAccessToken`<sup>Required</sup> <a name="IdcsAccessToken" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.idcsAccessToken"></a>

```go
IdcsAccessToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#idcs_access_token OceOceInstance#idcs_access_token}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#name OceOceInstance#name}.

---

##### `ObjectStorageNamespace`<sup>Required</sup> <a name="ObjectStorageNamespace" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.objectStorageNamespace"></a>

```go
ObjectStorageNamespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#object_storage_namespace OceOceInstance#object_storage_namespace}.

---

##### `TenancyId`<sup>Required</sup> <a name="TenancyId" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.tenancyId"></a>

```go
TenancyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#tenancy_id OceOceInstance#tenancy_id}.

---

##### `TenancyName`<sup>Required</sup> <a name="TenancyName" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.tenancyName"></a>

```go
TenancyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#tenancy_name OceOceInstance#tenancy_name}.

---

##### `AddOnFeatures`<sup>Optional</sup> <a name="AddOnFeatures" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.addOnFeatures"></a>

```go
AddOnFeatures *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#add_on_features OceOceInstance#add_on_features}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#defined_tags OceOceInstance#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#description OceOceInstance#description}.

---

##### `DrRegion`<sup>Optional</sup> <a name="DrRegion" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.drRegion"></a>

```go
DrRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#dr_region OceOceInstance#dr_region}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#freeform_tags OceOceInstance#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#id OceOceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceAccessType`<sup>Optional</sup> <a name="InstanceAccessType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.instanceAccessType"></a>

```go
InstanceAccessType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_access_type OceOceInstance#instance_access_type}.

---

##### `InstanceLicenseType`<sup>Optional</sup> <a name="InstanceLicenseType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.instanceLicenseType"></a>

```go
InstanceLicenseType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_license_type OceOceInstance#instance_license_type}.

---

##### `InstanceUsageType`<sup>Optional</sup> <a name="InstanceUsageType" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.instanceUsageType"></a>

```go
InstanceUsageType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#instance_usage_type OceOceInstance#instance_usage_type}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.timeouts"></a>

```go
Timeouts OceOceInstanceTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts">OceOceInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#timeouts OceOceInstance#timeouts}

---

##### `UpgradeSchedule`<sup>Optional</sup> <a name="UpgradeSchedule" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.upgradeSchedule"></a>

```go
UpgradeSchedule *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#upgrade_schedule OceOceInstance#upgrade_schedule}.

---

##### `WafPrimaryDomain`<sup>Optional</sup> <a name="WafPrimaryDomain" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceConfig.property.wafPrimaryDomain"></a>

```go
WafPrimaryDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#waf_primary_domain OceOceInstance#waf_primary_domain}.

---

### OceOceInstanceTimeouts <a name="OceOceInstanceTimeouts" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/oceoceinstance"

&oceoceinstance.OceOceInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#create OceOceInstance#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#delete OceOceInstance#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#update OceOceInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#create OceOceInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#delete OceOceInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/oce_oce_instance#update OceOceInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceOceInstanceTimeoutsOutputReference <a name="OceOceInstanceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/oceoceinstance"

oceoceinstance.NewOceOceInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OceOceInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.oceOceInstance.OceOceInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



