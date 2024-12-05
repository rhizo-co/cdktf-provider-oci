# `dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges` Submodule <a name="`dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges oci_database_management_managed_databases_user_system_privileges}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesusersystemprivileges"

dataocidatabasemanagementmanageddatabasesusersystemprivileges.NewDataOciDatabaseManagementManagedDatabasesUserSystemPrivileges(scope Construct, id *string, config DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig) DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.resetOpcNamedCredentialId">ResetOpcNamedCredentialId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.resetName"></a>

```go
func ResetName()
```

##### `ResetOpcNamedCredentialId` <a name="ResetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.resetOpcNamedCredentialId"></a>

```go
func ResetOpcNamedCredentialId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesusersystemprivileges"

dataocidatabasemanagementmanageddatabasesusersystemprivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesusersystemprivileges"

dataocidatabasemanagementmanageddatabasesusersystemprivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesusersystemprivileges"

dataocidatabasemanagementmanageddatabasesusersystemprivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesusersystemprivileges"

dataocidatabasemanagementmanageddatabasesusersystemprivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.systemPrivilegeCollection">SystemPrivilegeCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.opcNamedCredentialIdInput">OpcNamedCredentialIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.filter"></a>

```go
func Filter() DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList</a>

---

##### `SystemPrivilegeCollection`<sup>Required</sup> <a name="SystemPrivilegeCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.systemPrivilegeCollection"></a>

```go
func SystemPrivilegeCollection() DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.managedDatabaseIdInput"></a>

```go
func ManagedDatabaseIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OpcNamedCredentialIdInput`<sup>Optional</sup> <a name="OpcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.opcNamedCredentialIdInput"></a>

```go
func OpcNamedCredentialIdInput() *string
```

- *Type:* *string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.managedDatabaseId"></a>

```go
func ManagedDatabaseId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OpcNamedCredentialId`<sup>Required</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.opcNamedCredentialId"></a>

```go
func OpcNamedCredentialId() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesusersystemprivileges"

&dataocidatabasemanagementmanageddatabasesusersystemprivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedDatabaseId: *string,
	UserName: *string,
	Filter: interface{},
	Id: *string,
	Name: *string,
	OpcNamedCredentialId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#managed_database_id DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.userName">UserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#user_name DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#id DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#name DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#opc_named_credential_id DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#opc_named_credential_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.managedDatabaseId"></a>

```go
ManagedDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#managed_database_id DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#managed_database_id}.

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#user_name DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#user_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#filter DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#id DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#name DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#name}.

---

##### `OpcNamedCredentialId`<sup>Optional</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesConfig.property.opcNamedCredentialId"></a>

```go
OpcNamedCredentialId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#opc_named_credential_id DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#opc_named_credential_id}.

---

### DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesusersystemprivileges"

&dataocidatabasemanagementmanageddatabasesusersystemprivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#name DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#values DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#regex DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#name DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#values DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_system_privileges#regex DataOciDatabaseManagementManagedDatabasesUserSystemPrivileges#regex}.

---

### DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollection <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesusersystemprivileges"

&dataocidatabasemanagementmanageddatabasesusersystemprivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollection {

}
```


### DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItems <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesusersystemprivileges"

&dataocidatabasemanagementmanageddatabasesusersystemprivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesusersystemprivileges"

dataocidatabasemanagementmanageddatabasesusersystemprivileges.NewDataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesusersystemprivileges"

dataocidatabasemanagementmanageddatabasesusersystemprivileges.NewDataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesusersystemprivileges"

dataocidatabasemanagementmanageddatabasesusersystemprivileges.NewDataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesusersystemprivileges"

dataocidatabasemanagementmanageddatabasesusersystemprivileges.NewDataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.property.adminOption">AdminOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.property.common">Common</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.property.inherited">Inherited</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItems">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminOption`<sup>Required</sup> <a name="AdminOption" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.property.adminOption"></a>

```go
func AdminOption() *string
```

- *Type:* *string

---

##### `Common`<sup>Required</sup> <a name="Common" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.property.common"></a>

```go
func Common() *string
```

- *Type:* *string

---

##### `Inherited`<sup>Required</sup> <a name="Inherited" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.property.inherited"></a>

```go
func Inherited() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItems">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesusersystemprivileges"

dataocidatabasemanagementmanageddatabasesusersystemprivileges.NewDataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesusersystemprivileges"

dataocidatabasemanagementmanageddatabasesusersystemprivileges.NewDataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollection">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserSystemPrivileges.DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollection">DataOciDatabaseManagementManagedDatabasesUserSystemPrivilegesSystemPrivilegeCollection</a>

---



