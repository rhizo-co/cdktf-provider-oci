# `dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privilege oci_database_management_managed_database_user_consumer_group_privilege}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserconsumergroupprivilege"

dataocidatabasemanagementmanageddatabaseuserconsumergroupprivilege.NewDataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege(scope Construct, id *string, config DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig) DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.resetName"></a>

```go
func ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserconsumergroupprivilege"

dataocidatabasemanagementmanageddatabaseuserconsumergroupprivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserconsumergroupprivilege"

dataocidatabasemanagementmanageddatabaseuserconsumergroupprivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserconsumergroupprivilege"

dataocidatabasemanagementmanageddatabaseuserconsumergroupprivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserconsumergroupprivilege"

dataocidatabasemanagementmanageddatabaseuserconsumergroupprivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privilege#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.items"></a>

```go
func Items() DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.managedDatabaseIdInput"></a>

```go
func ManagedDatabaseIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.managedDatabaseId"></a>

```go
func ManagedDatabaseId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserconsumergroupprivilege"

&dataocidatabasemanagementmanageddatabaseuserconsumergroupprivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig {
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privilege#managed_database_id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig.property.userName">UserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privilege#user_name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privilege#id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privilege#name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig.property.managedDatabaseId"></a>

```go
ManagedDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privilege#managed_database_id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege#managed_database_id}.

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privilege#user_name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege#user_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privilege#id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privilege#name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege#name}.

---

### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItems <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserconsumergroupprivilege"

&dataocidatabasemanagementmanageddatabaseuserconsumergroupprivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserconsumergroupprivilege"

dataocidatabasemanagementmanageddatabaseuserconsumergroupprivilege.NewDataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserconsumergroupprivilege"

dataocidatabasemanagementmanageddatabaseuserconsumergroupprivilege.NewDataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.property.grantOption">GrantOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.property.initialGroup">InitialGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItems">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GrantOption`<sup>Required</sup> <a name="GrantOption" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.property.grantOption"></a>

```go
func GrantOption() *string
```

- *Type:* *string

---

##### `InitialGroup`<sup>Required</sup> <a name="InitialGroup" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.property.initialGroup"></a>

```go
func InitialGroup() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilege.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItems">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegeItems</a>

---



