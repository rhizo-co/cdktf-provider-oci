# `dataOciDatabaseDatabaseSoftwareImages` Submodule <a name="`dataOciDatabaseDatabaseSoftwareImages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDatabaseSoftwareImages <a name="DataOciDatabaseDatabaseSoftwareImages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images oci_database_database_software_images}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabasesoftwareimages"

dataocidatabasedatabasesoftwareimages.NewDataOciDatabaseDatabaseSoftwareImages(scope Construct, id *string, config DataOciDatabaseDatabaseSoftwareImagesConfig) DataOciDatabaseDatabaseSoftwareImages
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig">DataOciDatabaseDatabaseSoftwareImagesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig">DataOciDatabaseDatabaseSoftwareImagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetImageShapeFamily">ResetImageShapeFamily</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetImageType">ResetImageType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetIsUpgradeSupported">ResetIsUpgradeSupported</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetId"></a>

```go
func ResetId()
```

##### `ResetImageShapeFamily` <a name="ResetImageShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetImageShapeFamily"></a>

```go
func ResetImageShapeFamily()
```

##### `ResetImageType` <a name="ResetImageType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetImageType"></a>

```go
func ResetImageType()
```

##### `ResetIsUpgradeSupported` <a name="ResetIsUpgradeSupported" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetIsUpgradeSupported"></a>

```go
func ResetIsUpgradeSupported()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDatabaseSoftwareImages resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabasesoftwareimages"

dataocidatabasedatabasesoftwareimages.DataOciDatabaseDatabaseSoftwareImages_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabasesoftwareimages"

dataocidatabasedatabasesoftwareimages.DataOciDatabaseDatabaseSoftwareImages_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabasesoftwareimages"

dataocidatabasedatabasesoftwareimages.DataOciDatabaseDatabaseSoftwareImages_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabasesoftwareimages"

dataocidatabasedatabasesoftwareimages.DataOciDatabaseDatabaseSoftwareImages_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseDatabaseSoftwareImages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseDatabaseSoftwareImages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseDatabaseSoftwareImages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDatabaseSoftwareImages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.databaseSoftwareImages">DatabaseSoftwareImages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList">DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList">DataOciDatabaseDatabaseSoftwareImagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageShapeFamilyInput">ImageShapeFamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageTypeInput">ImageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.isUpgradeSupportedInput">IsUpgradeSupportedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageShapeFamily">ImageShapeFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageType">ImageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.isUpgradeSupported">IsUpgradeSupported</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DatabaseSoftwareImages`<sup>Required</sup> <a name="DatabaseSoftwareImages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.databaseSoftwareImages"></a>

```go
func DatabaseSoftwareImages() DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList">DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.filter"></a>

```go
func Filter() DataOciDatabaseDatabaseSoftwareImagesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList">DataOciDatabaseDatabaseSoftwareImagesFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageShapeFamilyInput`<sup>Optional</sup> <a name="ImageShapeFamilyInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageShapeFamilyInput"></a>

```go
func ImageShapeFamilyInput() *string
```

- *Type:* *string

---

##### `ImageTypeInput`<sup>Optional</sup> <a name="ImageTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageTypeInput"></a>

```go
func ImageTypeInput() *string
```

- *Type:* *string

---

##### `IsUpgradeSupportedInput`<sup>Optional</sup> <a name="IsUpgradeSupportedInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.isUpgradeSupportedInput"></a>

```go
func IsUpgradeSupportedInput() interface{}
```

- *Type:* interface{}

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageShapeFamily`<sup>Required</sup> <a name="ImageShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageShapeFamily"></a>

```go
func ImageShapeFamily() *string
```

- *Type:* *string

---

##### `ImageType`<sup>Required</sup> <a name="ImageType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.imageType"></a>

```go
func ImageType() *string
```

- *Type:* *string

---

##### `IsUpgradeSupported`<sup>Required</sup> <a name="IsUpgradeSupported" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.isUpgradeSupported"></a>

```go
func IsUpgradeSupported() interface{}
```

- *Type:* interface{}

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImages.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDatabaseSoftwareImagesConfig <a name="DataOciDatabaseDatabaseSoftwareImagesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabasesoftwareimages"

&dataocidatabasedatabasesoftwareimages.DataOciDatabaseDatabaseSoftwareImagesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	ImageShapeFamily: *string,
	ImageType: *string,
	IsUpgradeSupported: interface{},
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#compartment_id DataOciDatabaseDatabaseSoftwareImages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#display_name DataOciDatabaseDatabaseSoftwareImages#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#id DataOciDatabaseDatabaseSoftwareImages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.imageShapeFamily">ImageShapeFamily</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#image_shape_family DataOciDatabaseDatabaseSoftwareImages#image_shape_family}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.imageType">ImageType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#image_type DataOciDatabaseDatabaseSoftwareImages#image_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.isUpgradeSupported">IsUpgradeSupported</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#is_upgrade_supported DataOciDatabaseDatabaseSoftwareImages#is_upgrade_supported}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#state DataOciDatabaseDatabaseSoftwareImages#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#compartment_id DataOciDatabaseDatabaseSoftwareImages#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#display_name DataOciDatabaseDatabaseSoftwareImages#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#filter DataOciDatabaseDatabaseSoftwareImages#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#id DataOciDatabaseDatabaseSoftwareImages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageShapeFamily`<sup>Optional</sup> <a name="ImageShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.imageShapeFamily"></a>

```go
ImageShapeFamily *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#image_shape_family DataOciDatabaseDatabaseSoftwareImages#image_shape_family}.

---

##### `ImageType`<sup>Optional</sup> <a name="ImageType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.imageType"></a>

```go
ImageType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#image_type DataOciDatabaseDatabaseSoftwareImages#image_type}.

---

##### `IsUpgradeSupported`<sup>Optional</sup> <a name="IsUpgradeSupported" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.isUpgradeSupported"></a>

```go
IsUpgradeSupported interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#is_upgrade_supported DataOciDatabaseDatabaseSoftwareImages#is_upgrade_supported}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#state DataOciDatabaseDatabaseSoftwareImages#state}.

---

### DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages <a name="DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabasesoftwareimages"

&dataocidatabasedatabasesoftwareimages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages {

}
```


### DataOciDatabaseDatabaseSoftwareImagesFilter <a name="DataOciDatabaseDatabaseSoftwareImagesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabasesoftwareimages"

&dataocidatabasedatabasesoftwareimages.DataOciDatabaseDatabaseSoftwareImagesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#name DataOciDatabaseDatabaseSoftwareImages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#values DataOciDatabaseDatabaseSoftwareImages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#regex DataOciDatabaseDatabaseSoftwareImages#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#name DataOciDatabaseDatabaseSoftwareImages#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#values DataOciDatabaseDatabaseSoftwareImages#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_software_images#regex DataOciDatabaseDatabaseSoftwareImages#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList <a name="DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabasesoftwareimages"

dataocidatabasedatabasesoftwareimages.NewDataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.get"></a>

```go
func Get(index *f64) DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference <a name="DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabasesoftwareimages"

dataocidatabasedatabasesoftwareimages.NewDataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.databaseSoftwareImageIncludedPatches">DatabaseSoftwareImageIncludedPatches</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.databaseSoftwareImageOneOffPatches">DatabaseSoftwareImageOneOffPatches</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.databaseVersion">DatabaseVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.imageShapeFamily">ImageShapeFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.imageType">ImageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.includedPatchesSummary">IncludedPatchesSummary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.isUpgradeSupported">IsUpgradeSupported</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.lsInventory">LsInventory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.patchSet">PatchSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.sourceDbHomeId">SourceDbHomeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages">DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DatabaseSoftwareImageIncludedPatches`<sup>Required</sup> <a name="DatabaseSoftwareImageIncludedPatches" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.databaseSoftwareImageIncludedPatches"></a>

```go
func DatabaseSoftwareImageIncludedPatches() *[]*string
```

- *Type:* *[]*string

---

##### `DatabaseSoftwareImageOneOffPatches`<sup>Required</sup> <a name="DatabaseSoftwareImageOneOffPatches" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.databaseSoftwareImageOneOffPatches"></a>

```go
func DatabaseSoftwareImageOneOffPatches() *[]*string
```

- *Type:* *[]*string

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.databaseVersion"></a>

```go
func DatabaseVersion() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageShapeFamily`<sup>Required</sup> <a name="ImageShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.imageShapeFamily"></a>

```go
func ImageShapeFamily() *string
```

- *Type:* *string

---

##### `ImageType`<sup>Required</sup> <a name="ImageType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.imageType"></a>

```go
func ImageType() *string
```

- *Type:* *string

---

##### `IncludedPatchesSummary`<sup>Required</sup> <a name="IncludedPatchesSummary" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.includedPatchesSummary"></a>

```go
func IncludedPatchesSummary() *string
```

- *Type:* *string

---

##### `IsUpgradeSupported`<sup>Required</sup> <a name="IsUpgradeSupported" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.isUpgradeSupported"></a>

```go
func IsUpgradeSupported() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `LsInventory`<sup>Required</sup> <a name="LsInventory" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.lsInventory"></a>

```go
func LsInventory() *string
```

- *Type:* *string

---

##### `PatchSet`<sup>Required</sup> <a name="PatchSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.patchSet"></a>

```go
func PatchSet() *string
```

- *Type:* *string

---

##### `SourceDbHomeId`<sup>Required</sup> <a name="SourceDbHomeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.sourceDbHomeId"></a>

```go
func SourceDbHomeId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImagesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages">DataOciDatabaseDatabaseSoftwareImagesDatabaseSoftwareImages</a>

---


### DataOciDatabaseDatabaseSoftwareImagesFilterList <a name="DataOciDatabaseDatabaseSoftwareImagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabasesoftwareimages"

dataocidatabasedatabasesoftwareimages.NewDataOciDatabaseDatabaseSoftwareImagesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseDatabaseSoftwareImagesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference <a name="DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabasesoftwareimages"

dataocidatabasedatabasesoftwareimages.NewDataOciDatabaseDatabaseSoftwareImagesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseSoftwareImages.DataOciDatabaseDatabaseSoftwareImagesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



