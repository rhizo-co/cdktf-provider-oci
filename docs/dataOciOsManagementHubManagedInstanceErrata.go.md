# `dataOciOsManagementHubManagedInstanceErrata` Submodule <a name="`dataOciOsManagementHubManagedInstanceErrata` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsManagementHubManagedInstanceErrata <a name="DataOciOsManagementHubManagedInstanceErrata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata oci_os_management_hub_managed_instance_errata}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceerrata"

dataociosmanagementhubmanagedinstanceerrata.NewDataOciOsManagementHubManagedInstanceErrata(scope Construct, id *string, config DataOciOsManagementHubManagedInstanceErrataConfig) DataOciOsManagementHubManagedInstanceErrata
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig">DataOciOsManagementHubManagedInstanceErrataConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig">DataOciOsManagementHubManagedInstanceErrataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetClassificationType">ResetClassificationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetNameContains">ResetNameContains</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetClassificationType` <a name="ResetClassificationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetClassificationType"></a>

```go
func ResetClassificationType()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetName"></a>

```go
func ResetName()
```

##### `ResetNameContains` <a name="ResetNameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.resetNameContains"></a>

```go
func ResetNameContains()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceErrata resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceerrata"

dataociosmanagementhubmanagedinstanceerrata.DataOciOsManagementHubManagedInstanceErrata_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceerrata"

dataociosmanagementhubmanagedinstanceerrata.DataOciOsManagementHubManagedInstanceErrata_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceerrata"

dataociosmanagementhubmanagedinstanceerrata.DataOciOsManagementHubManagedInstanceErrata_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceerrata"

dataociosmanagementhubmanagedinstanceerrata.DataOciOsManagementHubManagedInstanceErrata_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOsManagementHubManagedInstanceErrata resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOsManagementHubManagedInstanceErrata to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOsManagementHubManagedInstanceErrata that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsManagementHubManagedInstanceErrata to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList">DataOciOsManagementHubManagedInstanceErrataFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.managedInstanceErratumSummaryCollection">ManagedInstanceErratumSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.classificationTypeInput">ClassificationTypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.managedInstanceIdInput">ManagedInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.nameContainsInput">NameContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.nameInput">NameInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.classificationType">ClassificationType</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.name">Name</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.nameContains">NameContains</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.filter"></a>

```go
func Filter() DataOciOsManagementHubManagedInstanceErrataFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList">DataOciOsManagementHubManagedInstanceErrataFilterList</a>

---

##### `ManagedInstanceErratumSummaryCollection`<sup>Required</sup> <a name="ManagedInstanceErratumSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.managedInstanceErratumSummaryCollection"></a>

```go
func ManagedInstanceErratumSummaryCollection() DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList</a>

---

##### `ClassificationTypeInput`<sup>Optional</sup> <a name="ClassificationTypeInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.classificationTypeInput"></a>

```go
func ClassificationTypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedInstanceIdInput`<sup>Optional</sup> <a name="ManagedInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.managedInstanceIdInput"></a>

```go
func ManagedInstanceIdInput() *string
```

- *Type:* *string

---

##### `NameContainsInput`<sup>Optional</sup> <a name="NameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.nameContainsInput"></a>

```go
func NameContainsInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.nameInput"></a>

```go
func NameInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClassificationType`<sup>Required</sup> <a name="ClassificationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.classificationType"></a>

```go
func ClassificationType() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.managedInstanceId"></a>

```go
func ManagedInstanceId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.name"></a>

```go
func Name() *[]*string
```

- *Type:* *[]*string

---

##### `NameContains`<sup>Required</sup> <a name="NameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.nameContains"></a>

```go
func NameContains() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrata.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsManagementHubManagedInstanceErrataConfig <a name="DataOciOsManagementHubManagedInstanceErrataConfig" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceerrata"

&dataociosmanagementhubmanagedinstanceerrata.DataOciOsManagementHubManagedInstanceErrataConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedInstanceId: *string,
	ClassificationType: *[]*string,
	CompartmentId: *string,
	Filter: interface{},
	Id: *string,
	Name: *[]*string,
	NameContains: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#managed_instance_id DataOciOsManagementHubManagedInstanceErrata#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.classificationType">ClassificationType</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#classification_type DataOciOsManagementHubManagedInstanceErrata#classification_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#compartment_id DataOciOsManagementHubManagedInstanceErrata#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#id DataOciOsManagementHubManagedInstanceErrata#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.name">Name</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#name DataOciOsManagementHubManagedInstanceErrata#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.nameContains">NameContains</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#name_contains DataOciOsManagementHubManagedInstanceErrata#name_contains}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.managedInstanceId"></a>

```go
ManagedInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#managed_instance_id DataOciOsManagementHubManagedInstanceErrata#managed_instance_id}.

---

##### `ClassificationType`<sup>Optional</sup> <a name="ClassificationType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.classificationType"></a>

```go
ClassificationType *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#classification_type DataOciOsManagementHubManagedInstanceErrata#classification_type}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#compartment_id DataOciOsManagementHubManagedInstanceErrata#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#filter DataOciOsManagementHubManagedInstanceErrata#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#id DataOciOsManagementHubManagedInstanceErrata#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.name"></a>

```go
Name *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#name DataOciOsManagementHubManagedInstanceErrata#name}.

---

##### `NameContains`<sup>Optional</sup> <a name="NameContains" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataConfig.property.nameContains"></a>

```go
NameContains *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#name_contains DataOciOsManagementHubManagedInstanceErrata#name_contains}.

---

### DataOciOsManagementHubManagedInstanceErrataFilter <a name="DataOciOsManagementHubManagedInstanceErrataFilter" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceerrata"

&dataociosmanagementhubmanagedinstanceerrata.DataOciOsManagementHubManagedInstanceErrataFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#name DataOciOsManagementHubManagedInstanceErrata#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#values DataOciOsManagementHubManagedInstanceErrata#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#regex DataOciOsManagementHubManagedInstanceErrata#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#name DataOciOsManagementHubManagedInstanceErrata#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#values DataOciOsManagementHubManagedInstanceErrata#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/os_management_hub_managed_instance_errata#regex DataOciOsManagementHubManagedInstanceErrata#regex}.

---

### DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollection <a name="DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceerrata"

&dataociosmanagementhubmanagedinstanceerrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollection {

}
```


### DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItems <a name="DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceerrata"

&dataociosmanagementhubmanagedinstanceerrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItems {

}
```


### DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackages <a name="DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackages.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceerrata"

&dataociosmanagementhubmanagedinstanceerrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackages {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsManagementHubManagedInstanceErrataFilterList <a name="DataOciOsManagementHubManagedInstanceErrataFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceerrata"

dataociosmanagementhubmanagedinstanceerrata.NewDataOciOsManagementHubManagedInstanceErrataFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubManagedInstanceErrataFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubManagedInstanceErrataFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOsManagementHubManagedInstanceErrataFilterOutputReference <a name="DataOciOsManagementHubManagedInstanceErrataFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceerrata"

dataociosmanagementhubmanagedinstanceerrata.NewDataOciOsManagementHubManagedInstanceErrataFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubManagedInstanceErrataFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList <a name="DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceerrata"

dataociosmanagementhubmanagedinstanceerrata.NewDataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference <a name="DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceerrata"

dataociosmanagementhubmanagedinstanceerrata.NewDataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.advisoryType">AdvisoryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.packages">Packages</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.relatedCves">RelatedCves</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.synopsis">Synopsis</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.timeIssued">TimeIssued</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItems">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdvisoryType`<sup>Required</sup> <a name="AdvisoryType" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.advisoryType"></a>

```go
func AdvisoryType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Packages`<sup>Required</sup> <a name="Packages" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.packages"></a>

```go
func Packages() DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList</a>

---

##### `RelatedCves`<sup>Required</sup> <a name="RelatedCves" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.relatedCves"></a>

```go
func RelatedCves() *[]*string
```

- *Type:* *[]*string

---

##### `Synopsis`<sup>Required</sup> <a name="Synopsis" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.synopsis"></a>

```go
func Synopsis() *string
```

- *Type:* *string

---

##### `TimeIssued`<sup>Required</sup> <a name="TimeIssued" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.timeIssued"></a>

```go
func TimeIssued() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItems">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItems</a>

---


### DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList <a name="DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceerrata"

dataociosmanagementhubmanagedinstanceerrata.NewDataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference <a name="DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceerrata"

dataociosmanagementhubmanagedinstanceerrata.NewDataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.architecture">Architecture</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackages">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Architecture`<sup>Required</sup> <a name="Architecture" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.architecture"></a>

```go
func Architecture() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackagesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackages
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackages">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsPackages</a>

---


### DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList <a name="DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceerrata"

dataociosmanagementhubmanagedinstanceerrata.NewDataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.get"></a>

```go
func Get(index *f64) DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference <a name="DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementhubmanagedinstanceerrata"

dataociosmanagementhubmanagedinstanceerrata.NewDataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollection">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.property.items"></a>

```go
func Items() DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsManagementHubManagedInstanceErrata.DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollection">DataOciOsManagementHubManagedInstanceErrataManagedInstanceErratumSummaryCollection</a>

---



