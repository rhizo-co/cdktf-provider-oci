# `serviceCatalogPrivateApplication` Submodule <a name="`serviceCatalogPrivateApplication` Submodule" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceCatalogPrivateApplication <a name="ServiceCatalogPrivateApplication" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application oci_service_catalog_private_application}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicecatalogprivateapplication"

servicecatalogprivateapplication.NewServiceCatalogPrivateApplication(scope Construct, id *string, config ServiceCatalogPrivateApplicationConfig) ServiceCatalogPrivateApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig">ServiceCatalogPrivateApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig">ServiceCatalogPrivateApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.putPackageDetails">PutPackageDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetLogoFileBase64Encoded">ResetLogoFileBase64Encoded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetLongDescription">ResetLongDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPackageDetails` <a name="PutPackageDetails" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.putPackageDetails"></a>

```go
func PutPackageDetails(value ServiceCatalogPrivateApplicationPackageDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.putPackageDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails">ServiceCatalogPrivateApplicationPackageDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.putTimeouts"></a>

```go
func PutTimeouts(value ServiceCatalogPrivateApplicationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts">ServiceCatalogPrivateApplicationTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetId"></a>

```go
func ResetId()
```

##### `ResetLogoFileBase64Encoded` <a name="ResetLogoFileBase64Encoded" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetLogoFileBase64Encoded"></a>

```go
func ResetLogoFileBase64Encoded()
```

##### `ResetLongDescription` <a name="ResetLongDescription" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetLongDescription"></a>

```go
func ResetLongDescription()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceCatalogPrivateApplication resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicecatalogprivateapplication"

servicecatalogprivateapplication.ServiceCatalogPrivateApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicecatalogprivateapplication"

servicecatalogprivateapplication.ServiceCatalogPrivateApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicecatalogprivateapplication"

servicecatalogprivateapplication.ServiceCatalogPrivateApplication_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicecatalogprivateapplication"

servicecatalogprivateapplication.ServiceCatalogPrivateApplication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ServiceCatalogPrivateApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ServiceCatalogPrivateApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ServiceCatalogPrivateApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ServiceCatalogPrivateApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.logo">Logo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList">ServiceCatalogPrivateApplicationLogoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.packageDetails">PackageDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference">ServiceCatalogPrivateApplicationPackageDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.packageType">PackageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference">ServiceCatalogPrivateApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.logoFileBase64EncodedInput">LogoFileBase64EncodedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.longDescriptionInput">LongDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.packageDetailsInput">PackageDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails">ServiceCatalogPrivateApplicationPackageDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.shortDescriptionInput">ShortDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.logoFileBase64Encoded">LogoFileBase64Encoded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.longDescription">LongDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.shortDescription">ShortDescription</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Logo`<sup>Required</sup> <a name="Logo" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.logo"></a>

```go
func Logo() ServiceCatalogPrivateApplicationLogoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList">ServiceCatalogPrivateApplicationLogoList</a>

---

##### `PackageDetails`<sup>Required</sup> <a name="PackageDetails" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.packageDetails"></a>

```go
func PackageDetails() ServiceCatalogPrivateApplicationPackageDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference">ServiceCatalogPrivateApplicationPackageDetailsOutputReference</a>

---

##### `PackageType`<sup>Required</sup> <a name="PackageType" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.packageType"></a>

```go
func PackageType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeouts"></a>

```go
func Timeouts() ServiceCatalogPrivateApplicationTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference">ServiceCatalogPrivateApplicationTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogoFileBase64EncodedInput`<sup>Optional</sup> <a name="LogoFileBase64EncodedInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.logoFileBase64EncodedInput"></a>

```go
func LogoFileBase64EncodedInput() *string
```

- *Type:* *string

---

##### `LongDescriptionInput`<sup>Optional</sup> <a name="LongDescriptionInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.longDescriptionInput"></a>

```go
func LongDescriptionInput() *string
```

- *Type:* *string

---

##### `PackageDetailsInput`<sup>Optional</sup> <a name="PackageDetailsInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.packageDetailsInput"></a>

```go
func PackageDetailsInput() ServiceCatalogPrivateApplicationPackageDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails">ServiceCatalogPrivateApplicationPackageDetails</a>

---

##### `ShortDescriptionInput`<sup>Optional</sup> <a name="ShortDescriptionInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.shortDescriptionInput"></a>

```go
func ShortDescriptionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogoFileBase64Encoded`<sup>Required</sup> <a name="LogoFileBase64Encoded" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.logoFileBase64Encoded"></a>

```go
func LogoFileBase64Encoded() *string
```

- *Type:* *string

---

##### `LongDescription`<sup>Required</sup> <a name="LongDescription" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.longDescription"></a>

```go
func LongDescription() *string
```

- *Type:* *string

---

##### `ShortDescription`<sup>Required</sup> <a name="ShortDescription" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.shortDescription"></a>

```go
func ShortDescription() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceCatalogPrivateApplicationConfig <a name="ServiceCatalogPrivateApplicationConfig" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicecatalogprivateapplication"

&servicecatalogprivateapplication.ServiceCatalogPrivateApplicationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	PackageDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails,
	ShortDescription: *string,
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
	Id: *string,
	LogoFileBase64Encoded: *string,
	LongDescription: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#compartment_id ServiceCatalogPrivateApplication#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#display_name ServiceCatalogPrivateApplication#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.packageDetails">PackageDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails">ServiceCatalogPrivateApplicationPackageDetails</a></code> | package_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.shortDescription">ShortDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#short_description ServiceCatalogPrivateApplication#short_description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#defined_tags ServiceCatalogPrivateApplication#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#freeform_tags ServiceCatalogPrivateApplication#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#id ServiceCatalogPrivateApplication#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.logoFileBase64Encoded">LogoFileBase64Encoded</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#logo_file_base64encoded ServiceCatalogPrivateApplication#logo_file_base64encoded}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.longDescription">LongDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#long_description ServiceCatalogPrivateApplication#long_description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts">ServiceCatalogPrivateApplicationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#compartment_id ServiceCatalogPrivateApplication#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#display_name ServiceCatalogPrivateApplication#display_name}.

---

##### `PackageDetails`<sup>Required</sup> <a name="PackageDetails" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.packageDetails"></a>

```go
PackageDetails ServiceCatalogPrivateApplicationPackageDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails">ServiceCatalogPrivateApplicationPackageDetails</a>

package_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#package_details ServiceCatalogPrivateApplication#package_details}

---

##### `ShortDescription`<sup>Required</sup> <a name="ShortDescription" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.shortDescription"></a>

```go
ShortDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#short_description ServiceCatalogPrivateApplication#short_description}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#defined_tags ServiceCatalogPrivateApplication#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#freeform_tags ServiceCatalogPrivateApplication#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#id ServiceCatalogPrivateApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LogoFileBase64Encoded`<sup>Optional</sup> <a name="LogoFileBase64Encoded" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.logoFileBase64Encoded"></a>

```go
LogoFileBase64Encoded *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#logo_file_base64encoded ServiceCatalogPrivateApplication#logo_file_base64encoded}.

---

##### `LongDescription`<sup>Optional</sup> <a name="LongDescription" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.longDescription"></a>

```go
LongDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#long_description ServiceCatalogPrivateApplication#long_description}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationConfig.property.timeouts"></a>

```go
Timeouts ServiceCatalogPrivateApplicationTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts">ServiceCatalogPrivateApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#timeouts ServiceCatalogPrivateApplication#timeouts}

---

### ServiceCatalogPrivateApplicationLogo <a name="ServiceCatalogPrivateApplicationLogo" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicecatalogprivateapplication"

&servicecatalogprivateapplication.ServiceCatalogPrivateApplicationLogo {

}
```


### ServiceCatalogPrivateApplicationPackageDetails <a name="ServiceCatalogPrivateApplicationPackageDetails" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicecatalogprivateapplication"

&servicecatalogprivateapplication.ServiceCatalogPrivateApplicationPackageDetails {
	PackageType: *string,
	Version: *string,
	ZipFileBase64Encoded: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails.property.packageType">PackageType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#package_type ServiceCatalogPrivateApplication#package_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#version ServiceCatalogPrivateApplication#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails.property.zipFileBase64Encoded">ZipFileBase64Encoded</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#zip_file_base64encoded ServiceCatalogPrivateApplication#zip_file_base64encoded}. |

---

##### `PackageType`<sup>Required</sup> <a name="PackageType" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails.property.packageType"></a>

```go
PackageType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#package_type ServiceCatalogPrivateApplication#package_type}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#version ServiceCatalogPrivateApplication#version}.

---

##### `ZipFileBase64Encoded`<sup>Optional</sup> <a name="ZipFileBase64Encoded" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails.property.zipFileBase64Encoded"></a>

```go
ZipFileBase64Encoded *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#zip_file_base64encoded ServiceCatalogPrivateApplication#zip_file_base64encoded}.

---

### ServiceCatalogPrivateApplicationTimeouts <a name="ServiceCatalogPrivateApplicationTimeouts" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicecatalogprivateapplication"

&servicecatalogprivateapplication.ServiceCatalogPrivateApplicationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#create ServiceCatalogPrivateApplication#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#delete ServiceCatalogPrivateApplication#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#update ServiceCatalogPrivateApplication#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#create ServiceCatalogPrivateApplication#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#delete ServiceCatalogPrivateApplication#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_catalog_private_application#update ServiceCatalogPrivateApplication#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceCatalogPrivateApplicationLogoList <a name="ServiceCatalogPrivateApplicationLogoList" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicecatalogprivateapplication"

servicecatalogprivateapplication.NewServiceCatalogPrivateApplicationLogoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServiceCatalogPrivateApplicationLogoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.get"></a>

```go
func Get(index *f64) ServiceCatalogPrivateApplicationLogoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ServiceCatalogPrivateApplicationLogoOutputReference <a name="ServiceCatalogPrivateApplicationLogoOutputReference" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicecatalogprivateapplication"

servicecatalogprivateapplication.NewServiceCatalogPrivateApplicationLogoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServiceCatalogPrivateApplicationLogoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.contentUrl">ContentUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.mimeType">MimeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogo">ServiceCatalogPrivateApplicationLogo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentUrl`<sup>Required</sup> <a name="ContentUrl" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.contentUrl"></a>

```go
func ContentUrl() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `MimeType`<sup>Required</sup> <a name="MimeType" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.mimeType"></a>

```go
func MimeType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogoOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceCatalogPrivateApplicationLogo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationLogo">ServiceCatalogPrivateApplicationLogo</a>

---


### ServiceCatalogPrivateApplicationPackageDetailsOutputReference <a name="ServiceCatalogPrivateApplicationPackageDetailsOutputReference" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicecatalogprivateapplication"

servicecatalogprivateapplication.NewServiceCatalogPrivateApplicationPackageDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceCatalogPrivateApplicationPackageDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.resetZipFileBase64Encoded">ResetZipFileBase64Encoded</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetZipFileBase64Encoded` <a name="ResetZipFileBase64Encoded" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.resetZipFileBase64Encoded"></a>

```go
func ResetZipFileBase64Encoded()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.packageTypeInput">PackageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.zipFileBase64EncodedInput">ZipFileBase64EncodedInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.packageType">PackageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.zipFileBase64Encoded">ZipFileBase64Encoded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails">ServiceCatalogPrivateApplicationPackageDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PackageTypeInput`<sup>Optional</sup> <a name="PackageTypeInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.packageTypeInput"></a>

```go
func PackageTypeInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `ZipFileBase64EncodedInput`<sup>Optional</sup> <a name="ZipFileBase64EncodedInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.zipFileBase64EncodedInput"></a>

```go
func ZipFileBase64EncodedInput() *string
```

- *Type:* *string

---

##### `PackageType`<sup>Required</sup> <a name="PackageType" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.packageType"></a>

```go
func PackageType() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `ZipFileBase64Encoded`<sup>Required</sup> <a name="ZipFileBase64Encoded" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.zipFileBase64Encoded"></a>

```go
func ZipFileBase64Encoded() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() ServiceCatalogPrivateApplicationPackageDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationPackageDetails">ServiceCatalogPrivateApplicationPackageDetails</a>

---


### ServiceCatalogPrivateApplicationTimeoutsOutputReference <a name="ServiceCatalogPrivateApplicationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/servicecatalogprivateapplication"

servicecatalogprivateapplication.NewServiceCatalogPrivateApplicationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServiceCatalogPrivateApplicationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.serviceCatalogPrivateApplication.ServiceCatalogPrivateApplicationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



