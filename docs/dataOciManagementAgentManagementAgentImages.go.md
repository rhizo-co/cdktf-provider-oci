# `dataOciManagementAgentManagementAgentImages` Submodule <a name="`dataOciManagementAgentManagementAgentImages` Submodule" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciManagementAgentManagementAgentImages <a name="DataOciManagementAgentManagementAgentImages" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_images oci_management_agent_management_agent_images}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimanagementagentmanagementagentimages"

dataocimanagementagentmanagementagentimages.NewDataOciManagementAgentManagementAgentImages(scope Construct, id *string, config DataOciManagementAgentManagementAgentImagesConfig) DataOciManagementAgentManagementAgentImages
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesConfig">DataOciManagementAgentManagementAgentImagesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesConfig">DataOciManagementAgentManagementAgentImagesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.resetInstallType">ResetInstallType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.resetId"></a>

```go
func ResetId()
```

##### `ResetInstallType` <a name="ResetInstallType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.resetInstallType"></a>

```go
func ResetInstallType()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.resetName"></a>

```go
func ResetName()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciManagementAgentManagementAgentImages resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimanagementagentmanagementagentimages"

dataocimanagementagentmanagementagentimages.DataOciManagementAgentManagementAgentImages_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimanagementagentmanagementagentimages"

dataocimanagementagentmanagementagentimages.DataOciManagementAgentManagementAgentImages_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimanagementagentmanagementagentimages"

dataocimanagementagentmanagementagentimages.DataOciManagementAgentManagementAgentImages_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimanagementagentmanagementagentimages"

dataocimanagementagentmanagementagentimages.DataOciManagementAgentManagementAgentImages_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciManagementAgentManagementAgentImages resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciManagementAgentManagementAgentImages to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciManagementAgentManagementAgentImages that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_images#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciManagementAgentManagementAgentImages to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterList">DataOciManagementAgentManagementAgentImagesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.managementAgentImages">ManagementAgentImages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesList">DataOciManagementAgentManagementAgentImagesManagementAgentImagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.installTypeInput">InstallTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.installType">InstallType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.filter"></a>

```go
func Filter() DataOciManagementAgentManagementAgentImagesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterList">DataOciManagementAgentManagementAgentImagesFilterList</a>

---

##### `ManagementAgentImages`<sup>Required</sup> <a name="ManagementAgentImages" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.managementAgentImages"></a>

```go
func ManagementAgentImages() DataOciManagementAgentManagementAgentImagesManagementAgentImagesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesList">DataOciManagementAgentManagementAgentImagesManagementAgentImagesList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstallTypeInput`<sup>Optional</sup> <a name="InstallTypeInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.installTypeInput"></a>

```go
func InstallTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstallType`<sup>Required</sup> <a name="InstallType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.installType"></a>

```go
func InstallType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImages.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciManagementAgentManagementAgentImagesConfig <a name="DataOciManagementAgentManagementAgentImagesConfig" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimanagementagentmanagementagentimages"

&dataocimanagementagentmanagementagentimages.DataOciManagementAgentManagementAgentImagesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Filter: interface{},
	Id: *string,
	InstallType: *string,
	Name: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_images#compartment_id DataOciManagementAgentManagementAgentImages#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_images#id DataOciManagementAgentManagementAgentImages#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesConfig.property.installType">InstallType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_images#install_type DataOciManagementAgentManagementAgentImages#install_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_images#name DataOciManagementAgentManagementAgentImages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_images#state DataOciManagementAgentManagementAgentImages#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_images#compartment_id DataOciManagementAgentManagementAgentImages#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_images#filter DataOciManagementAgentManagementAgentImages#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_images#id DataOciManagementAgentManagementAgentImages#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstallType`<sup>Optional</sup> <a name="InstallType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesConfig.property.installType"></a>

```go
InstallType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_images#install_type DataOciManagementAgentManagementAgentImages#install_type}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_images#name DataOciManagementAgentManagementAgentImages#name}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_images#state DataOciManagementAgentManagementAgentImages#state}.

---

### DataOciManagementAgentManagementAgentImagesFilter <a name="DataOciManagementAgentManagementAgentImagesFilter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimanagementagentmanagementagentimages"

&dataocimanagementagentmanagementagentimages.DataOciManagementAgentManagementAgentImagesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_images#name DataOciManagementAgentManagementAgentImages#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_images#values DataOciManagementAgentManagementAgentImages#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_images#regex DataOciManagementAgentManagementAgentImages#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_images#name DataOciManagementAgentManagementAgentImages#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_images#values DataOciManagementAgentManagementAgentImages#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_images#regex DataOciManagementAgentManagementAgentImages#regex}.

---

### DataOciManagementAgentManagementAgentImagesManagementAgentImages <a name="DataOciManagementAgentManagementAgentImagesManagementAgentImages" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImages.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimanagementagentmanagementagentimages"

&dataocimanagementagentmanagementagentimages.DataOciManagementAgentManagementAgentImagesManagementAgentImages {

}
```


### DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetails <a name="DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetails" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimanagementagentmanagementagentimages"

&dataocimanagementagentmanagementagentimages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciManagementAgentManagementAgentImagesFilterList <a name="DataOciManagementAgentManagementAgentImagesFilterList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimanagementagentmanagementagentimages"

dataocimanagementagentmanagementagentimages.NewDataOciManagementAgentManagementAgentImagesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciManagementAgentManagementAgentImagesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterList.get"></a>

```go
func Get(index *f64) DataOciManagementAgentManagementAgentImagesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciManagementAgentManagementAgentImagesFilterOutputReference <a name="DataOciManagementAgentManagementAgentImagesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimanagementagentmanagementagentimages"

dataocimanagementagentmanagementagentimages.NewDataOciManagementAgentManagementAgentImagesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciManagementAgentManagementAgentImagesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList <a name="DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimanagementagentmanagementagentimages"

dataocimanagementagentmanagementagentimages.NewDataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList.get"></a>

```go
func Get(index *f64) DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference <a name="DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimanagementagentmanagementagentimages"

dataocimanagementagentmanagementagentimages.NewDataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.property.checksum">Checksum</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.property.objectBucket">ObjectBucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.property.objectNamespace">ObjectNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.property.objectUrl">ObjectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetails">DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Checksum`<sup>Required</sup> <a name="Checksum" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.property.checksum"></a>

```go
func Checksum() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `ObjectBucket`<sup>Required</sup> <a name="ObjectBucket" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.property.objectBucket"></a>

```go
func ObjectBucket() *string
```

- *Type:* *string

---

##### `ObjectNamespace`<sup>Required</sup> <a name="ObjectNamespace" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.property.objectNamespace"></a>

```go
func ObjectNamespace() *string
```

- *Type:* *string

---

##### `ObjectUrl`<sup>Required</sup> <a name="ObjectUrl" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.property.objectUrl"></a>

```go
func ObjectUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetails">DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetails</a>

---


### DataOciManagementAgentManagementAgentImagesManagementAgentImagesList <a name="DataOciManagementAgentManagementAgentImagesManagementAgentImagesList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimanagementagentmanagementagentimages"

dataocimanagementagentmanagementagentimages.NewDataOciManagementAgentManagementAgentImagesManagementAgentImagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciManagementAgentManagementAgentImagesManagementAgentImagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesList.get"></a>

```go
func Get(index *f64) DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference <a name="DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimanagementagentmanagementagentimages"

dataocimanagementagentmanagementagentimages.NewDataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.property.checksum">Checksum</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.property.imageObjectStorageDetails">ImageObjectStorageDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList">DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.property.objectUrl">ObjectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.property.packageArchitectureType">PackageArchitectureType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.property.packageType">PackageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.property.platformName">PlatformName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.property.platformType">PlatformType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImages">DataOciManagementAgentManagementAgentImagesManagementAgentImages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Checksum`<sup>Required</sup> <a name="Checksum" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.property.checksum"></a>

```go
func Checksum() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageObjectStorageDetails`<sup>Required</sup> <a name="ImageObjectStorageDetails" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.property.imageObjectStorageDetails"></a>

```go
func ImageObjectStorageDetails() DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList">DataOciManagementAgentManagementAgentImagesManagementAgentImagesImageObjectStorageDetailsList</a>

---

##### `ObjectUrl`<sup>Required</sup> <a name="ObjectUrl" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.property.objectUrl"></a>

```go
func ObjectUrl() *string
```

- *Type:* *string

---

##### `PackageArchitectureType`<sup>Required</sup> <a name="PackageArchitectureType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.property.packageArchitectureType"></a>

```go
func PackageArchitectureType() *string
```

- *Type:* *string

---

##### `PackageType`<sup>Required</sup> <a name="PackageType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.property.packageType"></a>

```go
func PackageType() *string
```

- *Type:* *string

---

##### `PlatformName`<sup>Required</sup> <a name="PlatformName" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.property.platformName"></a>

```go
func PlatformName() *string
```

- *Type:* *string

---

##### `PlatformType`<sup>Required</sup> <a name="PlatformType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.property.platformType"></a>

```go
func PlatformType() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImagesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciManagementAgentManagementAgentImagesManagementAgentImages
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentImages.DataOciManagementAgentManagementAgentImagesManagementAgentImages">DataOciManagementAgentManagementAgentImagesManagementAgentImages</a>

---



