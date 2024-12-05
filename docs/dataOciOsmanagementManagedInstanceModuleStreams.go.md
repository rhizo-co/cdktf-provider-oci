# `dataOciOsmanagementManagedInstanceModuleStreams` Submodule <a name="`dataOciOsmanagementManagedInstanceModuleStreams` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsmanagementManagedInstanceModuleStreams <a name="DataOciOsmanagementManagedInstanceModuleStreams" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams oci_osmanagement_managed_instance_module_streams}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstancemodulestreams"

dataociosmanagementmanagedinstancemodulestreams.NewDataOciOsmanagementManagedInstanceModuleStreams(scope Construct, id *string, config DataOciOsmanagementManagedInstanceModuleStreamsConfig) DataOciOsmanagementManagedInstanceModuleStreams
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig">DataOciOsmanagementManagedInstanceModuleStreamsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig">DataOciOsmanagementManagedInstanceModuleStreamsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetModuleName">ResetModuleName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetStreamName">ResetStreamName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetStreamStatus">ResetStreamStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetId"></a>

```go
func ResetId()
```

##### `ResetModuleName` <a name="ResetModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetModuleName"></a>

```go
func ResetModuleName()
```

##### `ResetStreamName` <a name="ResetStreamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetStreamName"></a>

```go
func ResetStreamName()
```

##### `ResetStreamStatus` <a name="ResetStreamStatus" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.resetStreamStatus"></a>

```go
func ResetStreamStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsmanagementManagedInstanceModuleStreams resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstancemodulestreams"

dataociosmanagementmanagedinstancemodulestreams.DataOciOsmanagementManagedInstanceModuleStreams_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstancemodulestreams"

dataociosmanagementmanagedinstancemodulestreams.DataOciOsmanagementManagedInstanceModuleStreams_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstancemodulestreams"

dataociosmanagementmanagedinstancemodulestreams.DataOciOsmanagementManagedInstanceModuleStreams_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstancemodulestreams"

dataociosmanagementmanagedinstancemodulestreams.DataOciOsmanagementManagedInstanceModuleStreams_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOsmanagementManagedInstanceModuleStreams resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOsmanagementManagedInstanceModuleStreams to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOsmanagementManagedInstanceModuleStreams that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsmanagementManagedInstanceModuleStreams to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList">DataOciOsmanagementManagedInstanceModuleStreamsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.moduleStreamOnManagedInstances">ModuleStreamOnManagedInstances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.managedInstanceIdInput">ManagedInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.moduleNameInput">ModuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamNameInput">StreamNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamStatusInput">StreamStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.moduleName">ModuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamName">StreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamStatus">StreamStatus</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.filter"></a>

```go
func Filter() DataOciOsmanagementManagedInstanceModuleStreamsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList">DataOciOsmanagementManagedInstanceModuleStreamsFilterList</a>

---

##### `ModuleStreamOnManagedInstances`<sup>Required</sup> <a name="ModuleStreamOnManagedInstances" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.moduleStreamOnManagedInstances"></a>

```go
func ModuleStreamOnManagedInstances() DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedInstanceIdInput`<sup>Optional</sup> <a name="ManagedInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.managedInstanceIdInput"></a>

```go
func ManagedInstanceIdInput() *string
```

- *Type:* *string

---

##### `ModuleNameInput`<sup>Optional</sup> <a name="ModuleNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.moduleNameInput"></a>

```go
func ModuleNameInput() *string
```

- *Type:* *string

---

##### `StreamNameInput`<sup>Optional</sup> <a name="StreamNameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamNameInput"></a>

```go
func StreamNameInput() *string
```

- *Type:* *string

---

##### `StreamStatusInput`<sup>Optional</sup> <a name="StreamStatusInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamStatusInput"></a>

```go
func StreamStatusInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.managedInstanceId"></a>

```go
func ManagedInstanceId() *string
```

- *Type:* *string

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.moduleName"></a>

```go
func ModuleName() *string
```

- *Type:* *string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamName"></a>

```go
func StreamName() *string
```

- *Type:* *string

---

##### `StreamStatus`<sup>Required</sup> <a name="StreamStatus" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.streamStatus"></a>

```go
func StreamStatus() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreams.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsmanagementManagedInstanceModuleStreamsConfig <a name="DataOciOsmanagementManagedInstanceModuleStreamsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstancemodulestreams"

&dataociosmanagementmanagedinstancemodulestreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedInstanceId: *string,
	CompartmentId: *string,
	Filter: interface{},
	Id: *string,
	ModuleName: *string,
	StreamName: *string,
	StreamStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.managedInstanceId">ManagedInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#managed_instance_id DataOciOsmanagementManagedInstanceModuleStreams#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#compartment_id DataOciOsmanagementManagedInstanceModuleStreams#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#id DataOciOsmanagementManagedInstanceModuleStreams#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.moduleName">ModuleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#module_name DataOciOsmanagementManagedInstanceModuleStreams#module_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.streamName">StreamName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#stream_name DataOciOsmanagementManagedInstanceModuleStreams#stream_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.streamStatus">StreamStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#stream_status DataOciOsmanagementManagedInstanceModuleStreams#stream_status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedInstanceId`<sup>Required</sup> <a name="ManagedInstanceId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.managedInstanceId"></a>

```go
ManagedInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#managed_instance_id DataOciOsmanagementManagedInstanceModuleStreams#managed_instance_id}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#compartment_id DataOciOsmanagementManagedInstanceModuleStreams#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#filter DataOciOsmanagementManagedInstanceModuleStreams#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#id DataOciOsmanagementManagedInstanceModuleStreams#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ModuleName`<sup>Optional</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.moduleName"></a>

```go
ModuleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#module_name DataOciOsmanagementManagedInstanceModuleStreams#module_name}.

---

##### `StreamName`<sup>Optional</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.streamName"></a>

```go
StreamName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#stream_name DataOciOsmanagementManagedInstanceModuleStreams#stream_name}.

---

##### `StreamStatus`<sup>Optional</sup> <a name="StreamStatus" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsConfig.property.streamStatus"></a>

```go
StreamStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#stream_status DataOciOsmanagementManagedInstanceModuleStreams#stream_status}.

---

### DataOciOsmanagementManagedInstanceModuleStreamsFilter <a name="DataOciOsmanagementManagedInstanceModuleStreamsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstancemodulestreams"

&dataociosmanagementmanagedinstancemodulestreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#name DataOciOsmanagementManagedInstanceModuleStreams#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#values DataOciOsmanagementManagedInstanceModuleStreams#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#regex DataOciOsmanagementManagedInstanceModuleStreams#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#name DataOciOsmanagementManagedInstanceModuleStreams#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#values DataOciOsmanagementManagedInstanceModuleStreams#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_module_streams#regex DataOciOsmanagementManagedInstanceModuleStreams#regex}.

---

### DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances <a name="DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstancemodulestreams"

&dataociosmanagementmanagedinstancemodulestreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances {

}
```


### DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles <a name="DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstancemodulestreams"

&dataociosmanagementmanagedinstancemodulestreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOsmanagementManagedInstanceModuleStreamsFilterList <a name="DataOciOsmanagementManagedInstanceModuleStreamsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstancemodulestreams"

dataociosmanagementmanagedinstancemodulestreams.NewDataOciOsmanagementManagedInstanceModuleStreamsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsmanagementManagedInstanceModuleStreamsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.get"></a>

```go
func Get(index *f64) DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference <a name="DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstancemodulestreams"

dataociosmanagementmanagedinstancemodulestreams.NewDataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList <a name="DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstancemodulestreams"

dataociosmanagementmanagedinstancemodulestreams.NewDataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.get"></a>

```go
func Get(index *f64) DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference <a name="DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstancemodulestreams"

dataociosmanagementmanagedinstancemodulestreams.NewDataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.moduleName">ModuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.profiles">Profiles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.softwareSourceId">SoftwareSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.streamName">StreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.timeModified">TimeModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.moduleName"></a>

```go
func ModuleName() *string
```

- *Type:* *string

---

##### `Profiles`<sup>Required</sup> <a name="Profiles" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.profiles"></a>

```go
func Profiles() DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList</a>

---

##### `SoftwareSourceId`<sup>Required</sup> <a name="SoftwareSourceId" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.softwareSourceId"></a>

```go
func SoftwareSourceId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.streamName"></a>

```go
func StreamName() *string
```

- *Type:* *string

---

##### `TimeModified`<sup>Required</sup> <a name="TimeModified" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.timeModified"></a>

```go
func TimeModified() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstances</a>

---


### DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList <a name="DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstancemodulestreams"

dataociosmanagementmanagedinstancemodulestreams.NewDataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.get"></a>

```go
func Get(index *f64) DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference <a name="DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociosmanagementmanagedinstancemodulestreams"

dataociosmanagementmanagedinstancemodulestreams.NewDataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.moduleName">ModuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.profileName">ProfileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.streamName">StreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.timeModified">TimeModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.moduleName"></a>

```go
func ModuleName() *string
```

- *Type:* *string

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.profileName"></a>

```go
func ProfileName() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.streamName"></a>

```go
func StreamName() *string
```

- *Type:* *string

---

##### `TimeModified`<sup>Required</sup> <a name="TimeModified" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.timeModified"></a>

```go
func TimeModified() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfilesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceModuleStreams.DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles">DataOciOsmanagementManagedInstanceModuleStreamsModuleStreamOnManagedInstancesProfiles</a>

---



