# `dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege oci_database_management_managed_database_user_object_privilege}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserobjectprivilege"

dataocidatabasemanagementmanageddatabaseuserobjectprivilege.NewDataOciDatabaseManagementManagedDatabaseUserObjectPrivilege(scope Construct, id *string, config DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig) DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.resetName"></a>

```go
func ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserobjectprivilege"

dataocidatabasemanagementmanageddatabaseuserobjectprivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserobjectprivilege"

dataocidatabasemanagementmanageddatabaseuserobjectprivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserobjectprivilege"

dataocidatabasemanagementmanageddatabaseuserobjectprivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserobjectprivilege"

dataocidatabasemanagementmanageddatabaseuserobjectprivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.items"></a>

```go
func Items() DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.managedDatabaseIdInput"></a>

```go
func ManagedDatabaseIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.managedDatabaseId"></a>

```go
func ManagedDatabaseId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserobjectprivilege"

&dataocidatabasemanagementmanageddatabaseuserobjectprivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig {
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#managed_database_id DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.userName">UserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#user_name DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#id DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#name DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.managedDatabaseId"></a>

```go
ManagedDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#managed_database_id DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#managed_database_id}.

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#user_name DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#user_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#id DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_object_privilege#name DataOciDatabaseManagementManagedDatabaseUserObjectPrivilege#name}.

---

### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItems <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserobjectprivilege"

&dataocidatabasemanagementmanageddatabaseuserobjectprivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserobjectprivilege"

dataocidatabasemanagementmanageddatabaseuserobjectprivilege.NewDataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserobjectprivilege"

dataocidatabasemanagementmanageddatabaseuserobjectprivilege.NewDataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.common">Common</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.grantOption">GrantOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.grantor">Grantor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.hierarchy">Hierarchy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.inherited">Inherited</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.schemaType">SchemaType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItems">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Common`<sup>Required</sup> <a name="Common" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.common"></a>

```go
func Common() *string
```

- *Type:* *string

---

##### `GrantOption`<sup>Required</sup> <a name="GrantOption" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.grantOption"></a>

```go
func GrantOption() *string
```

- *Type:* *string

---

##### `Grantor`<sup>Required</sup> <a name="Grantor" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.grantor"></a>

```go
func Grantor() *string
```

- *Type:* *string

---

##### `Hierarchy`<sup>Required</sup> <a name="Hierarchy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.hierarchy"></a>

```go
func Hierarchy() *string
```

- *Type:* *string

---

##### `Inherited`<sup>Required</sup> <a name="Inherited" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.inherited"></a>

```go
func Inherited() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `SchemaType`<sup>Required</sup> <a name="SchemaType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.schemaType"></a>

```go
func SchemaType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserObjectPrivilege.DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItems">DataOciDatabaseManagementManagedDatabaseUserObjectPrivilegeItems</a>

---



