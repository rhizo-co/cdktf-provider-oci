# `dataOciDatabaseManagementExternalDbSystemConnectors` Submodule <a name="`dataOciDatabaseManagementExternalDbSystemConnectors` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalDbSystemConnectors <a name="DataOciDatabaseManagementExternalDbSystemConnectors" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors oci_database_management_external_db_system_connectors}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbsystemconnectors"

dataocidatabasemanagementexternaldbsystemconnectors.NewDataOciDatabaseManagementExternalDbSystemConnectors(scope Construct, id *string, config DataOciDatabaseManagementExternalDbSystemConnectorsConfig) DataOciDatabaseManagementExternalDbSystemConnectors
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig">DataOciDatabaseManagementExternalDbSystemConnectorsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig">DataOciDatabaseManagementExternalDbSystemConnectorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetExternalDbSystemId">ResetExternalDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetExternalDbSystemId` <a name="ResetExternalDbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetExternalDbSystemId"></a>

```go
func ResetExternalDbSystemId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalDbSystemConnectors resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbsystemconnectors"

dataocidatabasemanagementexternaldbsystemconnectors.DataOciDatabaseManagementExternalDbSystemConnectors_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbsystemconnectors"

dataocidatabasemanagementexternaldbsystemconnectors.DataOciDatabaseManagementExternalDbSystemConnectors_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbsystemconnectors"

dataocidatabasemanagementexternaldbsystemconnectors.DataOciDatabaseManagementExternalDbSystemConnectors_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbsystemconnectors"

dataocidatabasemanagementexternaldbsystemconnectors.DataOciDatabaseManagementExternalDbSystemConnectors_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalDbSystemConnectors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseManagementExternalDbSystemConnectors to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseManagementExternalDbSystemConnectors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalDbSystemConnectors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.externalDbSystemConnectorCollection">ExternalDbSystemConnectorCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList">DataOciDatabaseManagementExternalDbSystemConnectorsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.externalDbSystemIdInput">ExternalDbSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.externalDbSystemId">ExternalDbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ExternalDbSystemConnectorCollection`<sup>Required</sup> <a name="ExternalDbSystemConnectorCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.externalDbSystemConnectorCollection"></a>

```go
func ExternalDbSystemConnectorCollection() DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.filter"></a>

```go
func Filter() DataOciDatabaseManagementExternalDbSystemConnectorsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList">DataOciDatabaseManagementExternalDbSystemConnectorsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExternalDbSystemIdInput`<sup>Optional</sup> <a name="ExternalDbSystemIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.externalDbSystemIdInput"></a>

```go
func ExternalDbSystemIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExternalDbSystemId`<sup>Required</sup> <a name="ExternalDbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.externalDbSystemId"></a>

```go
func ExternalDbSystemId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectors.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalDbSystemConnectorsConfig <a name="DataOciDatabaseManagementExternalDbSystemConnectorsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbsystemconnectors"

&dataocidatabasemanagementexternaldbsystemconnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	ExternalDbSystemId: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#compartment_id DataOciDatabaseManagementExternalDbSystemConnectors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#display_name DataOciDatabaseManagementExternalDbSystemConnectors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.externalDbSystemId">ExternalDbSystemId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#external_db_system_id DataOciDatabaseManagementExternalDbSystemConnectors#external_db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#id DataOciDatabaseManagementExternalDbSystemConnectors#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#compartment_id DataOciDatabaseManagementExternalDbSystemConnectors#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#display_name DataOciDatabaseManagementExternalDbSystemConnectors#display_name}.

---

##### `ExternalDbSystemId`<sup>Optional</sup> <a name="ExternalDbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.externalDbSystemId"></a>

```go
ExternalDbSystemId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#external_db_system_id DataOciDatabaseManagementExternalDbSystemConnectors#external_db_system_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#filter DataOciDatabaseManagementExternalDbSystemConnectors#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#id DataOciDatabaseManagementExternalDbSystemConnectors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbsystemconnectors"

&dataocidatabasemanagementexternaldbsystemconnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection {

}
```


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbsystemconnectors"

&dataocidatabasemanagementexternaldbsystemconnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems {

}
```


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbsystemconnectors"

&dataocidatabasemanagementexternaldbsystemconnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo {

}
```


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbsystemconnectors"

&dataocidatabasemanagementexternaldbsystemconnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials {

}
```


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbsystemconnectors"

&dataocidatabasemanagementexternaldbsystemconnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString {

}
```


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbsystemconnectors"

&dataocidatabasemanagementexternaldbsystemconnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential {

}
```


### DataOciDatabaseManagementExternalDbSystemConnectorsFilter <a name="DataOciDatabaseManagementExternalDbSystemConnectorsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbsystemconnectors"

&dataocidatabasemanagementexternaldbsystemconnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#name DataOciDatabaseManagementExternalDbSystemConnectors#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#values DataOciDatabaseManagementExternalDbSystemConnectors#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#regex DataOciDatabaseManagementExternalDbSystemConnectors#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#name DataOciDatabaseManagementExternalDbSystemConnectors#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#values DataOciDatabaseManagementExternalDbSystemConnectors#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_db_system_connectors#regex DataOciDatabaseManagementExternalDbSystemConnectors#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbsystemconnectors"

dataocidatabasemanagementexternaldbsystemconnectors.NewDataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbsystemconnectors"

dataocidatabasemanagementexternaldbsystemconnectors.NewDataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.credentialName">CredentialName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.credentialType">CredentialType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.namedCredentialId">NamedCredentialId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.passwordSecretId">PasswordSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.sslSecretId">SslSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CredentialName`<sup>Required</sup> <a name="CredentialName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.credentialName"></a>

```go
func CredentialName() *string
```

- *Type:* *string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.credentialType"></a>

```go
func CredentialType() *string
```

- *Type:* *string

---

##### `NamedCredentialId`<sup>Required</sup> <a name="NamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.namedCredentialId"></a>

```go
func NamedCredentialId() *string
```

- *Type:* *string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.passwordSecretId"></a>

```go
func PasswordSecretId() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `SslSecretId`<sup>Required</sup> <a name="SslSecretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.sslSecretId"></a>

```go
func SslSecretId() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentials</a>

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbsystemconnectors"

dataocidatabasemanagementexternaldbsystemconnectors.NewDataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbsystemconnectors"

dataocidatabasemanagementexternaldbsystemconnectors.NewDataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.hosts">Hosts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.service">Service</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.hosts"></a>

```go
func Hosts() *[]*string
```

- *Type:* *[]*string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionString</a>

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbsystemconnectors"

dataocidatabasemanagementexternaldbsystemconnectors.NewDataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbsystemconnectors"

dataocidatabasemanagementexternaldbsystemconnectors.NewDataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.credentialType">CredentialType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.namedCredentialId">NamedCredentialId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.passwordSecretId">PasswordSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CredentialType`<sup>Required</sup> <a name="CredentialType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.credentialType"></a>

```go
func CredentialType() *string
```

- *Type:* *string

---

##### `NamedCredentialId`<sup>Required</sup> <a name="NamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.namedCredentialId"></a>

```go
func NamedCredentialId() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PasswordSecretId`<sup>Required</sup> <a name="PasswordSecretId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.passwordSecretId"></a>

```go
func PasswordSecretId() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredential</a>

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbsystemconnectors"

dataocidatabasemanagementexternaldbsystemconnectors.NewDataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbsystemconnectors"

dataocidatabasemanagementexternaldbsystemconnectors.NewDataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.componentType">ComponentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.connectionCredentials">ConnectionCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.connectionString">ConnectionString</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.databaseCredential">DatabaseCredential</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComponentType`<sup>Required</sup> <a name="ComponentType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.componentType"></a>

```go
func ComponentType() *string
```

- *Type:* *string

---

##### `ConnectionCredentials`<sup>Required</sup> <a name="ConnectionCredentials" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.connectionCredentials"></a>

```go
func ConnectionCredentials() DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionCredentialsList</a>

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.connectionString"></a>

```go
func ConnectionString() DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoConnectionStringList</a>

---

##### `DatabaseCredential`<sup>Required</sup> <a name="DatabaseCredential" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.databaseCredential"></a>

```go
func DatabaseCredential() DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoDatabaseCredentialList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfo</a>

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbsystemconnectors"

dataocidatabasemanagementexternaldbsystemconnectors.NewDataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbsystemconnectors"

dataocidatabasemanagementexternaldbsystemconnectors.NewDataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.agentId">AgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectionFailureMessage">ConnectionFailureMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectionInfo">ConnectionInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectionStatus">ConnectionStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectorType">ConnectorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.externalDbSystemId">ExternalDbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.timeConnectionStatusLastUpdated">TimeConnectionStatusLastUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.agentId"></a>

```go
func AgentId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConnectionFailureMessage`<sup>Required</sup> <a name="ConnectionFailureMessage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectionFailureMessage"></a>

```go
func ConnectionFailureMessage() *string
```

- *Type:* *string

---

##### `ConnectionInfo`<sup>Required</sup> <a name="ConnectionInfo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectionInfo"></a>

```go
func ConnectionInfo() DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsConnectionInfoList</a>

---

##### `ConnectionStatus`<sup>Required</sup> <a name="ConnectionStatus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectionStatus"></a>

```go
func ConnectionStatus() *string
```

- *Type:* *string

---

##### `ConnectorType`<sup>Required</sup> <a name="ConnectorType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.connectorType"></a>

```go
func ConnectorType() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExternalDbSystemId`<sup>Required</sup> <a name="ExternalDbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.externalDbSystemId"></a>

```go
func ExternalDbSystemId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeConnectionStatusLastUpdated`<sup>Required</sup> <a name="TimeConnectionStatusLastUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.timeConnectionStatusLastUpdated"></a>

```go
func TimeConnectionStatusLastUpdated() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItems</a>

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbsystemconnectors"

dataocidatabasemanagementexternaldbsystemconnectors.NewDataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbsystemconnectors"

dataocidatabasemanagementexternaldbsystemconnectors.NewDataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection">DataOciDatabaseManagementExternalDbSystemConnectorsExternalDbSystemConnectorCollection</a>

---


### DataOciDatabaseManagementExternalDbSystemConnectorsFilterList <a name="DataOciDatabaseManagementExternalDbSystemConnectorsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbsystemconnectors"

dataocidatabasemanagementexternaldbsystemconnectors.NewDataOciDatabaseManagementExternalDbSystemConnectorsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementExternalDbSystemConnectorsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference <a name="DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternaldbsystemconnectors"

dataocidatabasemanagementexternaldbsystemconnectors.NewDataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalDbSystemConnectors.DataOciDatabaseManagementExternalDbSystemConnectorsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



