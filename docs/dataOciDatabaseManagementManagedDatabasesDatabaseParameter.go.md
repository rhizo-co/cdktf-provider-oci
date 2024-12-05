# `dataOciDatabaseManagementManagedDatabasesDatabaseParameter` Submodule <a name="`dataOciDatabaseManagementManagedDatabasesDatabaseParameter` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabasesDatabaseParameter <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParameter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameter oci_database_management_managed_databases_database_parameter}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesdatabaseparameter"

dataocidatabasemanagementmanageddatabasesdatabaseparameter.NewDataOciDatabaseManagementManagedDatabasesDatabaseParameter(scope Construct, id *string, config DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig) DataOciDatabaseManagementManagedDatabasesDatabaseParameter
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig">DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig">DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.resetIsAllowedValuesIncluded">ResetIsAllowedValuesIncluded</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.resetId"></a>

```go
func ResetId()
```

##### `ResetIsAllowedValuesIncluded` <a name="ResetIsAllowedValuesIncluded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.resetIsAllowedValuesIncluded"></a>

```go
func ResetIsAllowedValuesIncluded()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.resetName"></a>

```go
func ResetName()
```

##### `ResetSource` <a name="ResetSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.resetSource"></a>

```go
func ResetSource()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabasesDatabaseParameter resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesdatabaseparameter"

dataocidatabasemanagementmanageddatabasesdatabaseparameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesdatabaseparameter"

dataocidatabasemanagementmanageddatabasesdatabaseparameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesdatabaseparameter"

dataocidatabasemanagementmanageddatabasesdatabaseparameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesdatabaseparameter"

dataocidatabasemanagementmanageddatabasesdatabaseparameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabasesDatabaseParameter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabasesDatabaseParameter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseManagementManagedDatabasesDatabaseParameter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabasesDatabaseParameter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.databaseSubType">DatabaseSubType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.databaseType">DatabaseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.databaseVersion">DatabaseVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList">DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.isAllowedValuesIncludedInput">IsAllowedValuesIncludedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.isAllowedValuesIncluded">IsAllowedValuesIncluded</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.source">Source</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `DatabaseSubType`<sup>Required</sup> <a name="DatabaseSubType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.databaseSubType"></a>

```go
func DatabaseSubType() *string
```

- *Type:* *string

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.databaseType"></a>

```go
func DatabaseType() *string
```

- *Type:* *string

---

##### `DatabaseVersion`<sup>Required</sup> <a name="DatabaseVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.databaseVersion"></a>

```go
func DatabaseVersion() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.items"></a>

```go
func Items() DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList">DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsAllowedValuesIncludedInput`<sup>Optional</sup> <a name="IsAllowedValuesIncludedInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.isAllowedValuesIncludedInput"></a>

```go
func IsAllowedValuesIncludedInput() interface{}
```

- *Type:* interface{}

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.managedDatabaseIdInput"></a>

```go
func ManagedDatabaseIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsAllowedValuesIncluded`<sup>Required</sup> <a name="IsAllowedValuesIncluded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.isAllowedValuesIncluded"></a>

```go
func IsAllowedValuesIncluded() interface{}
```

- *Type:* interface{}

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.managedDatabaseId"></a>

```go
func ManagedDatabaseId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameter.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesdatabaseparameter"

&dataocidatabasemanagementmanageddatabasesdatabaseparameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedDatabaseId: *string,
	Id: *string,
	IsAllowedValuesIncluded: interface{},
	Name: *string,
	Source: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameter#managed_database_id DataOciDatabaseManagementManagedDatabasesDatabaseParameter#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameter#id DataOciDatabaseManagementManagedDatabasesDatabaseParameter#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.isAllowedValuesIncluded">IsAllowedValuesIncluded</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameter#is_allowed_values_included DataOciDatabaseManagementManagedDatabasesDatabaseParameter#is_allowed_values_included}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameter#name DataOciDatabaseManagementManagedDatabasesDatabaseParameter#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameter#source DataOciDatabaseManagementManagedDatabasesDatabaseParameter#source}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.managedDatabaseId"></a>

```go
ManagedDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameter#managed_database_id DataOciDatabaseManagementManagedDatabasesDatabaseParameter#managed_database_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameter#id DataOciDatabaseManagementManagedDatabasesDatabaseParameter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsAllowedValuesIncluded`<sup>Optional</sup> <a name="IsAllowedValuesIncluded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.isAllowedValuesIncluded"></a>

```go
IsAllowedValuesIncluded interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameter#is_allowed_values_included DataOciDatabaseManagementManagedDatabasesDatabaseParameter#is_allowed_values_included}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameter#name DataOciDatabaseManagementManagedDatabasesDatabaseParameter#name}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterConfig.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_database_parameter#source DataOciDatabaseManagementManagedDatabasesDatabaseParameter#source}.

---

### DataOciDatabaseManagementManagedDatabasesDatabaseParameterItems <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParameterItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesdatabaseparameter"

&dataocidatabasemanagementmanageddatabasesdatabaseparameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItems {

}
```


### DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValues <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValues" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValues.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesdatabaseparameter"

&dataocidatabasemanagementmanageddatabasesdatabaseparameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValues {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesdatabaseparameter"

dataocidatabasemanagementmanageddatabasesdatabaseparameter.NewDataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesdatabaseparameter"

dataocidatabasemanagementmanageddatabasesdatabaseparameter.NewDataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.property.isDefault">IsDefault</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.property.ordinal">Ordinal</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValues">DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.property.isDefault"></a>

```go
func IsDefault() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Ordinal`<sup>Required</sup> <a name="Ordinal" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.property.ordinal"></a>

```go
func Ordinal() *f64
```

- *Type:* *f64

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValues
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValues">DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValues</a>

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesdatabaseparameter"

dataocidatabasemanagementmanageddatabasesdatabaseparameter.NewDataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasesdatabaseparameter"

dataocidatabasemanagementmanageddatabasesdatabaseparameter.NewDataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.allowedValues">AllowedValues</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList">DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.constraint">Constraint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.containerId">ContainerId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.displayValue">DisplayValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isAdjusted">IsAdjusted</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isBasic">IsBasic</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isDefault">IsDefault</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isDeprecated">IsDeprecated</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isInstanceModifiable">IsInstanceModifiable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isModified">IsModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isPdbModifiable">IsPdbModifiable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isSessionModifiable">IsSessionModifiable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isSpecified">IsSpecified</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isSystemModifiable">IsSystemModifiable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.number">Number</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.ordinal">Ordinal</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.sid">Sid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.updateComment">UpdateComment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItems">DataOciDatabaseManagementManagedDatabasesDatabaseParameterItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedValues`<sup>Required</sup> <a name="AllowedValues" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.allowedValues"></a>

```go
func AllowedValues() DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList">DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsAllowedValuesList</a>

---

##### `Category`<sup>Required</sup> <a name="Category" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Constraint`<sup>Required</sup> <a name="Constraint" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.constraint"></a>

```go
func Constraint() *string
```

- *Type:* *string

---

##### `ContainerId`<sup>Required</sup> <a name="ContainerId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.containerId"></a>

```go
func ContainerId() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayValue`<sup>Required</sup> <a name="DisplayValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.displayValue"></a>

```go
func DisplayValue() *string
```

- *Type:* *string

---

##### `IsAdjusted`<sup>Required</sup> <a name="IsAdjusted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isAdjusted"></a>

```go
func IsAdjusted() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsBasic`<sup>Required</sup> <a name="IsBasic" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isBasic"></a>

```go
func IsBasic() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isDefault"></a>

```go
func IsDefault() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsDeprecated`<sup>Required</sup> <a name="IsDeprecated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isDeprecated"></a>

```go
func IsDeprecated() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsInstanceModifiable`<sup>Required</sup> <a name="IsInstanceModifiable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isInstanceModifiable"></a>

```go
func IsInstanceModifiable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsModified`<sup>Required</sup> <a name="IsModified" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isModified"></a>

```go
func IsModified() *string
```

- *Type:* *string

---

##### `IsPdbModifiable`<sup>Required</sup> <a name="IsPdbModifiable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isPdbModifiable"></a>

```go
func IsPdbModifiable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSessionModifiable`<sup>Required</sup> <a name="IsSessionModifiable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isSessionModifiable"></a>

```go
func IsSessionModifiable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSpecified`<sup>Required</sup> <a name="IsSpecified" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isSpecified"></a>

```go
func IsSpecified() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSystemModifiable`<sup>Required</sup> <a name="IsSystemModifiable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.isSystemModifiable"></a>

```go
func IsSystemModifiable() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Number`<sup>Required</sup> <a name="Number" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.number"></a>

```go
func Number() *f64
```

- *Type:* *f64

---

##### `Ordinal`<sup>Required</sup> <a name="Ordinal" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.ordinal"></a>

```go
func Ordinal() *f64
```

- *Type:* *f64

---

##### `Sid`<sup>Required</sup> <a name="Sid" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.sid"></a>

```go
func Sid() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UpdateComment`<sup>Required</sup> <a name="UpdateComment" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.updateComment"></a>

```go
func UpdateComment() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabasesDatabaseParameterItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesDatabaseParameter.DataOciDatabaseManagementManagedDatabasesDatabaseParameterItems">DataOciDatabaseManagementManagedDatabasesDatabaseParameterItems</a>

---


