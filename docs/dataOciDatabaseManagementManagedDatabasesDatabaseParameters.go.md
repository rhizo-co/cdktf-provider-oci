# `dataOciDatabaseManagementManagedDatabasesDatabaseParameters` Submodule <a name="`dataOciDatabaseManagementManagedDatabasesDatabaseParameters` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabasesDatabaseParameters <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParameters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters oci_database_management_managed_databases_database_parameters}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesdatabaseparameters"

dataocidatabasemanagementmanageddatabasesdatabaseparameters.NewDataOciDatabaseManagementManagedDatabasesDatabaseParameters(scope Construct, id *string, config DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig) DataOciDatabaseManagementManagedDatabasesDatabaseParameters
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig">DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig">DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetIsAllowedValuesIncluded">ResetIsAllowedValuesIncluded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetOpcNamedCredentialId">ResetOpcNamedCredentialId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetId"></a>

```go
func ResetId()
```

##### `ResetIsAllowedValuesIncluded` <a name="ResetIsAllowedValuesIncluded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetIsAllowedValuesIncluded"></a>

```go
func ResetIsAllowedValuesIncluded()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetName"></a>

```go
func ResetName()
```

##### `ResetOpcNamedCredentialId` <a name="ResetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetOpcNamedCredentialId"></a>

```go
func ResetOpcNamedCredentialId()
```

##### `ResetSource` <a name="ResetSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.resetSource"></a>

```go
func ResetSource()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabasesDatabaseParameters resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesdatabaseparameters"

dataocidatabasemanagementmanageddatabasesdatabaseparameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesdatabaseparameters"

dataocidatabasemanagementmanageddatabasesdatabaseparameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesdatabaseparameters"

dataocidatabasemanagementmanageddatabasesdatabaseparameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesdatabaseparameters"

dataocidatabasemanagementmanageddatabasesdatabaseparameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabasesDatabaseParameters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabasesDatabaseParameters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseManagementManagedDatabasesDatabaseParameters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabasesDatabaseParameters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.databaseParametersCollection">DatabaseParametersCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.isAllowedValuesIncludedInput">IsAllowedValuesIncludedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.opcNamedCredentialIdInput">OpcNamedCredentialIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.isAllowedValuesIncluded">IsAllowedValuesIncluded</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.source">Source</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DatabaseParametersCollection`<sup>Required</sup> <a name="DatabaseParametersCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.databaseParametersCollection"></a>

```go
func DatabaseParametersCollection() DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.filter"></a>

```go
func Filter() DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsAllowedValuesIncludedInput`<sup>Optional</sup> <a name="IsAllowedValuesIncludedInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.isAllowedValuesIncludedInput"></a>

```go
func IsAllowedValuesIncludedInput() interface{}
```

- *Type:* interface{}

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.managedDatabaseIdInput"></a>

```go
func ManagedDatabaseIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OpcNamedCredentialIdInput`<sup>Optional</sup> <a name="OpcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.opcNamedCredentialIdInput"></a>

```go
func OpcNamedCredentialIdInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsAllowedValuesIncluded`<sup>Required</sup> <a name="IsAllowedValuesIncluded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.isAllowedValuesIncluded"></a>

```go
func IsAllowedValuesIncluded() interface{}
```

- *Type:* interface{}

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.managedDatabaseId"></a>

```go
func ManagedDatabaseId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OpcNamedCredentialId`<sup>Required</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.opcNamedCredentialId"></a>

```go
func OpcNamedCredentialId() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParameters.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesdatabaseparameters"

&dataocidatabasemanagementmanageddatabasesdatabaseparameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedDatabaseId: *string,
	Filter: interface{},
	Id: *string,
	IsAllowedValuesIncluded: interface{},
	Name: *string,
	OpcNamedCredentialId: *string,
	Source: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#managed_database_id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.isAllowedValuesIncluded">IsAllowedValuesIncluded</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#is_allowed_values_included DataOciDatabaseManagementManagedDatabasesDatabaseParameters#is_allowed_values_included}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#name DataOciDatabaseManagementManagedDatabasesDatabaseParameters#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#opc_named_credential_id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#opc_named_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#source DataOciDatabaseManagementManagedDatabasesDatabaseParameters#source}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.managedDatabaseId"></a>

```go
ManagedDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#managed_database_id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#managed_database_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#filter DataOciDatabaseManagementManagedDatabasesDatabaseParameters#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsAllowedValuesIncluded`<sup>Optional</sup> <a name="IsAllowedValuesIncluded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.isAllowedValuesIncluded"></a>

```go
IsAllowedValuesIncluded interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#is_allowed_values_included DataOciDatabaseManagementManagedDatabasesDatabaseParameters#is_allowed_values_included}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#name DataOciDatabaseManagementManagedDatabasesDatabaseParameters#name}.

---

##### `OpcNamedCredentialId`<sup>Optional</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.opcNamedCredentialId"></a>

```go
OpcNamedCredentialId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#opc_named_credential_id DataOciDatabaseManagementManagedDatabasesDatabaseParameters#opc_named_credential_id}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersConfig.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#source DataOciDatabaseManagementManagedDatabasesDatabaseParameters#source}.

---

### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesdatabaseparameters"

&dataocidatabasemanagementmanageddatabasesdatabaseparameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection {

}
```


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesdatabaseparameters"

&dataocidatabasemanagementmanageddatabasesdatabaseparameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems {

}
```


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesdatabaseparameters"

&dataocidatabasemanagementmanageddatabasesdatabaseparameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues {

}
```


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesdatabaseparameters"

&dataocidatabasemanagementmanageddatabasesdatabaseparameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#name DataOciDatabaseManagementManagedDatabasesDatabaseParameters#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#values DataOciDatabaseManagementManagedDatabasesDatabaseParameters#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#regex DataOciDatabaseManagementManagedDatabasesDatabaseParameters#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#name DataOciDatabaseManagementManagedDatabasesDatabaseParameters#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#values DataOciDatabaseManagementManagedDatabasesDatabaseParameters#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameters#regex DataOciDatabaseManagementManagedDatabasesDatabaseParameters#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesdatabaseparameters"

dataocidatabasemanagementmanageddatabasesdatabaseparameters.NewDataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesdatabaseparameters"

dataocidatabasemanagementmanageddatabasesdatabaseparameters.NewDataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.isDefault">IsDefault</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.ordinal">Ordinal</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.isDefault"></a>

```go
func IsDefault() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Ordinal`<sup>Required</sup> <a name="Ordinal" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.ordinal"></a>

```go
func Ordinal() *f64
```

- *Type:* *f64

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValues</a>

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesdatabaseparameters"

dataocidatabasemanagementmanageddatabasesdatabaseparameters.NewDataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesdatabaseparameters"

dataocidatabasemanagementmanageddatabasesdatabaseparameters.NewDataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.allowedValues">AllowedValues</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.constraint">Constraint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.containerId">ContainerId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.displayValue">DisplayValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isAdjusted">IsAdjusted</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isBasic">IsBasic</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isDefault">IsDefault</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isDeprecated">IsDeprecated</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isInstanceModifiable">IsInstanceModifiable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isModified">IsModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isPdbModifiable">IsPdbModifiable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isSessionModifiable">IsSessionModifiable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isSpecified">IsSpecified</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isSystemModifiable">IsSystemModifiable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.number">Number</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.ordinal">Ordinal</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.sid">Sid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.updateComment">UpdateComment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.allowedValues"></a>

```go
func AllowedValues() DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsAllowedValuesList</a>

---

##### `Category`<sup>Required</sup> <a name="Category" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.constraint"></a>

```go
func Constraint() *string
```

- *Type:* *string

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.containerId"></a>

```go
func ContainerId() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayValue`<sup>Required</sup> <a name="DisplayValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.displayValue"></a>

```go
func DisplayValue() *string
```

- *Type:* *string

---

##### `IsAdjusted`<sup>Required</sup> <a name="IsAdjusted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isAdjusted"></a>

```go
func IsAdjusted() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsBasic`<sup>Required</sup> <a name="IsBasic" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isBasic"></a>

```go
func IsBasic() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isDefault"></a>

```go
func IsDefault() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsDeprecated`<sup>Required</sup> <a name="IsDeprecated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isDeprecated"></a>

```go
func IsDeprecated() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsInstanceModifiable`<sup>Required</sup> <a name="IsInstanceModifiable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isInstanceModifiable"></a>

```go
func IsInstanceModifiable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsModified`<sup>Required</sup> <a name="IsModified" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isModified"></a>

```go
func IsModified() *string
```

- *Type:* *string

---

##### `IsPdbModifiable`<sup>Required</sup> <a name="IsPdbModifiable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isPdbModifiable"></a>

```go
func IsPdbModifiable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSessionModifiable`<sup>Required</sup> <a name="IsSessionModifiable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isSessionModifiable"></a>

```go
func IsSessionModifiable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSpecified`<sup>Required</sup> <a name="IsSpecified" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isSpecified"></a>

```go
func IsSpecified() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSystemModifiable`<sup>Required</sup> <a name="IsSystemModifiable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.isSystemModifiable"></a>

```go
func IsSystemModifiable() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Number`<sup>Required</sup> <a name="Number" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.number"></a>

```go
func Number() *f64
```

- *Type:* *f64

---

##### `Ordinal`<sup>Required</sup> <a name="Ordinal" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.ordinal"></a>

```go
func Ordinal() *f64
```

- *Type:* *f64

---

##### `Sid`<sup>Required</sup> <a name="Sid" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.sid"></a>

```go
func Sid() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdateComment`<sup>Required</sup> <a name="UpdateComment" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.updateComment"></a>

```go
func UpdateComment() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesdatabaseparameters"

dataocidatabasemanagementmanageddatabasesdatabaseparameters.NewDataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesdatabaseparameters"

dataocidatabasemanagementmanageddatabasesdatabaseparameters.NewDataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseSubType">DatabaseSubType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseType">DatabaseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseVersion">DatabaseVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `DatabaseSubType`<sup>Required</sup> <a name="DatabaseSubType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseSubType"></a>

```go
func DatabaseSubType() *string
```

- *Type:* *string

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseType"></a>

```go
func DatabaseType() *string
```

- *Type:* *string

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.databaseVersion"></a>

```go
func DatabaseVersion() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection">DataOciDatabaseManagementManagedDatabasesDatabaseParametersDatabaseParametersCollection</a>

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesdatabaseparameters"

dataocidatabasemanagementmanageddatabasesdatabaseparameters.NewDataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesdatabaseparameters"

dataocidatabasemanagementmanageddatabasesdatabaseparameters.NewDataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameters.DataOciDatabaseManagementManagedDatabasesDatabaseParametersFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



