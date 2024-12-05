# `dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege` Submodule <a name="`dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privilege oci_database_management_managed_databases_user_system_privilege}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesusersystemprivilege"

dataocidatabasemanagementmanageddatabasesusersystemprivilege.NewDataOciDatabaseManagementManagedDatabasesUserSystemPrivilege(scope Construct, id *string, config DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig) DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.resetName"></a>

```go
func ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesusersystemprivilege"

dataocidatabasemanagementmanageddatabasesusersystemprivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesusersystemprivilege"

dataocidatabasemanagementmanageddatabasesusersystemprivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesusersystemprivilege"

dataocidatabasemanagementmanageddatabasesusersystemprivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesusersystemprivilege"

dataocidatabasemanagementmanageddatabasesusersystemprivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privilege#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.items"></a>

```go
func Items() DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.managedDatabaseIdInput"></a>

```go
func ManagedDatabaseIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.managedDatabaseId"></a>

```go
func ManagedDatabaseId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesusersystemprivilege"

&dataocidatabasemanagementmanageddatabasesusersystemprivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedDatabaseId: *string,
	UserName: *string,
	Id: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privilege#managed_database_id DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.userName">UserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privilege#user_name DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privilege#id DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privilege#name DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.managedDatabaseId"></a>

```go
ManagedDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privilege#managed_database_id DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege#managed_database_id}.

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privilege#user_name DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege#user_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privilege#id DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privilege#name DataOciDatabaseManagementManagedDatabasesUserSystemPrivilege#name}.

---

### DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItems <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesusersystemprivilege"

&dataocidatabasemanagementmanageddatabasesusersystemprivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesusersystemprivilege"

dataocidatabasemanagementmanageddatabasesusersystemprivilege.NewDataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesusersystemprivilege"

dataocidatabasemanagementmanageddatabasesusersystemprivilege.NewDataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.property.adminOption">AdminOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.property.common">Common</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.property.inherited">Inherited</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItems">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminOption`<sup>Required</sup> <a name="AdminOption" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.property.adminOption"></a>

```go
func AdminOption() *string
```

- *Type:* *string

---

##### `Common`<sup>Required</sup> <a name="Common" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.property.common"></a>

```go
func Common() *string
```

- *Type:* *string

---

##### `Inherited`<sup>Required</sup> <a name="Inherited" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.property.inherited"></a>

```go
func Inherited() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivilege.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItems">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegeItems</a>

---



