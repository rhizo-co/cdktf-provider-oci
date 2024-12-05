# `dataOciDatabaseAutonomousDatabaseCharacterSets` Submodule <a name="`dataOciDatabaseAutonomousDatabaseCharacterSets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseAutonomousDatabaseCharacterSets <a name="DataOciDatabaseAutonomousDatabaseCharacterSets" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets oci_database_autonomous_database_character_sets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabasecharactersets"

dataocidatabaseautonomousdatabasecharactersets.NewDataOciDatabaseAutonomousDatabaseCharacterSets(scope Construct, id *string, config DataOciDatabaseAutonomousDatabaseCharacterSetsConfig) DataOciDatabaseAutonomousDatabaseCharacterSets
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig">DataOciDatabaseAutonomousDatabaseCharacterSetsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig">DataOciDatabaseAutonomousDatabaseCharacterSetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetCharacterSetType">ResetCharacterSetType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetIsDedicated">ResetIsDedicated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetIsShared">ResetIsShared</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCharacterSetType` <a name="ResetCharacterSetType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetCharacterSetType"></a>

```go
func ResetCharacterSetType()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetId"></a>

```go
func ResetId()
```

##### `ResetIsDedicated` <a name="ResetIsDedicated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetIsDedicated"></a>

```go
func ResetIsDedicated()
```

##### `ResetIsShared` <a name="ResetIsShared" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.resetIsShared"></a>

```go
func ResetIsShared()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseCharacterSets resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabasecharactersets"

dataocidatabaseautonomousdatabasecharactersets.DataOciDatabaseAutonomousDatabaseCharacterSets_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabasecharactersets"

dataocidatabaseautonomousdatabasecharactersets.DataOciDatabaseAutonomousDatabaseCharacterSets_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabasecharactersets"

dataocidatabaseautonomousdatabasecharactersets.DataOciDatabaseAutonomousDatabaseCharacterSets_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabasecharactersets"

dataocidatabaseautonomousdatabasecharactersets.DataOciDatabaseAutonomousDatabaseCharacterSets_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseAutonomousDatabaseCharacterSets resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseAutonomousDatabaseCharacterSets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseAutonomousDatabaseCharacterSets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseAutonomousDatabaseCharacterSets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.autonomousDatabaseCharacterSets">AutonomousDatabaseCharacterSets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList">DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList">DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.characterSetTypeInput">CharacterSetTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.isDedicatedInput">IsDedicatedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.isSharedInput">IsSharedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.characterSetType">CharacterSetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.isDedicated">IsDedicated</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.isShared">IsShared</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AutonomousDatabaseCharacterSets`<sup>Required</sup> <a name="AutonomousDatabaseCharacterSets" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.autonomousDatabaseCharacterSets"></a>

```go
func AutonomousDatabaseCharacterSets() DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList">DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.filter"></a>

```go
func Filter() DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList">DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList</a>

---

##### `CharacterSetTypeInput`<sup>Optional</sup> <a name="CharacterSetTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.characterSetTypeInput"></a>

```go
func CharacterSetTypeInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsDedicatedInput`<sup>Optional</sup> <a name="IsDedicatedInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.isDedicatedInput"></a>

```go
func IsDedicatedInput() interface{}
```

- *Type:* interface{}

---

##### `IsSharedInput`<sup>Optional</sup> <a name="IsSharedInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.isSharedInput"></a>

```go
func IsSharedInput() interface{}
```

- *Type:* interface{}

---

##### `CharacterSetType`<sup>Required</sup> <a name="CharacterSetType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.characterSetType"></a>

```go
func CharacterSetType() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsDedicated`<sup>Required</sup> <a name="IsDedicated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.isDedicated"></a>

```go
func IsDedicated() interface{}
```

- *Type:* interface{}

---

##### `IsShared`<sup>Required</sup> <a name="IsShared" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.isShared"></a>

```go
func IsShared() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSets.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets <a name="DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabasecharactersets"

&dataocidatabaseautonomousdatabasecharactersets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets {

}
```


### DataOciDatabaseAutonomousDatabaseCharacterSetsConfig <a name="DataOciDatabaseAutonomousDatabaseCharacterSetsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabasecharactersets"

&dataocidatabaseautonomousdatabasecharactersets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CharacterSetType: *string,
	Filter: interface{},
	Id: *string,
	IsDedicated: interface{},
	IsShared: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.characterSetType">CharacterSetType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#character_set_type DataOciDatabaseAutonomousDatabaseCharacterSets#character_set_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#id DataOciDatabaseAutonomousDatabaseCharacterSets#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.isDedicated">IsDedicated</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#is_dedicated DataOciDatabaseAutonomousDatabaseCharacterSets#is_dedicated}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.isShared">IsShared</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#is_shared DataOciDatabaseAutonomousDatabaseCharacterSets#is_shared}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CharacterSetType`<sup>Optional</sup> <a name="CharacterSetType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.characterSetType"></a>

```go
CharacterSetType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#character_set_type DataOciDatabaseAutonomousDatabaseCharacterSets#character_set_type}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#filter DataOciDatabaseAutonomousDatabaseCharacterSets#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#id DataOciDatabaseAutonomousDatabaseCharacterSets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsDedicated`<sup>Optional</sup> <a name="IsDedicated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.isDedicated"></a>

```go
IsDedicated interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#is_dedicated DataOciDatabaseAutonomousDatabaseCharacterSets#is_dedicated}.

---

##### `IsShared`<sup>Optional</sup> <a name="IsShared" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsConfig.property.isShared"></a>

```go
IsShared interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#is_shared DataOciDatabaseAutonomousDatabaseCharacterSets#is_shared}.

---

### DataOciDatabaseAutonomousDatabaseCharacterSetsFilter <a name="DataOciDatabaseAutonomousDatabaseCharacterSetsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabasecharactersets"

&dataocidatabaseautonomousdatabasecharactersets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#name DataOciDatabaseAutonomousDatabaseCharacterSets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#values DataOciDatabaseAutonomousDatabaseCharacterSets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#regex DataOciDatabaseAutonomousDatabaseCharacterSets#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#name DataOciDatabaseAutonomousDatabaseCharacterSets#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#values DataOciDatabaseAutonomousDatabaseCharacterSets#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_autonomous_database_character_sets#regex DataOciDatabaseAutonomousDatabaseCharacterSets#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList <a name="DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabasecharactersets"

dataocidatabaseautonomousdatabasecharactersets.NewDataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference <a name="DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabasecharactersets"

dataocidatabaseautonomousdatabasecharactersets.NewDataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets">DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSetsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets">DataOciDatabaseAutonomousDatabaseCharacterSetsAutonomousDatabaseCharacterSets</a>

---


### DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList <a name="DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabasecharactersets"

dataocidatabaseautonomousdatabasecharactersets.NewDataOciDatabaseAutonomousDatabaseCharacterSetsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference <a name="DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabaseautonomousdatabasecharactersets"

dataocidatabaseautonomousdatabasecharactersets.NewDataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseAutonomousDatabaseCharacterSets.DataOciDatabaseAutonomousDatabaseCharacterSetsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



