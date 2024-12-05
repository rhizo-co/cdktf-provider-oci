# `licenseManagerProductLicense` Submodule <a name="`licenseManagerProductLicense` Submodule" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LicenseManagerProductLicense <a name="LicenseManagerProductLicense" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license oci_license_manager_product_license}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/licensemanagerproductlicense"

licensemanagerproductlicense.NewLicenseManagerProductLicense(scope Construct, id *string, config LicenseManagerProductLicenseConfig) LicenseManagerProductLicense
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig">LicenseManagerProductLicenseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig">LicenseManagerProductLicenseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.putImages">PutImages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.resetImages">ResetImages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.resetVendorName">ResetVendorName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutImages` <a name="PutImages" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.putImages"></a>

```go
func PutImages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.putImages.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.putTimeouts"></a>

```go
func PutTimeouts(value LicenseManagerProductLicenseTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeouts">LicenseManagerProductLicenseTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.resetId"></a>

```go
func ResetId()
```

##### `ResetImages` <a name="ResetImages" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.resetImages"></a>

```go
func ResetImages()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVendorName` <a name="ResetVendorName" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.resetVendorName"></a>

```go
func ResetVendorName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LicenseManagerProductLicense resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/licensemanagerproductlicense"

licensemanagerproductlicense.LicenseManagerProductLicense_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/licensemanagerproductlicense"

licensemanagerproductlicense.LicenseManagerProductLicense_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/licensemanagerproductlicense"

licensemanagerproductlicense.LicenseManagerProductLicense_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/licensemanagerproductlicense"

licensemanagerproductlicense.LicenseManagerProductLicense_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LicenseManagerProductLicense resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LicenseManagerProductLicense to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LicenseManagerProductLicense that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LicenseManagerProductLicense to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.activeLicenseRecordCount">ActiveLicenseRecordCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.images">Images</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList">LicenseManagerProductLicenseImagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.isOverSubscribed">IsOverSubscribed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.isUnlimited">IsUnlimited</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.statusDescription">StatusDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference">LicenseManagerProductLicenseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.totalActiveLicenseUnitCount">TotalActiveLicenseUnitCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.totalLicenseRecordCount">TotalLicenseRecordCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.totalLicenseUnitsConsumed">TotalLicenseUnitsConsumed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.imagesInput">ImagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.isVendorOracleInput">IsVendorOracleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.licenseUnitInput">LicenseUnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.vendorNameInput">VendorNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.isVendorOracle">IsVendorOracle</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.licenseUnit">LicenseUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.vendorName">VendorName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActiveLicenseRecordCount`<sup>Required</sup> <a name="ActiveLicenseRecordCount" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.activeLicenseRecordCount"></a>

```go
func ActiveLicenseRecordCount() *f64
```

- *Type:* *f64

---

##### `Images`<sup>Required</sup> <a name="Images" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.images"></a>

```go
func Images() LicenseManagerProductLicenseImagesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList">LicenseManagerProductLicenseImagesList</a>

---

##### `IsOverSubscribed`<sup>Required</sup> <a name="IsOverSubscribed" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.isOverSubscribed"></a>

```go
func IsOverSubscribed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsUnlimited`<sup>Required</sup> <a name="IsUnlimited" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.isUnlimited"></a>

```go
func IsUnlimited() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusDescription`<sup>Required</sup> <a name="StatusDescription" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.statusDescription"></a>

```go
func StatusDescription() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.timeouts"></a>

```go
func Timeouts() LicenseManagerProductLicenseTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference">LicenseManagerProductLicenseTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `TotalActiveLicenseUnitCount`<sup>Required</sup> <a name="TotalActiveLicenseUnitCount" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.totalActiveLicenseUnitCount"></a>

```go
func TotalActiveLicenseUnitCount() *f64
```

- *Type:* *f64

---

##### `TotalLicenseRecordCount`<sup>Required</sup> <a name="TotalLicenseRecordCount" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.totalLicenseRecordCount"></a>

```go
func TotalLicenseRecordCount() *f64
```

- *Type:* *f64

---

##### `TotalLicenseUnitsConsumed`<sup>Required</sup> <a name="TotalLicenseUnitsConsumed" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.totalLicenseUnitsConsumed"></a>

```go
func TotalLicenseUnitsConsumed() *f64
```

- *Type:* *f64

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImagesInput`<sup>Optional</sup> <a name="ImagesInput" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.imagesInput"></a>

```go
func ImagesInput() interface{}
```

- *Type:* interface{}

---

##### `IsVendorOracleInput`<sup>Optional</sup> <a name="IsVendorOracleInput" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.isVendorOracleInput"></a>

```go
func IsVendorOracleInput() interface{}
```

- *Type:* interface{}

---

##### `LicenseUnitInput`<sup>Optional</sup> <a name="LicenseUnitInput" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.licenseUnitInput"></a>

```go
func LicenseUnitInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VendorNameInput`<sup>Optional</sup> <a name="VendorNameInput" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.vendorNameInput"></a>

```go
func VendorNameInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsVendorOracle`<sup>Required</sup> <a name="IsVendorOracle" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.isVendorOracle"></a>

```go
func IsVendorOracle() interface{}
```

- *Type:* interface{}

---

##### `LicenseUnit`<sup>Required</sup> <a name="LicenseUnit" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.licenseUnit"></a>

```go
func LicenseUnit() *string
```

- *Type:* *string

---

##### `VendorName`<sup>Required</sup> <a name="VendorName" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.vendorName"></a>

```go
func VendorName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicense.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LicenseManagerProductLicenseConfig <a name="LicenseManagerProductLicenseConfig" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/licensemanagerproductlicense"

&licensemanagerproductlicense.LicenseManagerProductLicenseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	IsVendorOracle: interface{},
	LicenseUnit: *string,
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Images: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeouts,
	VendorName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#compartment_id LicenseManagerProductLicense#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#display_name LicenseManagerProductLicense#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.isVendorOracle">IsVendorOracle</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#is_vendor_oracle LicenseManagerProductLicense#is_vendor_oracle}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.licenseUnit">LicenseUnit</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#license_unit LicenseManagerProductLicense#license_unit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#defined_tags LicenseManagerProductLicense#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#freeform_tags LicenseManagerProductLicense#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#id LicenseManagerProductLicense#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.images">Images</a></code> | <code>interface{}</code> | images block. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeouts">LicenseManagerProductLicenseTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.vendorName">VendorName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#vendor_name LicenseManagerProductLicense#vendor_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#compartment_id LicenseManagerProductLicense#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#display_name LicenseManagerProductLicense#display_name}.

---

##### `IsVendorOracle`<sup>Required</sup> <a name="IsVendorOracle" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.isVendorOracle"></a>

```go
IsVendorOracle interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#is_vendor_oracle LicenseManagerProductLicense#is_vendor_oracle}.

---

##### `LicenseUnit`<sup>Required</sup> <a name="LicenseUnit" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.licenseUnit"></a>

```go
LicenseUnit *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#license_unit LicenseManagerProductLicense#license_unit}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#defined_tags LicenseManagerProductLicense#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#freeform_tags LicenseManagerProductLicense#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#id LicenseManagerProductLicense#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Images`<sup>Optional</sup> <a name="Images" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.images"></a>

```go
Images interface{}
```

- *Type:* interface{}

images block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#images LicenseManagerProductLicense#images}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.timeouts"></a>

```go
Timeouts LicenseManagerProductLicenseTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeouts">LicenseManagerProductLicenseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#timeouts LicenseManagerProductLicense#timeouts}

---

##### `VendorName`<sup>Optional</sup> <a name="VendorName" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseConfig.property.vendorName"></a>

```go
VendorName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#vendor_name LicenseManagerProductLicense#vendor_name}.

---

### LicenseManagerProductLicenseImages <a name="LicenseManagerProductLicenseImages" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImages.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/licensemanagerproductlicense"

&licensemanagerproductlicense.LicenseManagerProductLicenseImages {
	ListingId: *string,
	PackageVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImages.property.listingId">ListingId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#listing_id LicenseManagerProductLicense#listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImages.property.packageVersion">PackageVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#package_version LicenseManagerProductLicense#package_version}. |

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImages.property.listingId"></a>

```go
ListingId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#listing_id LicenseManagerProductLicense#listing_id}.

---

##### `PackageVersion`<sup>Required</sup> <a name="PackageVersion" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImages.property.packageVersion"></a>

```go
PackageVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#package_version LicenseManagerProductLicense#package_version}.

---

### LicenseManagerProductLicenseTimeouts <a name="LicenseManagerProductLicenseTimeouts" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/licensemanagerproductlicense"

&licensemanagerproductlicense.LicenseManagerProductLicenseTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#create LicenseManagerProductLicense#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#delete LicenseManagerProductLicense#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#update LicenseManagerProductLicense#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#create LicenseManagerProductLicense#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#delete LicenseManagerProductLicense#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/license_manager_product_license#update LicenseManagerProductLicense#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LicenseManagerProductLicenseImagesList <a name="LicenseManagerProductLicenseImagesList" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/licensemanagerproductlicense"

licensemanagerproductlicense.NewLicenseManagerProductLicenseImagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) LicenseManagerProductLicenseImagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.get"></a>

```go
func Get(index *f64) LicenseManagerProductLicenseImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicenseManagerProductLicenseImagesOutputReference <a name="LicenseManagerProductLicenseImagesOutputReference" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/licensemanagerproductlicense"

licensemanagerproductlicense.NewLicenseManagerProductLicenseImagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) LicenseManagerProductLicenseImagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.listingName">ListingName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.publisher">Publisher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.listingIdInput">ListingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.packageVersionInput">PackageVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.listingId">ListingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.packageVersion">PackageVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ListingName`<sup>Required</sup> <a name="ListingName" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.listingName"></a>

```go
func ListingName() *string
```

- *Type:* *string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.publisher"></a>

```go
func Publisher() *string
```

- *Type:* *string

---

##### `ListingIdInput`<sup>Optional</sup> <a name="ListingIdInput" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.listingIdInput"></a>

```go
func ListingIdInput() *string
```

- *Type:* *string

---

##### `PackageVersionInput`<sup>Optional</sup> <a name="PackageVersionInput" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.packageVersionInput"></a>

```go
func PackageVersionInput() *string
```

- *Type:* *string

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.listingId"></a>

```go
func ListingId() *string
```

- *Type:* *string

---

##### `PackageVersion`<sup>Required</sup> <a name="PackageVersion" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.packageVersion"></a>

```go
func PackageVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseImagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### LicenseManagerProductLicenseTimeoutsOutputReference <a name="LicenseManagerProductLicenseTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/licensemanagerproductlicense"

licensemanagerproductlicense.NewLicenseManagerProductLicenseTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LicenseManagerProductLicenseTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.licenseManagerProductLicense.LicenseManagerProductLicenseTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


