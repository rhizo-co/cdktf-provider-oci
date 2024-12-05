# `dataOciDataSafeDatabaseSecurityConfigs` Submodule <a name="`dataOciDataSafeDatabaseSecurityConfigs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeDatabaseSecurityConfigs <a name="DataOciDataSafeDatabaseSecurityConfigs" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs oci_data_safe_database_security_configs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafedatabasesecurityconfigs"

dataocidatasafedatabasesecurityconfigs.NewDataOciDataSafeDatabaseSecurityConfigs(scope Construct, id *string, config DataOciDataSafeDatabaseSecurityConfigsConfig) DataOciDataSafeDatabaseSecurityConfigs
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig">DataOciDataSafeDatabaseSecurityConfigsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig">DataOciDataSafeDatabaseSecurityConfigsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetDatabaseSecurityConfigId">ResetDatabaseSecurityConfigId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetTargetId">ResetTargetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetTimeCreatedGreaterThanOrEqualTo">ResetTimeCreatedGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetTimeCreatedLessThan">ResetTimeCreatedLessThan</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetCompartmentIdInSubtree"></a>

```go
func ResetCompartmentIdInSubtree()
```

##### `ResetDatabaseSecurityConfigId` <a name="ResetDatabaseSecurityConfigId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetDatabaseSecurityConfigId"></a>

```go
func ResetDatabaseSecurityConfigId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetState"></a>

```go
func ResetState()
```

##### `ResetTargetId` <a name="ResetTargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetTargetId"></a>

```go
func ResetTargetId()
```

##### `ResetTimeCreatedGreaterThanOrEqualTo` <a name="ResetTimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetTimeCreatedGreaterThanOrEqualTo"></a>

```go
func ResetTimeCreatedGreaterThanOrEqualTo()
```

##### `ResetTimeCreatedLessThan` <a name="ResetTimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.resetTimeCreatedLessThan"></a>

```go
func ResetTimeCreatedLessThan()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeDatabaseSecurityConfigs resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafedatabasesecurityconfigs"

dataocidatasafedatabasesecurityconfigs.DataOciDataSafeDatabaseSecurityConfigs_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafedatabasesecurityconfigs"

dataocidatasafedatabasesecurityconfigs.DataOciDataSafeDatabaseSecurityConfigs_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafedatabasesecurityconfigs"

dataocidatasafedatabasesecurityconfigs.DataOciDataSafeDatabaseSecurityConfigs_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafedatabasesecurityconfigs"

dataocidatasafedatabasesecurityconfigs.DataOciDataSafeDatabaseSecurityConfigs_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataSafeDatabaseSecurityConfigs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataSafeDatabaseSecurityConfigs to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataSafeDatabaseSecurityConfigs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeDatabaseSecurityConfigs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.databaseSecurityConfigCollection">DatabaseSecurityConfigCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList">DataOciDataSafeDatabaseSecurityConfigsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.databaseSecurityConfigIdInput">DatabaseSecurityConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.targetIdInput">TargetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.timeCreatedGreaterThanOrEqualToInput">TimeCreatedGreaterThanOrEqualToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.timeCreatedLessThanInput">TimeCreatedLessThanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.databaseSecurityConfigId">DatabaseSecurityConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.timeCreatedGreaterThanOrEqualTo">TimeCreatedGreaterThanOrEqualTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.timeCreatedLessThan">TimeCreatedLessThan</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DatabaseSecurityConfigCollection`<sup>Required</sup> <a name="DatabaseSecurityConfigCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.databaseSecurityConfigCollection"></a>

```go
func DatabaseSecurityConfigCollection() DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.filter"></a>

```go
func Filter() DataOciDataSafeDatabaseSecurityConfigsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList">DataOciDataSafeDatabaseSecurityConfigsFilterList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.compartmentIdInSubtreeInput"></a>

```go
func CompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseSecurityConfigIdInput`<sup>Optional</sup> <a name="DatabaseSecurityConfigIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.databaseSecurityConfigIdInput"></a>

```go
func DatabaseSecurityConfigIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.targetIdInput"></a>

```go
func TargetIdInput() *string
```

- *Type:* *string

---

##### `TimeCreatedGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeCreatedGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.timeCreatedGreaterThanOrEqualToInput"></a>

```go
func TimeCreatedGreaterThanOrEqualToInput() *string
```

- *Type:* *string

---

##### `TimeCreatedLessThanInput`<sup>Optional</sup> <a name="TimeCreatedLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.timeCreatedLessThanInput"></a>

```go
func TimeCreatedLessThanInput() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `DatabaseSecurityConfigId`<sup>Required</sup> <a name="DatabaseSecurityConfigId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.databaseSecurityConfigId"></a>

```go
func DatabaseSecurityConfigId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `TimeCreatedGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.timeCreatedGreaterThanOrEqualTo"></a>

```go
func TimeCreatedGreaterThanOrEqualTo() *string
```

- *Type:* *string

---

##### `TimeCreatedLessThan`<sup>Required</sup> <a name="TimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.timeCreatedLessThan"></a>

```go
func TimeCreatedLessThan() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigs.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeDatabaseSecurityConfigsConfig <a name="DataOciDataSafeDatabaseSecurityConfigsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafedatabasesecurityconfigs"

&dataocidatasafedatabasesecurityconfigs.DataOciDataSafeDatabaseSecurityConfigsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	AccessLevel: *string,
	CompartmentIdInSubtree: interface{},
	DatabaseSecurityConfigId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	State: *string,
	TargetId: *string,
	TimeCreatedGreaterThanOrEqualTo: *string,
	TimeCreatedLessThan: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#compartment_id DataOciDataSafeDatabaseSecurityConfigs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#access_level DataOciDataSafeDatabaseSecurityConfigs#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#compartment_id_in_subtree DataOciDataSafeDatabaseSecurityConfigs#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.databaseSecurityConfigId">DatabaseSecurityConfigId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#database_security_config_id DataOciDataSafeDatabaseSecurityConfigs#database_security_config_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#display_name DataOciDataSafeDatabaseSecurityConfigs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#id DataOciDataSafeDatabaseSecurityConfigs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#state DataOciDataSafeDatabaseSecurityConfigs#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.targetId">TargetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#target_id DataOciDataSafeDatabaseSecurityConfigs#target_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.timeCreatedGreaterThanOrEqualTo">TimeCreatedGreaterThanOrEqualTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#time_created_greater_than_or_equal_to DataOciDataSafeDatabaseSecurityConfigs#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.timeCreatedLessThan">TimeCreatedLessThan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#time_created_less_than DataOciDataSafeDatabaseSecurityConfigs#time_created_less_than}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#compartment_id DataOciDataSafeDatabaseSecurityConfigs#compartment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#access_level DataOciDataSafeDatabaseSecurityConfigs#access_level}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.compartmentIdInSubtree"></a>

```go
CompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#compartment_id_in_subtree DataOciDataSafeDatabaseSecurityConfigs#compartment_id_in_subtree}.

---

##### `DatabaseSecurityConfigId`<sup>Optional</sup> <a name="DatabaseSecurityConfigId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.databaseSecurityConfigId"></a>

```go
DatabaseSecurityConfigId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#database_security_config_id DataOciDataSafeDatabaseSecurityConfigs#database_security_config_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#display_name DataOciDataSafeDatabaseSecurityConfigs#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#filter DataOciDataSafeDatabaseSecurityConfigs#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#id DataOciDataSafeDatabaseSecurityConfigs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#state DataOciDataSafeDatabaseSecurityConfigs#state}.

---

##### `TargetId`<sup>Optional</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.targetId"></a>

```go
TargetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#target_id DataOciDataSafeDatabaseSecurityConfigs#target_id}.

---

##### `TimeCreatedGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeCreatedGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```go
TimeCreatedGreaterThanOrEqualTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#time_created_greater_than_or_equal_to DataOciDataSafeDatabaseSecurityConfigs#time_created_greater_than_or_equal_to}.

---

##### `TimeCreatedLessThan`<sup>Optional</sup> <a name="TimeCreatedLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsConfig.property.timeCreatedLessThan"></a>

```go
TimeCreatedLessThan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#time_created_less_than DataOciDataSafeDatabaseSecurityConfigs#time_created_less_than}.

---

### DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollection <a name="DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafedatabasesecurityconfigs"

&dataocidatasafedatabasesecurityconfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollection {

}
```


### DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItems <a name="DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafedatabasesecurityconfigs"

&dataocidatasafedatabasesecurityconfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItems {

}
```


### DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfig <a name="DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafedatabasesecurityconfigs"

&dataocidatasafedatabasesecurityconfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfig {

}
```


### DataOciDataSafeDatabaseSecurityConfigsFilter <a name="DataOciDataSafeDatabaseSecurityConfigsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafedatabasesecurityconfigs"

&dataocidatasafedatabasesecurityconfigs.DataOciDataSafeDatabaseSecurityConfigsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#name DataOciDataSafeDatabaseSecurityConfigs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#values DataOciDataSafeDatabaseSecurityConfigs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#regex DataOciDataSafeDatabaseSecurityConfigs#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#name DataOciDataSafeDatabaseSecurityConfigs#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#values DataOciDataSafeDatabaseSecurityConfigs#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_configs#regex DataOciDataSafeDatabaseSecurityConfigs#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList <a name="DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafedatabasesecurityconfigs"

dataocidatasafedatabasesecurityconfigs.NewDataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference <a name="DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafedatabasesecurityconfigs"

dataocidatasafedatabasesecurityconfigs.NewDataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.databaseSecurityConfigId">DatabaseSecurityConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.refreshTrigger">RefreshTrigger</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.sqlFirewallConfig">SqlFirewallConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.timeLastRefreshed">TimeLastRefreshed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItems">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DatabaseSecurityConfigId`<sup>Required</sup> <a name="DatabaseSecurityConfigId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.databaseSecurityConfigId"></a>

```go
func DatabaseSecurityConfigId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `RefreshTrigger`<sup>Required</sup> <a name="RefreshTrigger" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.refreshTrigger"></a>

```go
func RefreshTrigger() *f64
```

- *Type:* *f64

---

##### `SqlFirewallConfig`<sup>Required</sup> <a name="SqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.sqlFirewallConfig"></a>

```go
func SqlFirewallConfig() DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeLastRefreshed`<sup>Required</sup> <a name="TimeLastRefreshed" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.timeLastRefreshed"></a>

```go
func TimeLastRefreshed() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItems">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItems</a>

---


### DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList <a name="DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafedatabasesecurityconfigs"

dataocidatasafedatabasesecurityconfigs.NewDataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.get"></a>

```go
func Get(index *f64) DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference <a name="DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafedatabasesecurityconfigs"

dataocidatasafedatabasesecurityconfigs.NewDataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.excludeJob">ExcludeJob</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.timeStatusUpdated">TimeStatusUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.violationLogAutoPurge">ViolationLogAutoPurge</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfig">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludeJob`<sup>Required</sup> <a name="ExcludeJob" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.excludeJob"></a>

```go
func ExcludeJob() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TimeStatusUpdated`<sup>Required</sup> <a name="TimeStatusUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.timeStatusUpdated"></a>

```go
func TimeStatusUpdated() *string
```

- *Type:* *string

---

##### `ViolationLogAutoPurge`<sup>Required</sup> <a name="ViolationLogAutoPurge" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.violationLogAutoPurge"></a>

```go
func ViolationLogAutoPurge() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfig">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsSqlFirewallConfig</a>

---


### DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList <a name="DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafedatabasesecurityconfigs"

dataocidatasafedatabasesecurityconfigs.NewDataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.get"></a>

```go
func Get(index *f64) DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference <a name="DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafedatabasesecurityconfigs"

dataocidatasafedatabasesecurityconfigs.NewDataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollection">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollection">DataOciDataSafeDatabaseSecurityConfigsDatabaseSecurityConfigCollection</a>

---


### DataOciDataSafeDatabaseSecurityConfigsFilterList <a name="DataOciDataSafeDatabaseSecurityConfigsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafedatabasesecurityconfigs"

dataocidatasafedatabasesecurityconfigs.NewDataOciDataSafeDatabaseSecurityConfigsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeDatabaseSecurityConfigsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.get"></a>

```go
func Get(index *f64) DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference <a name="DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafedatabasesecurityconfigs"

dataocidatasafedatabasesecurityconfigs.NewDataOciDataSafeDatabaseSecurityConfigsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfigs.DataOciDataSafeDatabaseSecurityConfigsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



