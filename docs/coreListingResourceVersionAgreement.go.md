# `coreListingResourceVersionAgreement` Submodule <a name="`coreListingResourceVersionAgreement` Submodule" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreListingResourceVersionAgreement <a name="CoreListingResourceVersionAgreement" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_listing_resource_version_agreement oci_core_listing_resource_version_agreement}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corelistingresourceversionagreement"

corelistingresourceversionagreement.NewCoreListingResourceVersionAgreement(scope Construct, id *string, config CoreListingResourceVersionAgreementConfig) CoreListingResourceVersionAgreement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig">CoreListingResourceVersionAgreementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig">CoreListingResourceVersionAgreementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.putTimeouts"></a>

```go
func PutTimeouts(value CoreListingResourceVersionAgreementTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeouts">CoreListingResourceVersionAgreementTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CoreListingResourceVersionAgreement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corelistingresourceversionagreement"

corelistingresourceversionagreement.CoreListingResourceVersionAgreement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corelistingresourceversionagreement"

corelistingresourceversionagreement.CoreListingResourceVersionAgreement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corelistingresourceversionagreement"

corelistingresourceversionagreement.CoreListingResourceVersionAgreement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corelistingresourceversionagreement"

corelistingresourceversionagreement.CoreListingResourceVersionAgreement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CoreListingResourceVersionAgreement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CoreListingResourceVersionAgreement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CoreListingResourceVersionAgreement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_listing_resource_version_agreement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CoreListingResourceVersionAgreement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.eulaLink">EulaLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.oracleTermsOfUseLink">OracleTermsOfUseLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.signature">Signature</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference">CoreListingResourceVersionAgreementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.timeRetrieved">TimeRetrieved</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.listingIdInput">ListingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.listingResourceVersionInput">ListingResourceVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.listingId">ListingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.listingResourceVersion">ListingResourceVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EulaLink`<sup>Required</sup> <a name="EulaLink" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.eulaLink"></a>

```go
func EulaLink() *string
```

- *Type:* *string

---

##### `OracleTermsOfUseLink`<sup>Required</sup> <a name="OracleTermsOfUseLink" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.oracleTermsOfUseLink"></a>

```go
func OracleTermsOfUseLink() *string
```

- *Type:* *string

---

##### `Signature`<sup>Required</sup> <a name="Signature" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.signature"></a>

```go
func Signature() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.timeouts"></a>

```go
func Timeouts() CoreListingResourceVersionAgreementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference">CoreListingResourceVersionAgreementTimeoutsOutputReference</a>

---

##### `TimeRetrieved`<sup>Required</sup> <a name="TimeRetrieved" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.timeRetrieved"></a>

```go
func TimeRetrieved() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ListingIdInput`<sup>Optional</sup> <a name="ListingIdInput" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.listingIdInput"></a>

```go
func ListingIdInput() *string
```

- *Type:* *string

---

##### `ListingResourceVersionInput`<sup>Optional</sup> <a name="ListingResourceVersionInput" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.listingResourceVersionInput"></a>

```go
func ListingResourceVersionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.listingId"></a>

```go
func ListingId() *string
```

- *Type:* *string

---

##### `ListingResourceVersion`<sup>Required</sup> <a name="ListingResourceVersion" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.listingResourceVersion"></a>

```go
func ListingResourceVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreListingResourceVersionAgreementConfig <a name="CoreListingResourceVersionAgreementConfig" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corelistingresourceversionagreement"

&corelistingresourceversionagreement.CoreListingResourceVersionAgreementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ListingId: *string,
	ListingResourceVersion: *string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.listingId">ListingId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_listing_resource_version_agreement#listing_id CoreListingResourceVersionAgreement#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.listingResourceVersion">ListingResourceVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_listing_resource_version_agreement#listing_resource_version CoreListingResourceVersionAgreement#listing_resource_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_listing_resource_version_agreement#id CoreListingResourceVersionAgreement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeouts">CoreListingResourceVersionAgreementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.listingId"></a>

```go
ListingId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_listing_resource_version_agreement#listing_id CoreListingResourceVersionAgreement#listing_id}.

---

##### `ListingResourceVersion`<sup>Required</sup> <a name="ListingResourceVersion" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.listingResourceVersion"></a>

```go
ListingResourceVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_listing_resource_version_agreement#listing_resource_version CoreListingResourceVersionAgreement#listing_resource_version}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_listing_resource_version_agreement#id CoreListingResourceVersionAgreement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementConfig.property.timeouts"></a>

```go
Timeouts CoreListingResourceVersionAgreementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeouts">CoreListingResourceVersionAgreementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_listing_resource_version_agreement#timeouts CoreListingResourceVersionAgreement#timeouts}

---

### CoreListingResourceVersionAgreementTimeouts <a name="CoreListingResourceVersionAgreementTimeouts" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corelistingresourceversionagreement"

&corelistingresourceversionagreement.CoreListingResourceVersionAgreementTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_listing_resource_version_agreement#create CoreListingResourceVersionAgreement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_listing_resource_version_agreement#delete CoreListingResourceVersionAgreement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_listing_resource_version_agreement#update CoreListingResourceVersionAgreement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_listing_resource_version_agreement#create CoreListingResourceVersionAgreement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_listing_resource_version_agreement#delete CoreListingResourceVersionAgreement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_listing_resource_version_agreement#update CoreListingResourceVersionAgreement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreListingResourceVersionAgreementTimeoutsOutputReference <a name="CoreListingResourceVersionAgreementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/corelistingresourceversionagreement"

corelistingresourceversionagreement.NewCoreListingResourceVersionAgreementTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreListingResourceVersionAgreementTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreListingResourceVersionAgreement.CoreListingResourceVersionAgreementTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


