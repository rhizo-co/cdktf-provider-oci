# `marketplaceListingPackageAgreement` Submodule <a name="`marketplaceListingPackageAgreement` Submodule" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MarketplaceListingPackageAgreement <a name="MarketplaceListingPackageAgreement" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement oci_marketplace_listing_package_agreement}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/marketplacelistingpackageagreement"

marketplacelistingpackageagreement.NewMarketplaceListingPackageAgreement(scope Construct, id *string, config MarketplaceListingPackageAgreementConfig) MarketplaceListingPackageAgreement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig">MarketplaceListingPackageAgreementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig">MarketplaceListingPackageAgreementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MarketplaceListingPackageAgreement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/marketplacelistingpackageagreement"

marketplacelistingpackageagreement.MarketplaceListingPackageAgreement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/marketplacelistingpackageagreement"

marketplacelistingpackageagreement.MarketplaceListingPackageAgreement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/marketplacelistingpackageagreement"

marketplacelistingpackageagreement.MarketplaceListingPackageAgreement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/marketplacelistingpackageagreement"

marketplacelistingpackageagreement.MarketplaceListingPackageAgreement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MarketplaceListingPackageAgreement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MarketplaceListingPackageAgreement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MarketplaceListingPackageAgreement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MarketplaceListingPackageAgreement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.author">Author</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.contentUrl">ContentUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.prompt">Prompt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.signature">Signature</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.agreementIdInput">AgreementIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.listingIdInput">ListingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.packageVersionInput">PackageVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.agreementId">AgreementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.listingId">ListingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.packageVersion">PackageVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Author`<sup>Required</sup> <a name="Author" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.author"></a>

```go
func Author() *string
```

- *Type:* *string

---

##### `ContentUrl`<sup>Required</sup> <a name="ContentUrl" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.contentUrl"></a>

```go
func ContentUrl() *string
```

- *Type:* *string

---

##### `Prompt`<sup>Required</sup> <a name="Prompt" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.prompt"></a>

```go
func Prompt() *string
```

- *Type:* *string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.signature"></a>

```go
func Signature() *string
```

- *Type:* *string

---

##### `AgreementIdInput`<sup>Optional</sup> <a name="AgreementIdInput" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.agreementIdInput"></a>

```go
func AgreementIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ListingIdInput`<sup>Optional</sup> <a name="ListingIdInput" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.listingIdInput"></a>

```go
func ListingIdInput() *string
```

- *Type:* *string

---

##### `PackageVersionInput`<sup>Optional</sup> <a name="PackageVersionInput" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.packageVersionInput"></a>

```go
func PackageVersionInput() *string
```

- *Type:* *string

---

##### `AgreementId`<sup>Required</sup> <a name="AgreementId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.agreementId"></a>

```go
func AgreementId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.listingId"></a>

```go
func ListingId() *string
```

- *Type:* *string

---

##### `PackageVersion`<sup>Required</sup> <a name="PackageVersion" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.packageVersion"></a>

```go
func PackageVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MarketplaceListingPackageAgreementConfig <a name="MarketplaceListingPackageAgreementConfig" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/marketplacelistingpackageagreement"

&marketplacelistingpackageagreement.MarketplaceListingPackageAgreementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AgreementId: *string,
	ListingId: *string,
	PackageVersion: *string,
	CompartmentId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.agreementId">AgreementId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#agreement_id MarketplaceListingPackageAgreement#agreement_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.listingId">ListingId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#listing_id MarketplaceListingPackageAgreement#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.packageVersion">PackageVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#package_version MarketplaceListingPackageAgreement#package_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#compartment_id MarketplaceListingPackageAgreement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#id MarketplaceListingPackageAgreement#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgreementId`<sup>Required</sup> <a name="AgreementId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.agreementId"></a>

```go
AgreementId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#agreement_id MarketplaceListingPackageAgreement#agreement_id}.

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.listingId"></a>

```go
ListingId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#listing_id MarketplaceListingPackageAgreement#listing_id}.

---

##### `PackageVersion`<sup>Required</sup> <a name="PackageVersion" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.packageVersion"></a>

```go
PackageVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#package_version MarketplaceListingPackageAgreement#package_version}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#compartment_id MarketplaceListingPackageAgreement#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.marketplaceListingPackageAgreement.MarketplaceListingPackageAgreementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/marketplace_listing_package_agreement#id MarketplaceListingPackageAgreement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



