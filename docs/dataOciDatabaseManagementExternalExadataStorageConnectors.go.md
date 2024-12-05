# `dataOciDatabaseManagementExternalExadataStorageConnectors` Submodule <a name="`dataOciDatabaseManagementExternalExadataStorageConnectors` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalExadataStorageConnectors <a name="DataOciDatabaseManagementExternalExadataStorageConnectors" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors oci_database_management_external_exadata_storage_connectors}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageconnectors"

dataocidatabasemanagementexternalexadatastorageconnectors.NewDataOciDatabaseManagementExternalExadataStorageConnectors(scope Construct, id *string, config DataOciDatabaseManagementExternalExadataStorageConnectorsConfig) DataOciDatabaseManagementExternalExadataStorageConnectors
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig">DataOciDatabaseManagementExternalExadataStorageConnectorsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig">DataOciDatabaseManagementExternalExadataStorageConnectorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataStorageConnectors resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageconnectors"

dataocidatabasemanagementexternalexadatastorageconnectors.DataOciDatabaseManagementExternalExadataStorageConnectors_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageconnectors"

dataocidatabasemanagementexternalexadatastorageconnectors.DataOciDatabaseManagementExternalExadataStorageConnectors_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageconnectors"

dataocidatabasemanagementexternalexadatastorageconnectors.DataOciDatabaseManagementExternalExadataStorageConnectors_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageconnectors"

dataocidatabasemanagementexternalexadatastorageconnectors.DataOciDatabaseManagementExternalExadataStorageConnectors_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataStorageConnectors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseManagementExternalExadataStorageConnectors to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseManagementExternalExadataStorageConnectors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalExadataStorageConnectors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.externalExadataStorageConnectorCollection">ExternalExadataStorageConnectorCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList">DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.externalExadataInfrastructureIdInput">ExternalExadataInfrastructureIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.externalExadataInfrastructureId">ExternalExadataInfrastructureId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ExternalExadataStorageConnectorCollection`<sup>Required</sup> <a name="ExternalExadataStorageConnectorCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.externalExadataStorageConnectorCollection"></a>

```go
func ExternalExadataStorageConnectorCollection() DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.filter"></a>

```go
func Filter() DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList">DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExternalExadataInfrastructureIdInput`<sup>Optional</sup> <a name="ExternalExadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.externalExadataInfrastructureIdInput"></a>

```go
func ExternalExadataInfrastructureIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExternalExadataInfrastructureId`<sup>Required</sup> <a name="ExternalExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.externalExadataInfrastructureId"></a>

```go
func ExternalExadataInfrastructureId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectors.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalExadataStorageConnectorsConfig <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageconnectors"

&dataocidatabasemanagementexternalexadatastorageconnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	ExternalExadataInfrastructureId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#compartment_id DataOciDatabaseManagementExternalExadataStorageConnectors#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.externalExadataInfrastructureId">ExternalExadataInfrastructureId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#external_exadata_infrastructure_id DataOciDatabaseManagementExternalExadataStorageConnectors#external_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#display_name DataOciDatabaseManagementExternalExadataStorageConnectors#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#id DataOciDatabaseManagementExternalExadataStorageConnectors#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#compartment_id DataOciDatabaseManagementExternalExadataStorageConnectors#compartment_id}.

---

##### `ExternalExadataInfrastructureId`<sup>Required</sup> <a name="ExternalExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.externalExadataInfrastructureId"></a>

```go
ExternalExadataInfrastructureId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#external_exadata_infrastructure_id DataOciDatabaseManagementExternalExadataStorageConnectors#external_exadata_infrastructure_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#display_name DataOciDatabaseManagementExternalExadataStorageConnectors#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#filter DataOciDatabaseManagementExternalExadataStorageConnectors#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#id DataOciDatabaseManagementExternalExadataStorageConnectors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollection <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageconnectors"

&dataocidatabasemanagementexternalexadatastorageconnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollection {

}
```


### DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItems <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageconnectors"

&dataocidatabasemanagementexternalexadatastorageconnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItems {

}
```


### DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfo <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageconnectors"

&dataocidatabasemanagementexternalexadatastorageconnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfo {

}
```


### DataOciDatabaseManagementExternalExadataStorageConnectorsFilter <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageconnectors"

&dataocidatabasemanagementexternalexadatastorageconnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#name DataOciDatabaseManagementExternalExadataStorageConnectors#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#values DataOciDatabaseManagementExternalExadataStorageConnectors#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#regex DataOciDatabaseManagementExternalExadataStorageConnectors#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#name DataOciDatabaseManagementExternalExadataStorageConnectors#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#values DataOciDatabaseManagementExternalExadataStorageConnectors#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connectors#regex DataOciDatabaseManagementExternalExadataStorageConnectors#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageconnectors"

dataocidatabasemanagementexternalexadatastorageconnectors.NewDataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageconnectors"

dataocidatabasemanagementexternalexadatastorageconnectors.NewDataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.sslTrustStoreLocation">SslTrustStoreLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.sslTrustStorePassword">SslTrustStorePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.sslTrustStoreType">SslTrustStoreType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfo">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `SslTrustStoreLocation`<sup>Required</sup> <a name="SslTrustStoreLocation" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.sslTrustStoreLocation"></a>

```go
func SslTrustStoreLocation() *string
```

- *Type:* *string

---

##### `SslTrustStorePassword`<sup>Required</sup> <a name="SslTrustStorePassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.sslTrustStorePassword"></a>

```go
func SslTrustStorePassword() *string
```

- *Type:* *string

---

##### `SslTrustStoreType`<sup>Required</sup> <a name="SslTrustStoreType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.sslTrustStoreType"></a>

```go
func SslTrustStoreType() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfo">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfo</a>

---


### DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageconnectors"

dataocidatabasemanagementexternalexadatastorageconnectors.NewDataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageconnectors"

dataocidatabasemanagementexternalexadatastorageconnectors.NewDataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.additionalDetails">AdditionalDetails</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.agentId">AgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.connectionUri">ConnectionUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.connectorName">ConnectorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.credentialInfo">CredentialInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.exadataInfrastructureId">ExadataInfrastructureId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.internalId">InternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.storageServerId">StorageServerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItems">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalDetails`<sup>Required</sup> <a name="AdditionalDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.additionalDetails"></a>

```go
func AdditionalDetails() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.agentId"></a>

```go
func AgentId() *string
```

- *Type:* *string

---

##### `ConnectionUri`<sup>Required</sup> <a name="ConnectionUri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.connectionUri"></a>

```go
func ConnectionUri() *string
```

- *Type:* *string

---

##### `ConnectorName`<sup>Required</sup> <a name="ConnectorName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.connectorName"></a>

```go
func ConnectorName() *string
```

- *Type:* *string

---

##### `CredentialInfo`<sup>Required</sup> <a name="CredentialInfo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.credentialInfo"></a>

```go
func CredentialInfo() DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsCredentialInfoList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExadataInfrastructureId`<sup>Required</sup> <a name="ExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.exadataInfrastructureId"></a>

```go
func ExadataInfrastructureId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalId`<sup>Required</sup> <a name="InternalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.internalId"></a>

```go
func InternalId() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StorageServerId`<sup>Required</sup> <a name="StorageServerId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.storageServerId"></a>

```go
func StorageServerId() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItems">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItems</a>

---


### DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageconnectors"

dataocidatabasemanagementexternalexadatastorageconnectors.NewDataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageconnectors"

dataocidatabasemanagementexternalexadatastorageconnectors.NewDataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollection">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollection">DataOciDatabaseManagementExternalExadataStorageConnectorsExternalExadataStorageConnectorCollection</a>

---


### DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageconnectors"

dataocidatabasemanagementexternalexadatastorageconnectors.NewDataOciDatabaseManagementExternalExadataStorageConnectorsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference <a name="DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageconnectors"

dataocidatabasemanagementexternalexadatastorageconnectors.NewDataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnectors.DataOciDatabaseManagementExternalExadataStorageConnectorsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



