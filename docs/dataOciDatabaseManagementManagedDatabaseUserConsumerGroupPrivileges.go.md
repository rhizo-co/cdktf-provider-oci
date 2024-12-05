# `dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges oci_database_management_managed_database_user_consumer_group_privileges}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserconsumergroupprivileges"

dataocidatabasemanagementmanageddatabaseuserconsumergroupprivileges.NewDataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges(scope Construct, id *string, config DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig) DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetOpcNamedCredentialId">ResetOpcNamedCredentialId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetName"></a>

```go
func ResetName()
```

##### `ResetOpcNamedCredentialId` <a name="ResetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetOpcNamedCredentialId"></a>

```go
func ResetOpcNamedCredentialId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserconsumergroupprivileges"

dataocidatabasemanagementmanageddatabaseuserconsumergroupprivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserconsumergroupprivileges"

dataocidatabasemanagementmanageddatabaseuserconsumergroupprivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserconsumergroupprivileges"

dataocidatabasemanagementmanageddatabaseuserconsumergroupprivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserconsumergroupprivileges"

dataocidatabasemanagementmanageddatabaseuserconsumergroupprivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.consumerGroupPrivilegeCollection">ConsumerGroupPrivilegeCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.opcNamedCredentialIdInput">OpcNamedCredentialIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ConsumerGroupPrivilegeCollection`<sup>Required</sup> <a name="ConsumerGroupPrivilegeCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.consumerGroupPrivilegeCollection"></a>

```go
func ConsumerGroupPrivilegeCollection() DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.filter"></a>

```go
func Filter() DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.managedDatabaseIdInput"></a>

```go
func ManagedDatabaseIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OpcNamedCredentialIdInput`<sup>Optional</sup> <a name="OpcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.opcNamedCredentialIdInput"></a>

```go
func OpcNamedCredentialIdInput() *string
```

- *Type:* *string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.managedDatabaseId"></a>

```go
func ManagedDatabaseId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OpcNamedCredentialId`<sup>Required</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.opcNamedCredentialId"></a>

```go
func OpcNamedCredentialId() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserconsumergroupprivileges"

&dataocidatabasemanagementmanageddatabaseuserconsumergroupprivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig {
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#managed_database_id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.userName">UserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#user_name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#opc_named_credential_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.managedDatabaseId"></a>

```go
ManagedDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#managed_database_id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#managed_database_id}.

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#user_name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#user_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#filter DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#name}.

---

##### `OpcNamedCredentialId`<sup>Optional</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.opcNamedCredentialId"></a>

```go
OpcNamedCredentialId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#opc_named_credential_id}.

---

### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserconsumergroupprivileges"

&dataocidatabasemanagementmanageddatabaseuserconsumergroupprivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection {

}
```


### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserconsumergroupprivileges"

&dataocidatabasemanagementmanageddatabaseuserconsumergroupprivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems {

}
```


### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserconsumergroupprivileges"

&dataocidatabasemanagementmanageddatabaseuserconsumergroupprivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#values DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#regex DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#values DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#regex DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserconsumergroupprivileges"

dataocidatabasemanagementmanageddatabaseuserconsumergroupprivileges.NewDataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserconsumergroupprivileges"

dataocidatabasemanagementmanageddatabaseuserconsumergroupprivileges.NewDataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.grantOption">GrantOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.initialGroup">InitialGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GrantOption`<sup>Required</sup> <a name="GrantOption" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.grantOption"></a>

```go
func GrantOption() *string
```

- *Type:* *string

---

##### `InitialGroup`<sup>Required</sup> <a name="InitialGroup" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.initialGroup"></a>

```go
func InitialGroup() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserconsumergroupprivileges"

dataocidatabasemanagementmanageddatabaseuserconsumergroupprivileges.NewDataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserconsumergroupprivileges"

dataocidatabasemanagementmanageddatabaseuserconsumergroupprivileges.NewDataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection</a>

---


### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserconsumergroupprivileges"

dataocidatabasemanagementmanageddatabaseuserconsumergroupprivileges.NewDataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserconsumergroupprivileges"

dataocidatabasemanagementmanageddatabaseuserconsumergroupprivileges.NewDataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



