# `dataOciDatabaseToolsDatabaseToolsPrivateEndpoints` Submodule <a name="`dataOciDatabaseToolsDatabaseToolsPrivateEndpoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseToolsDatabaseToolsPrivateEndpoints <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpoints" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints oci_database_tools_database_tools_private_endpoints}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsprivateendpoints"

dataocidatabasetoolsdatabasetoolsprivateendpoints.NewDataOciDatabaseToolsDatabaseToolsPrivateEndpoints(scope Construct, id *string, config DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig) DataOciDatabaseToolsDatabaseToolsPrivateEndpoints
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetEndpointServiceId">ResetEndpointServiceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEndpointServiceId` <a name="ResetEndpointServiceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetEndpointServiceId"></a>

```go
func ResetEndpointServiceId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetState"></a>

```go
func ResetState()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.resetSubnetId"></a>

```go
func ResetSubnetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseToolsDatabaseToolsPrivateEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsprivateendpoints"

dataocidatabasetoolsdatabasetoolsprivateendpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsprivateendpoints"

dataocidatabasetoolsdatabasetoolsprivateendpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsprivateendpoints"

dataocidatabasetoolsdatabasetoolsprivateendpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsprivateendpoints"

dataocidatabasetoolsdatabasetoolsprivateendpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseToolsDatabaseToolsPrivateEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseToolsDatabaseToolsPrivateEndpoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseToolsDatabaseToolsPrivateEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseToolsDatabaseToolsPrivateEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.databaseToolsPrivateEndpointCollection">DatabaseToolsPrivateEndpointCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.endpointServiceIdInput">EndpointServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.endpointServiceId">EndpointServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DatabaseToolsPrivateEndpointCollection`<sup>Required</sup> <a name="DatabaseToolsPrivateEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.databaseToolsPrivateEndpointCollection"></a>

```go
func DatabaseToolsPrivateEndpointCollection() DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.filter"></a>

```go
func Filter() DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EndpointServiceIdInput`<sup>Optional</sup> <a name="EndpointServiceIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.endpointServiceIdInput"></a>

```go
func EndpointServiceIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EndpointServiceId`<sup>Required</sup> <a name="EndpointServiceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.endpointServiceId"></a>

```go
func EndpointServiceId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpoints.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsprivateendpoints"

&dataocidatabasetoolsdatabasetoolsprivateendpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	EndpointServiceId: *string,
	Filter: interface{},
	Id: *string,
	State: *string,
	SubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#compartment_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#display_name DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.endpointServiceId">EndpointServiceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#endpoint_service_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#endpoint_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#state DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#subnet_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#subnet_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#compartment_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#display_name DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#display_name}.

---

##### `EndpointServiceId`<sup>Optional</sup> <a name="EndpointServiceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.endpointServiceId"></a>

```go
EndpointServiceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#endpoint_service_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#endpoint_service_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#filter DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#state DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#state}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#subnet_id DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#subnet_id}.

---

### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsprivateendpoints"

&dataocidatabasetoolsdatabasetoolsprivateendpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection {

}
```


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsprivateendpoints"

&dataocidatabasetoolsdatabasetoolsprivateendpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems {

}
```


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsprivateendpoints"

&dataocidatabasetoolsdatabasetoolsprivateendpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks {

}
```


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsprivateendpoints"

&dataocidatabasetoolsdatabasetoolsprivateendpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration {

}
```


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsprivateendpoints"

&dataocidatabasetoolsdatabasetoolsprivateendpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps {

}
```


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsprivateendpoints"

&dataocidatabasetoolsdatabasetoolsprivateendpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#name DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#values DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#regex DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#name DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#values DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_private_endpoints#regex DataOciDatabaseToolsDatabaseToolsPrivateEndpoints#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsprivateendpoints"

dataocidatabasetoolsdatabasetoolsprivateendpoints.NewDataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsprivateendpoints"

dataocidatabasetoolsdatabasetoolsprivateendpoints.NewDataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.get"></a>

```go
func Get(index *f64) DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsprivateendpoints"

dataocidatabasetoolsdatabasetoolsprivateendpoints.NewDataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.relatedResourceId"></a>

```go
func RelatedResourceId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocks</a>

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsprivateendpoints"

dataocidatabasetoolsdatabasetoolsprivateendpoints.NewDataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.additionalFqdns">AdditionalFqdns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.endpointFqdn">EndpointFqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.endpointServiceId">EndpointServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.privateEndpointIp">PrivateEndpointIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.privateEndpointVnicId">PrivateEndpointVnicId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.reverseConnectionConfiguration">ReverseConnectionConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.vcnId">VcnId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalFqdns`<sup>Required</sup> <a name="AdditionalFqdns" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.additionalFqdns"></a>

```go
func AdditionalFqdns() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EndpointFqdn`<sup>Required</sup> <a name="EndpointFqdn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.endpointFqdn"></a>

```go
func EndpointFqdn() *string
```

- *Type:* *string

---

##### `EndpointServiceId`<sup>Required</sup> <a name="EndpointServiceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.endpointServiceId"></a>

```go
func EndpointServiceId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.locks"></a>

```go
func Locks() DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsLocksList</a>

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateEndpointIp`<sup>Required</sup> <a name="PrivateEndpointIp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.privateEndpointIp"></a>

```go
func PrivateEndpointIp() *string
```

- *Type:* *string

---

##### `PrivateEndpointVnicId`<sup>Required</sup> <a name="PrivateEndpointVnicId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.privateEndpointVnicId"></a>

```go
func PrivateEndpointVnicId() *string
```

- *Type:* *string

---

##### `ReverseConnectionConfiguration`<sup>Required</sup> <a name="ReverseConnectionConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.reverseConnectionConfiguration"></a>

```go
func ReverseConnectionConfiguration() DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.vcnId"></a>

```go
func VcnId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItems</a>

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsprivateendpoints"

dataocidatabasetoolsdatabasetoolsprivateendpoints.NewDataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.get"></a>

```go
func Get(index *f64) DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsprivateendpoints"

dataocidatabasetoolsdatabasetoolsprivateendpoints.NewDataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.reverseConnectionsSourceIps">ReverseConnectionsSourceIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReverseConnectionsSourceIps`<sup>Required</sup> <a name="ReverseConnectionsSourceIps" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.reverseConnectionsSourceIps"></a>

```go
func ReverseConnectionsSourceIps() DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfiguration</a>

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsprivateendpoints"

dataocidatabasetoolsdatabasetoolsprivateendpoints.NewDataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsprivateendpoints"

dataocidatabasetoolsdatabasetoolsprivateendpoints.NewDataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.sourceIp">SourceIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceIp`<sup>Required</sup> <a name="SourceIp" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.sourceIp"></a>

```go
func SourceIp() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIpsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsReverseConnectionConfigurationReverseConnectionsSourceIps</a>

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsprivateendpoints"

dataocidatabasetoolsdatabasetoolsprivateendpoints.NewDataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.get"></a>

```go
func Get(index *f64) DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsprivateendpoints"

dataocidatabasetoolsdatabasetoolsprivateendpoints.NewDataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection">DataOciDatabaseToolsDatabaseToolsPrivateEndpointsDatabaseToolsPrivateEndpointCollection</a>

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsprivateendpoints"

dataocidatabasetoolsdatabasetoolsprivateendpoints.NewDataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference <a name="DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsprivateendpoints"

dataocidatabasetoolsdatabasetoolsprivateendpoints.NewDataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsPrivateEndpoints.DataOciDatabaseToolsDatabaseToolsPrivateEndpointsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



