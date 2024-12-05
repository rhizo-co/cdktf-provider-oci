# `dataOciDatabaseManagementManagedDatabaseAddmTask` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseAddmTask` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseAddmTask <a name="DataOciDatabaseManagementManagedDatabaseAddmTask" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_addm_task oci_database_management_managed_database_addm_task}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseaddmtask"

dataocidatabasemanagementmanageddatabaseaddmtask.NewDataOciDatabaseManagementManagedDatabaseAddmTask(scope Construct, id *string, config DataOciDatabaseManagementManagedDatabaseAddmTaskConfig) DataOciDatabaseManagementManagedDatabaseAddmTask
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskConfig">DataOciDatabaseManagementManagedDatabaseAddmTaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskConfig">DataOciDatabaseManagementManagedDatabaseAddmTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseAddmTask resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseaddmtask"

dataocidatabasemanagementmanageddatabaseaddmtask.DataOciDatabaseManagementManagedDatabaseAddmTask_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseaddmtask"

dataocidatabasemanagementmanageddatabaseaddmtask.DataOciDatabaseManagementManagedDatabaseAddmTask_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseaddmtask"

dataocidatabasemanagementmanageddatabaseaddmtask.DataOciDatabaseManagementManagedDatabaseAddmTask_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseaddmtask"

dataocidatabasemanagementmanageddatabaseaddmtask.DataOciDatabaseManagementManagedDatabaseAddmTask_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseAddmTask resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseAddmTask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseManagementManagedDatabaseAddmTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_addm_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseAddmTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList">DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.timeEndInput">TimeEndInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.timeStartInput">TimeStartInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.timeEnd">TimeEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.timeStart">TimeStart</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.items"></a>

```go
func Items() DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList">DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.managedDatabaseIdInput"></a>

```go
func ManagedDatabaseIdInput() *string
```

- *Type:* *string

---

##### `TimeEndInput`<sup>Optional</sup> <a name="TimeEndInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.timeEndInput"></a>

```go
func TimeEndInput() *string
```

- *Type:* *string

---

##### `TimeStartInput`<sup>Optional</sup> <a name="TimeStartInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.timeStartInput"></a>

```go
func TimeStartInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.managedDatabaseId"></a>

```go
func ManagedDatabaseId() *string
```

- *Type:* *string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.timeEnd"></a>

```go
func TimeEnd() *string
```

- *Type:* *string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.timeStart"></a>

```go
func TimeStart() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTask.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseAddmTaskConfig <a name="DataOciDatabaseManagementManagedDatabaseAddmTaskConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseaddmtask"

&dataocidatabasemanagementmanageddatabaseaddmtask.DataOciDatabaseManagementManagedDatabaseAddmTaskConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedDatabaseId: *string,
	TimeEnd: *string,
	TimeStart: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_addm_task#managed_database_id DataOciDatabaseManagementManagedDatabaseAddmTask#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskConfig.property.timeEnd">TimeEnd</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_addm_task#time_end DataOciDatabaseManagementManagedDatabaseAddmTask#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskConfig.property.timeStart">TimeStart</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_addm_task#time_start DataOciDatabaseManagementManagedDatabaseAddmTask#time_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_addm_task#id DataOciDatabaseManagementManagedDatabaseAddmTask#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskConfig.property.managedDatabaseId"></a>

```go
ManagedDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_addm_task#managed_database_id DataOciDatabaseManagementManagedDatabaseAddmTask#managed_database_id}.

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskConfig.property.timeEnd"></a>

```go
TimeEnd *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_addm_task#time_end DataOciDatabaseManagementManagedDatabaseAddmTask#time_end}.

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskConfig.property.timeStart"></a>

```go
TimeStart *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_addm_task#time_start DataOciDatabaseManagementManagedDatabaseAddmTask#time_start}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_addm_task#id DataOciDatabaseManagementManagedDatabaseAddmTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementManagedDatabaseAddmTaskItems <a name="DataOciDatabaseManagementManagedDatabaseAddmTaskItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseaddmtask"

&dataocidatabasemanagementmanageddatabaseaddmtask.DataOciDatabaseManagementManagedDatabaseAddmTaskItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList <a name="DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseaddmtask"

dataocidatabasemanagementmanageddatabaseaddmtask.NewDataOciDatabaseManagementManagedDatabaseAddmTaskItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseaddmtask"

dataocidatabasemanagementmanageddatabaseaddmtask.NewDataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.property.beginSnapshotId">BeginSnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.property.dbUser">DbUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.property.endSnapshotId">EndSnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.property.endSnapshotTime">EndSnapshotTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.property.findings">Findings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.property.howCreated">HowCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.property.startSnapshotTime">StartSnapshotTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.property.taskId">TaskId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.property.taskName">TaskName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItems">DataOciDatabaseManagementManagedDatabaseAddmTaskItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BeginSnapshotId`<sup>Required</sup> <a name="BeginSnapshotId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.property.beginSnapshotId"></a>

```go
func BeginSnapshotId() *string
```

- *Type:* *string

---

##### `DbUser`<sup>Required</sup> <a name="DbUser" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.property.dbUser"></a>

```go
func DbUser() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EndSnapshotId`<sup>Required</sup> <a name="EndSnapshotId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.property.endSnapshotId"></a>

```go
func EndSnapshotId() *string
```

- *Type:* *string

---

##### `EndSnapshotTime`<sup>Required</sup> <a name="EndSnapshotTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.property.endSnapshotTime"></a>

```go
func EndSnapshotTime() *string
```

- *Type:* *string

---

##### `Findings`<sup>Required</sup> <a name="Findings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.property.findings"></a>

```go
func Findings() *string
```

- *Type:* *string

---

##### `HowCreated`<sup>Required</sup> <a name="HowCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.property.howCreated"></a>

```go
func HowCreated() *string
```

- *Type:* *string

---

##### `StartSnapshotTime`<sup>Required</sup> <a name="StartSnapshotTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.property.startSnapshotTime"></a>

```go
func StartSnapshotTime() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TaskId`<sup>Required</sup> <a name="TaskId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.property.taskId"></a>

```go
func TaskId() *string
```

- *Type:* *string

---

##### `TaskName`<sup>Required</sup> <a name="TaskName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.property.taskName"></a>

```go
func TaskName() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseAddmTaskItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseAddmTask.DataOciDatabaseManagementManagedDatabaseAddmTaskItems">DataOciDatabaseManagementManagedDatabaseAddmTaskItems</a>

---



