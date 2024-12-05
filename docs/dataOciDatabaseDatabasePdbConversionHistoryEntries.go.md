# `dataOciDatabaseDatabasePdbConversionHistoryEntries` Submodule <a name="`dataOciDatabaseDatabasePdbConversionHistoryEntries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDatabasePdbConversionHistoryEntries <a name="DataOciDatabaseDatabasePdbConversionHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries oci_database_database_pdb_conversion_history_entries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabasepdbconversionhistoryentries"

dataocidatabasedatabasepdbconversionhistoryentries.NewDataOciDatabaseDatabasePdbConversionHistoryEntries(scope Construct, id *string, config DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig) DataOciDatabaseDatabasePdbConversionHistoryEntries
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig">DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig">DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.resetPdbConversionAction">ResetPdbConversionAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.resetId"></a>

```go
func ResetId()
```

##### `ResetPdbConversionAction` <a name="ResetPdbConversionAction" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.resetPdbConversionAction"></a>

```go
func ResetPdbConversionAction()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDatabasePdbConversionHistoryEntries resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabasepdbconversionhistoryentries"

dataocidatabasedatabasepdbconversionhistoryentries.DataOciDatabaseDatabasePdbConversionHistoryEntries_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabasepdbconversionhistoryentries"

dataocidatabasedatabasepdbconversionhistoryentries.DataOciDatabaseDatabasePdbConversionHistoryEntries_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabasepdbconversionhistoryentries"

dataocidatabasedatabasepdbconversionhistoryentries.DataOciDatabaseDatabasePdbConversionHistoryEntries_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabasepdbconversionhistoryentries"

dataocidatabasedatabasepdbconversionhistoryentries.DataOciDatabaseDatabasePdbConversionHistoryEntries_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseDatabasePdbConversionHistoryEntries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseDatabasePdbConversionHistoryEntries to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseDatabasePdbConversionHistoryEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDatabasePdbConversionHistoryEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList">DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.pdbConversionHistoryEntries">PdbConversionHistoryEntries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList">DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.databaseIdInput">DatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.pdbConversionActionInput">PdbConversionActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.databaseId">DatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.pdbConversionAction">PdbConversionAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.filter"></a>

```go
func Filter() DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList">DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList</a>

---

##### `PdbConversionHistoryEntries`<sup>Required</sup> <a name="PdbConversionHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.pdbConversionHistoryEntries"></a>

```go
func PdbConversionHistoryEntries() DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList">DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList</a>

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.databaseIdInput"></a>

```go
func DatabaseIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PdbConversionActionInput`<sup>Optional</sup> <a name="PdbConversionActionInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.pdbConversionActionInput"></a>

```go
func PdbConversionActionInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.databaseId"></a>

```go
func DatabaseId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `PdbConversionAction`<sup>Required</sup> <a name="PdbConversionAction" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.pdbConversionAction"></a>

```go
func PdbConversionAction() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntries.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig <a name="DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabasepdbconversionhistoryentries"

&dataocidatabasedatabasepdbconversionhistoryentries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatabaseId: *string,
	Filter: interface{},
	Id: *string,
	PdbConversionAction: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.databaseId">DatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#database_id DataOciDatabaseDatabasePdbConversionHistoryEntries#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#id DataOciDatabaseDatabasePdbConversionHistoryEntries#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.pdbConversionAction">PdbConversionAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#pdb_conversion_action DataOciDatabaseDatabasePdbConversionHistoryEntries#pdb_conversion_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#state DataOciDatabaseDatabasePdbConversionHistoryEntries#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.databaseId"></a>

```go
DatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#database_id DataOciDatabaseDatabasePdbConversionHistoryEntries#database_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#filter DataOciDatabaseDatabasePdbConversionHistoryEntries#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#id DataOciDatabaseDatabasePdbConversionHistoryEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PdbConversionAction`<sup>Optional</sup> <a name="PdbConversionAction" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.pdbConversionAction"></a>

```go
PdbConversionAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#pdb_conversion_action DataOciDatabaseDatabasePdbConversionHistoryEntries#pdb_conversion_action}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#state DataOciDatabaseDatabasePdbConversionHistoryEntries#state}.

---

### DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter <a name="DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabasepdbconversionhistoryentries"

&dataocidatabasedatabasepdbconversionhistoryentries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#name DataOciDatabaseDatabasePdbConversionHistoryEntries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#values DataOciDatabaseDatabasePdbConversionHistoryEntries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#regex DataOciDatabaseDatabasePdbConversionHistoryEntries#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#name DataOciDatabaseDatabasePdbConversionHistoryEntries#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#values DataOciDatabaseDatabasePdbConversionHistoryEntries#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_pdb_conversion_history_entries#regex DataOciDatabaseDatabasePdbConversionHistoryEntries#regex}.

---

### DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntries <a name="DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntries.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabasepdbconversionhistoryentries"

&dataocidatabasedatabasepdbconversionhistoryentries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntries {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList <a name="DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabasepdbconversionhistoryentries"

dataocidatabasedatabasepdbconversionhistoryentries.NewDataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference <a name="DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabasepdbconversionhistoryentries"

dataocidatabasedatabasepdbconversionhistoryentries.NewDataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList <a name="DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabasepdbconversionhistoryentries"

dataocidatabasedatabasepdbconversionhistoryentries.NewDataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.get"></a>

```go
func Get(index *f64) DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference <a name="DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabasepdbconversionhistoryentries"

dataocidatabasedatabasepdbconversionhistoryentries.NewDataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.additionalCdbParams">AdditionalCdbParams</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.cdbName">CdbName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.sourceDatabaseId">SourceDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.targetDatabaseId">TargetDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.timeEnded">TimeEnded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntries">DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `AdditionalCdbParams`<sup>Required</sup> <a name="AdditionalCdbParams" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.additionalCdbParams"></a>

```go
func AdditionalCdbParams() *string
```

- *Type:* *string

---

##### `CdbName`<sup>Required</sup> <a name="CdbName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.cdbName"></a>

```go
func CdbName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `SourceDatabaseId`<sup>Required</sup> <a name="SourceDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.sourceDatabaseId"></a>

```go
func SourceDatabaseId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `TargetDatabaseId`<sup>Required</sup> <a name="TargetDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.targetDatabaseId"></a>

```go
func TargetDatabaseId() *string
```

- *Type:* *string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.timeEnded"></a>

```go
func TimeEnded() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntriesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntries
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabasePdbConversionHistoryEntries.DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntries">DataOciDatabaseDatabasePdbConversionHistoryEntriesPdbConversionHistoryEntries</a>

---



