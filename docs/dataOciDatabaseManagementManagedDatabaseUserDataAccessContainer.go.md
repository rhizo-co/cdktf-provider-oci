# `dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_container oci_database_management_managed_database_user_data_access_container}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserdataaccesscontainer"

dataocidatabasemanagementmanageddatabaseuserdataaccesscontainer.NewDataOciDatabaseManagementManagedDatabaseUserDataAccessContainer(scope Construct, id *string, config DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig) DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.resetName"></a>

```go
func ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserdataaccesscontainer"

dataocidatabasemanagementmanageddatabaseuserdataaccesscontainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserdataaccesscontainer"

dataocidatabasemanagementmanageddatabaseuserdataaccesscontainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserdataaccesscontainer"

dataocidatabasemanagementmanageddatabaseuserdataaccesscontainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserdataaccesscontainer"

dataocidatabasemanagementmanageddatabaseuserdataaccesscontainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_container#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.userNameInput">UserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.userName">UserName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.items"></a>

```go
func Items() DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.managedDatabaseIdInput"></a>

```go
func ManagedDatabaseIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.userNameInput"></a>

```go
func UserNameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.managedDatabaseId"></a>

```go
func ManagedDatabaseId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.userName"></a>

```go
func UserName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserdataaccesscontainer"

&dataocidatabasemanagementmanageddatabaseuserdataaccesscontainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig {
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_container#managed_database_id DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.userName">UserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_container#user_name DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_container#id DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_container#name DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.managedDatabaseId"></a>

```go
ManagedDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_container#managed_database_id DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer#managed_database_id}.

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.userName"></a>

```go
UserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_container#user_name DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer#user_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_container#id DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_data_access_container#name DataOciDatabaseManagementManagedDatabaseUserDataAccessContainer#name}.

---

### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItems <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserdataaccesscontainer"

&dataocidatabasemanagementmanageddatabaseuserdataaccesscontainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserdataaccesscontainer"

dataocidatabasemanagementmanageddatabaseuserdataaccesscontainer.NewDataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabaseuserdataaccesscontainer"

dataocidatabasemanagementmanageddatabaseuserdataaccesscontainer.NewDataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItems">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserDataAccessContainer.DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItems">DataOciDatabaseManagementManagedDatabaseUserDataAccessContainerItems</a>

---



