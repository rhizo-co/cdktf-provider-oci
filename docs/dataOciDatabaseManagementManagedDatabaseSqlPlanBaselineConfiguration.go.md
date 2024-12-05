# `dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration oci_database_management_managed_database_sql_plan_baseline_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqlplanbaselineconfiguration"

dataocidatabasemanagementmanageddatabasesqlplanbaselineconfiguration.NewDataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration(scope Construct, id *string, config DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig) DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.resetOpcNamedCredentialId">ResetOpcNamedCredentialId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetOpcNamedCredentialId` <a name="ResetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.resetOpcNamedCredentialId"></a>

```go
func ResetOpcNamedCredentialId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqlplanbaselineconfiguration"

dataocidatabasemanagementmanageddatabasesqlplanbaselineconfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqlplanbaselineconfiguration"

dataocidatabasemanagementmanageddatabasesqlplanbaselineconfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqlplanbaselineconfiguration"

dataocidatabasemanagementmanageddatabasesqlplanbaselineconfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqlplanbaselineconfiguration"

dataocidatabasemanagementmanageddatabasesqlplanbaselineconfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.autoCaptureFilters">AutoCaptureFilters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.autoSpmEvolveTaskParameters">AutoSpmEvolveTaskParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.isAutomaticInitialPlanCaptureEnabled">IsAutomaticInitialPlanCaptureEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.isAutoSpmEvolveTaskEnabled">IsAutoSpmEvolveTaskEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.isHighFrequencyAutoSpmEvolveTaskEnabled">IsHighFrequencyAutoSpmEvolveTaskEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.isSqlPlanBaselinesUsageEnabled">IsSqlPlanBaselinesUsageEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.planRetentionWeeks">PlanRetentionWeeks</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.spaceBudgetMb">SpaceBudgetMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.spaceBudgetPercent">SpaceBudgetPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.spaceUsedMb">SpaceUsedMb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.opcNamedCredentialIdInput">OpcNamedCredentialIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AutoCaptureFilters`<sup>Required</sup> <a name="AutoCaptureFilters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.autoCaptureFilters"></a>

```go
func AutoCaptureFilters() DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList</a>

---

##### `AutoSpmEvolveTaskParameters`<sup>Required</sup> <a name="AutoSpmEvolveTaskParameters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.autoSpmEvolveTaskParameters"></a>

```go
func AutoSpmEvolveTaskParameters() DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList</a>

---

##### `IsAutomaticInitialPlanCaptureEnabled`<sup>Required</sup> <a name="IsAutomaticInitialPlanCaptureEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.isAutomaticInitialPlanCaptureEnabled"></a>

```go
func IsAutomaticInitialPlanCaptureEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsAutoSpmEvolveTaskEnabled`<sup>Required</sup> <a name="IsAutoSpmEvolveTaskEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.isAutoSpmEvolveTaskEnabled"></a>

```go
func IsAutoSpmEvolveTaskEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsHighFrequencyAutoSpmEvolveTaskEnabled`<sup>Required</sup> <a name="IsHighFrequencyAutoSpmEvolveTaskEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.isHighFrequencyAutoSpmEvolveTaskEnabled"></a>

```go
func IsHighFrequencyAutoSpmEvolveTaskEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSqlPlanBaselinesUsageEnabled`<sup>Required</sup> <a name="IsSqlPlanBaselinesUsageEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.isSqlPlanBaselinesUsageEnabled"></a>

```go
func IsSqlPlanBaselinesUsageEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PlanRetentionWeeks`<sup>Required</sup> <a name="PlanRetentionWeeks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.planRetentionWeeks"></a>

```go
func PlanRetentionWeeks() *f64
```

- *Type:* *f64

---

##### `SpaceBudgetMb`<sup>Required</sup> <a name="SpaceBudgetMb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.spaceBudgetMb"></a>

```go
func SpaceBudgetMb() *f64
```

- *Type:* *f64

---

##### `SpaceBudgetPercent`<sup>Required</sup> <a name="SpaceBudgetPercent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.spaceBudgetPercent"></a>

```go
func SpaceBudgetPercent() *f64
```

- *Type:* *f64

---

##### `SpaceUsedMb`<sup>Required</sup> <a name="SpaceUsedMb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.spaceUsedMb"></a>

```go
func SpaceUsedMb() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.managedDatabaseIdInput"></a>

```go
func ManagedDatabaseIdInput() *string
```

- *Type:* *string

---

##### `OpcNamedCredentialIdInput`<sup>Optional</sup> <a name="OpcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.opcNamedCredentialIdInput"></a>

```go
func OpcNamedCredentialIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.managedDatabaseId"></a>

```go
func ManagedDatabaseId() *string
```

- *Type:* *string

---

##### `OpcNamedCredentialId`<sup>Required</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.opcNamedCredentialId"></a>

```go
func OpcNamedCredentialId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqlplanbaselineconfiguration"

&dataocidatabasemanagementmanageddatabasesqlplanbaselineconfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters {

}
```


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqlplanbaselineconfiguration"

&dataocidatabasemanagementmanageddatabasesqlplanbaselineconfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters {

}
```


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqlplanbaselineconfiguration"

&dataocidatabasemanagementmanageddatabasesqlplanbaselineconfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedDatabaseId: *string,
	Id: *string,
	OpcNamedCredentialId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration#opc_named_credential_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.managedDatabaseId"></a>

```go
ManagedDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration#managed_database_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration#managed_database_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration#id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OpcNamedCredentialId`<sup>Optional</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationConfig.property.opcNamedCredentialId"></a>

```go
OpcNamedCredentialId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_sql_plan_baseline_configuration#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration#opc_named_credential_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqlplanbaselineconfiguration"

dataocidatabasemanagementmanageddatabasesqlplanbaselineconfiguration.NewDataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqlplanbaselineconfiguration"

dataocidatabasemanagementmanageddatabasesqlplanbaselineconfiguration.NewDataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.modifiedBy">ModifiedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.timeLastModified">TimeLastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.valuesToExclude">ValuesToExclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.valuesToInclude">ValuesToInclude</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ModifiedBy`<sup>Required</sup> <a name="ModifiedBy" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.modifiedBy"></a>

```go
func ModifiedBy() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TimeLastModified`<sup>Required</sup> <a name="TimeLastModified" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.timeLastModified"></a>

```go
func TimeLastModified() *string
```

- *Type:* *string

---

##### `ValuesToExclude`<sup>Required</sup> <a name="ValuesToExclude" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.valuesToExclude"></a>

```go
func ValuesToExclude() *[]*string
```

- *Type:* *[]*string

---

##### `ValuesToInclude`<sup>Required</sup> <a name="ValuesToInclude" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.valuesToInclude"></a>

```go
func ValuesToInclude() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoCaptureFilters</a>

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqlplanbaselineconfiguration"

dataocidatabasemanagementmanageddatabasesqlplanbaselineconfiguration.NewDataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference <a name="DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesqlplanbaselineconfiguration"

dataocidatabasemanagementmanageddatabasesqlplanbaselineconfiguration.NewDataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.allowedTimeLimit">AllowedTimeLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.alternatePlanBaselines">AlternatePlanBaselines</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.alternatePlanLimit">AlternatePlanLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.alternatePlanSources">AlternatePlanSources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.arePlansAutoAccepted">ArePlansAutoAccepted</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedTimeLimit`<sup>Required</sup> <a name="AllowedTimeLimit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.allowedTimeLimit"></a>

```go
func AllowedTimeLimit() *f64
```

- *Type:* *f64

---

##### `AlternatePlanBaselines`<sup>Required</sup> <a name="AlternatePlanBaselines" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.alternatePlanBaselines"></a>

```go
func AlternatePlanBaselines() *[]*string
```

- *Type:* *[]*string

---

##### `AlternatePlanLimit`<sup>Required</sup> <a name="AlternatePlanLimit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.alternatePlanLimit"></a>

```go
func AlternatePlanLimit() *f64
```

- *Type:* *f64

---

##### `AlternatePlanSources`<sup>Required</sup> <a name="AlternatePlanSources" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.alternatePlanSources"></a>

```go
func AlternatePlanSources() *[]*string
```

- *Type:* *[]*string

---

##### `ArePlansAutoAccepted`<sup>Required</sup> <a name="ArePlansAutoAccepted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.arePlansAutoAccepted"></a>

```go
func ArePlansAutoAccepted() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfiguration.DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters">DataOciDatabaseManagementManagedDatabaseSqlPlanBaselineConfigurationAutoSpmEvolveTaskParameters</a>

---



