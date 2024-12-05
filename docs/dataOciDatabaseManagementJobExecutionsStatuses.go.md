# `dataOciDatabaseManagementJobExecutionsStatuses` Submodule <a name="`dataOciDatabaseManagementJobExecutionsStatuses` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementJobExecutionsStatuses <a name="DataOciDatabaseManagementJobExecutionsStatuses" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses oci_database_management_job_executions_statuses}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementjobexecutionsstatuses"

dataocidatabasemanagementjobexecutionsstatuses.NewDataOciDatabaseManagementJobExecutionsStatuses(scope Construct, id *string, config DataOciDatabaseManagementJobExecutionsStatusesConfig) DataOciDatabaseManagementJobExecutionsStatuses
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig">DataOciDatabaseManagementJobExecutionsStatusesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig">DataOciDatabaseManagementJobExecutionsStatusesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetManagedDatabaseGroupId">ResetManagedDatabaseGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetManagedDatabaseId">ResetManagedDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetId"></a>

```go
func ResetId()
```

##### `ResetManagedDatabaseGroupId` <a name="ResetManagedDatabaseGroupId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetManagedDatabaseGroupId"></a>

```go
func ResetManagedDatabaseGroupId()
```

##### `ResetManagedDatabaseId` <a name="ResetManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetManagedDatabaseId"></a>

```go
func ResetManagedDatabaseId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.resetName"></a>

```go
func ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementJobExecutionsStatuses resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementjobexecutionsstatuses"

dataocidatabasemanagementjobexecutionsstatuses.DataOciDatabaseManagementJobExecutionsStatuses_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementjobexecutionsstatuses"

dataocidatabasemanagementjobexecutionsstatuses.DataOciDatabaseManagementJobExecutionsStatuses_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementjobexecutionsstatuses"

dataocidatabasemanagementjobexecutionsstatuses.DataOciDatabaseManagementJobExecutionsStatuses_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementjobexecutionsstatuses"

dataocidatabasemanagementjobexecutionsstatuses.DataOciDatabaseManagementJobExecutionsStatuses_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseManagementJobExecutionsStatuses resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseManagementJobExecutionsStatuses to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseManagementJobExecutionsStatuses that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementJobExecutionsStatuses to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList">DataOciDatabaseManagementJobExecutionsStatusesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.jobExecutionsStatusSummaryCollection">JobExecutionsStatusSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList">DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.managedDatabaseGroupIdInput">ManagedDatabaseGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.managedDatabaseGroupId">ManagedDatabaseGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.filter"></a>

```go
func Filter() DataOciDatabaseManagementJobExecutionsStatusesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList">DataOciDatabaseManagementJobExecutionsStatusesFilterList</a>

---

##### `JobExecutionsStatusSummaryCollection`<sup>Required</sup> <a name="JobExecutionsStatusSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.jobExecutionsStatusSummaryCollection"></a>

```go
func JobExecutionsStatusSummaryCollection() DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList">DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedDatabaseGroupIdInput`<sup>Optional</sup> <a name="ManagedDatabaseGroupIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.managedDatabaseGroupIdInput"></a>

```go
func ManagedDatabaseGroupIdInput() *string
```

- *Type:* *string

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.managedDatabaseIdInput"></a>

```go
func ManagedDatabaseIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedDatabaseGroupId`<sup>Required</sup> <a name="ManagedDatabaseGroupId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.managedDatabaseGroupId"></a>

```go
func ManagedDatabaseGroupId() *string
```

- *Type:* *string

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.managedDatabaseId"></a>

```go
func ManagedDatabaseId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatuses.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementJobExecutionsStatusesConfig <a name="DataOciDatabaseManagementJobExecutionsStatusesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementjobexecutionsstatuses"

&dataocidatabasemanagementjobexecutionsstatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	EndTime: *string,
	StartTime: *string,
	Filter: interface{},
	Id: *string,
	ManagedDatabaseGroupId: *string,
	ManagedDatabaseId: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#compartment_id DataOciDatabaseManagementJobExecutionsStatuses#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.endTime">EndTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#end_time DataOciDatabaseManagementJobExecutionsStatuses#end_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.startTime">StartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#start_time DataOciDatabaseManagementJobExecutionsStatuses#start_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#id DataOciDatabaseManagementJobExecutionsStatuses#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.managedDatabaseGroupId">ManagedDatabaseGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#managed_database_group_id DataOciDatabaseManagementJobExecutionsStatuses#managed_database_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#managed_database_id DataOciDatabaseManagementJobExecutionsStatuses#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#name DataOciDatabaseManagementJobExecutionsStatuses#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#compartment_id DataOciDatabaseManagementJobExecutionsStatuses#compartment_id}.

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#end_time DataOciDatabaseManagementJobExecutionsStatuses#end_time}.

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#start_time DataOciDatabaseManagementJobExecutionsStatuses#start_time}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#filter DataOciDatabaseManagementJobExecutionsStatuses#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#id DataOciDatabaseManagementJobExecutionsStatuses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ManagedDatabaseGroupId`<sup>Optional</sup> <a name="ManagedDatabaseGroupId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.managedDatabaseGroupId"></a>

```go
ManagedDatabaseGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#managed_database_group_id DataOciDatabaseManagementJobExecutionsStatuses#managed_database_group_id}.

---

##### `ManagedDatabaseId`<sup>Optional</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.managedDatabaseId"></a>

```go
ManagedDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#managed_database_id DataOciDatabaseManagementJobExecutionsStatuses#managed_database_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#name DataOciDatabaseManagementJobExecutionsStatuses#name}.

---

### DataOciDatabaseManagementJobExecutionsStatusesFilter <a name="DataOciDatabaseManagementJobExecutionsStatusesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementjobexecutionsstatuses"

&dataocidatabasemanagementjobexecutionsstatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#name DataOciDatabaseManagementJobExecutionsStatuses#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#values DataOciDatabaseManagementJobExecutionsStatuses#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#regex DataOciDatabaseManagementJobExecutionsStatuses#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#name DataOciDatabaseManagementJobExecutionsStatuses#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#values DataOciDatabaseManagementJobExecutionsStatuses#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_job_executions_statuses#regex DataOciDatabaseManagementJobExecutionsStatuses#regex}.

---

### DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollection <a name="DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementjobexecutionsstatuses"

&dataocidatabasemanagementjobexecutionsstatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollection {

}
```


### DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItems <a name="DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementjobexecutionsstatuses"

&dataocidatabasemanagementjobexecutionsstatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementJobExecutionsStatusesFilterList <a name="DataOciDatabaseManagementJobExecutionsStatusesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementjobexecutionsstatuses"

dataocidatabasemanagementjobexecutionsstatuses.NewDataOciDatabaseManagementJobExecutionsStatusesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementJobExecutionsStatusesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference <a name="DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementjobexecutionsstatuses"

dataocidatabasemanagementjobexecutionsstatuses.NewDataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList <a name="DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementjobexecutionsstatuses"

dataocidatabasemanagementjobexecutionsstatuses.NewDataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference <a name="DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementjobexecutionsstatuses"

dataocidatabasemanagementjobexecutionsstatuses.NewDataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItems">DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItems">DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItems</a>

---


### DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList <a name="DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementjobexecutionsstatuses"

dataocidatabasemanagementjobexecutionsstatuses.NewDataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference <a name="DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementjobexecutionsstatuses"

dataocidatabasemanagementjobexecutionsstatuses.NewDataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList">DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollection">DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList">DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementJobExecutionsStatuses.DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollection">DataOciDatabaseManagementJobExecutionsStatusesJobExecutionsStatusSummaryCollection</a>

---



