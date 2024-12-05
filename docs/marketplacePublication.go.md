# `marketplacePublication` Submodule <a name="`marketplacePublication` Submodule" id="rhizo-co-terraform-provider-oci.marketplacePublication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MarketplacePublication <a name="MarketplacePublication" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication oci_marketplace_publication}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/marketplacepublication"

marketplacepublication.NewMarketplacePublication(scope Construct, id *string, config MarketplacePublicationConfig) MarketplacePublication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig">MarketplacePublicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig">MarketplacePublicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.putPackageDetails">PutPackageDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.putSupportContacts">PutSupportContacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.resetLongDescription">ResetLongDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPackageDetails` <a name="PutPackageDetails" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.putPackageDetails"></a>

```go
func PutPackageDetails(value MarketplacePublicationPackageDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.putPackageDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails">MarketplacePublicationPackageDetails</a>

---

##### `PutSupportContacts` <a name="PutSupportContacts" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.putSupportContacts"></a>

```go
func PutSupportContacts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.putSupportContacts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.putTimeouts"></a>

```go
func PutTimeouts(value MarketplacePublicationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeouts">MarketplacePublicationTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.resetId"></a>

```go
func ResetId()
```

##### `ResetLongDescription` <a name="ResetLongDescription" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.resetLongDescription"></a>

```go
func ResetLongDescription()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MarketplacePublication resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/marketplacepublication"

marketplacepublication.MarketplacePublication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/marketplacepublication"

marketplacepublication.MarketplacePublication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/marketplacepublication"

marketplacepublication.MarketplacePublication_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/marketplacepublication"

marketplacepublication.MarketplacePublication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MarketplacePublication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MarketplacePublication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MarketplacePublication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MarketplacePublication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.icon">Icon</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList">MarketplacePublicationIconList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.packageDetails">PackageDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference">MarketplacePublicationPackageDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.packageType">PackageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.supportContacts">SupportContacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList">MarketplacePublicationSupportContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.supportedOperatingSystems">SupportedOperatingSystems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList">MarketplacePublicationSupportedOperatingSystemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference">MarketplacePublicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.isAgreementAcknowledgedInput">IsAgreementAcknowledgedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.listingTypeInput">ListingTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.longDescriptionInput">LongDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.packageDetailsInput">PackageDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails">MarketplacePublicationPackageDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.shortDescriptionInput">ShortDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.supportContactsInput">SupportContactsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.isAgreementAcknowledged">IsAgreementAcknowledged</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.listingType">ListingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.longDescription">LongDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.shortDescription">ShortDescription</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Icon`<sup>Required</sup> <a name="Icon" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.icon"></a>

```go
func Icon() MarketplacePublicationIconList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList">MarketplacePublicationIconList</a>

---

##### `PackageDetails`<sup>Required</sup> <a name="PackageDetails" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.packageDetails"></a>

```go
func PackageDetails() MarketplacePublicationPackageDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference">MarketplacePublicationPackageDetailsOutputReference</a>

---

##### `PackageType`<sup>Required</sup> <a name="PackageType" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.packageType"></a>

```go
func PackageType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SupportContacts`<sup>Required</sup> <a name="SupportContacts" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.supportContacts"></a>

```go
func SupportContacts() MarketplacePublicationSupportContactsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList">MarketplacePublicationSupportContactsList</a>

---

##### `SupportedOperatingSystems`<sup>Required</sup> <a name="SupportedOperatingSystems" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.supportedOperatingSystems"></a>

```go
func SupportedOperatingSystems() MarketplacePublicationSupportedOperatingSystemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList">MarketplacePublicationSupportedOperatingSystemsList</a>

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.timeouts"></a>

```go
func Timeouts() MarketplacePublicationTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference">MarketplacePublicationTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsAgreementAcknowledgedInput`<sup>Optional</sup> <a name="IsAgreementAcknowledgedInput" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.isAgreementAcknowledgedInput"></a>

```go
func IsAgreementAcknowledgedInput() interface{}
```

- *Type:* interface{}

---

##### `ListingTypeInput`<sup>Optional</sup> <a name="ListingTypeInput" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.listingTypeInput"></a>

```go
func ListingTypeInput() *string
```

- *Type:* *string

---

##### `LongDescriptionInput`<sup>Optional</sup> <a name="LongDescriptionInput" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.longDescriptionInput"></a>

```go
func LongDescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PackageDetailsInput`<sup>Optional</sup> <a name="PackageDetailsInput" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.packageDetailsInput"></a>

```go
func PackageDetailsInput() MarketplacePublicationPackageDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails">MarketplacePublicationPackageDetails</a>

---

##### `ShortDescriptionInput`<sup>Optional</sup> <a name="ShortDescriptionInput" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.shortDescriptionInput"></a>

```go
func ShortDescriptionInput() *string
```

- *Type:* *string

---

##### `SupportContactsInput`<sup>Optional</sup> <a name="SupportContactsInput" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.supportContactsInput"></a>

```go
func SupportContactsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsAgreementAcknowledged`<sup>Required</sup> <a name="IsAgreementAcknowledged" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.isAgreementAcknowledged"></a>

```go
func IsAgreementAcknowledged() interface{}
```

- *Type:* interface{}

---

##### `ListingType`<sup>Required</sup> <a name="ListingType" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.listingType"></a>

```go
func ListingType() *string
```

- *Type:* *string

---

##### `LongDescription`<sup>Required</sup> <a name="LongDescription" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.longDescription"></a>

```go
func LongDescription() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ShortDescription`<sup>Required</sup> <a name="ShortDescription" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.shortDescription"></a>

```go
func ShortDescription() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MarketplacePublicationConfig <a name="MarketplacePublicationConfig" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/marketplacepublication"

&marketplacepublication.MarketplacePublicationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	IsAgreementAcknowledged: interface{},
	ListingType: *string,
	Name: *string,
	PackageDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.marketplacePublication.MarketplacePublicationPackageDetails,
	ShortDescription: *string,
	SupportContacts: interface{},
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
	Id: *string,
	LongDescription: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.marketplacePublication.MarketplacePublicationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#compartment_id MarketplacePublication#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.isAgreementAcknowledged">IsAgreementAcknowledged</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#is_agreement_acknowledged MarketplacePublication#is_agreement_acknowledged}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.listingType">ListingType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#listing_type MarketplacePublication#listing_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#name MarketplacePublication#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.packageDetails">PackageDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails">MarketplacePublicationPackageDetails</a></code> | package_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.shortDescription">ShortDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#short_description MarketplacePublication#short_description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.supportContacts">SupportContacts</a></code> | <code>interface{}</code> | support_contacts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#defined_tags MarketplacePublication#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#freeform_tags MarketplacePublication#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#id MarketplacePublication#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.longDescription">LongDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#long_description MarketplacePublication#long_description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeouts">MarketplacePublicationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#compartment_id MarketplacePublication#compartment_id}.

---

##### `IsAgreementAcknowledged`<sup>Required</sup> <a name="IsAgreementAcknowledged" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.isAgreementAcknowledged"></a>

```go
IsAgreementAcknowledged interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#is_agreement_acknowledged MarketplacePublication#is_agreement_acknowledged}.

---

##### `ListingType`<sup>Required</sup> <a name="ListingType" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.listingType"></a>

```go
ListingType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#listing_type MarketplacePublication#listing_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#name MarketplacePublication#name}.

---

##### `PackageDetails`<sup>Required</sup> <a name="PackageDetails" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.packageDetails"></a>

```go
PackageDetails MarketplacePublicationPackageDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails">MarketplacePublicationPackageDetails</a>

package_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#package_details MarketplacePublication#package_details}

---

##### `ShortDescription`<sup>Required</sup> <a name="ShortDescription" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.shortDescription"></a>

```go
ShortDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#short_description MarketplacePublication#short_description}.

---

##### `SupportContacts`<sup>Required</sup> <a name="SupportContacts" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.supportContacts"></a>

```go
SupportContacts interface{}
```

- *Type:* interface{}

support_contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#support_contacts MarketplacePublication#support_contacts}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#defined_tags MarketplacePublication#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#freeform_tags MarketplacePublication#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#id MarketplacePublication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LongDescription`<sup>Optional</sup> <a name="LongDescription" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.longDescription"></a>

```go
LongDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#long_description MarketplacePublication#long_description}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationConfig.property.timeouts"></a>

```go
Timeouts MarketplacePublicationTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeouts">MarketplacePublicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#timeouts MarketplacePublication#timeouts}

---

### MarketplacePublicationIcon <a name="MarketplacePublicationIcon" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIcon"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIcon.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/marketplacepublication"

&marketplacepublication.MarketplacePublicationIcon {

}
```


### MarketplacePublicationPackageDetails <a name="MarketplacePublicationPackageDetails" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/marketplacepublication"

&marketplacepublication.MarketplacePublicationPackageDetails {
	Eula: interface{},
	OperatingSystem: github.com/rhizo-co/cdktf-provider-oci-go/oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystem,
	PackageType: *string,
	PackageVersion: *string,
	ImageId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails.property.eula">Eula</a></code> | <code>interface{}</code> | eula block. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails.property.operatingSystem">OperatingSystem</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystem">MarketplacePublicationPackageDetailsOperatingSystem</a></code> | operating_system block. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails.property.packageType">PackageType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#package_type MarketplacePublication#package_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails.property.packageVersion">PackageVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#package_version MarketplacePublication#package_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails.property.imageId">ImageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#image_id MarketplacePublication#image_id}. |

---

##### `Eula`<sup>Required</sup> <a name="Eula" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails.property.eula"></a>

```go
Eula interface{}
```

- *Type:* interface{}

eula block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#eula MarketplacePublication#eula}

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails.property.operatingSystem"></a>

```go
OperatingSystem MarketplacePublicationPackageDetailsOperatingSystem
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystem">MarketplacePublicationPackageDetailsOperatingSystem</a>

operating_system block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#operating_system MarketplacePublication#operating_system}

---

##### `PackageType`<sup>Required</sup> <a name="PackageType" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails.property.packageType"></a>

```go
PackageType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#package_type MarketplacePublication#package_type}.

---

##### `PackageVersion`<sup>Required</sup> <a name="PackageVersion" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails.property.packageVersion"></a>

```go
PackageVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#package_version MarketplacePublication#package_version}.

---

##### `ImageId`<sup>Optional</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails.property.imageId"></a>

```go
ImageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#image_id MarketplacePublication#image_id}.

---

### MarketplacePublicationPackageDetailsEula <a name="MarketplacePublicationPackageDetailsEula" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEula"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEula.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/marketplacepublication"

&marketplacepublication.MarketplacePublicationPackageDetailsEula {
	EulaType: *string,
	LicenseText: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEula.property.eulaType">EulaType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#eula_type MarketplacePublication#eula_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEula.property.licenseText">LicenseText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#license_text MarketplacePublication#license_text}. |

---

##### `EulaType`<sup>Required</sup> <a name="EulaType" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEula.property.eulaType"></a>

```go
EulaType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#eula_type MarketplacePublication#eula_type}.

---

##### `LicenseText`<sup>Optional</sup> <a name="LicenseText" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEula.property.licenseText"></a>

```go
LicenseText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#license_text MarketplacePublication#license_text}.

---

### MarketplacePublicationPackageDetailsOperatingSystem <a name="MarketplacePublicationPackageDetailsOperatingSystem" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystem"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystem.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/marketplacepublication"

&marketplacepublication.MarketplacePublicationPackageDetailsOperatingSystem {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystem.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#name MarketplacePublication#name}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystem.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#name MarketplacePublication#name}.

---

### MarketplacePublicationSupportContacts <a name="MarketplacePublicationSupportContacts" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContacts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/marketplacepublication"

&marketplacepublication.MarketplacePublicationSupportContacts {
	Email: *string,
	Name: *string,
	Phone: *string,
	Subject: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContacts.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#email MarketplacePublication#email}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContacts.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#name MarketplacePublication#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContacts.property.phone">Phone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#phone MarketplacePublication#phone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContacts.property.subject">Subject</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#subject MarketplacePublication#subject}. |

---

##### `Email`<sup>Optional</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContacts.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#email MarketplacePublication#email}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContacts.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#name MarketplacePublication#name}.

---

##### `Phone`<sup>Optional</sup> <a name="Phone" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContacts.property.phone"></a>

```go
Phone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#phone MarketplacePublication#phone}.

---

##### `Subject`<sup>Optional</sup> <a name="Subject" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContacts.property.subject"></a>

```go
Subject *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#subject MarketplacePublication#subject}.

---

### MarketplacePublicationSupportedOperatingSystems <a name="MarketplacePublicationSupportedOperatingSystems" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/marketplacepublication"

&marketplacepublication.MarketplacePublicationSupportedOperatingSystems {

}
```


### MarketplacePublicationTimeouts <a name="MarketplacePublicationTimeouts" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/marketplacepublication"

&marketplacepublication.MarketplacePublicationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#create MarketplacePublication#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#delete MarketplacePublication#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#update MarketplacePublication#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#create MarketplacePublication#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#delete MarketplacePublication#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_publication#update MarketplacePublication#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MarketplacePublicationIconList <a name="MarketplacePublicationIconList" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/marketplacepublication"

marketplacepublication.NewMarketplacePublicationIconList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MarketplacePublicationIconList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.get"></a>

```go
func Get(index *f64) MarketplacePublicationIconOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MarketplacePublicationIconOutputReference <a name="MarketplacePublicationIconOutputReference" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/marketplacepublication"

marketplacepublication.NewMarketplacePublicationIconOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MarketplacePublicationIconOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.property.contentUrl">ContentUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.property.fileExtension">FileExtension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.property.mimeType">MimeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIcon">MarketplacePublicationIcon</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentUrl`<sup>Required</sup> <a name="ContentUrl" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.property.contentUrl"></a>

```go
func ContentUrl() *string
```

- *Type:* *string

---

##### `FileExtension`<sup>Required</sup> <a name="FileExtension" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.property.fileExtension"></a>

```go
func FileExtension() *string
```

- *Type:* *string

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.property.mimeType"></a>

```go
func MimeType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIconOutputReference.property.internalValue"></a>

```go
func InternalValue() MarketplacePublicationIcon
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationIcon">MarketplacePublicationIcon</a>

---


### MarketplacePublicationPackageDetailsEulaList <a name="MarketplacePublicationPackageDetailsEulaList" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/marketplacepublication"

marketplacepublication.NewMarketplacePublicationPackageDetailsEulaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MarketplacePublicationPackageDetailsEulaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.get"></a>

```go
func Get(index *f64) MarketplacePublicationPackageDetailsEulaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MarketplacePublicationPackageDetailsEulaOutputReference <a name="MarketplacePublicationPackageDetailsEulaOutputReference" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/marketplacepublication"

marketplacepublication.NewMarketplacePublicationPackageDetailsEulaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MarketplacePublicationPackageDetailsEulaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.resetLicenseText">ResetLicenseText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLicenseText` <a name="ResetLicenseText" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.resetLicenseText"></a>

```go
func ResetLicenseText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.property.eulaTypeInput">EulaTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.property.licenseTextInput">LicenseTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.property.eulaType">EulaType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.property.licenseText">LicenseText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EulaTypeInput`<sup>Optional</sup> <a name="EulaTypeInput" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.property.eulaTypeInput"></a>

```go
func EulaTypeInput() *string
```

- *Type:* *string

---

##### `LicenseTextInput`<sup>Optional</sup> <a name="LicenseTextInput" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.property.licenseTextInput"></a>

```go
func LicenseTextInput() *string
```

- *Type:* *string

---

##### `EulaType`<sup>Required</sup> <a name="EulaType" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.property.eulaType"></a>

```go
func EulaType() *string
```

- *Type:* *string

---

##### `LicenseText`<sup>Required</sup> <a name="LicenseText" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.property.licenseText"></a>

```go
func LicenseText() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MarketplacePublicationPackageDetailsOperatingSystemOutputReference <a name="MarketplacePublicationPackageDetailsOperatingSystemOutputReference" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/marketplacepublication"

marketplacepublication.NewMarketplacePublicationPackageDetailsOperatingSystemOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MarketplacePublicationPackageDetailsOperatingSystemOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystem">MarketplacePublicationPackageDetailsOperatingSystem</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference.property.internalValue"></a>

```go
func InternalValue() MarketplacePublicationPackageDetailsOperatingSystem
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystem">MarketplacePublicationPackageDetailsOperatingSystem</a>

---


### MarketplacePublicationPackageDetailsOutputReference <a name="MarketplacePublicationPackageDetailsOutputReference" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/marketplacepublication"

marketplacepublication.NewMarketplacePublicationPackageDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MarketplacePublicationPackageDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.putEula">PutEula</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.putOperatingSystem">PutOperatingSystem</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.resetImageId">ResetImageId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEula` <a name="PutEula" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.putEula"></a>

```go
func PutEula(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.putEula.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOperatingSystem` <a name="PutOperatingSystem" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.putOperatingSystem"></a>

```go
func PutOperatingSystem(value MarketplacePublicationPackageDetailsOperatingSystem)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.putOperatingSystem.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystem">MarketplacePublicationPackageDetailsOperatingSystem</a>

---

##### `ResetImageId` <a name="ResetImageId" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.resetImageId"></a>

```go
func ResetImageId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.eula">Eula</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList">MarketplacePublicationPackageDetailsEulaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.operatingSystem">OperatingSystem</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference">MarketplacePublicationPackageDetailsOperatingSystemOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.eulaInput">EulaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.imageIdInput">ImageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.operatingSystemInput">OperatingSystemInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystem">MarketplacePublicationPackageDetailsOperatingSystem</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.packageTypeInput">PackageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.packageVersionInput">PackageVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.packageType">PackageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.packageVersion">PackageVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails">MarketplacePublicationPackageDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Eula`<sup>Required</sup> <a name="Eula" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.eula"></a>

```go
func Eula() MarketplacePublicationPackageDetailsEulaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsEulaList">MarketplacePublicationPackageDetailsEulaList</a>

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.operatingSystem"></a>

```go
func OperatingSystem() MarketplacePublicationPackageDetailsOperatingSystemOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystemOutputReference">MarketplacePublicationPackageDetailsOperatingSystemOutputReference</a>

---

##### `EulaInput`<sup>Optional</sup> <a name="EulaInput" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.eulaInput"></a>

```go
func EulaInput() interface{}
```

- *Type:* interface{}

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.imageIdInput"></a>

```go
func ImageIdInput() *string
```

- *Type:* *string

---

##### `OperatingSystemInput`<sup>Optional</sup> <a name="OperatingSystemInput" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.operatingSystemInput"></a>

```go
func OperatingSystemInput() MarketplacePublicationPackageDetailsOperatingSystem
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOperatingSystem">MarketplacePublicationPackageDetailsOperatingSystem</a>

---

##### `PackageTypeInput`<sup>Optional</sup> <a name="PackageTypeInput" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.packageTypeInput"></a>

```go
func PackageTypeInput() *string
```

- *Type:* *string

---

##### `PackageVersionInput`<sup>Optional</sup> <a name="PackageVersionInput" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.packageVersionInput"></a>

```go
func PackageVersionInput() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `PackageType`<sup>Required</sup> <a name="PackageType" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.packageType"></a>

```go
func PackageType() *string
```

- *Type:* *string

---

##### `PackageVersion`<sup>Required</sup> <a name="PackageVersion" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.packageVersion"></a>

```go
func PackageVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() MarketplacePublicationPackageDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationPackageDetails">MarketplacePublicationPackageDetails</a>

---


### MarketplacePublicationSupportContactsList <a name="MarketplacePublicationSupportContactsList" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/marketplacepublication"

marketplacepublication.NewMarketplacePublicationSupportContactsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MarketplacePublicationSupportContactsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.get"></a>

```go
func Get(index *f64) MarketplacePublicationSupportContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MarketplacePublicationSupportContactsOutputReference <a name="MarketplacePublicationSupportContactsOutputReference" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/marketplacepublication"

marketplacepublication.NewMarketplacePublicationSupportContactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MarketplacePublicationSupportContactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.resetPhone">ResetPhone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.resetSubject">ResetSubject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmail` <a name="ResetEmail" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetPhone` <a name="ResetPhone" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.resetPhone"></a>

```go
func ResetPhone()
```

##### `ResetSubject` <a name="ResetSubject" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.resetSubject"></a>

```go
func ResetSubject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.phoneInput">PhoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.subjectInput">SubjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.phone">Phone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.subject">Subject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PhoneInput`<sup>Optional</sup> <a name="PhoneInput" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.phoneInput"></a>

```go
func PhoneInput() *string
```

- *Type:* *string

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.subjectInput"></a>

```go
func SubjectInput() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Phone`<sup>Required</sup> <a name="Phone" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.phone"></a>

```go
func Phone() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.subject"></a>

```go
func Subject() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportContactsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MarketplacePublicationSupportedOperatingSystemsList <a name="MarketplacePublicationSupportedOperatingSystemsList" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/marketplacepublication"

marketplacepublication.NewMarketplacePublicationSupportedOperatingSystemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MarketplacePublicationSupportedOperatingSystemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.get"></a>

```go
func Get(index *f64) MarketplacePublicationSupportedOperatingSystemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### MarketplacePublicationSupportedOperatingSystemsOutputReference <a name="MarketplacePublicationSupportedOperatingSystemsOutputReference" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/marketplacepublication"

marketplacepublication.NewMarketplacePublicationSupportedOperatingSystemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MarketplacePublicationSupportedOperatingSystemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystems">MarketplacePublicationSupportedOperatingSystems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystemsOutputReference.property.internalValue"></a>

```go
func InternalValue() MarketplacePublicationSupportedOperatingSystems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationSupportedOperatingSystems">MarketplacePublicationSupportedOperatingSystems</a>

---


### MarketplacePublicationTimeoutsOutputReference <a name="MarketplacePublicationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/marketplacepublication"

marketplacepublication.NewMarketplacePublicationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MarketplacePublicationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.marketplacePublication.MarketplacePublicationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



