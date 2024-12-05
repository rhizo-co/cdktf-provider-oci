# `dataOciOsManagementHubSoftwareSourceModuleStreamProfile` Submodule <a name="`dataOciOsManagementHubSoftwareSourceModuleStreamProfile` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubSoftwareSourceModuleStreamProfile <a name="DataOciOsManagementHubSoftwareSourceModuleStreamProfile" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profile oci_os_management_hub_software_source_module_stream_profile}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwaresourcemodulestreamprofile"

dataociosmanagementhubsoftwaresourcemodulestreamprofile.NewDataOciOsManagementHubSoftwareSourceModuleStreamProfile(scope Construct, id *string, config DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig) DataOciOsManagementHubSoftwareSourceModuleStreamProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig">DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig">DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSourceModuleStreamProfile resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwaresourcemodulestreamprofile"

dataociosmanagementhubsoftwaresourcemodulestreamprofile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwaresourcemodulestreamprofile"

dataociosmanagementhubsoftwaresourcemodulestreamprofile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwaresourcemodulestreamprofile"

dataociosmanagementhubsoftwaresourcemodulestreamprofile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwaresourcemodulestreamprofile"

dataociosmanagementhubsoftwaresourcemodulestreamprofile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSourceModuleStreamProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOsManagementHubSoftwareSourceModuleStreamProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOsManagementHubSoftwareSourceModuleStreamProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubSoftwareSourceModuleStreamProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.isDefault">IsDefault</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.packages">Packages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.moduleNameInput">ModuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.profileNameInput">ProfileNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.softwareSourceIdInput">SoftwareSourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.streamNameInput">StreamNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.moduleName">ModuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.profileName">ProfileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.softwareSourceId">SoftwareSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.streamName">StreamName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.isDefault"></a>

```go
func IsDefault() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Packages`<sup>Required</sup> <a name="Packages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.packages"></a>

```go
func Packages() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ModuleNameInput`<sup>Optional</sup> <a name="ModuleNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.moduleNameInput"></a>

```go
func ModuleNameInput() *string
```

- *Type:* *string

---

##### `ProfileNameInput`<sup>Optional</sup> <a name="ProfileNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.profileNameInput"></a>

```go
func ProfileNameInput() *string
```

- *Type:* *string

---

##### `SoftwareSourceIdInput`<sup>Optional</sup> <a name="SoftwareSourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.softwareSourceIdInput"></a>

```go
func SoftwareSourceIdInput() *string
```

- *Type:* *string

---

##### `StreamNameInput`<sup>Optional</sup> <a name="StreamNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.streamNameInput"></a>

```go
func StreamNameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.moduleName"></a>

```go
func ModuleName() *string
```

- *Type:* *string

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.profileName"></a>

```go
func ProfileName() *string
```

- *Type:* *string

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.softwareSourceId"></a>

```go
func SoftwareSourceId() *string
```

- *Type:* *string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.streamName"></a>

```go
func StreamName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig <a name="DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwaresourcemodulestreamprofile"

&dataociosmanagementhubsoftwaresourcemodulestreamprofile.DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ModuleName: *string,
	ProfileName: *string,
	SoftwareSourceId: *string,
	StreamName: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig.property.moduleName">ModuleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profile#module_name DataOciOsManagementHubSoftwareSourceModuleStreamProfile#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig.property.profileName">ProfileName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profile#profile_name DataOciOsManagementHubSoftwareSourceModuleStreamProfile#profile_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig.property.softwareSourceId">SoftwareSourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profile#software_source_id DataOciOsManagementHubSoftwareSourceModuleStreamProfile#software_source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig.property.streamName">StreamName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profile#stream_name DataOciOsManagementHubSoftwareSourceModuleStreamProfile#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profile#id DataOciOsManagementHubSoftwareSourceModuleStreamProfile#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig.property.moduleName"></a>

```go
ModuleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profile#module_name DataOciOsManagementHubSoftwareSourceModuleStreamProfile#module_name}.

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig.property.profileName"></a>

```go
ProfileName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profile#profile_name DataOciOsManagementHubSoftwareSourceModuleStreamProfile#profile_name}.

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig.property.softwareSourceId"></a>

```go
SoftwareSourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profile#software_source_id DataOciOsManagementHubSoftwareSourceModuleStreamProfile#software_source_id}.

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig.property.streamName"></a>

```go
StreamName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profile#stream_name DataOciOsManagementHubSoftwareSourceModuleStreamProfile#stream_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceModuleStreamProfile.DataOciOsManagementHubSoftwareSourceModuleStreamProfileConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_module_stream_profile#id DataOciOsManagementHubSoftwareSourceModuleStreamProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



