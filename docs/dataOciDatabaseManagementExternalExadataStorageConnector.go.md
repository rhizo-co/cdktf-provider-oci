# `dataOciDatabaseManagementExternalExadataStorageConnector` Submodule <a name="`dataOciDatabaseManagementExternalExadataStorageConnector` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalExadataStorageConnector <a name="DataOciDatabaseManagementExternalExadataStorageConnector" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connector oci_database_management_external_exadata_storage_connector}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageconnector"

dataocidatabasemanagementexternalexadatastorageconnector.NewDataOciDatabaseManagementExternalExadataStorageConnector(scope Construct, id *string, config DataOciDatabaseManagementExternalExadataStorageConnectorConfig) DataOciDatabaseManagementExternalExadataStorageConnector
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorConfig">DataOciDatabaseManagementExternalExadataStorageConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorConfig">DataOciDatabaseManagementExternalExadataStorageConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataStorageConnector resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageconnector"

dataocidatabasemanagementexternalexadatastorageconnector.DataOciDatabaseManagementExternalExadataStorageConnector_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageconnector"

dataocidatabasemanagementexternalexadatastorageconnector.DataOciDatabaseManagementExternalExadataStorageConnector_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageconnector"

dataocidatabasemanagementexternalexadatastorageconnector.DataOciDatabaseManagementExternalExadataStorageConnector_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageconnector"

dataocidatabasemanagementexternalexadatastorageconnector.DataOciDatabaseManagementExternalExadataStorageConnector_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalExadataStorageConnector resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseManagementExternalExadataStorageConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseManagementExternalExadataStorageConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalExadataStorageConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.additionalDetails">AdditionalDetails</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.agentId">AgentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.connectionUri">ConnectionUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.connectorName">ConnectorName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.credentialInfo">CredentialInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList">DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.exadataInfrastructureId">ExadataInfrastructureId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.internalId">InternalId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.storageServerId">StorageServerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.externalExadataStorageConnectorIdInput">ExternalExadataStorageConnectorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.externalExadataStorageConnectorId">ExternalExadataStorageConnectorId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AdditionalDetails`<sup>Required</sup> <a name="AdditionalDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.additionalDetails"></a>

```go
func AdditionalDetails() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `AgentId`<sup>Required</sup> <a name="AgentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.agentId"></a>

```go
func AgentId() *string
```

- *Type:* *string

---

##### `ConnectionUri`<sup>Required</sup> <a name="ConnectionUri" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.connectionUri"></a>

```go
func ConnectionUri() *string
```

- *Type:* *string

---

##### `ConnectorName`<sup>Required</sup> <a name="ConnectorName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.connectorName"></a>

```go
func ConnectorName() *string
```

- *Type:* *string

---

##### `CredentialInfo`<sup>Required</sup> <a name="CredentialInfo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.credentialInfo"></a>

```go
func CredentialInfo() DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList">DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExadataInfrastructureId`<sup>Required</sup> <a name="ExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.exadataInfrastructureId"></a>

```go
func ExadataInfrastructureId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalId`<sup>Required</sup> <a name="InternalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.internalId"></a>

```go
func InternalId() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StorageServerId`<sup>Required</sup> <a name="StorageServerId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.storageServerId"></a>

```go
func StorageServerId() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `ExternalExadataStorageConnectorIdInput`<sup>Optional</sup> <a name="ExternalExadataStorageConnectorIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.externalExadataStorageConnectorIdInput"></a>

```go
func ExternalExadataStorageConnectorIdInput() *string
```

- *Type:* *string

---

##### `ExternalExadataStorageConnectorId`<sup>Required</sup> <a name="ExternalExadataStorageConnectorId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.externalExadataStorageConnectorId"></a>

```go
func ExternalExadataStorageConnectorId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnector.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalExadataStorageConnectorConfig <a name="DataOciDatabaseManagementExternalExadataStorageConnectorConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageconnector"

&dataocidatabasemanagementexternalexadatastorageconnector.DataOciDatabaseManagementExternalExadataStorageConnectorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ExternalExadataStorageConnectorId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorConfig.property.externalExadataStorageConnectorId">ExternalExadataStorageConnectorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connector#external_exadata_storage_connector_id DataOciDatabaseManagementExternalExadataStorageConnector#external_exadata_storage_connector_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ExternalExadataStorageConnectorId`<sup>Required</sup> <a name="ExternalExadataStorageConnectorId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorConfig.property.externalExadataStorageConnectorId"></a>

```go
ExternalExadataStorageConnectorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_exadata_storage_connector#external_exadata_storage_connector_id DataOciDatabaseManagementExternalExadataStorageConnector#external_exadata_storage_connector_id}.

---

### DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfo <a name="DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfo" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageconnector"

&dataocidatabasemanagementexternalexadatastorageconnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfo {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList <a name="DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageconnector"

dataocidatabasemanagementexternalexadatastorageconnector.NewDataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference <a name="DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementexternalexadatastorageconnector"

dataocidatabasemanagementexternalexadatastorageconnector.NewDataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.sslTrustStoreLocation">SslTrustStoreLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.sslTrustStorePassword">SslTrustStorePassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.sslTrustStoreType">SslTrustStoreType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfo">DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `SslTrustStoreLocation`<sup>Required</sup> <a name="SslTrustStoreLocation" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.sslTrustStoreLocation"></a>

```go
func SslTrustStoreLocation() *string
```

- *Type:* *string

---

##### `SslTrustStorePassword`<sup>Required</sup> <a name="SslTrustStorePassword" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.sslTrustStorePassword"></a>

```go
func SslTrustStorePassword() *string
```

- *Type:* *string

---

##### `SslTrustStoreType`<sup>Required</sup> <a name="SslTrustStoreType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.sslTrustStoreType"></a>

```go
func SslTrustStoreType() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalExadataStorageConnector.DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfo">DataOciDatabaseManagementExternalExadataStorageConnectorCredentialInfo</a>

---



