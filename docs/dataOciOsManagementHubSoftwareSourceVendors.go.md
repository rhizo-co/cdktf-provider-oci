# `dataOciOsManagementHubSoftwareSourceVendors` Submodule <a name="`dataOciOsManagementHubSoftwareSourceVendors` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubSoftwareSourceVendors <a name="DataOciOsManagementHubSoftwareSourceVendors" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors oci_os_management_hub_software_source_vendors}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwaresourcevendors"

dataociosmanagementhubsoftwaresourcevendors.NewDataOciOsManagementHubSoftwareSourceVendors(scope Construct, id *string, config DataOciOsManagementHubSoftwareSourceVendorsConfig) DataOciOsManagementHubSoftwareSourceVendors
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig">DataOciOsManagementHubSoftwareSourceVendorsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig">DataOciOsManagementHubSoftwareSourceVendorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.resetName"></a>

```go
func ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSourceVendors resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwaresourcevendors"

dataociosmanagementhubsoftwaresourcevendors.DataOciOsManagementHubSoftwareSourceVendors_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwaresourcevendors"

dataociosmanagementhubsoftwaresourcevendors.DataOciOsManagementHubSoftwareSourceVendors_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwaresourcevendors"

dataociosmanagementhubsoftwaresourcevendors.DataOciOsManagementHubSoftwareSourceVendors_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwaresourcevendors"

dataociosmanagementhubsoftwaresourcevendors.DataOciOsManagementHubSoftwareSourceVendors_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOsManagementHubSoftwareSourceVendors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOsManagementHubSoftwareSourceVendors to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOsManagementHubSoftwareSourceVendors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubSoftwareSourceVendors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList">DataOciOsManagementHubSoftwareSourceVendorsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.softwareSourceVendorCollection">SoftwareSourceVendorCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList">DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.filter"></a>

```go
func Filter() DataOciOsManagementHubSoftwareSourceVendorsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList">DataOciOsManagementHubSoftwareSourceVendorsFilterList</a>

---

##### `SoftwareSourceVendorCollection`<sup>Required</sup> <a name="SoftwareSourceVendorCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.softwareSourceVendorCollection"></a>

```go
func SoftwareSourceVendorCollection() DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList">DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendors.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubSoftwareSourceVendorsConfig <a name="DataOciOsManagementHubSoftwareSourceVendorsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwaresourcevendors"

&dataociosmanagementhubsoftwaresourcevendors.DataOciOsManagementHubSoftwareSourceVendorsConfig {
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
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#compartment_id DataOciOsManagementHubSoftwareSourceVendors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#id DataOciOsManagementHubSoftwareSourceVendors#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#name DataOciOsManagementHubSoftwareSourceVendors#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#compartment_id DataOciOsManagementHubSoftwareSourceVendors#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#filter DataOciOsManagementHubSoftwareSourceVendors#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#id DataOciOsManagementHubSoftwareSourceVendors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#name DataOciOsManagementHubSoftwareSourceVendors#name}.

---

### DataOciOsManagementHubSoftwareSourceVendorsFilter <a name="DataOciOsManagementHubSoftwareSourceVendorsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwaresourcevendors"

&dataociosmanagementhubsoftwaresourcevendors.DataOciOsManagementHubSoftwareSourceVendorsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#name DataOciOsManagementHubSoftwareSourceVendors#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#values DataOciOsManagementHubSoftwareSourceVendors#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#regex DataOciOsManagementHubSoftwareSourceVendors#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#name DataOciOsManagementHubSoftwareSourceVendors#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#values DataOciOsManagementHubSoftwareSourceVendors#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_software_source_vendors#regex DataOciOsManagementHubSoftwareSourceVendors#regex}.

---

### DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollection <a name="DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwaresourcevendors"

&dataociosmanagementhubsoftwaresourcevendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollection {

}
```


### DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItems <a name="DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwaresourcevendors"

&dataociosmanagementhubsoftwaresourcevendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubSoftwareSourceVendorsFilterList <a name="DataOciOsManagementHubSoftwareSourceVendorsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwaresourcevendors"

dataociosmanagementhubsoftwaresourcevendors.NewDataOciOsManagementHubSoftwareSourceVendorsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubSoftwareSourceVendorsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference <a name="DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwaresourcevendors"

dataociosmanagementhubsoftwaresourcevendors.NewDataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList <a name="DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwaresourcevendors"

dataociosmanagementhubsoftwaresourcevendors.NewDataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference <a name="DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwaresourcevendors"

dataociosmanagementhubsoftwaresourcevendors.NewDataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.property.archTypes">ArchTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.property.osFamilies">OsFamilies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItems">DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArchTypes`<sup>Required</sup> <a name="ArchTypes" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.property.archTypes"></a>

```go
func ArchTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OsFamilies`<sup>Required</sup> <a name="OsFamilies" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.property.osFamilies"></a>

```go
func OsFamilies() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItems">DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItems</a>

---


### DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList <a name="DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwaresourcevendors"

dataociosmanagementhubsoftwaresourcevendors.NewDataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference <a name="DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubsoftwaresourcevendors"

dataociosmanagementhubsoftwaresourcevendors.NewDataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList">DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollection">DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.property.items"></a>

```go
func Items() DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList">DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubSoftwareSourceVendors.DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollection">DataOciOsManagementHubSoftwareSourceVendorsSoftwareSourceVendorCollection</a>

---



