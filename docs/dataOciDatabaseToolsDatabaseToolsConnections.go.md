# `dataOciDatabaseToolsDatabaseToolsConnections` Submodule <a name="`dataOciDatabaseToolsDatabaseToolsConnections` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseToolsDatabaseToolsConnections <a name="DataOciDatabaseToolsDatabaseToolsConnections" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections oci_database_tools_database_tools_connections}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

dataocidatabasetoolsdatabasetoolsconnections.NewDataOciDatabaseToolsDatabaseToolsConnections(scope Construct, id *string, config DataOciDatabaseToolsDatabaseToolsConnectionsConfig) DataOciDatabaseToolsDatabaseToolsConnections
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig">DataOciDatabaseToolsDatabaseToolsConnectionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig">DataOciDatabaseToolsDatabaseToolsConnectionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetRelatedResourceIdentifier">ResetRelatedResourceIdentifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetRuntimeSupport">ResetRuntimeSupport</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetId"></a>

```go
func ResetId()
```

##### `ResetRelatedResourceIdentifier` <a name="ResetRelatedResourceIdentifier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetRelatedResourceIdentifier"></a>

```go
func ResetRelatedResourceIdentifier()
```

##### `ResetRuntimeSupport` <a name="ResetRuntimeSupport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetRuntimeSupport"></a>

```go
func ResetRuntimeSupport()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetState"></a>

```go
func ResetState()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseToolsDatabaseToolsConnections resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

dataocidatabasetoolsdatabasetoolsconnections.DataOciDatabaseToolsDatabaseToolsConnections_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

dataocidatabasetoolsdatabasetoolsconnections.DataOciDatabaseToolsDatabaseToolsConnections_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

dataocidatabasetoolsdatabasetoolsconnections.DataOciDatabaseToolsDatabaseToolsConnections_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

dataocidatabasetoolsdatabasetoolsconnections.DataOciDatabaseToolsDatabaseToolsConnections_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseToolsDatabaseToolsConnections resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseToolsDatabaseToolsConnections to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseToolsDatabaseToolsConnections that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseToolsDatabaseToolsConnections to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.databaseToolsConnectionCollection">DatabaseToolsConnectionCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList">DataOciDatabaseToolsDatabaseToolsConnectionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.relatedResourceIdentifierInput">RelatedResourceIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.runtimeSupportInput">RuntimeSupportInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.typeInput">TypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.relatedResourceIdentifier">RelatedResourceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.runtimeSupport">RuntimeSupport</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.type">Type</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DatabaseToolsConnectionCollection`<sup>Required</sup> <a name="DatabaseToolsConnectionCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.databaseToolsConnectionCollection"></a>

```go
func DatabaseToolsConnectionCollection() DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.filter"></a>

```go
func Filter() DataOciDatabaseToolsDatabaseToolsConnectionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList">DataOciDatabaseToolsDatabaseToolsConnectionsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RelatedResourceIdentifierInput`<sup>Optional</sup> <a name="RelatedResourceIdentifierInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.relatedResourceIdentifierInput"></a>

```go
func RelatedResourceIdentifierInput() *string
```

- *Type:* *string

---

##### `RuntimeSupportInput`<sup>Optional</sup> <a name="RuntimeSupportInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.runtimeSupportInput"></a>

```go
func RuntimeSupportInput() *[]*string
```

- *Type:* *[]*string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.typeInput"></a>

```go
func TypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RelatedResourceIdentifier`<sup>Required</sup> <a name="RelatedResourceIdentifier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.relatedResourceIdentifier"></a>

```go
func RelatedResourceIdentifier() *string
```

- *Type:* *string

---

##### `RuntimeSupport`<sup>Required</sup> <a name="RuntimeSupport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.runtimeSupport"></a>

```go
func RuntimeSupport() *[]*string
```

- *Type:* *[]*string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.type"></a>

```go
func Type() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnections.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseToolsDatabaseToolsConnectionsConfig <a name="DataOciDatabaseToolsDatabaseToolsConnectionsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

&dataocidatabasetoolsdatabasetoolsconnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig {
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
	RelatedResourceIdentifier: *string,
	RuntimeSupport: *[]*string,
	State: *string,
	Type: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#compartment_id DataOciDatabaseToolsDatabaseToolsConnections#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#display_name DataOciDatabaseToolsDatabaseToolsConnections#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#id DataOciDatabaseToolsDatabaseToolsConnections#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.relatedResourceIdentifier">RelatedResourceIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#related_resource_identifier DataOciDatabaseToolsDatabaseToolsConnections#related_resource_identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.runtimeSupport">RuntimeSupport</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#runtime_support DataOciDatabaseToolsDatabaseToolsConnections#runtime_support}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#state DataOciDatabaseToolsDatabaseToolsConnections#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.type">Type</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#type DataOciDatabaseToolsDatabaseToolsConnections#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#compartment_id DataOciDatabaseToolsDatabaseToolsConnections#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#display_name DataOciDatabaseToolsDatabaseToolsConnections#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#filter DataOciDatabaseToolsDatabaseToolsConnections#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#id DataOciDatabaseToolsDatabaseToolsConnections#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RelatedResourceIdentifier`<sup>Optional</sup> <a name="RelatedResourceIdentifier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.relatedResourceIdentifier"></a>

```go
RelatedResourceIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#related_resource_identifier DataOciDatabaseToolsDatabaseToolsConnections#related_resource_identifier}.

---

##### `RuntimeSupport`<sup>Optional</sup> <a name="RuntimeSupport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.runtimeSupport"></a>

```go
RuntimeSupport *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#runtime_support DataOciDatabaseToolsDatabaseToolsConnections#runtime_support}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#state DataOciDatabaseToolsDatabaseToolsConnections#state}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsConfig.property.type"></a>

```go
Type *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#type DataOciDatabaseToolsDatabaseToolsConnections#type}.

---

### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

&dataocidatabasetoolsdatabasetoolsconnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection {

}
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

&dataocidatabasetoolsdatabasetoolsconnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems {

}
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

&dataocidatabasetoolsdatabasetoolsconnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores {

}
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

&dataocidatabasetoolsdatabasetoolsconnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent {

}
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

&dataocidatabasetoolsdatabasetoolsconnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword {

}
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

&dataocidatabasetoolsdatabasetoolsconnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks {

}
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

&dataocidatabasetoolsdatabasetoolsconnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient {

}
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

&dataocidatabasetoolsdatabasetoolsconnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword {

}
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

&dataocidatabasetoolsdatabasetoolsconnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource {

}
```


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

&dataocidatabasetoolsdatabasetoolsconnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword {

}
```


### DataOciDatabaseToolsDatabaseToolsConnectionsFilter <a name="DataOciDatabaseToolsDatabaseToolsConnectionsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

&dataocidatabasetoolsdatabasetoolsconnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#name DataOciDatabaseToolsDatabaseToolsConnections#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#values DataOciDatabaseToolsDatabaseToolsConnections#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#regex DataOciDatabaseToolsDatabaseToolsConnections#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#name DataOciDatabaseToolsDatabaseToolsConnections#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#values DataOciDatabaseToolsDatabaseToolsConnections#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_tools_database_tools_connections#regex DataOciDatabaseToolsDatabaseToolsConnections#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

dataocidatabasetoolsdatabasetoolsconnections.NewDataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.get"></a>

```go
func Get(index *f64) DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

dataocidatabasetoolsdatabasetoolsconnections.NewDataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.valueType">ValueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.valueType"></a>

```go
func ValueType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContent</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

dataocidatabasetoolsdatabasetoolsconnections.NewDataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.get"></a>

```go
func Get(index *f64) DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

dataocidatabasetoolsdatabasetoolsconnections.NewDataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.valueType">ValueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.valueType"></a>

```go
func ValueType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePassword</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

dataocidatabasetoolsdatabasetoolsconnections.NewDataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.get"></a>

```go
func Get(index *f64) DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

dataocidatabasetoolsdatabasetoolsconnections.NewDataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.keyStoreContent">KeyStoreContent</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.keyStorePassword">KeyStorePassword</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.keyStoreType">KeyStoreType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyStoreContent`<sup>Required</sup> <a name="KeyStoreContent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.keyStoreContent"></a>

```go
func KeyStoreContent() DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStoreContentList</a>

---

##### `KeyStorePassword`<sup>Required</sup> <a name="KeyStorePassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.keyStorePassword"></a>

```go
func KeyStorePassword() DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresKeyStorePasswordList</a>

---

##### `KeyStoreType`<sup>Required</sup> <a name="KeyStoreType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.keyStoreType"></a>

```go
func KeyStoreType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStores</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

dataocidatabasetoolsdatabasetoolsconnections.NewDataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

dataocidatabasetoolsdatabasetoolsconnections.NewDataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.get"></a>

```go
func Get(index *f64) DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

dataocidatabasetoolsdatabasetoolsconnections.NewDataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.relatedResourceId"></a>

```go
func RelatedResourceId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocks</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

dataocidatabasetoolsdatabasetoolsconnections.NewDataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.advancedProperties">AdvancedProperties</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.connectionString">ConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.keyStores">KeyStores</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.privateEndpointId">PrivateEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.proxyClient">ProxyClient</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.relatedResource">RelatedResource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.runtimeSupport">RuntimeSupport</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.userPassword">UserPassword</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdvancedProperties`<sup>Required</sup> <a name="AdvancedProperties" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.advancedProperties"></a>

```go
func AdvancedProperties() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.connectionString"></a>

```go
func ConnectionString() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KeyStores`<sup>Required</sup> <a name="KeyStores" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.keyStores"></a>

```go
func KeyStores() DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsKeyStoresList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.locks"></a>

```go
func Locks() DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsLocksList</a>

---

##### `PrivateEndpointId`<sup>Required</sup> <a name="PrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.privateEndpointId"></a>

```go
func PrivateEndpointId() *string
```

- *Type:* *string

---

##### `ProxyClient`<sup>Required</sup> <a name="ProxyClient" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.proxyClient"></a>

```go
func ProxyClient() DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList</a>

---

##### `RelatedResource`<sup>Required</sup> <a name="RelatedResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.relatedResource"></a>

```go
func RelatedResource() DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList</a>

---

##### `RuntimeSupport`<sup>Required</sup> <a name="RuntimeSupport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.runtimeSupport"></a>

```go
func RuntimeSupport() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `UserPassword`<sup>Required</sup> <a name="UserPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.userPassword"></a>

```go
func UserPassword() DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItems</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

dataocidatabasetoolsdatabasetoolsconnections.NewDataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.get"></a>

```go
func Get(index *f64) DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

dataocidatabasetoolsdatabasetoolsconnections.NewDataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.proxyAuthenticationType">ProxyAuthenticationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.roles">Roles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.userPassword">UserPassword</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProxyAuthenticationType`<sup>Required</sup> <a name="ProxyAuthenticationType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.proxyAuthenticationType"></a>

```go
func ProxyAuthenticationType() *string
```

- *Type:* *string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.roles"></a>

```go
func Roles() *[]*string
```

- *Type:* *[]*string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `UserPassword`<sup>Required</sup> <a name="UserPassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.userPassword"></a>

```go
func UserPassword() DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClient</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

dataocidatabasetoolsdatabasetoolsconnections.NewDataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.get"></a>

```go
func Get(index *f64) DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

dataocidatabasetoolsdatabasetoolsconnections.NewDataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.valueType">ValueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.valueType"></a>

```go
func ValueType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPasswordOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsProxyClientUserPassword</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

dataocidatabasetoolsdatabasetoolsconnections.NewDataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.get"></a>

```go
func Get(index *f64) DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

dataocidatabasetoolsdatabasetoolsconnections.NewDataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.entityType">EntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.entityType"></a>

```go
func EntityType() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsRelatedResource</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

dataocidatabasetoolsdatabasetoolsconnections.NewDataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.get"></a>

```go
func Get(index *f64) DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

dataocidatabasetoolsdatabasetoolsconnections.NewDataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.secretId">SecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.valueType">ValueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.secretId"></a>

```go
func SecretId() *string
```

- *Type:* *string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.valueType"></a>

```go
func ValueType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPasswordOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsUserPassword</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

dataocidatabasetoolsdatabasetoolsconnections.NewDataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.get"></a>

```go
func Get(index *f64) DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

dataocidatabasetoolsdatabasetoolsconnections.NewDataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection">DataOciDatabaseToolsDatabaseToolsConnectionsDatabaseToolsConnectionCollection</a>

---


### DataOciDatabaseToolsDatabaseToolsConnectionsFilterList <a name="DataOciDatabaseToolsDatabaseToolsConnectionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

dataocidatabasetoolsdatabasetoolsconnections.NewDataOciDatabaseToolsDatabaseToolsConnectionsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseToolsDatabaseToolsConnectionsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference <a name="DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasetoolsdatabasetoolsconnections"

dataocidatabasetoolsdatabasetoolsconnections.NewDataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseToolsDatabaseToolsConnections.DataOciDatabaseToolsDatabaseToolsConnectionsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



